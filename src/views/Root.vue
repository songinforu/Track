<template>
  <div class="app">
    <TopNavigation />
    <div class="motif-main">
      <LeftNavigation/>
      <router-view />
    </div>
    
  </div>
</template>
<script>
  import TopNavigation from "@/components/TopNavigation"
  import LeftNavigation from "@/components/LeftNavigation"
  export default {
   components:{
    TopNavigation,
    LeftNavigation
  },
}
</script>
<style lang="scss">
  .app{
    height: 100%;
    .motif-main{
    display: flex;
    height: calc(100% - 62px);
    }
  }
</style>
