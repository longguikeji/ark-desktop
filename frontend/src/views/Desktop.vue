<template>
  <div class="desktop">
    <div class="menubar">
      <menu-item
        v-for="(item, index) in menu"
        :key="index"
        :state="item"
      ></menu-item>
    </div>
    <div class="app-container">
      <grid-layout
        v-if="!url || url == ''"
        :layout.sync="apps"
        :col-num="12"
        :row-height="116"
        :is-draggable="true"
        :is-resizable="false"
        :is-mirrored="false"
        :vertical-compact="true"
        :margin="[10, 10]"
        :use-css-transforms="true"
      >
        <grid-item
          v-for="item in apps"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
          :key="item.i"
        >
          <app-icon :state="item.app"/>
        </grid-item>
      </grid-layout>
    </div>
    <!-- <div class="actionbar"></div> -->
  </div>
</template>


<script lang='ts'>
import Vue from "vue";
import { runWorkflowByClass } from "arkfbp/lib/flow";
import helloworld from "../flows/helloworld";
import MenuItem from "@/components/MenuItem.vue";
import VueGridLayout from "vue-grid-layout";
import AppIcon from '../components/AppIcon.vue';

export default Vue.extend({
  name: "desktop",
  components: {
    MenuItem,
    AppIcon,
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
  },
  data() {
    return {
      url: '',
      menu: [
        {
          icon:
            "https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/topnav/yinyue@2x-c18adacacb.png",
        },
        {
          label: "添加应用",
        },
        {
          label: "菜单2",
        },
      ],
      apps:[
        {
          x:1,y:1,w:1,h:1,i:0,
          app:{
            icon: 'https://www.baidu.com/favicon.ico',
            label: '百度',
            url: 'https://www.baidu.com',
          }
        },
        {
          x:2,y:1,w:1,h:1,i:1,
          app:{
            icon: 'https://cn.vuejs.org/images/logo.png',
            label: 'Vue.js官网',
            url: 'https://cn.vuejs.org/',
          }
        },
        {
          x:3,y:1,w:1,h:1,i:2,
          app:{
            icon: 'https://www.baidu.com/favicon.ico',
            label: '百度',
            url: 'https://www.baidu.com',
          }
        },
        {
          x:3,y:1,w:1,h:1,i:2,
          app:{
            icon: 'https://www.baidu.com/favicon.ico',
            label: '百度',
            url: 'https://www.baidu.com',
          }
        },
        {
          x:3,y:1,w:1,h:1,i:2,
          app:{
            icon: 'https://www.baidu.com/favicon.ico',
            label: '百度',
            url: 'https://www.baidu.com',
          }
        },
        {
          x:3,y:1,w:1,h:1,i:2,
          app:{
            icon: 'https://www.baidu.com/favicon.ico',
            label: '百度',
            url: 'https://www.baidu.com',
          }
        },
        {
          x:3,y:1,w:1,h:1,i:2,
          app:{
            icon: 'https://www.baidu.com/favicon.ico',
            label: '百度',
            url: 'https://www.baidu.com',
          }
        },
        {
          x:3,y:1,w:1,h:1,i:2,
          app:{
            icon: 'https://www.baidu.com/favicon.ico',
            label: '百度',
            url: 'https://www.baidu.com',
          }
        },
        {
          x:3,y:1,w:1,h:1,i:2,
          app:{
            icon: 'https://www.baidu.com/favicon.ico',
            label: '百度',
            url: 'https://www.baidu.com',
          }
        },
        {
          x:3,y:1,w:1,h:1,i:2,
          app:{
            icon: 'https://www.baidu.com/favicon.ico',
            label: '百度',
            url: 'https://www.baidu.com',
          }
        },
        {
          x:3,y:1,w:1,h:1,i:2,
          app:{
            icon: 'https://www.baidu.com/favicon.ico',
            label: '百度',
            url: 'https://www.baidu.com',
          }
        },
        {
          x:3,y:1,w:1,h:1,i:2,
          app:{
            icon: 'https://www.baidu.com/favicon.ico',
            label: '百度',
            url: 'https://www.baidu.com',
          }
        },
        {
          x:3,y:1,w:1,h:1,i:2,
          app:{
            icon: 'https://www.baidu.com/favicon.ico',
            label: '百度',
            url: 'https://www.baidu.com',
          }
        },
        {
          x:3,y:1,w:1,h:1,i:2,
          app:{
            icon: 'https://www.baidu.com/favicon.ico',
            label: '百度',
            url: 'https://www.baidu.com',
          }
        },
        {
          x:3,y:1,w:1,h:1,i:2,
          app:{
            icon: 'https://www.baidu.com/favicon.ico',
            label: '百度',
            url: 'https://www.baidu.com',
          }
        }
      ]
    };
  },
  methods: {
    run: function () {
      console.info("to run workflow");
      runWorkflowByClass(helloworld).then(() => {
        console.info("main flow finished");
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.desktop {
  width: 100%;
  height: 100vh;
  .menubar {
    height: 22px;
    width: 100%;
    background: rgb(200, 230, 245);
    border-bottom: 1px solid gray;
  }
  .app-container {
    height: calc(100vh - 84px);
    overflow-y: auto;
    width: 100%;
    .window {
      border: none;
      position: absolute;
      height: calc(100vh - 84px);
      width: 100%;
    }
  }
  
  .actionbar {
    height: 60px;
    width: 100%;
    background: rgb(70, 94, 114);
    border-top: 1px solid gray;
  }
}
</style>