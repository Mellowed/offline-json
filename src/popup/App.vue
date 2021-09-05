<template>
  <v-app>
    <div style="height: 100%; overflow-y: hidden">
      <v-toolbar class="basic-toolbar" color="sideBarNavigator" dense height="32px" flat>
        <v-toolbar-items>
          <v-btn @click="openFullScreen" icon color="white">
            <v-icon>mdi-menu-open</v-icon>
          </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items> </v-toolbar-items>
      </v-toolbar>
      <v-divider color="black" />
      <div style="width: 100%; height: calc(100vh - 32px - 1px); background-color: var(--v-editorBackground-base)">
        <Home style="height: 100%; width: 100%; background-color: transparent" />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

// Components
import Home from '@/views/Home.vue';

export default Vue.extend({
  name: 'App',
  components: {Home},
  data: () => ({}),
  computed: {},
  watch: {},
  methods: {
    openFullScreen(): void {
      chrome.tabs.create({url: 'popup.html'});
    },
  },
});
</script>

<style>
html {
  width: 100%;
  min-width: 9 00px;
  height: 100%;
  min-height: 600px;
  overflow-y: hidden !important;
}

.basic-toolbar .v-toolbar__content {
  padding: 0px !important;
}

/* Custom scrollbar */

/* width */
::-webkit-scrollbar {
  height: 8px;
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
