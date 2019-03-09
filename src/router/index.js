import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/common/Home";
import BaseForm from "@/components/page/BaseForm";
import Tabs from "@/components/page/Tabs";
import BaseTable from "@/components/page/BaseTable";

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
          name: "BaseForm",
          component: BaseForm
        },
        {
          path: "/tabs",
          name: "Tabs",
          component: Tabs
        },
        {
          path: "/table",
          name: "BaseTable",
          component: BaseTable
        }
      ]
    }
  ]
});
