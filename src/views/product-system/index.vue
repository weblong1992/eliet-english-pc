<template>
  <div class="product-system">
    <div class="part1">
      <div>
        <div class="img_box">
          <img
            src="~@/assets/image/product-system/cptx.jpg"
            width="400"
            height="270"
          />
        </div>

        <div>
          <div class="tit">Eliet定制英语课</div>
          <div class="desc">面向全部学员开放</div>

          <div>
            <p>以学员英语学习目标为导向，定制专属学习课程。</p>
            <p>培养学员英语学习能力为核心，侧重提高口语输出能力。</p>
            <p>多元化教学体系，提升逻辑思维，语言思维能力。</p>
            <p>本课程面向5-18周岁学员开放。</p>
          </div>
        </div>
      </div>
    </div>

    <div class="part1">
      <div>
        <div>
          <div class="tit">Eliet国际学校英语课</div>
          <div class="desc">面向国际学校学员开放</div>

          <div>
            <p>以国内各国际小学课程为基础，以学习目标为导向定制化学习。</p>

            <p>适配剑桥，牛津等国际小学课程。</p>
            <p>培养学员英语学习能力为核心，侧重提高口语输出能力及英语成绩。</p>
            <p>多元化教学体系，提升逻辑思维，语言思维能力。</p>
            <p>本课程面向5-18周岁国际学校学员开放。</p>
          </div>
        </div>

        <div class="img_box">
          <img
            src="~@/assets/image/product-system/gjxx.jpg"
            width="400"
            height="270"
          />
        </div>
      </div>
    </div>

    <!-- <div class="part1">
      <div>
        <div class="img_box">img</div>

        <div>
          <div class="tit">Eliet学科融合课</div>
          <div class="desc">面向留学目标学员开放</div>

          <div>
            <p>以学员目标大学及专业为前提，以学习目标为导向定制化学习。</p>

            <p>以英语课程为载体，融合科学、艺术、金融等学科内容。</p>
            <p>培养学员英语学习能力为核心，侧重提高口语输出能力及综合能力。</p>
            <p>多元化教学体系，融合性的学科内容，为留学生活打好基础。</p>
            <p>本课程面向13-18周岁留学目标学员开放。</p>
          </div>
        </div>
      </div>
    </div> -->

    <div class="part1">
      <div>
        <div class="img_box">
          <img
            src="~@/assets/image/product-system/lx.jpg"
            width="400"
            height="270"
          />
        </div>

        <div>
          <div class="tit">Eliet学科融合课</div>
          <div class="desc">面向留学目标学员开放</div>

          <div>
            <p>以学员目标大学及专业为前提，以学习目标为导向定制化学习。</p>

            <p>以英语课程为载体，融合科学、艺术、金融等学科内容。</p>
            <p>培养学员英语学习能力为核心，侧重提高口语输出能力及综合能力。</p>
            <p>多元化教学体系，融合性的学科内容，为留学生活打好基础。</p>
            <p>本课程面向13-18周岁留学目标学员开放。</p>
          </div>
        </div>
      </div>
    </div>

    <div class="part1">
      <div>
        <div>
          <div class="tit">Eliet专项提升课</div>
          <div class="desc">面向全部学员开放</div>

          <div>
            <p>应试专项提高</p>

            <p>pet考试专项</p>
            <p>托福雅思考试专项</p>
          </div>
        </div>

        <div class="img_box">
          <img
            src="~@/assets/image/product-system/zxts.jpg"
            width="400"
            height="270"
          />
        </div>
      </div>
    </div>

    <div class="part1">
      <div>
        <div class="img_box">
          <img
            src="~@/assets/image/product-system/jy.jpg"
            width="400"
            height="270"
          />
        </div>

        <div>
          <div class="tit">Eliet看世界</div>
          <div class="desc">面向Eliet精英级以上学员开放</div>

          <div>
            <p>打造精英学员专属学习、社交圈层。</p>
            <p>欧美顶级大学夏校</p>
            <p>欧美顶级大学参观访问</p>
          </div>
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
  methods: {},
  created() {},
};
</script>
<style lang="scss" scoped>
.product-system {
  padding-top: 40px;
  .part1 {
    display: flex;
    justify-content: center;
    margin-bottom: 70px;

    & > div {
      display: flex;
      & > .img_box {
        width: 402px;
        height: 271px;
        // background-color: red;
        margin-right: 40px;
        display: flex;
        align-items: center;
        justify-content: center;

        & > img {
          border-radius: 20px;
        }
      }

      & > div {
        .tit {
          min-width: 480px;
          font-size: 48px;
          // background-color: $mainColor;
          color: $mainColor;
        }

        .desc {
          padding: 30px 0;
          font-size: 28px;
          color: #ccc;
        }
      }
    }
  }
}
</style>
