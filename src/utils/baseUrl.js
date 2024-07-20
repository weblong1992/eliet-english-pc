let baseURL = "";
if (process.env.VUE_APP_BASE_NAME === "test") {
  baseURL = "https://api.lietkid.com.cn";
} else if (process.env.VUE_APP_BASE_NAME === "production") {
  baseURL = "https://api.lietkid.com.cn";
} else {
  console.log(process.env.VUE_APP_BASE_NAME);
  // 开发环境
  // baseURL = "http://120.55.181.91:8096";
  baseURL = "https://api.lietkid.com.cn";
  // baseURL = "https://api.elietkid.com.cn";
}

export default baseURL;
