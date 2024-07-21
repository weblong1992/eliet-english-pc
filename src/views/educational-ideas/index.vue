<template>
  <div class="educational-ideas">
    <div class="part1">
      <div>
        <p>Eliet English 定制英语</p>
        <p>定制化学习 精英教师 私奢服务 专属圈层</p>

        <p>1000+企业选择与我们一起携手共建</p>
        <p>专业级服务 用心打造</p>

        <el-button class="mybtn" @click="freeTrial"
          >开始定制化英语学习</el-button
        >
      </div>
    </div>

    <div class="part2">
      <p>真正的定制化学习</p>
      <p>是课程匹配孩子</p>

      <div class="line_box">
        <img
          src="~@/assets/image/educational-ideas/line.png"
          width="58"
          height="5"
        />
      </div>

      <p>
        打破市面机构传统课程学习方式，根据学员语言基础、兴趣爱好、目标方向定制专属课程发挥每个学
      </p>
      <p>员个体的优势 量身打造最适合的学习计划。</p>
    </div>

    <div class="part3">
      <div class="sub1">
        <div>
          <div class="tit">精英教师 国际团队</div>

          <div>
            <img
              src="~@/assets/image/educational-ideas/line.png"
              width="58"
              height="5"
            />
          </div>
        </div>
        <div>只录用英美顶级教师</div>
        <div>国际化团队参与课程研发与优化</div>

        <div class="imgbox">
          <img src="~@/assets/image/educational-ideas/zjtd.png" width="1200" />
        </div>
      </div>

      <div class="sub2 smfw">
        <p>私奢服务</p>

        <div>
          <div class="item">
            <div class="top">
              <img
                src="~@/assets/image/educational-ideas/a1.png"
                width="45"
                height="36"
              />
            </div>

            <div class="con">
              <p>15</p>
              <p>外教服务学员</p>
              <p>不超过15名</p>
            </div>
          </div>

          <div class="item">
            <div class="top">
              <img
                src="~@/assets/image/educational-ideas/a2.png"
                width="45"
                height="36"
              />
            </div>

            <div class="con">
              <p>20</p>
              <p>私人管家服务用户</p>
              <p>不超过20组</p>
            </div>
          </div>

          <div class="item">
            <div class="top">
              <img
                src="~@/assets/image/educational-ideas/a3.png"
                width="46"
                height="36"
              />
            </div>

            <div class="con">
              <p>25</p>
              <p>中教服务学员</p>
              <p>不超过25名</p>
            </div>
          </div>

          <div class="item">
            <div class="top">
              <img
                src="~@/assets/image/educational-ideas/a4.png"
                width="44"
                height="47"
              />
            </div>

            <div class="con">
              <p>7*12</p>
              <p>私人管家</p>
              <p>急速响应</p>
            </div>
          </div>
        </div>
      </div>

      <div class="sub3">
        <div>
          <p>专属学习圈层</p>
          <p>以兴趣为起点打造学员专属学习圈</p>
          <div class="line_box">
            <img src="~@/assets/image/educational-ideas/line.png" width="58" />
          </div>

          <p>层线上学习资源共享</p>
          <p>丰富的线下配套活动</p>
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
    freeTrial() {
      this.$store.commit("setRegisterDia", true);
    },
  },
  created() {},
};
</script>
<style lang="scss" scoped>
.educational-ideas {
  width: 100%;
  .part1 {
    width: 100%;
    height: 582px;
    // background-color: aqua;
    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & > p:nth-child(1) {
        font-size: 48px;
        margin-bottom: 10px;
      }

      & > p:nth-child(2) {
        font-size: 48px;
        margin-bottom: 30px;
      }
      & > p:nth-child(3) {
        font-size: 36px;
        margin-bottom: 10px;
      }

      & > p:nth-child(4) {
        font-size: 36px;
        margin-bottom: 10px;
      }

      & .mybtn {
        background-color: $mainColor;
        color: #fff;
      }
    }
  }

  .part2 {
    height: 400px;
    background-color: $areaBgColor;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    .line_box {
      margin-top: -30px;
      margin-bottom: 20px;
    }
    & > p {
      margin-bottom: 20px;
    }
    & > p:nth-child(1),
    & > p:nth-child(2) {
      font-size: 48px;
    }

    & > p:nth-child(1) {
      margin-bottom: 0;
    }
  }

  .part3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & .sub1 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 80px;
      width: 100%;
      background-image: url("~@/assets/image/educational-ideas/gjtd_bg.png");
      background-repeat: no-repeat;
      .imgbox {
        margin-top: 50px;
        margin-bottom: 130px;
      }

      & > div:nth-child(1) {
        display: flex;
        justify-content: center;
        position: relative;

        & > div:nth-child(2) {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }

        .tit {
          font-size: 48px;
          margin-bottom: 20px;
        }
      }
    }

    .smfw {
      & > p {
        font-size: 48px;
        // margin: 25px 0;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;
      }
      & > div {
        display: flex;
        // flex-direction: column;
        justify-content: center;

        & .item {
          width: 265px;
          height: 236px;
          background-image: url("~@/assets/image/educational-ideas/smbg.png");
          background-repeat: no-repeat;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          margin-right: 10px;

          & .top {
            top: -35px;
            position: absolute;
            width: 71px;
            height: 71px;
            background-color: $mainColor;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          & .con {
            & > p {
              display: flex;
              justify-content: center;
            }
            & > p:nth-child(1) {
              font-size: 48px;
              color: $mainColor;
              margin-bottom: 10px;
            }

            & > p:not(:first-child) {
              font-size: 20px;
            }
          }
        }
      }
    }

    .sub3 {
      width: 100%;
      height: 815px;
      background-image: url("~@/assets/image/educational-ideas/zsxxq.png");
      background-repeat: no-repeat;
      box-sizing: border-box;
      position: relative;
      display: flex;
      justify-content: flex-end;
      padding-right: 360px;
      padding-top: 190px;

      & > div {
        & .line_box {
          margin: 20px 0;
          display: flex;
          justify-content: flex-end;
        }

        & > p {
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  }
}
</style>
