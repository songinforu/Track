<template>
  <div class="home">
    <!-- 头部导航    开始-->
    <TopNavigation/>
    <!-- 头部导航    结束 -->

    <!-- 主体部分     开始 -->
    <div class="motif">
      <!-- 左导航栏    开始-->
        <LeftNavigation/>
      <!-- 左导航栏    结束 -->
      <div class="motif-right">
        <div class="chart-box">
          <!-- 数据图表模块头部   开始 -->
          <div class="chart-box-head">
            <h2>USERS</h2>
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
            :default-sort = "{prop: 'date', order: 'descending'}"
            >
            <el-table-column
              prop="date"
              label="DATA"
              sortable>
            </el-table-column>
            <el-table-column
              prop="totalUsers"
              label="TOTALUSERS"
              sortable>
            </el-table-column>
            <el-table-column
              prop="newUsers"
              label="NEWUSERS"
              sortable>
            </el-table-column>
            <el-table-column
              prop="returningUsers"
              label="RETURNINGUSERS"
              sortable>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <!-- 主题部分    结束 -->
  </div>
</template>


<style lang="scss" scoped>
// scoped 防止类名重复 只在当前文件下起作用
  .home{
    height: 100%;
    .motif{
      height: calc(100% - 62px);
      display: flex;
      .motif-right{
        width: calc(100% - 250px);
        // background: chocolate;
        display: flex;
        flex-direction: column;
        .chart-box{
          margin-top: 20px;
          margin-left: 20px;
          margin-right: 5px;
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
          }
        }
        .sheet-box{
          margin-top: 20px;
          margin-left: 20px;
          margin-right: 5px;
          height: calc(100% - 692px);
          border: 1px solid #d2d2d2;
          border-bottom: none;
          display: flex;
          
        }
      }
      
    }
  }
</style>

<script>
import TopNavigation from "@/components/TopNavigation"
import LeftNavigation from "@/components/LeftNavigation"
  export default {
    components:{
      TopNavigation,
      LeftNavigation
  },
    data() {
      return {
        //开关
        value: true,
        ifVisibile: false,
        tableData: [{
          date: '2016-05-02',
          totalUsers: 'test1',
          newUsers: '11',
          returningUsers: '0'
        }, {
          date: '2016-05-04',
          totalUsers: 'test2',
          newUsers: '12',
          returningUsers: '1'
        }, {
          date: '2016-05-01',
          totalUsers: 'test3',
          newUsers: '13',
          returningUsers: '2'
        }, {
          date: '2016-05-03',
          totalUsers: 'test4',
          newUsers: '15',
          returningUsers: '3'
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
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
    }
  };
</script>