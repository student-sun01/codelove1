//mock数据模拟
import Mock from "mockjs";

// 图表数据
let List = [];
export default {
  getStatisticalData: () => {
    //MockRandom.float 产生随机数100到8000之间，保留小数 最大0位  最小0位
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          苹果: Mock.Random.float(100, 8000, 0, 0),
          vivo: Mock.Random.float(100, 8000, 0, 0),
          oppo: Mock.Random.float(100, 8000, 0, 0),
          魅族: Mock.Random.float(100, 8000, 0, 0),
          三星: Mock.Random.float(100, 8000, 0, 0),
          小米: Mock.Random.float(100, 8000, 0, 0),
        })
      );
    }
    return {
      code: 20000,
      data: {
        // 饼图
        videoData: [
          {
            name: "小米",
            value: "2999",
          },
          {
            name: "苹果",
            value: "5999",
          },
          {
            name: "vivo",
            value: "1500",
          },
          {
            name: "oppo",
            value: "1999",
          },
          {
            name: "魅族",
            value: "2999",
          },
          {
            name: "三星",
            value: "2999",
          },
        ],
        // 柱状图
        userData: [
          {
            date: "周一",
            new: 33,
            active: 100,
          },
          {
            date: "周二",
            new: 56,
            active: 169,
          },
          {
            date: "周三",
            new: 74,
            active: 200,
          },
          {
            date: "周四",
            new: 42,
            active: 136,
          },
          {
            date: "周五",
            new: 28,
            active: 120,
          },
          {
            date: "周六",
            new: 57,
            active: 98,
          },
          {
            date: "周日",
            new: 5,
            active: 200,
          },
        ],
        // 折线图
        orderData: {
          date: [
            "20191001",
            "20191002",
            "20191003",
            "20191004",
            "20191005",
            "20191006",
            "20191007",
          ],
          data:List
        },
        tableData: [
          {
            name: "oppo",
            todayBuy: 500,
            monthBuy: 3500,
            totalBuy: 22000,
          },
          {
            name: "小米",
            todayBuy: 1200,
            monthBuy: 6500,
            totalBuy: 45900,
          },
          {
            name: "华为",
            todayBuy: 1800,
            monthBuy: 6500,
            totalBuy: 78900,
          },
          {
            name: "苹果",
            todayBuy: 800,
            monthBuy: 4500,
            totalBuy: 65000,
          },
          {
            name: "一加",
            todayBuy: 880,
            monthBuy: 7500,
            totalBuy: 99900,
          },
          {
            name: "三星",
            todayBuy: 750,
            monthBuy: 7500,
            totalBuy: 59600,
          },
        ],
      },
    };
  },
};
