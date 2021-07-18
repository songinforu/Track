<template>
  <div>
    <!-- 头部导航    开始-->
    <div class="box-top">
      <div class="module-left">
        <el-switch
          v-model="value"
          active-color="#13ce66"
          inactive-color="#52A3EF">
        </el-switch>
        <img src="@/style/images/num.png" alt="" />
        <p>Ansign</p>
      </div>
      <div class="module-right">
        <div class="module-right-left-w">
          <div class="module-right-left" @click="handlePageList()" :tabIndex="-1" @blur="ifVisibile = false">
            <span class="iconfont icon-a-ziyuan13" slot="left"></span>
            <h4>test1</h4>
            <span class="iconfont icon-arrow-down little" slot="left"></span>
          </div>
          <PageList :visibile="ifVisibile" />
        </div>
        <div class="module-right-right">
          <div class="link-box">
            <span>Get English</span>
          </div>
          <!-- <router-link to="/register">
            <span class="iconfont icon-qianggouquan"></span>
          </router-link>
          <router-link to="/login">
            <span class="iconfont icon-wodeshoucang"></span>
          </router-link> -->
          <!-- <router-link to="">
            <span class="iconfont icon-shezhi"></span>
          </router-link> -->
          <router-link to="">
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
    components:{
        PageList,
    },
    data(){
        return{
            //属性
            value: true,
            ifVisibile: false,
        }
    },
    //方法
    methods:{
        handlePageList(){
            this.ifVisibile =!this.ifVisibile
        }
    }
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
        margin-top: -1px;
        span {
          font-size: 16px;
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