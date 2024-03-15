import { defineSchema, defineTable } from "convex/server";

import { v } from "convex/values";

export default defineSchema({
  apartments: defineTable({
    id: v.string(),
    name: v.string(),
    price: v.number() || v.int64(),
    image: v.string(),
  }),
});
