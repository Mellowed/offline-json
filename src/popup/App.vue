<template>
  <v-app>
    <div style="height: 100%; overflow-y: hidden !important">
      <v-toolbar class="basic-toolbar" color="sideBarNavigator" dense height="32px" flat>
        <v-toolbar-items>
          <ToolbarMenu :dark="true" icon="mdi-menu">
            <MenuItem title="Open in new tab" shortcut="Ctrl+Q" @click="openFullScreen" />
            <MenuItem title="Download JSON" shortcut="Ctrl+D" @click="downloadFile = !downloadFile" />
            <MenuItem title="Read from file" icon="mdi-file-code-outline" @click="readFromFile = !readFromFile" />
          </ToolbarMenu>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items> </v-toolbar-items>
      </v-toolbar>
      <v-divider color="black" />
      <div style="width: 100%; height: calc(100vh - 32px - 1px); background-color: var(--v-editorBackground-base)">
        <PopupPage
          :downloadFile="downloadFile"
          :readFromFile="readFromFile"
          style="height: 100%; width: 100%; background-color: transparent"
        />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

// Components
import PopupPage from '@/pages/PopupPage.vue';
import ToolbarMenu from '@/core/components/menu/ToolbarMenu.vue';
import MenuItem from '@/core/components/menu/MenuItem.vue';

export default Vue.extend({
  name: 'App',
  components: {PopupPage, ToolbarMenu, MenuItem},
  data: () => ({
    readFromFile: false,
    downloadFile: false,
  }),
  computed: {},
  watch: {},
  mounted() {
    document.addEventListener('keyup', this.shortCuts, false);
  },
  beforeDestroy() {
    document.removeEventListener('keyup', this.shortCuts, false);
  },
  methods: {
    openFullScreen(): void {
      chrome.tabs.create({url: 'popup.html'});
    },
    shortCuts(d: KeyboardEvent) {
      if (d.ctrlKey && d.key === 'd') {
        this.downloadFile = !this.downloadFile;
      }
      if (d.ctrlKey && d.key === 'q') {
        this.openFullScreen();
      }
    },
  },
});
</script>

<style>
html {
  width: 100%;
  min-width: 800px;
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
