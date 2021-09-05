<template>
  <v-menu
    v-model="menuState"
    rounded="0"
    :close-on-content-click="closeOnContentClick"
    :close-on-click="closeOnClick"
    :position-x="positionX"
    :position-y="positionY"
    absolute
    nudge-right="4"
    min-width="200"
  >
    <v-list dense style="padding-top: 0px; padding-bottom: 0px">
      <slot></slot>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ContextMenu',
  components: {},
  props: {
    value: {type: Boolean, default: false},
    closeOnClick: {type: Boolean, default: true},
    closeOnContentClick: {type: Boolean, default: true},
    positionX: {type: Number, default: 0},
    positionY: {type: Number, default: 0},
  },
  data: () => ({}),
  computed: {
    menuState: {
      get(): boolean {
        return this.value;
      },
      set(val: boolean): void {
        this.$emit('input', val);
      },
    },
  },
  methods: {},
});
</script>
<style scoped></style>
