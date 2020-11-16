<template>
  <div class="login">
    <div>输入os地址</div>
    <input class="url" v-model="url" @keypress="inputKeypressHandler"/>
    <button @click="enterHandler">进入OS</button> 
  </div>
</template>

<script lang="ts">
/*
1. 选择一个后台地址，点击确定或者回车
2. 通过oauth完成登录
3. 获取相关API，展示桌面
*/
export default {
  name: 'login',
  components: {
  },
  data(){
    return {
      url:"http://arkid.longguikeji.com/",
      iframe_src:""
    }
  },
  methods:{
    inputKeypressHandler(e:KeyboardEvent){
      // console.log(e)
      if(e.code == "Enter"){
        this.enterHandler()
      }
    },
    enterHandler(){

    }
  }
}
</script>

<style lang="scss" scoped>

.login{
  width: 300px;
  margin: 0 auto;
  .url{
    width: 100%;
  }
}

</style>