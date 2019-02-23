import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/common/Home";
import Form from "@/components/page/BaseForm";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      children: [
        {
          path: "/form",
          name: "Form",
          component: Form
        }
      ]
    }
  ]
});
