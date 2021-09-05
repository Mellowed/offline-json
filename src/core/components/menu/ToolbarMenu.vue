<template>
  <v-menu
    rounded="0"
    :close-on-content-click="closeOnContentClick"
    :close-on-click="closeOnClick"
    offset-y
    nudge-bottom="1"
    nudge-left="1"
    min-width="200"
  >
    <template v-slot:activator="{on, attrs}">
      <v-btn v-on="on" v-bind="attrs" icon color="white">
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </template>
    <v-list :dark="dark" style="border: 1px solid #ffffff !important; padding: 0px" tile width="200px" dense>
      <v-list-item-group>
        <slot></slot>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ToolbarMenu',
  components: {},
  props: {
    icon: {type: String, default: 'mdi-dots-vertical'},
    closeOnClick: {type: Boolean, default: true},
    closeOnContentClick: {type: Boolean, default: true},
    iconStyle: {type: String, default: ''},
    dark: {type: Boolean, default: true},
  },
  data: () => ({}),
  computed: {},
  methods: {},
});
</script>
<style scoped></style>
