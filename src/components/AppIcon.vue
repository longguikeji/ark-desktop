<template>
    <div class="app-icon" @dblclick="clickHandler">
        <img class="icon" :src="state.icon"/>
        <div class="label">{{ state.label }}</div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

export interface AppIconState{
    icon:string
    label:string
    url:string
    urlHandler:Function
}

@Component({
  name: "AppIcon",
  components: {},
})
export default class extends Vue {
    @Prop({ required: true }) state!: AppIconState;
    
    clickHandler(){
        window.open(this.state.url,'_blank')
    }
}
</script>

<style lang="scss" scoped>
.app-icon {
    padding-top: 10px;
    width: 100%;
    height: 116px;
    .icon {
        display: block;
        margin: 0 auto;
        width: 56px;
        height: 56px;
    }
    .label {
        display: block;
        margin: 0 auto;
        text-align: center;
    }
}
</style>