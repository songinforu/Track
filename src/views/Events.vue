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
        <div class="motif-right-specil">
          <div class="event-one">
            <h3>EVENTS</h3>
            <span class="iconfont icon-24"></span>
          </div>
          <div class="event-two">
            <span class="iconfont icon-icon_fabu"></span>
            <p>Compare</p>
          </div>
          <div class="event-three">
            <span class="iconfont icon-sousuo"></span>
          </div>
          <div class="event-four">
            <p>linkClick</p>
          </div>
        </div>
        <div class="motif-right-master">
          <div class="chart-box">
            <!-- 数据图表模块头部   开始 -->
            <div class="chart-box-head">
              <h2>LINKCLICK</h2>
              <div class="chart-box-head-right">
                <input type="date">
                <span></span>
              </div>
            </div>
            <!-- 数据图表模块身体   开始 -->
            <div class="chart-box-body">


            </div>
            <!-- 数据图表模块脚部    开始 -->
            <div class="chart-box-footer"></div>
          </div>
          <div class="sheet-box">
            <el-table
              :data="tableData"
              style="width: 100%"
              :default-sort = "{prop: 'date', order: 'descending'}"
              >
              <el-table-column
                prop="date"
                label="SEGMENTATION"
                sortable>
              </el-table-column>
              <el-table-column
                prop="name"
                label="COUNT"
                sortable>
              </el-table-column>
            </el-table>            
          </div>
        </div>
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
        display: flex;
        .motif-right-specil{
          width: 300px;
          height: 220px;
          margin: 20px 0px 20px 20px;
          border: 1px solid #d2d2d2;
          border-radius: 5px;
          .event-one{
            display: flex;
            height: 70px;
            background: #d2d2d2;
            align-items: center;
            justify-content: space-around;
            span{
              font-size: 25px;
            }
          }
          .event-two{
            height: 50px;
            background: #d9d9d9;
            display: flex;
            align-items: center;
            justify-content: center;
            span{
              font-size: 20px;
              margin-right: 10px;
            }
          }
          .event-three{
            height: 50px;
            background: #f9f9f9;
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            span{
              font-size: 25px;
              margin-right: 20px;
            }
          }
          .event-four{
            height: 50px;
            background: #ececec;
            font-size: 16px;
            line-height: 50px;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            p{
              margin-left: 20px;
            }
          }
        }
        .motif-right-master{
          width: calc(100% - 320px);
          height: 100%;
          // background: chocolate;
          display: flex;
          flex-direction: column;
          .chart-box{
            margin: 20px;
            height: 650px;
            border: 1px solid #d2d2d2;
            border-radius: 3px;
            .chart-box-head{
              height: 70px;
              background: #ececec;
              display: flex;
              align-items: center;
              justify-content: space-between;
              h2{
                font-size: 18px;
                margin-left: 10px;
              }
              .chart-box-head-right{
                width: 400px;
                height: 50px;
                background: chartreuse;
              }
            }
            .chart-box-body{
              //为了兼容性一般都写两条
              display:-webkit-flex;
              display: flex;
              .chart-lump{
                height: 200px;
                background: #f9f9f9;
                flex: 1;
                border-right: 1px solid #d2d2d2;
                border-bottom: 1px solid #d2d2d2;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                span{
                  font-size: 28px;
                }
                h1{
                  margin-top: 5px;
                  font-family: 宋体;
                }
                p{
                  margin: 5px;
                  font-size: 12px;
                }
                div{
                  width: 150px;
                  height: 50px;
                  background: chartreuse;
                }
              }
              .chart-specil-lump{
                background: white;
                border-bottom: none;
            }
              .last-lump{
                border-right: none;
              }
            }
          }
          .sheet-box{
            margin: 10px 20px 0px 20px;
            height: calc(100% - 692px);
            border: 1px solid #d2d2d2;
            border-bottom: none;
          }
        }  
      }
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        value: true,
        tableData: [{
          date: 'link1',
          name: '1',
        }, {
          date: 'link2',
          name: '2',
        }, {
          date: 'link3',
          name: '3',
        }, {
          date: 'link4',
          name: '4',
        }]
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      }
    }
  }
</script>