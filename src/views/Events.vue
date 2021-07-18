<template>
  <div class="events">
    <!-- 头部导航    开始-->
    <TopNavigation/>
    <!-- 头部导航    结束 -->


    <!-- 主体部分     开始 -->
    <div class="motif">
      <!-- 左导航栏    开始-->
        <LeftNavigation/>
      <!-- 左导航栏    结束 -->
      <div class="motif-right">
        <div class="motif-right-specil">
          <div class="event-one">
            <h3>EVENTS</h3>
            <!-- <span class="iconfont icon-24"></span> -->
          </div>
          <!-- <div class="event-two">
            <span class="iconfont icon-icon_fabu"></span>
            <p>Compare</p>
          </div> -->
          <div class="event-three">
            <el-input
                placeholder="请输入内容"
                v-model="input4">
              <i slot="suffix" class="el-input__icon el-icon-search"></i>
            </el-input>
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
                <el-date-picker
                  v-model="value3"
                  type="datetime"
                  placeholder="选择日期时间"
                  default-time="12:00:00">
                </el-date-picker>
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
              :default-sort = "{prop: 'date', order: 'descending'}">
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
    .motif{
      height: calc(100% - 62px);
      display: flex;
      .motif-right{
        width: calc(100% - 250px);
        display: flex;
        .motif-right-specil{
          width: 300px;
          margin: 20px 0px auto 20px;
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
            // width: 250px;
            // height: 50px;
            background: #f9f9f9;
            display: flex;
            justify-content: center;
            align-items: center;
            // margin: 0 auto;
            input{
              font-family: inherit;
              font-size: 100%;
            }
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
                margin-right: 10px;
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
import TopNavigation from "@/components/TopNavigation";
import LeftNavigation from "@/components/LeftNavigation"
  export default {
    components: {
      TopNavigation,
      LeftNavigation
    },
    data() {
      return {
        ifVisibile: false,
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
        }],
        pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value3: '',
        input4: ''
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
    }
  };
</script>