<template>
  <v-list-item :disabled="disabled" class="pr-1" @click="clicked">
    <v-list-item-title>{{ title }}</v-list-item-title>
    <v-list-item-action-text style="padding-right: 5px">{{ shortcut }}</v-list-item-action-text>
    <v-list-item-icon v-if="icon !== ''">
      <v-icon small>{{ icon }}</v-icon>
    </v-list-item-icon>
  </v-list-item>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ContextMenuItem',
  components: {},
  props: {
    disabled: {type: Boolean, default: false},
    title: {type: String, default: 'Button'},
    shortcut: {type: String, default: ''},
    icon: {type: String, default: ''},
    highlightIcon: {type: Boolean, default: false},
  },
  data: () => ({}),
  computed: {},
  methods: {
    clicked(): void {
      this.$emit('click');
    },
  },
});
</script>
<style scoped></style>
