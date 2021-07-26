<template>
  <div class="home">
    <!-- 主体部分     开始 -->
    <div class="motif">
      <div class="motif-right">
        <div class="chart-box">
          <!-- 数据图表模块头部   开始 -->
          <div class="chart-box-head">
            <h2>{{$t('m.USERS')}}</h2>
            <div class="chart-box-head-right">
              <el-date-picker
                v-model="value3"
                type="datetime"
                :placeholder="$t('m.time')">
              </el-date-picker>
              <span></span>
            </div>
          </div>
          <!-- 数据图表模块身体   开始 -->
          <div class="chart-box-body">
            
          </div>
          <!-- 数据图表模块脚部    开始 -->
          <div class="chart-box-footer" ref="chart_main2"></div>
        </div>
        <div class="sheet-box">
          <el-table
            :data="tableData"
            style="width: 100%"
            :default-sort = "{prop: 'date', order: 'descending'}"
            >
            <el-table-column
              prop="date"
              :label="$t('m.data')"
              sortable>
            </el-table-column>
            <el-table-column
              prop="totalUsers"
              :label="$t('m.totalusers')"
              sortable>
            </el-table-column>
            <el-table-column
              prop="newUsers"
              :label="$t('m.newusers')"
              sortable>
            </el-table-column>
            <el-table-column
              prop="returningUsers"
              :label="$t('m.returning')"
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
    width: 100%;
    .motif{
      height: 100%;
      .motif-right{
        height: 100%;
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
          .chart-box-footer{
            height: 400px;
            margin-top: 100px;
          }
        }
        .sheet-box{
          margin-top: 20px;
          margin-left: 20px;
          margin-right: 5px;
          border: 1px solid #d2d2d2;
          border-bottom: none;
          display: flex;
        }
      }  
    }
  }
</style>

<script>
  export default {
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
    //生命周期  挂载后
    mounted(){
      this.initEcharts()
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      initEcharts(){
        const myChart = this.$echarts.init(this.$refs.chart_main2);
        myChart.setOption({
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        title: {
            text: '渐变堆叠面积图'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Line 1',
                type: 'line',
                stack: '总量',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(128, 255, 165)'
                    }, {
                        offset: 1,
                        color: 'rgba(1, 191, 236)'
                    }])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [140, 232, 101, 264, 90, 340, 250]
            },
            {
                name: 'Line 2',
                type: 'line',
                stack: '总量',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 221, 255)'
                    }, {
                        offset: 1,
                        color: 'rgba(77, 119, 255)'
                    }])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [120, 282, 111, 234, 220, 340, 310]
            },
            {
                name: 'Line 3',
                type: 'line',
                stack: '总量',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(55, 162, 255)'
                    }, {
                        offset: 1,
                        color: 'rgba(116, 21, 219)'
                    }])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [320, 132, 201, 334, 190, 130, 220]
            },
            {
                name: 'Line 4',
                type: 'line',
                stack: '总量',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(255, 0, 135)'
                    }, {
                        offset: 1,
                        color: 'rgba(135, 0, 157)'
                    }])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [220, 402, 231, 134, 190, 230, 120]
            },
            {
                name: 'Line 5',
                type: 'line',
                stack: '总量',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                label: {
                    show: true,
                    position: 'top'
                },
                areaStyle: {
                    opacity: 0.8,
                    color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(255, 191, 0)'
                    }, {
                        offset: 1,
                        color: 'rgba(224, 62, 76)'
                    }])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [220, 302, 181, 234, 210, 290, 150]
              }
            ]
        })
      }
    },
  };
</script>