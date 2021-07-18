<template>
    <div id="page">
  	    <h1>登录页</h1>
        <router-link to="/">返回首页</router-link>
        <div class="layui-panel"></div>
        <!-- 使用组件 -->
        <TopNavigation />
    </div>
</template>

<script>
// 引入组件
import TopNavigation from "@/components/TopNavigation"
export default {
    //注册组件
    components:{
        TopNavigation,
    }
}

</script>
