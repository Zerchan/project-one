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
};

module.exports = Mutations;
