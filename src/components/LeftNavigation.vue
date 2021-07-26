<template>
  <div class="leftnavigation">
    <div class="motif-left">
      <!-- 第一块 -->
      <div class="black-box">
        <p class="font-special">{{$t('m.menuitem')}}</p>
        <router-link to="/">
          <div>
            <span class="iconfont icon-calendar"></span>
            <p>{{ $t('m.home')}}</p>
            <span class="span-specil">></span>
          </div>
        </router-link>
        <router-link to="analytics">
          <div>
            <span class="iconfont icon-communicate"></span>
            <p>{{ $t('m.analytics')}}</p>
            <span class="span-specil">></span>
          </div>
        </router-link>
        <router-link to="events">
          <div>
            <span class="iconfont icon-business"></span>
            <p>{{ $t('m.events')}}</p>
            <span class="span-specil">></span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .leftnavigation{
    display: flex;
    .motif-left {
      width: 250px;
      background: #0b131a;
      color: white;
      .black-box {
        a {
          display: block;
          color: white;
        }
        a:hover {
          background: yellowgreen;
        }
        .font-special {
          display: block;
          // background: brown;
          margin-top: 35px;
          font-size: 16px;
          margin-bottom: 15px;
          margin-left: 10px;
        }
        div {
          height: 35px;
          // background: cornflowerblue;
          display: flex;
          align-items: center;
          justify-content: space-around;
          span {
            width: 100px;
            font-size: 20px;
            line-height: 26px;
            text-align: center;
          }
          p {
            font-size: 13px;
            width: calc(100% - 150px);
          }
          .span-specil {
            width: 50px;
            font-size: 14px;
            text-align: center;
          }
        }
      }
    }
  }
</style>