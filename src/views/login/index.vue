<template>
  <div class="login-container">
    <el-form class="login-form"
      ref="login-form"
      :model="user"
      :rules="formRules"
    >
      <div class="login_head"></div>
      <el-form-item prop="mobile">
        <el-input v-model="user.mobile"
        placeholder="请输入手机号"
        ></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input v-model="user.code"
        placeholder="请输入验证码"
        ></el-input>
      </el-form-item>
        <el-form-item prop="agree">
        <el-checkbox v-model="user.agree">我已阅读并同意协议和隐藏条款</el-checkbox>
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

import { login } from '@/api/user.js'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '',
        code: '',
        agree: false
      },
      checked: false,
      loginLoading: false,
      imgUrl: './company_logo.png',
      formRules: { // 表单验证规则配置
        mobile: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          { min: 1, max: 11, message: '长度在 1 到 11 个字符', trigger: 'blur' },
          { pattern: /^1[0-9]{10}$/, message: '手机号格式错误', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '验证码不能为空', trigger: 'blur' },
          { min: 1, max: 11, message: '长度在 1 到 11 个字符', trigger: 'blur' }
        ],
        agree: [
          { // 自定义校验规则
            validator: (rule, value, callback) => {
              if (value) {
                callback()
                console.log('haha2')
              } else {
                callback(new Error('请同意用户协议'))
                console.log('haha')
              }
            },
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    onLogin () {
      // 表单验证
      this.$refs['login-form'].validate((valid, err) => {
        if (!valid) {
          return
        }
        this.login()
      })
    },

    login () {
      this.loginLoading = true
      // login方法定义在api user.js
      login(this.user).then(res => {
        this.$message({
          message: '登录成功',
          type: 'success'
        })
        this.loginLoading = false
        console.log(res)
      }).catch(err => {
        this.$message({
          message: '登陆失败',
          type: 'warning'
        })
        console.log('失败' + this.user, err)
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
