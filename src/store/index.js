import { createStore } from 'vuex';

import furnitureModule from './modules/furniture.js';
import hardwareModule from './modules/hardware.js';
import colorModule from './modules/color.js';
import StageInProcessModule from './modules/stageInProcess.js';

const store = createStore({
  modules: {
    furniture: furnitureModule,
    stageInProcess: StageInProcessModule,
    color: colorModule,
    hardware: hardwareModule,
  },
});

export default store;
