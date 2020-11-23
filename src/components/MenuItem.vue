<template>
  <div class="menuitem">
    <img v-if="state.icon" class="icon" :src="state.icon" />
    <span class="label">{{ state.label }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

export interface MenuItemState {
  icon: string;
  label: string;
}

@Component({
  name: "MenuItem",
  components: {},
})
export default class extends Vue {
  @Prop({ required: true }) state!: MenuItemState;
}
</script>

<style lang="scss" scoped>
.menuitem {
  margin-left: 20px;
  display: inline;
  .icon {
    vertical-align: top;
    width: 22px;
    height: 22px;
  }
  .label {
    display: inline;
    font-size: 15px;
  }
}
</style>
