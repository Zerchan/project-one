const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
  }
};

module.exports = Mutations;
