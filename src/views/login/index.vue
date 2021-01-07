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
        <el-form-item >
        <el-checkbox v-model="checked">我已阅读并同意协议和隐藏条款</el-checkbox>
      </el-form-item>
        <el-form-item>
    <el-button class="login-btn" type="primary" @click="onSubmit">登录</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      },
      checked: false,
      imgUrl: './company_logo.png'
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
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
    padding: 50px;
    min-width: 300px;
  }
  .login-btn {
    width: 100%;
  }
  .login_head{
    height: 57px;
    width: 300px;
    background: url(./company_logo.png) no-repeat;
    padding-bottom: 30px;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
}
</style>
