// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css"; // 默认主题
import "./assets/css/icon.css";

Vue.config.productionTip = false;
Vue.use(ElementUI, {
  size: "small"
});

Vue.prototype.$axios = axios;

router.beforeEach((to, from, next) => {
  const role = localStorage.getItem("ms_username");
  if (!role && to.path !== "/login") {
    next("/login");
  } else {
    next();
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
