<template>
  <div class="home">
    <!-- 头部导航    开始-->
    <div class="box-top">
      <div class="module-left">
        <span class="iconfont icon-kaiguan2" slot="left"></span>
        <img src="@/style/images/num.png" alt="">
        <p>Countly</p>
      </div>
      <div class="module-right">
        <div class="module-right-left">
          <span class="iconfont icon-a-ziyuan13" slot="left"></span>
          <h3>test</h3>
          <span class="iconfont icon-arrow-down little" slot="left"></span>
        </div>
        <div class="module-right-right"></div>
      </div>
    </div>
    <!-- 头部导航    结束 -->


    <!-- 主体部分     开始 -->
    <div class="motif">
      <div class="motif-left"></div>
      <div class="motif-right"></div>
    </div>
    <!-- 主题部分      结束 -->
    <!-- <router-link to="/about">About</router-link> -->
  </div>
</template>


<style lang="scss" scoped>
// scoped 防止类名重复 只在当前文件下起作用
  .home{
    .box-top{
      display: flex;
      .module-left{
        width: 400px;
        height: 75px;
        // background: red;
        display: flex;
        justify-content: center;
        align-items: center;
        span{
          font-size: 40px;
          text-align: center;
        }
        img{
          margin-left: 40px;
        }
        p{
          margin: 10px;
          font-weight: 900;
          font-size: 28px;
          font-family: "STLiti";
        }
      }
      .module-right{
        width: calc(100% - 400px);
        height: 75px;
        border: 1px solid #d9d9d9;
        display: flex;
        .module-right-left{
          width: 200px;
          border-right: 1px solid #d9d9d9;
          // background: red;
          display: flex;
          justify-content: center;
          align-items: center;
          border-top: 2px solid green;
          margin-top: -1px;
          span{
            font-size: 20px;
          }
          h3{
            margin-left: 20px;
            margin-right: 20px;
          }
          .little{
            font-size: 18px;
          }
        }
        .module-right-right{
          width: calc(100% - 200px);
          background: blue;
        }
      }
    }
    .motif{
      display: flex;
      .motif-left{
        width: 400px;
        height: 1000px;
        background: #0B131A;
      }
      .motif-right{
        width: calc(100% - 400px);
        background: chocolate;
        height: 1000px;
      }
      
    }
  }
</style>