	// 引入 axios
	import axios from 'axios'
    import baseURL from "./baseUrl.js";
    console.log(baseURL)
 
	// 设置请求方式请求头 设置不设置都可以,get请求默认就是这个请求头
	axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";
	// 创建axios实例
	const service = axios.create({
	    // axios中请求配置有baseURL选项，请求URL公共部分
	    baseURL: baseURL,  // 使用的时候注意替换成自己地址
	    // 配置超时时间
	    timeout: 10000
	})

	//请求拦截  发请求的时候进行拦截  主要使用在请求时挈带token
	service.interceptors.request.use(config => {
		
	    return config;
        
	}, error => {
	// 请求错误处理
	    Promise.reject(error)
	})
	
		// 响应拦截  主要是对返回的参数进行统一的处理 
	service.interceptors.response.use(res => {
		// 这里就是请求成功时候后台返回的参数, 我这里没有进行其他操作就直接把数据给返回出去了
		// 有需要的话可以进行对数据的简单操作,例如 判断token是否勾起之类的
	    return res.data
	}, error => {
		// 请求失败处理.道理同上
		// 我这里也是没有进行处理
	    return Promise.reject(error)
	})
	// 记得暴露出去,不然白写这么多了
	export default service
