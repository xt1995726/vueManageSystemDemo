<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">后台管理系统</div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="ms-content">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="username">
            <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')">
            <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </div>
        <p class="login-tips">Tips : 用户名和密码随便填。</p>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        username: 'xietian',
        password: '123123'
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          localStorage.setItem('ms_username', this.ruleForm.username);
          this.$router.push('/');
        } else {
          console.log('error submit!');
          return false;
        }
      });
    }
  }
}
</script>
<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/img/login-bg.jpg");
  background-size: 100%;
}
.ms-login {
  position: absolute;
  width: 350px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -70%);
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  overflow: hidden;
}
.ms-title {
  width: 100%;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  border-bottom: 1px solid #ddd;
  color: #000;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  line-height: 30px;
  font-size: 12px;
  color: #666;
}
</style>
