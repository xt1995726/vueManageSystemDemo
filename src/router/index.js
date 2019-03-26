import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/common/Home";
import BaseForm from "@/components/page/BaseForm";
import Tabs from "@/components/page/Tabs";
import BaseTable from "@/components/page/BaseTable";
import Dashboard from "@/components/page/Dashboard";
import DragList from "@/components/page/DragList";
import Upload from "@/components/page/Upload";
import Login from "@/components/page/Login";
import Icon from "@/components/page/Icon";

Vue.use(Router);

export default new Router({
  base: "/dist/",
  routes: [
    {
      path: "/",
      redirect: "/dashboard"
    },
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: { title: "自述文件" },
      children: [
        {
          path: "/dashboard",
          name: "Dashboard",
          component: Dashboard,
          meta: { title: "系统首页" }
        },
        {
          path: "/form",
          name: "BaseForm",
          component: BaseForm,
          meta: { title: "基本表单" }
        },
        {
          path: "/tabs",
          name: "Tabs",
          component: Tabs,
          meta: { title: "tab选项卡" }
        },
        {
          path: "/table",
          name: "BaseTable",
          component: BaseTable,
          meta: { title: "基础表格" }
        },
        {
          path: "/drag",
          name: "DragList",
          component: DragList,
          meta: { title: "拖拽列表" }
        },
        {
          path: "/upload",
          name: "Upload",
          component: Upload,
          meta: { title: "文件上传" }
        },
        {
          path: "/icon",
          name: "Icon",
          component: Icon,
          meta: { title: "自定义图标" }
        }
      ]
    },
    {
      path: "/login",
      component: Login
    }
  ]
});
