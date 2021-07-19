
<template>
  <div >
   <input type="button" value="clickme" v-on:click="greet()"/>
    <div v-show="hide">点击按钮我就消失</div>
  </div>
</template>
 
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      hide : true
    }
  },
  methods:{
    greet: function () {
     conso.log
    }
  }
}
</script>