<template>
  <div class="page" v-if="visibile">
      <div class="chird">
          <li><h4>test2</h4></li>
          <li class="bg-black"><h4>test3</h4></li>
          <li><h4>test4</h4></li>
          <li class="bg-black"><h4>test5</h4></li>
          <li><h4>test6</h4></li>
          <li class="bg-black"><h4>test7</h4></li>
          <li><h4>test8</h4></li>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    visibile: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  position: absolute;
  top: 60px;
  left: 0px;
  width: 280px;
  height: 400px;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-top: none;
  border-left: none;
  z-index: 1;
  overflow-y: auto;
  .chird{
      height: auto;
      li{
          height: 60px;
          list-style: none;
          border-bottom: 1px solid #d9d9d9;
          text-align: center;
          line-height: 70px;
          font-size: 16px;
          cursor: pointer;
      }
      .bg-black{
          background: #ececec;
      }
  }
}
</style>