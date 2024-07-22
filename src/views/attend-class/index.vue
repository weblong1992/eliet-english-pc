<template>
  <div class="attend-class">
    <div class="fiveSteps">
      <div class="tit">简单五步 轻松上课</div>

      <div class="con">
        <div>
          <div>
            <div>A</div>
            <div>
              <img
                src="~@/assets/image/attend-class/a.png"
                width="39"
                height="40"
              />
            </div>
          </div>

          <div>注册</div>

          <div class="opera">
            <div style="width: 163px">
              <el-input
                v-model="mobile"
                @input="handInput"
                size="mini"
                placeholder="请输入手机号"
              />
            </div>

            <div class="ljkqBtn mt-10">
              <div class="inner" @click="open">立即开启</div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div>B</div>
            <div>
              <img
                src="~@/assets/image/attend-class/b.png"
                width="37"
                height="40"
              />
            </div>
          </div>

          <div>了解</div>
          <div>完成学习意向调查问卷</div>
        </div>

        <div>
          <div>
            <div>C</div>
            <div>
              <img
                src="~@/assets/image/attend-class/c.png"
                width="42"
                height="44"
              />
            </div>
          </div>

          <div>选择</div>
          <div>选择授课教师及时间</div>
        </div>

        <div>
          <div>
            <div>D</div>
            <div>
              <img
                src="~@/assets/image/attend-class/d.png"
                width="45"
                height="36"
              />
            </div>
          </div>

          <div>教室</div>
          <div>下载上课平台</div>
        </div>

        <div>
          <div>
            <div>E</div>
            <div>
              <img
                src="~@/assets/image/attend-class/e.png"
                width="37"
                height="37"
              />
            </div>
          </div>
          <div>反馈</div>
          <div>学习结果跟进反馈</div>
        </div>
      </div>
    </div>

    <div class="customized_services">
      <div class="title">定制化学习服务</div>

      <div class="item_box">
        <!-- 8:5 -->
        <div class="item">
          <div class="img_box">
            <img
              src="~@/assets/image/attend-class/xxyxwj.jpg"
              width="276"
              height="156"
            />
          </div>

          <div>学习意向问卷</div>

          <div>了解学员的学习目标及喜好</div>
        </div>

        <div class="item">
          <div class="img_box">
            <img
              src="~@/assets/image/attend-class/xxyyspcs.jpg"
              width="276"
              height="156"
            />
          </div>

          <div>英语水平测评</div>

          <div>了解学员的真实英语水平</div>
        </div>

        <div class="item">
          <div class="img_box">
            <img
              src="~@/assets/image/attend-class/xxjhzd.jpg"
              width="276"
              height="156"
            />
          </div>

          <div>学习计划制定</div>

          <div>定制专属学习计划</div>
        </div>
      </div>

      <div class="item_box">
        <div class="item">
          <div class="img_box">
            <img
              src="~@/assets/image/attend-class/khdy.jpg"
              width="276"
              height="156"
            />
          </div>

          <div>课后答疑解惑</div>

          <div>跟进每节课学习情况，及时反馈处理</div>
        </div>

        <div class="item">
          <div class="img_box">
            <img
              src="~@/assets/image/attend-class/xxyyspcs.jpg"
              width="276"
              height="156"
            />
          </div>

          <div>阶段学习检测</div>

          <div>阶段检测学院的学习进度，课程的接受程度</div>
        </div>

        <div class="item">
          <div class="img_box">
            <img
              src="~@/assets/image/attend-class/xxmbjd.jpg"
              width="276"
              height="156"
            />
          </div>

          <div>学习目标监督</div>

          <div>全程跟进学员的学习结果</div>
        </div>
      </div>
    </div>

    <div class="equipment">
      <div class="tit">上课设备要求</div>

      <div class="item_box">
        <div class="item">
          <div class="imageBox">
            <img
              src="~@/assets/image/attend-class/sxt.png"
              width="48"
              height="48"
            />
            <img
              src="~@/assets/image/attend-class/tsdn.png"
              width="80"
              height="80"
            />
            <img
              src="~@/assets/image/attend-class/tdsem.png"
              width="48"
              height="48"
            />
          </div>
          <div class="desc">台式电脑+摄像头+耳麦</div>
        </div>

        <div class="item">
          <div class="imageBox">
            <img
              src="~@/assets/image/attend-class/em.png"
              width="48"
              height="48"
            />

            <img
              src="~@/assets/image/attend-class/bjb.png"
              width="80"
              height="80"
            />
          </div>
          <div class="desc">笔记本电脑（内置摄像头）+耳麦</div>
        </div>

        <div class="item">
          <div class="imageBox">
            <img
              src="~@/assets/image/attend-class/pgpb.png"
              width="64"
              height="64"
            />

            <img
              src="~@/assets/image/attend-class/azpb.png"
              width="64"
              height="64"
            />
          </div>
          <div class="desc">IPAD或安卓PAD</div>
        </div>

        <div class="item">
          <div class="imageBox">
            <img
              src="~@/assets/image/attend-class/mac-ts.png"
              width="64"
              height="64"
            />
            <img
              src="~@/assets/image/attend-class/mac-bjb.png"
              width="64"
              height="64"
            />
          </div>
          <div class="desc">MAC台式或笔记本</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      phone: "",
      mobile: "",
    };
  },
  methods: {
    handInput(value) {
      // console.log(value);
      this.mobile = value.replace(/[^\d]/g, "");
    },

    open() {
      if (this.mobile && this.mobile.length === 11) {
        this.$store.commit("setRegisterDia", true);
        this.$store.commit("setPhone", this.mobile);
        // this.form.phone = this.mobile;
      } else {
        if (!this.mobile) {
          this.$message({
            message: "请输入手机号",
            type: "warning",
          });
        } else if (this.mobile.length < 11 && this.mobile.length > 0) {
          this.$message({
            message: "手机号位数不正确",
            type: "warning",
          });
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.attend-class {
  padding: 20px;

  & .fiveSteps {
    display: flex;
    flex-direction: column;
    justify-content: center;
    // margin-bottom: 50px;
    width: 1505px;
    height: 480px;
    margin: 0 auto;
    background-image: url("~@/assets/image/attend-class/fiveStepBg.png");
    background-repeat: no-repeat;

    // 878788
    & .tit {
      display: flex;
      justify-content: center;
      padding: 50px 0;
      font-size: 50px;
      color: #fff;
    }

    & .con {
      display: flex;
      justify-content: center;

      & > div {
        display: flex;
        flex-direction: column;
        width: 199px;
        height: 218px;
        background-image: url("~@/assets/image/attend-class/itembg.png");
        background-repeat: no-repeat;
        margin-right: 40px;
        padding-top: 10px;

        & > div:nth-child(1) {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-right: 18px;

          & > div:nth-child(1) {
            width: fit-content;
            font-size: 44px;
            margin: 0 18px;
            // background-color: #f9d3d6;
            margin-bottom: 3px;
            color: $mainColor;
          }
        }

        & > div:nth-child(2) {
          width: fit-content;
          margin: 0 18px;
          font-size: 24px;
          margin-bottom: 20px;
          // background-color: #f9d3d6;
        }
      }

      & > div:not(:first-child) {
        & > div:last-child {
          width: 162px;
          margin: 0 18px;
          // background-color: #f9d3d6;
          font-size: 18px;
        }
      }

      .opera {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    .ljkqBtn {
      margin: 0 auto;
      margin-top: 10px;
      width: 165px;
      height: 39px;
      background-image: url("~@/assets/image/attend-class/ljlqbtn.png");
      background-repeat: no-repeat;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      & .inner {
        // background-color: #f9d3d6;
        color: #fff;
      }
    }
  }

  & .customized_services {
    // background-color: $areaBgColor;
    margin-top: 40px;
    padding: 20px 0;
    & .title {
      display: flex;
      justify-content: center;
      font-size: 48px;
    }

    & .item_box {
      display: flex;
      justify-content: center;
      margin-bottom: 30px;

      & .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 20px;
        // padding: 0 20px;
        // background-color: #fff;
        background-color: $areaBgColor;

        & > div:nth-child(2) {
          margin: 10px 0;
        }

        & > div:last-child {
          height: 50px;
          max-width: 256px;
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 10px;
        }

        // .img_box {
        //   // width: 256px;
        //   // height: 156px;
        //   // background-color: aqua;
        // }
      }
    }
  }

  & .equipment {
    .tit {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
      font-size: 48px;

      // 48px
    }
    & .item_box {
      display: flex;
      justify-content: center;
      margin-bottom: 60px;

      & > div {
        display: flex;
        flex-direction: column;
        margin-right: 20px;

        & .imageBox {
          width: 240px;
          height: 80px;
          // background-color: aqua;
          display: flex;
          justify-content: center;
          align-items: center;

          & > img {
            margin-right: 10px;
          }
        }

        .desc {
          // max-width: 200px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
      }
    }
  }
}
</style>
