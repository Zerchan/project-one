const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { randomBytes } = require('crypto');
const { promisify } = require('util');
const { transport, makeEmail } = require('../mail');

const Mutations = {
  //   createDog(parent, args, ctx, info) {
  //     global.dogs = global.dogs || [];
  //     //create a dog!
  //     const newDog = { name: args.name };
  //     global.dogs.push(newDog);
  //     return newDog;
  //   }
  // async createItem(parent, args, ctx, info) {
  //   // TODO: Check if they are logged in
  //   const item = await ctx.db.mutation.createItem(
  //     {
  //       data: {
  //         ...args
  //       }
  //     },
  //     info
  //   );
  //   return item;
  // },
  // updateItem(parent, args, ctx, info) {
  //   // take the id and the updates from the args
  //   const { id, ...updates } = args;
  //   // run the update method
  //   return ctx.db.mutation.updateItem(
  //     {
  //       data: updates,
  //       where: {
  //         id
  //       }
  //     },
  //     info
  //   );
  // },
  // async deleteItem(parent, args, ctx, info) {
  //   const where = { id: args.id };
  //   // find the item
  //   const item = await ctx.db.query.item({ where }, "{ id title }");
  //   // check if they own that item, or have the permissions
  //   // TODO
  //   // delete it
  //   return ctx.db.mutation.deleteItem({ where }, info);
  // }
  async signup(parent, args, ctx, info) {
    // lowercase their email
    args.email = args.email.toLowerCase();
    // hash their password
    const password = await bcrypt.hash(args.password, 10);
    // create the user in the DB
    const user = await ctx.db.mutation.createUser({
      data: {
        ...args,
        password,
        permissions: { set: ['USER'] } // need to use set because permissions is an ENUM
      }
    }, info);
    // create JWT token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // we set the jwt as a cookie on the response
    ctx.response.cookie('qid', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year
    })
    // return the user to the client
    return user;
  },
  async signin(parent, { email, password }, ctx, info) {
    // check if there is a user with that email
    const user = await ctx.db.query.user({ where: { email } });
    if(!user) throw new Error('No user found');
    // check if their password is correct
    const valid = await bcrypt.compare(password, user.password);
    if(!valid) throw new Error('No user found');
    // generate the JWT token (qid)
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // set the cookie with the token
    ctx.response.cookie('qid', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year
    })
    // return user
    return user;
  },
  signout(parent, args, ctx, info) {
    ctx.response.clearCookie('qid');
    return { message: 'Good Bye!' }
  },
  async requestReset(parent, args, ctx, info) {
    // check if this is a real user
    const user = await ctx.db.query.user({ where: { email: args.email } });
    if(!user) throw new Error('No user found');
    // set a reset token and expiry on that user
    const randomBytesPromise = promisify(randomBytes);
    const resetToken = (await randomBytesPromise(20)).toString('hex');
    const resetTokenExpiry = Date.now() + 3600000; // 1 hour
    const res = await ctx.db.mutation.updateUser({
      where: { email: args.email },
      data: { resetToken, resetTokenExpiry }
    });
    // email them that reset token
    // TODO: try catch block here to catch any error while sending the email
    await transport.sendMail({
      from: 'zerchan.development@gmail.com',
      to: user.email,
      subject: 'Your password reset token',
      html: makeEmail(`Click <a href="${process.env.FRONTEND_URL}/reset?resetToken=${resetToken}">here</a> to reset your password`)
    });
    // return the message
    return { message: 'Password reset token generated' }
  },
  async resetPassword(parent, args, ctx, info) {
    // check if the passwords match
    if(args.password !== args.confirmPassword) throw new Error('Passwords don\'t match');
    // check if its a legit reset token
    // check if its expired
    const [user] = await ctx.db.query.users({
      where: {
        resetToken: args.resetToken,
        resetTokenExpiry_gte: Date.now() - 3600000
      }
    });
    if(!user) throw new Error('This token is either invalid or expired');
    // hash their new password
    const password = await bcrypt.hash(args.password, 10);
    // save the new password to the user and remove old resetToken fields
    const updatedUser = await ctx.db.mutation.updateUser({
      where: { email: user.email },
      data: { password, resetToken: null, resetTokenExpiry: null }
    })
    // generate JWT
    const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);
    // set the JWT cookie
    ctx.response.cookie('qid', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year
    })
    // return the new user
    return updatedUser;
  }
};

module.exports = Mutations;
