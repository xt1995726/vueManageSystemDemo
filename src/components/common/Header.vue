<template>
  <div class="header">
    <!-- 折叠按钮 -->
    <div class="collapse-btn">
      <i class="el-icon-menu"></i>
    </div>
    <div class="logo">后台管理系统</div>
    <div class="header-right">
      <div class="header-user-con">
        <!-- 全屏显示 -->
        <div class="btn-fullscrenn">
          <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
            <i class="el-icon-rank"></i>
          </el-tooltip>
        </div>
        <!-- 消息中心 -->
        <div class="btn-bell">
          <el-tooltip effect="dark" :content="message?`有${message}条未读消息`:`消息中心`" palcement="bottom">
            <i class="el-icon-bell"></i>
          </el-tooltip>
          <span class="btn-bell-badge" v-if="message"></span>
        </div>
        <!-- 用户头像 -->

        <!-- 用户名下拉菜单 -->

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      collapse: false,
      fullscreen: false,
      name: 'xietian',
      message: 2

    }
  }
}
</script>
<style>
</style>

