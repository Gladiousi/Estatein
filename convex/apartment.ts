import { mutation, query } from "./_generated/server";

import { nanoid } from "nanoid";
import { v } from "convex/values";

export const create = mutation({
  args: {
    name: v.string(),
    price: v.number() || v.int64(),
  },
  handler: async (ctx, args) => {
    const id = nanoid(30);
    let image = await ctx.storage.getUrl("kg22mzkkkbpc783a93ftnxrx756n7k7s");
    if (!image) {
      throw new Error("Image not found");
    }
    const apartments = await ctx.db.insert("apartments", {
      name: args.name,
      price: args.price,
      id,
      image,
    });

    return apartments;
  },
});

export const getOneApartments = query({
  args: {
    id: v.string(),
  },
  handler: async (ctx, args) => {
    const apartments = await ctx.db
      .query("apartments")
      .filter((q) => q.eq("id", args.id))
      .unique();
    return apartments;
  },
});

export const getAllApartments = query({
  args: {},
  handler: async (ctx) => {

    const apartments = await ctx.db.query("apartments").collect();
    return apartments;
  },
});

// TODO: Deleting not working correctly

export const deleteApartment = mutation({
  args: {
    id: v.id("apartments"),
  },
  handler: async (ctx, args) => {

    const apartments = await ctx.db.query("apartments").collect();

    const apartment = apartments?.find(
      (apartment) => apartment._id === args.id
    );

    if (!apartment) {
      throw new Error("Apartment not found");
    }

    await ctx.db.delete(apartment._id);
  },
});
