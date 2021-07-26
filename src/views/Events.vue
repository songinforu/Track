<template>
  <div class="events">
    <!-- 主体部分     开始 -->
    <div class="motif">
      <div class="motif-right">
        <div class="motif-right-specil">
          <div class="event-one">
            <h3>{{$t('m.events')}}</h3>
          </div>
          <div class="event-three">
            <el-input placeholder="请输入内容" v-model="input4">
              <i slot="suffix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>

          <div v-if="input4">
            <div v-for="(item,index) in aaa" :key="index" class="event-four">
              {{item}}
            </div>
          </div>

        </div>
        <div class="motif-right-master">
          <div class="chart-box">
            <!-- 数据图表模块头部   开始 -->
            <div class="chart-box-head">
              <h2>{{$t('m.link')}}</h2>
              <div class="chart-box-head-right">
                <el-date-picker
                  v-model="value3"
                  type="datetime"
                  :placeholder="$t('m.time')"
                >
                </el-date-picker>
                <span></span>
              </div>
            </div>
            <!-- 数据图表模块身体   开始 -->
            <div class="chart-box-body" ref="chart_main3"></div>
          </div>
          <div class="sheet-box">
            <el-table
              :data="tableData"
              style="width: 100%"
              :default-sort="{ prop: 'date', order: 'descending' }"
            >
              <el-table-column prop="date" :label="$t('m.seg')" sortable>
              </el-table-column>
              <el-table-column prop="name" :label="$t('m.count')" sortable>
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
.events {
  width: 100%;
  .motif {
    height: 100%;
    .motif-right {
      width: 100%;
      display: flex;
      // background: chocolate;
      .motif-right-specil {
        width: 300px;
        margin: 20px 0px auto 20px;
        border: 1px solid #d2d2d2;
        border-radius: 5px;
        .event-one {
          display: flex;
          height: 70px;
          background: #d2d2d2;
          align-items: center;
          justify-content: space-around;
          span {
            font-size: 25px;
          }
        }
        .event-two {
          height: 50px;
          background: #d9d9d9;
          display: flex;
          align-items: center;
          justify-content: center;
          span {
            font-size: 20px;
            margin-right: 10px;
          }
        }
        .event-three {
          background: #f9f9f9;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .event-four {
          height: 50px;
          background: #ececec;
          font-size: 16px;
          line-height: 50px;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          p {
            margin-left: 20px;
          }
        }
      }
      .motif-right-master {
        width: calc(100% - 330px);
        height: 100%;
        // background: chocolate;
        display: flex;
        flex-direction: column;
        .chart-box {
          margin: 20px;
          height: 650px;
          border: 1px solid #d2d2d2;
          border-radius: 3px;
          .chart-box-head {
            height: 70px;
            background: #ececec;
            display: flex;
            align-items: center;
            justify-content: space-between;
            h2 {
              font-size: 18px;
              margin-left: 10px;
            }
            .chart-box-head-right {
              margin-right: 10px;
            }
          }
          .chart-box-body {
            margin-top: 100px;
            height: 380px;
          }
        }
        .sheet-box {
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
      //创建假数据
      searchList: ['111','1111', '222', '333', '123'],
      //定义空数组
      aaa: [],
      
      ifVisibile: false,
      tableData: [
        {
          date: "link1",
          name: "1",
        },
        {
          date: "link2",
          name: "2",
        },
        {
          date: "link3",
          name: "3",
        },
        {
          date: "link4",
          name: "4",
        },
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      value3: "",
      input4: "",
    };
  },
  //生命周期挂载
  mounted() {
    this.initEcharts();
  },
  methods: {
    formatter(row, column) {
      return row.address;
    },
    initEcharts() {
      const echartsThreeBox = this.$refs.chart_main3;
      const myChat = this.$echarts.init(echartsThreeBox);
      myChat.setOption({
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "60%",
            data: [10, 52, 200, 334, 390, 330, 220],
          },
        ],
      });
    },
  },

  //watch监控一个值的变换，并调用因为变化需要执行的方法
  watch: {
    input4(newVal,oldVal) {
      console.log("newVal",newVal);
      console.log("oldVal",oldVal);
      this.aaa = []
      //遍历循环
      this.searchList.forEach(el => {
        // indexOf（）方法 如果要检索的字符串值没有出现，则返回方法-1
        if(el.indexOf(newVal) != -1){
            this.aaa.push(el)
        }
      });
    },
  },
};
</script>