import service from "../utils/request.js";

// post请求
export const GetCode = (data) => {
  return service({
    url: "/api/app/sms/sendPhomeSms",
    method: "post",
    data: data,
  });
};

export const Register = (data) => {
  return service({
    url: "/api/app/member/register",
    method: "post",
    data: data,
  });
};

// post请求
export const mytestpost = (data) => {
  return service({
    url: "/check/systemConfigCheck/getCheck",
    method: "post",
    data: data,
  });
};

//get 请求
export const mytestget = (data) => {
  return service({
    url: "/aa/bb",
    method: "get",
    params: data,
  });
};
