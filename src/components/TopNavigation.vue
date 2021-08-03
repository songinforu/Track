<template>
  <div>
    <!-- 头部导航    开始-->
    <div class="box-top">
      <div class="module-left">
        <el-switch
          v-model="value"
          active-color="#13ce66"
          inactive-color="#52A3EF"
        >
        </el-switch>
        <img src="@/style/images/num.png" alt="" />
        <p>Ansign</p>
      </div>
      <div class="module-right">
        <div class="module-right-left-w">
          <!-- ：绑定属性  @绑定事件 -->
          <div
            class="module-right-left"
            @click="handlePageList()"
            :tabIndex="-1"
            @blur.self="ifVisibile = true"
          >
            <span class="iconfont icon-wodeshoucang" slot="left"></span>
            <h4>{{pidNum}}</h4>
            <span class="iconfont icon-arrow-down little" slot="left"></span>
          </div>
          <PageList :visibile="ifVisibile" :list="list" @god="godChild"/>
        </div>
        <div class="module-right-right">
          <div @click="changeLangEvent()" class="link-box">
            <span>{{ $t("m.language") }}</span>
          </div>
          <router-link to="/login">
            <span class="iconfont icon-yaoqingzhuli"></span>
          </router-link>
          <router-link to="">
            <span class="iconfont icon-shouye"></span>
          </router-link>
        </div>
      </div>
    </div>
    <!-- 头部导航    结束 -->
  </div>
</template>

<script>
import PageList from "@/components/PageList";
export default {
  components: {
    PageList,
  },
  data() {
    return {
      //属性
      value: true,
      ifVisibile: false,
      lang: "en-US",
      list:[],
      pidNum:'',
    };
  },
  //方法
  methods: {
    handlePageList() {
      this.ifVisibile = true;
    },
    changeLangEvent() {
      this.$confirm("确定切换语言吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          if (this.lang === "zh-CN") {
            this.lang = "en-US";
            this.$i18n.locale = this.lang; //关键语句
          } else {
            this.lang = "zh-CN";
            this.$i18n.locale = this.lang; //关键语句
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
          });
        });
    },
    //从子组件接收
    godChild(item){
      this.ifVisibile = false,
      console.log(item)
      this.pidNum = item.Pid
    }
  },
  mounted() {
    this.$api
      .get("/page/get", {
        params: {
          PUid: "system",
        },
      })
      .then((res) => {
        // console.log(res);
        console.log(res.data.data)
        if (res.status != 200) return;
        this.list = res.data.data;
        //获取默认为数组的第0项
        this.pidNum = this.list[0].Pid;
        this.$pid = this.pidNum
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped>
.box-top {
  display: flex;
  .module-left {
    width: 250px;
    height: 60px;
    // background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 25px;
      text-align: center;
    }
    img {
      margin-left: 25px;
    }
    p {
      margin: 10px;
      font-weight: 900;
      font-size: 24px;
      font-family: "STLiti";
    }
  }
  .module-right {
    width: calc(100% - 250px);
    height: 60px;
    border: 1px solid #d9d9d9;
    display: flex;
    justify-content: space-between;
    .module-right-left-w {
      height: 100%;
      position: relative;
      border: 1px solid #fdfdfd;
    }
    .module-right-left {
      cursor: pointer;
      height: 100%;
      width: 280px;
      border-right: 1px solid #d9d9d9;
      // background: red;
      display: flex;
      justify-content: center;
      align-items: center;
      border-top: 2px solid green;
      margin-top: -2px;
      span {
        font-size: 25px;
      }
      h4 {
        margin-left: 20px;
        margin-right: 20px;
      }
      .little {
        font-size: 18px;
      }
    }
    .module-right-right {
      width: 250px;
      // background: blue;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .link-box {
        width: 100px;
        height: 25px;
        display: block;
        text-align: center;
        border: 1px solid green;
        border-radius: 5px;
        cursor: pointer;
        span {
          font-size: 12px;
        }
      }
      span {
        font-size: 24px;
      }
    }
  }
}
</style>