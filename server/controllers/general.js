import User from "../models/user.js";
import OveralStat from "../models/overalstat.js";
import Transaction from "../models/transaction.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: error.message,
    });
  }
};

export const getDashboardStats = async (req, res) => {
  try {
    // hardcoded values
    const currentMonth = "November";
    const currentYear = 2021;
    const currentDate = "2021-01-25";
    // RECENT TRANSACTIONS
    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createdOn: -1 });

    //OVERAL STATS
    const overalStat = await OveralStat.find({ year: currentYear });

    const {
      totalCustomers,
      yearlTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
    } = overalStat[0];

    const thisMonthStats = overalStat[0].monthlyData.find(({ month }) => {
      return month === currentMonth;
    });
    const todayStats = overalStat[0].dailyData.find(({ date }) => {
      return date === currentDate;
    });

    res.status(200).json({
      totalCustomers,
      yearlTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
      thisMonthStats,
      todayStats,
      transactions,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
