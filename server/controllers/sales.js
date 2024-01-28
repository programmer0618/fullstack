import OveralStat from "../models/overalstat.js";

export const getSales = async (req, res) => {
  try {
    const overalStats = await OveralStat.find();

    res.status(200).json(overalStats[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
