import mongoose, { Schema, model } from "mongoose";

const AffiliateStatSchema = new Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    affiliateSales: {
      type: [mongoose.Types.ObjectId],
      ref: "Transactions",
    },
  },
  { timestamps: true }
);

const AffiliateStat = model("AffiliateStat", AffiliateStatSchema);

export default AffiliateStat;
