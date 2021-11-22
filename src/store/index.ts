import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import { post } from "./posts";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    auth: false,
  },
  modules: {
    post,
  },
};
export default new Vuex.Store<RootState>(store);
