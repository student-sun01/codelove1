import Mock from "mockjs";
import homeApi from "./mockServeData/home";
// 定义mock请求拦截
Mock.mock(
  "/api/home/getData",
  // 拦截到请求之后的逻辑
  homeApi.getStatisticalData
);
