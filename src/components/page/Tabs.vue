<template>
  <div class="">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-lx-copy"></i> tab选项卡</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="container">
        <el-tabs v-model="message">
          <el-tab-pane :label="`未读消息(${unread.length})`" name="first">

          </el-tab-pane>
          <el-tab-pane :label="`已读消息(${read.length})`" name="second">

          </el-tab-pane>
          <el-tab-pane :label="`回收站(${recycle.length})`" name="third">

          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tabs',
  data() {
    return {
      message: 'first',
      showHeader: false,
      unread: [{
        date: '2018-04-19 20:00:00',
        title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
      }, {
        date: '2018-04-19 21:00:00',
        title: '今晚12点整发大红包，先到先得',
      }],
      read: [{
        date: '2018-04-19 20:00:00',
        title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
      }],
      recycle: [{
        date: '2018-04-19 20:00:00',
        title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
      }]
    }
  },
  methods: {

  }
}
</script>
<style>
</style>
