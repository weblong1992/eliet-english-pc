let baseURL = "";
if (process.env.VUE_APP_BASE_NAME === "test") {
  baseURL = "http://www.test.com";
} else if (process.env.VUE_APP_BASE_NAME === "production") {
  baseURL = "http://www.production.com";
} else {
  console.log(process.env.VUE_APP_BASE_NAME);
  // 开发环境
  // baseURL = "http://120.55.181.91:8096";
  baseURL = "http://api.elietkid.com.cn";
  // baseURL = "https://api.elietkid.com.cn";
}

export default baseURL;
