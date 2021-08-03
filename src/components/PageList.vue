<template>
  <div class="page" v-show="visibile">
    <div class="chird">
      <div v-for="(item, index) in list" :key="index" @click="pidClick(item)">
        <li>
          <h4>{{ item.Pid }}</h4>
        </li>
      </div>
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
    list: {
      type: Array,
      default: [],
    },
  },
  methods: {
    pidClick(item) {
      //全局获取父组件
      this.$emit("god", item);
      this.$pid = item.Pid;
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
  .chird {
    height: auto;
    li {
      height: 60px;
      list-style: none;
      border-bottom: 1px solid #d9d9d9;
      text-align: center;
      line-height: 70px;
      font-size: 16px;
      cursor: pointer;
    }
    .bg-black {
      background: #ececec;
    }
  }
}
</style>