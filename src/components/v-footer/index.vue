<template>
  <div class="footer">
    <div class="kf">
      <div>
        <!-- <div>客服热线</div> -->
        <div>在线咨询</div>

        <div class="line"></div>
      </div>

      <!-- <div>
        <div>
          <img src="~@/assets/image/home/qywx.png" width="32" height="32" />
        </div>
        <div>企业微信咨询</div>
      </div> -->

      <div class="wxsys">
        <div>
          <img src="~@/assets/image/home/gzh.jpg" width="258" />
        </div>

        <div>打开微信扫一扫即可报名～</div>
      </div>

      <div>周一至周日08:00-22:00</div>

      <!-- <div class="zxkfBtn">
        <div>在线咨询</div>
      </div> -->
    </div>

    <div class="qyjs">
      <div>
        <div>企业介绍</div>
        <div class="line"></div>
      </div>

      <div>
        <p>品牌介绍</p>
        <!-- <p>团队介绍</p>
        <p>关于我们</p> -->
      </div>
    </div>

    <!-- <div class="qyjs">
      <div>
        <div>服务范围</div>
        <div class="line"></div>
      </div>

      <div>
        <p>产品介绍</p>
        <p>新闻动态</p>
        <p>服务品牌</p>
      </div>
    </div> -->

    <!-- 友情链接 -->
    <div class="qyjs yqlj">
      <div>
        <div>友情链接</div>
        <div class="line"></div>
      </div>

      <div class="links_box">
        <div @click="jump(1)">
          <div>
            <img src="~@/assets/image/home/bd.png" width="24" height="27" />
          </div>
          <div class="mt-10">百度</div>
        </div>

        <div @click="jump(2)">
          <div>
            <img src="~@/assets/image/home/xl.png" width="32" height="26" />
          </div>
          <div class="mt-10">新浪</div>
        </div>

        <div @click="jump(3)">
          <div>
            <img src="~@/assets/image/home/wy.png" width="62" height="31" />
          </div>
          <div>网易</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    jump(num) {
      console.log(num);
      if (num === 1) {
        window.open("https://www.baidu.com/", "_blank");
      } else if (num === 2) {
        window.open("https://www.sina.com.cn/", "_blank");
      } else if (num === 3) {
        window.open("https://www.163.com/", "_blank");
      }
    },
  },
  created() {},
};
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  // height: 500px;
  box-sizing: border-box;
  background-color: #262627;
  padding: 60px 360px;
  display: flex;
  color: #999999;

  .kf {
    display: flex;
    flex-direction: column;

    & > div:nth-child(1) {
      & > div:nth-child(1) {
        color: #fff;
      }

      & > div:nth-child(2) {
        width: 28px;
        height: 3px;
        background-color: $mainColor;
        margin: 5px 0;
      }
    }

    & > div:nth-child(2) {
      display: flex;
      align-items: center;
      margin-top: 30px;

      & > div:nth-child(2) {
        // font-size: 36px;
        // margin-left: 20px;
        color: #fff;
        white-space: nowrap;
      }
    }

    & > div:nth-child(3) {
      margin: 20px 0;
    }

    & > .zxkfBtn {
      // background-image: url("~@/assets/image/home/zxkf.png");
      background-color: $mainColor;
      border-radius: 10px;
      background-repeat: no-repeat;
      width: 151px;
      height: 43px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      & > div {
        // background-color: $fontDescColor;
        color: #fff;
      }
    }
  }

  .wxsys {
    display: flex;
    flex-direction: column;
  }

  .qyjs {
    margin-left: 150px;

    & > div:nth-child(1) {
      margin-bottom: 30px;

      & > div:nth-child(1) {
        color: #fff;
        white-space: nowrap;
      }

      & > div:nth-child(2) {
        width: 28px;
        height: 3px;
        background-color: $mainColor;
        margin: 5px 0;
      }
    }

    & > div:nth-child(2) {
      & > p {
        margin-bottom: 20px;
      }
    }
  }

  .links_box {
    display: flex;

    & > div {
      margin-right: 50px;
      cursor: pointer;
    }
    .mt-10 {
      margin-top: 5px;
      white-space: nowrap;
    }
  }
}
</style>
