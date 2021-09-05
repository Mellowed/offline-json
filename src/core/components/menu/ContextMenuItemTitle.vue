<template>
  <v-list-item class=" pr-1">
    <v-list-item-subtitle>{{ title }}</v-list-item-subtitle>
    <v-list-item-icon>
      <v-icon small>{{ icon }}</v-icon>
    </v-list-item-icon>
  </v-list-item>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ContextMenuTitle',
  components: {},
  props: {
    title: {type: String, default: 'Button'},
    icon: {type: String, default: ''},
  },
  data: () => ({}),
  computed: {},
  methods: {},
});
</script>
<style scoped></style>
