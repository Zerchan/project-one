const { forwardTo } = require("prisma-binding");
const { hasPermission } = require("../utils/hasPermission");

const Query = {
  me(parent, args, ctx, info) {
    // Check if there is a current user ID
    // const userId = ctx.request.userId;
    if(!ctx.request.userId){
      return null;
    }

    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId }
      },
      info
    );
  },
  async users(parent, args, ctx, info) {
    // check if they are logged in
    if(!ctx.request.userId) throw new Error('You must be logged in!');
    // check if the user has the permissions to query all the users
    hasPermission(ctx.request.user, ['ADMIN', 'PERMISSIONUPDATE']);
    // quey all the users
    return ctx.db.query.users({}, info);
  },
  reservations: forwardTo("db"),
  reservation: forwardTo("db")
  // items: forwardTo("db"),
  // item: forwardTo("db"),
  // itemsConnection: forwardTo("db")
  // async items(parent, args, ctx, info) {
  //   const items = await ctx.db.query.items();
  //   return items;
  // }
};

module.exports = Query;
