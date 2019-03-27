<template>
  <div class="error-page">
    <div class="error-code">4<span>0</span>4</div>
    <div class="error-desc">Opss! The page doesn't exist!</div>
    <div class="error-handle">
      <router-link to="/">
        <el-button type="primary" size="large">返回首页</el-button>
      </router-link>
      <el-button class="error-btn" type="primary" size="large" @click="goBack">返回上一页</el-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>
<style>
.error-page {
  width: 100%;
  height: 100%;
  text-align: center;
  margin-top: 15px;
  box-sizing: border-box;
  background: #f3f3f3;
}
.error-code {
  line-height: 1;
  font-size: 250px;
  font-weight: bolder;
  color: #2d8cf0;
}
.error-code span {
  color: #00a854;
}
.error-desc {
  font-size: 30px;
  color: #777777;
}
.error-handle {
  margin-top: 30px;
  margin-bottom: 200px;
}
.error-btn {
  margin-left: 100px;
}
</style>
