<template>
  <v-menu
    :disabled="disabled"
    style="padding: 0px"
    close-delay="300"
    open-delay="300"
    :close-on-content-click="false"
    open-on-hover
    rounded="0"
    offset-x
    :left="left"
    :dark="dark"
  >
    <template #activator="{on}">
      <v-list-item class="v-list-item--link pr-1" v-on="on">
        <v-list-item-title>{{ title }}</v-list-item-title>
        <v-list-item-icon>
          <v-icon small>{{ icon }}</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </template>
    <v-list tile dense style="padding-top: 0px; padding-bottom: 0px">
      <slot></slot>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ContextMenuNode',
  components: {},
  props: {
    disabled: {type: Boolean, default: false},
    title: {type: String, default: 'Button'},
    icon: {type: String, default: 'mdi-menu-right'},
    left: {type: Boolean, default: false},
    dark: {type: Boolean, default: false},
  },
  data: () => ({}),
  computed: {},
  methods: {},
});
</script>
<style scoped></style>
