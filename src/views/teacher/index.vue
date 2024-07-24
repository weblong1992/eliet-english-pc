<template>
  <div class="teachers">
    <div class="selectOur">
      <div class="title">为什么选择我们？</div>

      <div class="box">
        <div class="item">
          <div class="imgBox">
            <img
              src="~@/assets/image/teaching-staff/gjh.jpg"
              width="276"
              height="200"
            />
          </div>

          <div>国际化</div>
          <div>国际化教学教研团队</div>
        </div>

        <div class="item">
          <div class="imgBox">
            <img
              src="~@/assets/image/teaching-staff/gbz.jpg"
              width="276"
              height="200"
            />
          </div>

          <div>高标准</div>
          <div>行业顶级标准选取录用</div>
        </div>

        <div class="item">
          <div class="imgBox">
            <img
              src="~@/assets/image/teaching-staff/jyc.jpg"
              width="276"
              height="200"
            />
          </div>

          <div>精英层</div>
          <div>只服务1%精英阶层</div>
        </div>

        <div class="item">
          <div class="imgBox">
            <img
              src="~@/assets/image/teaching-staff/jgl.jpg"
              width="276"
              height="200"
            />
          </div>

          <div>结果论</div>
          <div>以结果驱动服务升级</div>
        </div>
      </div>
    </div>

    <div id="chart" style="width: 100%; height: 500px"></div>

    <div class="xlbz1">
      <div class="title">高学历 高标准</div>

      <div class="item_box">
        <div class="item">
          <div class="imgBox">
            <img src="~@/assets/image/teaching-staff/ymj_new.jpg" />
          </div>

          <div>100%英美籍</div>
        </div>

        <div class="item">
          <div class="imgBox">
            <img src="~@/assets/image/teaching-staff/bk.jpg" />
          </div>

          <div>100%本科</div>
        </div>

        <div class="item">
          <div class="imgBox">
            <img src="~@/assets/image/teaching-staff/xlzz.jpg" />
          </div>

          <div>100%教学资质</div>
        </div>

        <div class="item">
          <div class="imgBox">
            <img src="~@/assets/image/teaching-staff/mslq.jpg" />
          </div>

          <div>1%面试录取</div>
        </div>

        <div class="item">
          <div class="imgBox">
            <img src="~@/assets/image/teaching-staff/jxjy.jpg" />
          </div>

          <div>100%五年以上教学经验</div>
        </div>
      </div>
    </div>

    <div class="xlbz wjlylc">
      <div class="title">外教录用流程</div>

      <div class="item_box">
        <div class="item">
          <div class="imgBox">
            <div class="inner">
              <img src="~@/assets/image/teaching-staff/jlsx2.png" width="80" />
            </div>
          </div>

          <div>简历筛选</div>
        </div>

        <div class="jtbox">
          <div>
            <img src="~@/assets/image/teaching-staff/jt.png" width="64" />
          </div>
        </div>

        <div class="item">
          <div class="imgBox">
            <div class="inner">
              <img src="~@/assets/image/teaching-staff/xsms.png" width="80" />
            </div>
          </div>

          <div>线上面试</div>
        </div>

        <div class="jtbox">
          <div>
            <img src="~@/assets/image/teaching-staff/jt.png" width="64" />
          </div>
        </div>

        <div class="item">
          <div class="imgBox">
            <div class="inner">
              <img src="~@/assets/image/teaching-staff/mlsk.png" width="80" />
            </div>
          </div>

          <div>模拟授课</div>
        </div>

        <div class="jtbox">
          <div>
            <img src="~@/assets/image/teaching-staff/jt.png" width="64" />
          </div>
        </div>

        <div class="item">
          <div class="imgBox">
            <div class="inner">
              <img src="~@/assets/image/teaching-staff/bjdc.png" width="80" />
            </div>
          </div>

          <div>背景调查</div>
        </div>

        <div class="jtbox">
          <div>
            <img src="~@/assets/image/teaching-staff/jt.png" width="64" />
          </div>
        </div>

        <div class="item">
          <div class="imgBox">
            <div class="inner">
              <img src="~@/assets/image/teaching-staff/pxsg.png" width="80" />
            </div>
          </div>

          <div>培训上岗</div>
        </div>

        <div class="jtbox">
          <div>
            <img src="~@/assets/image/teaching-staff/jt.png" width="64" />
          </div>
        </div>

        <div class="item">
          <div class="imgBox">
            <div class="inner">
              <img src="~@/assets/image/teaching-staff/khpg.png" width="80" />
            </div>
          </div>

          <div>考核评估</div>
        </div>
      </div>
    </div>

    <div class="szjs">
      <div class="title">师资介绍</div>
      <el-row :gutter="30">
        <el-col :span="8">
          <el-card shadow="always">
            <div class="myitem">
              <div class="pic">
                <img src="~@/assets/image/teaching-staff/andrew.jpg" />
              </div>

              <div class="con">
                <p><span>Name：</span>Andrew</p>
                <p><span>Nationality：</span>UK</p>
                <p><span>Teaching experience:</span> 10 years</p>
                <p>
                  <span>Introduction：</span>
                  I create a fun and interactive learning environment where
                  students are encouraged to explore their creativity. I am also
                  a strong advocate for using technology to enhance learning,
                  and often use apps, games, and other digital tools in my
                  lessons. I’m a dedicated and caring teacher who is committed
                  to helping his students succeed.
                </p>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col :span="8">
          <el-card shadow="always">
            <div class="myitem">
              <div class="pic">
                <img src="~@/assets/image/teaching-staff/caroline.jpg" />
              </div>

              <div class="con">
                <p><span>Name：</span>Caroline</p>
                <p><span>Nationality：</span>USA</p>
                <p><span>Teaching experience:</span> 25 years</p>
                <p>
                  <span>Introduction：</span>
                  I am thrilled to be a part of this language learning journey
                  with you. I bring a vibrant and enthusiastic approach to
                  teaching, making our lessons not only informative but also
                  enjoyable. With a passion for details, I ensure that every
                  aspect of your learning experience is tailored to your needs
                  and goals. I can't wait to embark on this learning adventure
                  with you!
                </p>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col :span="8">
          <el-card shadow="always">
            <div class="myitem">
              <div class="pic">
                <img src="~@/assets/image/teaching-staff/amma.jpg" />
              </div>

              <div class="con">
                <p><span>Name：</span>Emma</p>
                <p><span>Nationality：</span>USA</p>
                <p><span>Teaching experience:</span> 8 years</p>
                <p>
                  <span>Introduction：</span>
                  I really enjoy teaching and watching students grow and become
                  more confident using their English. For me teaching is a
                  wonderful and rewarding experience.
                </p>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    initChart() {
      const chart = echarts.init(document.getElementById("chart"));
      let color = ["#ff4343", "#f69846", "#f6d54a", "#45dbf7"];
      let names = ["标准", "专业", "国际", "本地"];
      let data = [1, 1, 1, 1];
      let list = [];
      let total = 0;
      for (let i in data) {
        total += data[i];
      }

      let placeHolderStyle = {
        normal: {
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          color: "rgba(0, 0, 0, 0)",
          borderColor: "rgba(0, 0, 0, 0)",
          borderWidth: 0,
        },
      };

      let rich = {
        white: {
          align: "center",
          padding: [3, 0],
        },
      };

      for (let i in data) {
        list.push(
          {
            value: data[i],
            name: names[i],
            itemStyle: {
              normal: {
                borderWidth: 20,
                shadowBlur: 20,
                borderColor: color[i],
                shadowColor: color[i],
                color: color[i],
              },
            },
          },
          {
            value: total / 30,
            name: "",
            itemStyle: placeHolderStyle,
          }
        );
      }

      let func = (params) => {
        // console.log("----", params);
        // let percent = ((params.value / total) * 100).toFixed(1)
        // let name = params.name.replace(/\n/g, '')
        // if (params.name !== '') {
        //     return name + '\n{white|' + percent + '%}'
        // } else {
        //     return ''
        // }
        let bz = "英美教师具有标准化且流利的英语口语能力";
        let zy =
          "英美教师通常具有更高的教育背景和教学经验，\n可以为学生提供更高质量的教育和培训。";
        let bd =
          "英美教师通常具有与当地文化不同的视角和经验，\n他们可以向学生介绍自己的文化背景，\n分享不同的价值观、思考方式、生活方式等，\n从而让学生更加了解多元化的文化。";
        let gb =
          "英美教师通常具有更多的国际化背景和经验，\n他们可以向学生介绍他们所在国家的教育和职业领域，\n帮助学生更好地了解和掌握国际市场的需求和机会。";
        if (params.data.name == "标准") {
          return `${params.name} : ${bz}`;
        } else if (params.data.name === "专业") {
          return `${params.name} : ${zy}`;
        } else if (params.data.name == "本地") {
          return `${params.name} : ${bd}`;
        } else if (params.data.name == "国际") {
          return `${params.name} : ${gb}`;
        }
      };

      let option = {
        // backgroundColor: "#04243E",
        backgroundColor: "#fff",
        title: {
          // show: false,
          text: "为什么是英美外教",
          textStyle: {
            color: "#629499",
            fontSize: 48,
          },
          x: "center",
          top: 20,
        },
        tooltip: {
          show: false,
        },
        legend: {
          show: true,
          orient: "horizontal", //vertical |horizontal,
          data: names,
          icon: "circle",
          right: "8%",
          top: "5%",
          selectedMode: false, //去除点击事件
          textStyle: {
            // color: "#fff",
            fontSize: 20,
          },
        },
        series: [
          {
            name: "",
            type: "pie",
            clockWise: false,
            startAngle: "90",
            center: ["50%", "50%"],
            radius: ["50%", "51%"],
            hoverAnimation: false,
            silent: true, //去除鼠标放上去放大效果
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: "outside",
                  formatter: func,
                  rich: rich,
                  fontSize: 20,
                },
                labelLine: {
                  length: 40,
                  length2: 100,
                  show: true,
                  color: "#00ffff",
                },
              },
            },
            data: list,
            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function (idx) {
              return idx * 50;
            },
          },
          {
            name: "",
            type: "pie",
            center: ["50%", "50%"],
            radius: ["50%", "49%"],
            itemStyle: {
              color: "transparant",
            },
            startAngle: "90",
            data: [
              {
                value: total,
                name: "",
                label: {
                  normal: {
                    show: true,
                    // formatter: '{c|{c}} {b|条记录}',
                    formatter: "英美外教",
                    rich: {
                      c: {
                        color: "rgb(98,137,169)",
                        // color: "#629499",
                        fontSize: 50,
                        fontWeight: "bold",
                        lineHeight: 5,
                      },
                      b: {
                        color: "rgb(98,137,169)",
                        color: "#629499",
                        fontSize: 40,
                        lineHeight: 5,
                      },
                    },
                    textStyle: {
                      fontSize: 20,
                      fontWeight: "bold",
                    },
                    position: "center",
                  },
                },
              },
            ],
          },
        ],
      };

      chart.setOption(option);
    },
  },
  mounted() {
    this.initChart();
  },
};
</script>
<style lang="scss" scoped>
.teachers {
  .selectOur {
    margin-bottom: 50px;
    .title {
      display: flex;
      justify-content: center;
      font-size: 48px;
      padding: 50px 0;
      color: $mainColor;
    }

    .box {
      display: flex;
      justify-content: center;

      .item {
        margin-right: 40px;
        display: flex;
        flex-direction: column;
        // justify-content: center;

        & > div {
          display: flex;
          justify-content: center;
          margin-bottom: 10px;
          color: $mainColor;
        }

        .imgBox {
          width: 276px;
          height: 200px;
          background-color: red;

          & > img {
            border-radius: 20px;
          }
        }
      }
    }
  }

  .xlbz {
    margin-top: 40px;
    & .title {
      display: flex;
      justify-content: center;
      padding: 40px 0;
      font-size: 48px;
      color: $mainColor;
    }
    .item_box {
      display: flex;
      justify-content: center;
      margin-bottom: 60px;

      & .item {
        margin-right: 20px;
        & .imgBox {
          width: 150px;
          height: 150px;
          border-radius: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          // background-color: pink;
          // margin-right: 20px;
          // & > img {
          //   border-radius: 20px;
          // }
        }
        & > div {
          display: flex;
          justify-content: center;
          margin-bottom: 10px;
          font-size: 22px;
        }
      }
    }
  }

  .xlbz1 {
    margin-top: 40px;
    & .title {
      display: flex;
      justify-content: center;
      padding: 40px 0;
      font-size: 48px;
      color: $mainColor;
    }
    .item_box {
      display: flex;
      justify-content: center;

      & .item {
        width: 200px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-right: 40px;
        & .imgBox {
          // width: 200px;
          // height: 100px;
          // border-radius: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          position: relative;

          & > img {
            width: 200px;
            width: 200px;
            // height: 100px;
            position: absolute;
          }
        }
        & > div {
          display: flex;
          justify-content: center;
          margin-bottom: 10px;
          font-size: 22px;
        }
      }
    }
  }

  .wjlylc {
    .title {
      color: $mainColor;
    }

    & .item_box {
      & .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        & .imgBox {
          background-color: $mainColor;
          display: flex;
          justify-content: center;
        }
      }

      .jtbox {
        display: flex;
        align-items: center;
        margin-top: -20px;
      }
    }

    & .item {
      margin-right: 0 !important;
      color: $mainColor;
    }
  }

  .szjs {
    padding: 40px 60px;

    & .title {
      padding: 20px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 48px;
      color: $mainColor;
    }

    .myitem {
      height: 500px;
      // display: flex;
      justify-content: center;
      // padding: 40px 0;

      .pic {
        display: flex;
        justify-content: center;

        & > img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }
      }

      .con {
        padding: 40px 20px;

        & span {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
