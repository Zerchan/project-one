const { forwardTo } = require("prisma-binding");

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
  }
  // items: forwardTo("db"),
  // item: forwardTo("db"),
  // itemsConnection: forwardTo("db")
  // async items(parent, args, ctx, info) {
  //   const items = await ctx.db.query.items();
  //   return items;
  // }
};

module.exports = Query;
