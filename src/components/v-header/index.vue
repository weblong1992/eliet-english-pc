<template>
  <div class="header">
    <div class="left">
      <div class="logo_box"></div>

      <div class="con">
        <div v-for="(item, i) in conList" @click="handleClickNav(i)">
          <span>{{ item }}</span>

          <span :class="currentIndex === i ? 'indicator' : ''"></span>
        </div>
      </div>
    </div>

    <div class="right">
      <!-- <el-button>登录</el-button> -->
      <el-button class="mybtn" @click="open">开始定制化英语学习</el-button>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      currentIndex: 0,
      conList: [
        "首页",
        "教育理念",
        "师资力量",
        "产品体系",
        // "新闻中心",
        "如何上课",
      ],
    };
  },
  created() {
    console.log(typeof localStorage.getItem("myIndex"));
    if (localStorage.getItem("myIndex")) {
      this.currentIndex = parseInt(localStorage.getItem("myIndex"));
    }
  },
  beforeDestroy() {
    localStorage.removeItem("myIndex");
  },
  methods: {
    handleClickNav(i) {
      this.currentIndex = i;

      localStorage.setItem("myIndex", i);

      if (i === 0) {
        this.$router.push({ path: "/home" });
      } else if (i === 1) {
        this.$router.push({ path: "/educational-ideas" });
      } else if (i === 2) {
        this.$router.push({ path: "/teacher" });
      } else if (i === 3) {
        this.$router.push({ path: "/product-system" });
      } else if (i === 4) {
        this.$router.push({ path: "/attend-class" });
      }
    },
    open() {
      this.$store.commit("setRegisterDia", true);
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 90px;
  box-sizing: border-box;
  padding: 0 360px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: #fff;

  & .left {
    display: flex;
    .logo_box {
      background-image: url("~@/assets/image/home/logo.png");
      background-repeat: no-repeat;
      width: 230px;
      height: 54px;
    }
    .con {
      display: flex;
      & > div {
        margin: 0 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        cursor: pointer;

        & > span {
          white-space: nowrap;
        }
        .indicator {
          display: inline-block;
          position: absolute;
          width: 16px;
          height: 3px;
          left: 50%;
          bottom: 0px;
          border-radius: 1.5px;
          margin-left: -5px;
          background-color: $mainColor;
        }
      }
    }
  }

  & .right {
    display: flex;
    margin-left: 100px;
    .mybtn {
      background-color: $mainColor;
      color: #fff;
    }
  }
}
</style>
