import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    screenWidth: document.documentElement.clientWidth,
    screenHeight: document.documentElement.clientHeight,
    isShowRegisterDia: false, //注册弹窗控制
    phone: "",
  },
  mutations: {
    setWidth(state, value) {
      state.screenWidth = value;
    },
    setRegisterDia: (state, flag) => {
      state.isShowRegisterDia = flag;
    },
    setPhone: (state, phone) => {
      state.phone = phone;
    },
  },
  actions: {},
  modules: {},
});
