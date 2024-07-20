<template>
  <div class="layout">
    <Vheader />
    <div class="main">
      <router-view />

      <!-- 悬浮框 -->
      <div class="fixed-contain">
        <div>
          <div>
            <img src="~@/assets/image/home/zxzx.png" width="36" height="34" />
          </div>

          <div>在线咨询</div>
        </div>

        <!-- <div>
          <div>
            <img src="~@/assets/image/home/qywx.png" width="32" height="32" />
          </div>

          <div>企业微信</div>
        </div> -->
        <!-- hover -->
        <el-popover
          placement="left"
          trigger="hover"
          popper-class="customPopper"
        >
          <div><img src="~@/assets/image/home/gzh.jpg" width="100" /></div>
          <div slot="reference">
            <div class="gzh_box">
              <img src="~@/assets/image/home/gzh.png" width="32" height="32" />
            </div>

            <div>公众号</div>
          </div>
        </el-popover>
      </div>
    </div>
    <VFooter />

    <div class="fix-footer">
      <el-form>
        <span>Eliet English邀您开启定制化学习之旅 </span>
        <el-input
          placeholder="请输入您的手机号"
          v-model="form.phone"
          @input="handInput"
        />
        <el-button class="toget" @click="open">立即领取</el-button>
      </el-form>
    </div>

    <el-dialog
      center
      title="免费体验课"
      :visible.sync="dialogVisible"
      width="20%"
      @close="close"
    >
      <!-- 弹窗 -->
      <el-form ref="ruleForm" label-width="0px" class="demo-ruleForm">
        <div class="inputDeep">
          <el-form-item label="">
            <el-input
              v-model="form.name"
              class="myInput"
              placeholder="孩子姓名/Name"
            >
              <template #prefix>
                <div class="prefix">
                  <img src="~@/assets/image/common/xm.png" alt="" width="16" />
                </div>
              </template>
            </el-input>
          </el-form-item>
        </div>

        <div>
          <el-form-item label="">
            <el-input
              class="myInput"
              v-model="form.phone"
              placeholder="手机号/Phone"
            >
              <template #prefix>
                <div class="prefix">
                  <img src="~@/assets/image/common/dh.png" alt="" width="16" />
                </div>
              </template>
            </el-input>
          </el-form-item>
        </div>

        <div>
          <el-form-item label="">
            <el-input
              v-model="form.code"
              class="myInput yzm"
              placeholder="请输入验证码"
            >
              <template #prefix>
                <div class="prefix">
                  <img src="~@/assets/image/common/yx.png" alt="" width="16" />
                </div>
              </template>

              <template #suffix>
                <div class="suffix">
                  <el-button
                    v-show="sendAuthCode"
                    size="mini"
                    class="mybtn"
                    @click.prevent="getAuthCode"
                    >获取验证码</el-button
                  >

                  <span v-show="!sendAuthCode" class="auth_text">
                    <span class="auth_text_blue">{{ auth_time }} </span>
                    秒之后重新发送</span
                  >
                </div>
              </template>
            </el-input>
          </el-form-item>
        </div>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button class="submitBtn" @click="register">提交申请</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import Vheader from "@/components/v-header/index.vue";
import VFooter from "@/components/v-footer/index.vue";
import { GetCode, Register } from "@/api/register.js";

export default {
  components: {
    Vheader,
    VFooter,
  },
  data() {
    return {
      // form.phone: "",
      dialogVisible: false,
      form: {
        name: "",
        phone: "",
        code: "",
      },
      sendAuthCode: true, //显示‘获取按钮'还是'倒计时'
      auth_time: 0 /*倒计时 计数器*/,
    };
  },
  watch: {
    "$store.state.isShowRegisterDia": {
      handler: function (newVal, oldVal) {
        if (newVal) {
          this.dialogVisible = true;

          if (this.$store.state.phone) {
            this.form.phone = this.$store.state.phone;
          }
        }
      },
    },
  },
  methods: {
    handInput(value) {
      // console.log(value);
      this.form.phone = value.replace(/[^\d]/g, "");
    },
    getAuthCode() {
      this.getCode();
      this.sendAuthCode = false;
      this.auth_time = 60;
      let auth_timetimer = window.setInterval(() => {
        this.auth_time--;
        if (this.auth_time <= 0) {
          this.sendAuthCode = true;
          window.clearInterval(auth_timetimer);
        }
      }, 1000);
    },
    getCode() {
      let data = {
        region: "86",
        phone: this.form.phone,
      };
      GetCode(data)
        .then((res) => {
          // console.log(res.data);
          if (res.status === 200) {
            this.$message({
              type: "success",
              message: res.message,
            });
          } else {
            this.$message({
              type: "warning",
              message: res.message,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    register() {
      let data = {
        code: this.form.code,
        nickname: this.form.name,
        phone: this.form.phone,
      };
      Register(data)
        .then((res) => {
          // console.log(res);
          if (res.status == 200) {
            this.$message({
              type: "success",
              message: res.message,
            });
            this.close();
          } else {
            this.$message({
              type: "warning",
              message: res.message,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    close() {
      this.$store.commit("setRegisterDia", false);
      this.dialogVisible = false;
    },

    open() {
      if (this.form.phone && this.form.phone.length === 11) {
        this.$store.commit("setRegisterDia", true);
        this.$store.commit("setPhone", this.form.phone);
      } else {
        if (!this.form.phone) {
          this.$message({
            message: "请输入手机号",
            type: "warning",
          });
        } else if (this.form.phone.length < 11 && this.form.phone.length > 0) {
          this.$message({
            message: "手机号位数不正确",
            type: "warning",
          });
        }
      }
    },
  },
  created() {},
};
</script>
<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;

  .main {
    margin-top: 90px;
  }
}

.fixed-contain {
  position: fixed;
  right: 3px;
  top: 50%;
  margin-top: -140px;
  z-index: 100;
  width: 70px;
  // height: 279px;

  background: #fff;
  color: #2d2d2d;
  position: fixed;
  box-shadow: 0 0 10px #ccc;
  // cursor: pointer;
  border-radius: 25px;
  padding: 10px 0;

  // background-color: #fefefe;
  // border-radius: 20px;
  // background-image: url("~@/assets/image/home/xfj.png");
  // background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    margin-bottom: 20px;
    font-size: 12px;
    cursor: pointer;

    & > div:nth-child(1) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .gzh_box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.fix-footer {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 20;
  width: 100%;
  height: 56px;
  background: $mainColor;
  display: flex;
  justify-content: center;
  align-items: center;

  & .el-form {
    height: 100%;
    display: flex;
    align-items: center;
  }

  & span {
    font-size: 26px;
    color: #ffffff;
  }

  & .el-input {
    width: 260px;
    height: 42px;
    display: flex;
    align-items: center;
    // line-height: 42px;
    border-radius: 25px;
    border: none;
    outline: none;
    padding: 0 10px;
    margin: 0 20px;
  }

  & /deep/ .el-input__inner {
    &::placeholder {
      // color: red;
      font-size: 18px;
    }
  }

  & .toget {
    background: #ffffff;
    border: none;
    outline: none;
    color: $mainColor;
    font-size: 20px;
  }
}

.myInput /deep/ .el-input__inner {
  border-radius: 0; // 去除圆角
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;
  border-color: $mainColor; //边框的颜色
}

.myInput /deep/ .el-input__inner::-webkit-input-placeholder {
  padding-left: 10px;
}

.yzm .mybtn {
  background-color: $mainColor;
  color: #fff;
}

.submitBtn {
  background-color: $mainColor;
  color: #fff;
}

.auth_text_blue {
  color: #409eff;
}
</style>
<style>
/* el-popover 弹窗样式修改 */
.el-popover.customPopper {
  min-width: 100px;
}
</style>
