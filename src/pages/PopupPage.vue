<template>
  <v-container v-if="fullScreen" fluid style="height: 100%">
    <v-row
      @mousemove="verticalSliderMove"
      @mouseleave="verticalSliderUp"
      @mouseup="verticalSliderUp"
      class="pl-6 pt-6"
      style="height: 100%; width: 100%; flex-wrap: nowrap"
    >
      <v-card class="" style="height: 100%" :width="width">
        <v-jsoneditor v-model="json" :options="optionsPanelA" :plus="false" height="100%" />
      </v-card>
      <v-card flat tile class="align-content-center" style="width: 25px; height: 100%; background-color: transparent">
        <v-icon
          draggable="false"
          style="cursor: w-resize; padding-top: 43vh"
          @mousedown="verticalSliderDown"
          @mouseup="verticalSliderUp"
          dark
          >mdi-dots-vertical</v-icon
        >
      </v-card>
      <v-card :style="'max-width:calc(100% - ' + width + 'px)'" class="flex-grow-1 flex-shrink-0">
        <v-jsoneditor v-model="json" :options="optionsPanelB" :plus="false" height="100%" />
      </v-card>
    </v-row>
  </v-container>
  <v-container v-else fluid style="height: 100%">
    <v-row
      @mousemove="verticalSliderMove"
      @mouseleave="verticalSliderUp"
      @mouseup="verticalSliderUp"
      class="pl-6 pt-6"
      style="height: 100%; width: 100%; flex-wrap: nowrap"
    >
      <v-card class="flex-grow-1 flex-shrink-0">
        <v-jsoneditor v-model="json" :options="optionsPanelC" :plus="false" height="100%" />
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import VJsoneditor from 'v-jsoneditor';
import Vue from 'vue';
import 'brace/theme/twilight';
import {downloadJsonFile} from '@/core/utils/fileUtils';
export default Vue.extend({
  name: 'PopupPage',
  components: {VJsoneditor},
  props: {
    readFromFile: {type: Boolean, default: false},
    downloadFile: {type: Boolean, default: false},
  },
  data: () => ({
    chosenFile: undefined! as Blob,
    optionsPanelA: {mode: 'code', theme: 'ace/theme/twilight'},
    optionsPanelB: {modes: ['code', 'tree'], mode: 'tree', theme: 'ace/theme/twilight'},
    optionsPanelC: {modes: ['code', 'tree'], mode: 'code', theme: 'ace/theme/twilight'},
    json: {
      offline: true,
    },
    mouseActive: false,
    startPositionX: 0,
    startWidth: 0,
    width: window.screen.width / 2 - 40,
  }),
  computed: {
    fullScreen() {
      return window.location.search !== '?popup=true';
    },
  },
  watch: {
    readFromFile: {
      handler() {
        let input = document.createElement('input') as any;
        input.type = 'file';
        input.onchange = () => {
          let files = Array.from(input.files);
          this.readFile(files[0]);
        };
        input.click();
      },
    },
    downloadFile: {
      handler() {
        downloadJsonFile('dataset-' + new Date().toISOString() + '.json', this.json);
      },
    },
  },
  methods: {
    readFile(chosenFile: any): void {
      var reader = new FileReader();
      reader.readAsText(chosenFile);
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          var rr = JSON.parse(reader.result);
          this.json = rr;
        }
      };
    },
    verticalSliderMove(event: MouseEvent): void {
      if (this.mouseActive) {
        const newWidth = this.startWidth + event.pageX - this.startPositionX;
        if (newWidth > 350) {
          if (newWidth < window.screen.width - 550) {
            this.width = newWidth;
          } else {
            this.width = window.screen.width - 550;
          }
        } else {
          this.width = 350;
        }
      }
    },
    verticalSliderDown(event: MouseEvent): void {
      this.startWidth = this.width;
      this.mouseActive = true;
      this.startPositionX = event.pageX;
    },
    verticalSliderUp(): void {
      this.mouseActive = false;
    },
  },
});
</script>
<style >
/* dark styling of the editor */
.jsoneditor-statusbar {
  color: #ffffff !important;
  background-color: #232323 !important;
  border-top: 1px solid #666666 !important;
}

.jsoneditor-menu a.jsoneditor-poweredBy {
  color: #ffffff !important;
}

.jsoneditor-navigation-bar {
  color: #ffffff !important;
  background-color: #232323 !important;
  border-bottom: 1px solid #666666 !important;
}

.jsoneditor-search .jsoneditor-frame {
  background-color: transparent !important;
  border: 1px solid #666666 !important;
}

.jsoneditor-search input {
  padding-top: 3px !important;
  border: 0px !important;
  color: #fffdfd !important;
}

div.jsoneditor,
div.jsoneditor-menu {
  border-color: #666666 !important;
}
div.jsoneditor-menu {
  background-color: var(--v-explorerBackground-base) !important;
}
div.jsoneditor-tree,
div.jsoneditor textarea.jsoneditor-text {
  background-color: #1d1f21 !important;
  color: #ffffff !important;
  overflow: auto !important;
}
div.jsoneditor-field,
div.jsoneditor-value {
  color: #ffffff !important;
  word-break: break-word !important;
}
table.jsoneditor-search div.jsoneditor-frame {
  background: #808080 !important;
}

tr.jsoneditor-highlight,
tr.jsoneditor-selected {
  background-color: #808080 !important;
}

div.jsoneditor-field[contenteditable='true']:focus,
div.jsoneditor-field[contenteditable='true']:hover,
div.jsoneditor-value[contenteditable='true']:focus,
div.jsoneditor-value[contenteditable='true']:hover,
div.jsoneditor-field.jsoneditor-highlight,
div.jsoneditor-value.jsoneditor-highlight {
  background-color: #808080 !important;
  border-color: #808080 !important;
}

div.jsoneditor-field.highlight-active,
div.jsoneditor-field.highlight-active:focus,
div.jsoneditor-field.highlight-active:hover,
div.jsoneditor-value.highlight-active,
div.jsoneditor-value.highlight-active:focus,
div.jsoneditor-value.highlight-active:hover {
  background-color: #b1b1b1 !important;
  border-color: #b1b1b1 !important;
}

div.jsoneditor-tree button:focus {
  background-color: #868686 !important;
}

/* coloring of JSON in tree mode */
div.jsoneditor-readonly {
  color: #fff9f9 !important;
}
div.jsoneditor td.jsoneditor-separator {
  color: #acacac !important;
}
div.jsoneditor-value.jsoneditor-string {
  color: #00ff88 !important;
}
div.jsoneditor-value.jsoneditor-object,
div.jsoneditor-value.jsoneditor-array {
  color: #bababa !important;
}
div.jsoneditor-value.jsoneditor-number {
  color: #ff4040 !important;
}
div.jsoneditor-value.jsoneditor-boolean {
  color: #ff8048 !important;
}
div.jsoneditor-value.jsoneditor-null {
  color: #49a7fc !important;
}
div.jsoneditor-value.jsoneditor-invalid {
  color: white !important;
}
</style>
