const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // 部署生产环境和开发环境下的URL,baseUrl 从 Vue CLI 3.3 起已弃用，请使用publicPath
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
  // outputDir: 在npm run build 或 yarn build 时 ，生成文件的目录名称
  outputDir: "eliet-english-pc",
  //用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
  assetsDir: "assets",
  //默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变)
  filenameHashing: false,
  // lintOnSave：{ type:Boolean default:true } 是否使用eslint
  lintOnSave: false,
  //如果你想要在生产构建时禁用 eslint-loader，你可以用如下配置
  // lintOnSave: process.env.NODE_ENV !== 'production',

  //是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。(默认false)
  // runtimeCompiler: false,

  /**
   * 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
   * 打包之后发现map文件过大，项目文件体积很大，设置为false就可以不输出map文件
   * map文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
   * 有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
   * */
  productionSourceMap: false,
  // 支持webPack-dev-server的所有选项(https://webpack.js.org/configuration/dev-server/)
  devServer: {
    host: "0.0.0.0",
    port: 8080, // 端口号
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    // 设置请求头
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    // 配置多个代理
    proxy: {
      "/test": {
        target: "http://192.168.x.xxx:8090", // 要访问的接口域名
        ws: true, // 是否启用websockets
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          "^/api": "", //这里理解成用'/api'代替target里面的地址,比如我要调用'http://40.00.100.100:3002/user/add'，直接写'/api/user/add'即可
        },
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        assets: resolve("src/assets"),
        // images: resolve("src/assets/images"),
      },
    },
  },
  css: {
    loaderOptions: {
      scss: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.sass` 这个文件
        // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
        additionalData: `@import "~@/style/variables.scss";`,
      },
    },
  },
};
