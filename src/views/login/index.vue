<template>
  <div class="login-container">
    <el-form class="login-form" ref="form" :model="user" >
      <div class="login_head"></div>
      <el-form-item >
        <el-input v-model="user.mobile"
        placeholder="请输入手机号"
        ></el-input>
      </el-form-item>
      <el-form-item >
        <el-input v-model="user.code"
        placeholder="请输入验证码"
        ></el-input>
      </el-form-item>
        <el-form-item style="">
        <el-checkbox v-model="checked">我已阅读并同意协议和隐藏条款</el-checkbox>
      </el-form-item>
        <el-form-item>
    <el-button class="login-btn"
    type="primary"
    @click="onLogin"
    :loading="loginLoading"
    >登录</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
import request from '@/utils/request.js'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      },
      checked: false,
      loginLoading: false,
      imgUrl: './company_logo.png'
    }
  },
  methods: {
    onLogin () {
      const user = this.user
      this.loginLoading = true
      request({
        method: 'POST',
        url: '/app/v1_0/authorizations',
        data: user
      }).then(res => {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        })
        this.loginLoading = false
        console.log(res)
      }).catch(err => {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        })
        console.log('失败' + user, err)
      })
    }
  }
}
</script>

<style scoped lang="less">
.login-container {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(./download.jpg) no-repeat;
  background-size: cover;
  .login-form {
    background-color:#fff;
    min-width: 300px;
    padding: 20px;
    padding-bottom: 10px;
  }
  .login-btn {
    width: 100%;
  }
  .login_head{
    height: 57px;
    width: 175px;
    background: url(./company_logo.png) no-repeat;
    padding-bottom: 30px;
    margin-left: auto;
  }
}
</style>
