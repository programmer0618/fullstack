import { Schema, model } from "mongoose";

const ProductStatSchema = new Schema({
  productId: String,
  yearlySalesTotal: Number,
  yearlyTotalSoldUnits: Number,
  year: Number,
  monthlyData: [
    {
      month: String,
      totalSales: Number,
      totalUnits: Number,
    },
  ],
  dailyData: [
    {
      date: String,
      totalSales: String,
      totalUnits: String,
    },
  ],
});

const ProductStat = model("ProductStat", ProductStatSchema);
export default ProductStat;
