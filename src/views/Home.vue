<template>
  <v-container fluid style="height: 100%">
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
      <v-card-text style="width: 25px">
        <v-icon
          draggable="false"
          class="vertical-slider"
          @mousedown="verticalSliderDown"
          @mouseup="verticalSliderUp"
          dark
          >mdi-dots-vertical</v-icon
        >
      </v-card-text>
      <v-card class="flex-grow-1 flex-shrink-0">
        <v-jsoneditor v-model="json" :options="optionsPanelB" :plus="false" height="100%" />
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import VJsoneditor from 'v-jsoneditor';
import Vue from 'vue';
import 'brace/theme/twilight';
export default Vue.extend({
  name: 'Home',
  components: {VJsoneditor},
  data: () => ({
    optionsPanelA: {mode: 'code', theme: 'ace/theme/twilight'},
    optionsPanelB: {modes: ['code', 'tree'], mode: 'tree', theme: 'ace/theme/twilight'},
    json: {
      offline: true,
    },
    mouseActive: false,
    startPositionX: 0,
    startWidth: 0,
    width: window.screen.width / 2 - 40,
  }),
  computed: {},
  methods: {
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
.vertical-slider {
  cursor: w-resize;
  height: 100%;
  width: 5px;
}

/* dark styling of the editor */
.jsoneditor-statusbar {
  color: #ffffff;
  background-color: #232323;
  border-top: 1px solid #666666;
}

.jsoneditor-menu a.jsoneditor-poweredBy {
  color: #ffffff;
}

.jsoneditor-navigation-bar {
  color: #ffffff;
  background-color: #232323;
  border-bottom: 1px solid #666666;
}

.jsoneditor-search .jsoneditor-frame {
  background-color: transparent;
  border: 1px solid #666666;
}

.jsoneditor-search input {
  padding-top: 3px !important;
  border: 0px !important;
  color: #fffdfd;
}

div.jsoneditor,
div.jsoneditor-menu {
  border-color: #666666;
}
div.jsoneditor-menu {
  background-color: var(--v-explorerBackground-base);
}
div.jsoneditor-tree,
div.jsoneditor textarea.jsoneditor-text {
  background-color: #1d1f21;
  color: #ffffff;
}
div.jsoneditor-field,
div.jsoneditor-value {
  color: #ffffff;
}
table.jsoneditor-search div.jsoneditor-frame {
  background: #808080;
}

tr.jsoneditor-highlight,
tr.jsoneditor-selected {
  background-color: #808080;
}

div.jsoneditor-field[contenteditable='true']:focus,
div.jsoneditor-field[contenteditable='true']:hover,
div.jsoneditor-value[contenteditable='true']:focus,
div.jsoneditor-value[contenteditable='true']:hover,
div.jsoneditor-field.jsoneditor-highlight,
div.jsoneditor-value.jsoneditor-highlight {
  background-color: #808080;
  border-color: #808080;
}

div.jsoneditor-field.highlight-active,
div.jsoneditor-field.highlight-active:focus,
div.jsoneditor-field.highlight-active:hover,
div.jsoneditor-value.highlight-active,
div.jsoneditor-value.highlight-active:focus,
div.jsoneditor-value.highlight-active:hover {
  background-color: #b1b1b1;
  border-color: #b1b1b1;
}

div.jsoneditor-tree button:focus {
  background-color: #868686;
}

/* coloring of JSON in tree mode */
div.jsoneditor-readonly {
  color: #fff9f9;
}
div.jsoneditor td.jsoneditor-separator {
  color: #acacac;
}
div.jsoneditor-value.jsoneditor-string {
  color: #00ff88;
}
div.jsoneditor-value.jsoneditor-object,
div.jsoneditor-value.jsoneditor-array {
  color: #bababa;
}
div.jsoneditor-value.jsoneditor-number {
  color: #ff4040;
}
div.jsoneditor-value.jsoneditor-boolean {
  color: #ff8048;
}
div.jsoneditor-value.jsoneditor-null {
  color: #49a7fc;
}
div.jsoneditor-value.jsoneditor-invalid {
  color: white;
}
</style>
