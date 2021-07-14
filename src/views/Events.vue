<template>
  <div class="events">
    <!-- 头部导航    开始-->
    <div class="box-top">
      <div class="module-left">
        <el-switch
          v-model="value"
          active-color="#13ce66"
          inactive-color="#52A3EF">
        </el-switch>
        <img src="@/style/images/num.png" alt="">
        <p>Countly</p>
      </div>
      <div class="module-right">
        <div class="module-right-left">
          <span class="iconfont icon-a-ziyuan13" slot="left"></span>
          <h4>test</h4>
          <span class="iconfont icon-arrow-down little" slot="left"></span>
        </div>
        <div class="module-right-right">
          <router-link to="" class="link-box">
            <span>Get Enterprise</span>
          </router-link>
          <router-link to="/register">
            <span class="iconfont icon-qianggouquan"></span>
          </router-link>
          <router-link to="/login">
            <span class="iconfont icon-wodeshoucang"></span>
          </router-link>
          <router-link to="/about">
            <span class="iconfont icon-shezhi"></span>
          </router-link>
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


    <!-- 主体部分     开始 -->
    <div class="motif">
      <!-- 左导航栏    开始-->
      <div class="motif-left">
        <!-- 第一块 -->
        <div class="black-box">
          <p class="font-special">UNDERSTAND</p>
          <router-link to="/">
            <div>
              <span class="iconfont icon-calendar"></span>
              <p>Home</p>
              <span class="span-specil">></span>
            </div>
          </router-link>
          <router-link to="analytics">
            <div>
              <span class="iconfont icon-communicate"></span>
              <p>Analytics</p>
              <span class="span-specil">></span>
            </div>
          </router-link>
          <router-link to="events">
            <div>
              <span class="iconfont icon-business"></span>
              <p>Events</p>
              <span class="span-specil">></span>
            </div>
          </router-link>
          <router-link to="">
            <div>
              <span class="iconfont icon-chart"></span>
              <p>Test1</p>
              <span class="span-specil">></span>
            </div>
          </router-link>
        </div>
        <!-- 第二块 -->
        <div class="black-box">
          <p class="font-special">EXPLORE</p>
          <router-link to="">
            <div>
              <span class="iconfont icon-summary"></span>
              <p>Test1</p>
              <span class="span-specil">></span>
            </div>
          </router-link>
          <router-link to="">
            <div>
              <span class="iconfont icon-query"></span>
              <p>Test1</p>
              <span class="span-specil">></span>
            </div>
          </router-link>
        </div>
        <!-- 第三块 -->
        <div class="black-box">
          <p class="font-special">REACH</p>
          <router-link to="">
            <div>
              <span class="iconfont icon-message"></span>
              <p>Test1</p>
              <span class="span-specil">></span>
            </div>
          </router-link>
          <router-link to="">
            <div>
              <span class="iconfont icon-workplace"></span>
              <p>Test1</p>
              <span class="span-specil">></span>
            </div>
          </router-link>
        </div>
        <!-- 第四块 -->
        <div class="black-box">
          <p class="font-special">IMPROVE</p>
          <router-link to="">
            <div>
              <span class="iconfont icon-meeting"></span>
              <p>Test1</p>
              <span class="span-specil">></span>
            </div>
          </router-link>
        </div>
        <!-- 第五块 -->
        <div class="black-box">
          <p class="font-special"></p>
          <router-link to>
            <div>
              <span class="iconfont icon-questionnaire"></span>
              <p>Test1</p>
              <span class="span-specil">></span>
            </div>
          </router-link>
          <router-link to="">
            <div>
              <span class="iconfont icon-news"></span>
              <p>Test1</p>
              <span class="span-specil">></span>
            </div>
          </router-link>
        </div>
      </div>
      <!-- 左导航栏    结束 -->
      <div class="motif-right">
        <div class="chart-box"></div>
        <div class="sheet-box"></div>
      </div>
    </div>
    <!-- 主题部分    结束 -->
  </div>
</template>


<style lang="scss" scoped>
// scoped 防止类名重复 只在当前文件下起作用
  .events{
    height: 100%;
    .box-top{
      display: flex;
      .module-left{
        width: 250px;
        height: 60px;
        // background: red;
        display: flex;
        justify-content: center;
        align-items: center;
        span{
          font-size: 25px;
          text-align: center;
        }
        img{
          margin-left: 25px;
        }
        p{
          margin: 10px;
          font-weight: 900;
          font-size: 24px;
          font-family: "STLiti";
        }
      }
      .module-right{
        width: calc(100% - 250px);
        height: 60px;
        border: 1px solid #d9d9d9;
        display: flex;
        justify-content: space-between;
        .module-right-left{
          width: 280px;
          border-right: 1px solid #d9d9d9;
          // background: red;
          display: flex;
          justify-content: center;
          align-items: center;
          border-top: 2px solid green;
          margin-top: -1px;
          span{
            font-size: 16px;
          }
          h4{
            margin-left: 20px;
            margin-right: 20px;
          }
          .little{
            font-size: 18px;
          }
        }
        .module-right-right{
          width: 360px;
          // background: blue;
          display: flex;
          justify-content: space-around;
          align-items: center;
          .link-box{
            width: 100px;
            height: 25px;
            display: block;
            text-align: center;
            border: 1px solid green;
            border-radius: 5px;
            span{
              font-size: 12px;
            }
          }
          span{
            font-size: 24px;
          }
        }
      }
    }
    .motif{
      height: calc(100% - 62px);
      display: flex;
      .motif-left{
        width: 250px;
        background: #0B131A;
        color: white;
        .black-box{
          a{
            display: block;
            color: white;
          }
          a:hover{
            background: yellowgreen;
          }
          .font-special{
            display: block;
            // background: brown;
            margin-top: 35px;
            font-size: 16px;
            margin-bottom: 15px;
            margin-left: 10px;
          }
          div{
            height: 35px;
            // background: cornflowerblue;
            display: flex;
            align-items: center;
            justify-content: space-around;
            span{
              width: 100px;
              font-size: 20px;
              line-height: 26px;
              text-align: center;
            }
            p{
              font-size: 13px;
              width: calc(100% - 150px);
            }
            .span-specil{
              width: 50px;
              font-size: 14px;
              text-align: center;
            }
          }
        }
      }
      .motif-right{
        width: calc(100% - 250px);
        background: chocolate;
      }
      
    }
  }
</style>


<script>
  export default {
    data() {
      return {
        value: true
      }
    }
  };
</script>