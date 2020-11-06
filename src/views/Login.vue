<template>
  <el-card>
    <div slot="header">
      <el-image :src="groupIcon" />
      <span>{{ groupName }}</span>
      <el-button style="float: right; padding: 3px 0" type="text">切换地址</el-button>
    </div>
  </el-card>
</template>

<script>
export default {
  name:'Login',
  data(){
    return {
      groupIcon:"http://www.longguikeji.com/img/icons/favicon-32x32.png",
      groupName:"龙归科技"
    }
  },
  mounted(){
    console.log('asdfsadf')
  }
}
</script>

<style lang="less" scoped>

</style>
