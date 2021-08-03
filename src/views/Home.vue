<template>
  <div class="home">
    <!-- 主体部分     开始 -->
    <div class="motif">
      <!-- 左导航栏    开始-->
      <!-- 左导航栏    结束 -->
      <div class="motif-right">
        <div class="chart-box">
          <!-- 数据图表模块头部   开始 -->
          <div class="chart-box-head">
            <h2>{{$t('m.overview')}}</h2>
            <div class="chart-box-head-right">
              <el-date-picker
                v-model="value3"
                type="datetime"
                :placeholder="$t('m.time')"
              >
              </el-date-picker>
            </div>
          </div>
          <!-- 数据图表模块身体   开始 -->
          <div class="chart-box-body">
            <div class="chart-lump">
              <span class="iconfont  icon-assessment"></span>
              <h1>22</h1>
              <p>{{$t('m.view')}}</p>
              <!-- <div></div> -->
            </div>
            <div class="chart-lump">
              <span class="iconfont icon-certificates"></span>
              <h1>1</h1>
              <p>{{$t('m.click')}}</p>
              <!-- <div></div> -->
            </div>
            <div class="chart-lump">
              <span class="iconfont icon-train"></span>
              <h1>1</h1>
              <p>{{$t('m.users')}}</p>
              <!-- <div></div> -->
            </div>
            <div class="chart-lump">
              <span class="iconfont icon-ic_access_alarm_48px"></span>
              <h1>{{times}}m</h1>
              <p>{{$t('m.load')}}</p>
              <!-- <div></div> -->
            </div>
            <div class="chart-lump last-lump">
              <span class="iconfont icon-expire"></span>
              <h1>1.1m</h1>
              <p>{{$t('m.avg')}}</p>
              <!-- <div></div> -->
            </div>
          </div>
          <!-- 数据图表模块脚部    开始 -->
          <div class="chart-box-footer" ref="chart_main"></div>
        </div>
        <div class="sheet-box">
          <div class="lump first-lump">
            <h5>{{$t('m.platforms')}}</h5>
            <div class="sheet-chart">
              <div class="sheet-chart-across">
                <span>100%</span>
                <p class="sheet-chart-specil">Windows</p>
              </div>
              <div class="sheet-chart-across">
                <span></span>
                <p></p>
              </div>
              <div class="sheet-chart-across">
                <span></span>
                <p></p>
              </div>
            </div>
          </div>
          <div class="lump">
            <h5>{{$t('m.devices')}}</h5>
            <div class="sheet-chart">
              <div class="sheet-chart-across">
                <p></p>
              </div>
              <div class="sheet-chart-across">
                <p>No Data</p>
              </div>
              <div class="sheet-chart-across">
                <p></p>
              </div>
            </div>
          </div>
          <div class="lump">
            <h5>{{$t('m.carriers')}}</h5>
            <div class="sheet-chart">
              <div class="sheet-chart-across">
                <p></p>
              </div>
              <div class="sheet-chart-across">
                <p>No Data</p>
              </div>
              <div class="sheet-chart-across">
                <p></p>
              </div>
            </div>
          </div>
          <div class="lump">
            <h5>{{$t('m.USERS')}}</h5>
            <div class="sheet-chart">
              <div class="sheet-chart-across">
                <span>10%</span>
                <p class="sheet-chart-specil" style="color: aqua">22</p>
              </div>
              <div class="sheet-chart-across" style="color: #ff9129">
                <span style="color: #ff9129">10%</span>
                <p class="sheet-chart-specil">25</p>
              </div>
              <div class="sheet-chart-across" style="color: #0dc1b8">
                <span style="color: #0dc1b8">10%</span>
                <p class="sheet-chart-specil">26</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 主题部分   结束 -->
  </div>
</template>




<script>
export default {
  data() {

    return {
      value: true,
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
      times: ''
    };
  },
  //生命周期 挂载后
  mounted() {
    this.initEcharts()
    this.$api
    .get("/timer/get",{
      params:{
        PUid: "system",
        Pid: "one"
      },
    }).then((res)=>{
      console.log(res)
      }).catch((err)=>{
        console.log(err)       
    })
  },
  methods: {
    //引入echarts
    initEcharts() {
      const echartsBox = this.$refs.chart_main;
      const myChat = this.$echarts.init(echartsBox);
      myChat.setOption({
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [160, 530, 224, 518, 135, 447, 260],
            type: "line",
          },
          {
            data: [240, 430, 324, 418, 235, 347, 360],
            type: "line",
          },
          {
            data: [320, 330, 424, 418, 335, 247, 460],
            type: "line",
          },
          {
            data: [400, 230, 524, 218, 435, 147, 560],
            type: "line",
          },
        ],
      });
    },
  },
};
</script>

<style lang="scss" scoped>
// scoped 防止类名重复 只在当前文件下起作用
.home {
  width: 100%;
  .motif {
    height: 100%;
    .motif-right {
      height: 100%;
      // background: chocolate;
      display: flex;
      flex-direction: column;
      .chart-box {
        margin-top: 20px;
        margin-left: 20px;
        margin-right: 5px;
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
          //为了兼容性一般都写两条
          display: -webkit-flex;
          display: flex;
          .chart-lump {
            height: 200px;
            background: #f9f9f9;
            flex: 1;
            border-right: 1px solid #d2d2d2;
            border-bottom: 1px solid #d2d2d2;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            span {
              font-size: 28px;
            }
            h1 {
              margin-top: 5px;
              font-family: 宋体;
            }
            p {
              margin: 5px;
              font-size: 12px;
            }
            div {
              width: 150px;
              height: 50px;
              background: chartreuse;
            }
          }
          .last-lump {
            border-right: none;
          }
        }
        .chart-box-footer {
          height: 380px;
        }
      }
      .sheet-box {
        margin-top: 20px;
        margin-left: 20px;
        margin-right: 5px;
        height: calc(100% - 692px);
        border: 1px solid #d2d2d2;
        border-bottom: none;
        display: flex;
        .lump {
          flex: 1;
          border-left: 1px solid #d2d2d2;
          // background: chartreuse;
          display: flex;
          flex-direction: column;
          h5 {
            margin: 30px 0px 30px 20px;
            font-size: 17px;
          }
          .sheet-chart {
            width: 90%;
            height: 150px;
            margin: 0 auto;
            // background: blueviolet;
            flex-direction: column;
            display: flex;
            justify-content: space-around;
            .sheet-chart-across {
              height: 25px;
              // background: cornsilk;
              display: flex;
              span {
                color: aqua;
                width: 55px;
              }
              p {
                text-align: center;
                width: 100%;
                background: #ececec;
                border-radius: 3px;
              }
              .sheet-chart-specil {
                text-align: left;
              }
            }
          }
        }
        .first-lump {
          border-left: none;
        }
      }
    }
  }
}
</style>