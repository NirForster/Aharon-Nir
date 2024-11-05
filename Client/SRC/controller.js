// connect model and view
import {} from "./model.js";
import { createSelectEl } from "./view.js";

const controller = {
  init: async () => {
    createSelectEl();
  },
};

export default controller;
