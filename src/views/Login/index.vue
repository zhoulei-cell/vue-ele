<template>
  <div class="login-wrapper">
    <div class="login">
      <div class="login-logo">
        <img src="//gw.alicdn.com/tfs/TB13RU4trj1gK0jSZFOXXc7GpXa-1000-405.png">
      </div>
      <div class="login-form">
        <SignInput placeholder="手机号" v-model="phone" :value="phone" :isBtn="true" :disabled="disabled" :error="error.phone" :btnTitle="btnTitle" @btnClick="getVerifyCode"/>
        <SignInput placeholder="验证码" v-model="verify" :value="verify" :error="error.verify"/>

        <div class="message-box">
          <span>新用户登录即自动注册，并表示已同意</span>
          <a href="#">《用户服务协议》</a>
          <span>和</span>
          <a href="#">《隐私权政策》</a>
        </div>
        <BaseButton text="登录" @btnClick="login"/>
        <a href="#" class="about">关于我们</a>
      </div>
    </div>
  </div>
</template>

<script>
import { SignInput } from 'components/Demand'
import { BaseButton } from 'components/Base'
import { mapMutations } from 'vuex'
import * as TYPES from 'store/mutation-types'
export default {
  name: 'Login',
  data() {
    return {
      phone: '',
      verify: '',
      disabled: true,
      btnTitle: '获取验证码',
      error: {
        phone: '',
        verify: ''
      }
    }
  },
  methods: {
    ...mapMutations('login', {
      setLoginState: TYPES.SET_IS_LOGIN
    }),
    countDown() {
      this.disabled = true
      let count = 60
      const fn = () => {
        count--
        if (count === 0) {
          this.disabled = false
          this.btnTitle = '重新获取验证码'
          clearInterval(timer)
        } else {
          this.btnTitle = `${count}后重试`
        }
      }
      fn()
      const timer = setInterval(fn, 1000)
    },
    checkPhone(val) {
      return /^1[3456789]\d{9}$/.test(val)
    },
    checkVerify(val) {
      if (val === '') {
        return false
      }
      return true
    },
    checkInfo() {
      let bool = true
      if (this.checkPhone(this.phone)) {
        this.error.phone = ''
      } else {
        bool = false
        this.error.phone = '请输入正确的手机号'
      }
      if (this.checkVerify(this.verify)) {
        this.error.verify = ''
      } else {
        bool = false
        this.error.verify = '验证码不能为空'
      }
      return bool
    },
    getVerifyCode() {
      // 获取验证码倒计时函数
      this.countDown()
      // 发送获取验证码的ajax请求
    },
    login() {
      // 验证手机号和验证码
      if (this.checkInfo()) {
        // 发送ajax请求
        this.setLoginState(true)
        // 登录成功后, 跳转到mine页面
        this.$router.push('/mine')
      }
    }
  },
  watch: {
    phone(val) {
      if (val !== '') {
        if (!this.checkPhone(val)) {
          this.error.phone = '请输入正确的手机号'
          this.disabled = true
          return null
        }
      }
      this.error.phone = ''
      this.disabled = false
    }
  },
  components: {
    SignInput,
    BaseButton
  }
}
</script>

<style lang="scss">
  .login-wrapper{
    padding-top: 40px;
    .login{
      padding:0 20px;
      .login-logo {
        text-align: center;
      }
      .login-logo img{
        height: 56px;
      }

      .login-form{
        padding-top: 16px;
        .message-box{
          color: $color-primary-light-6;
          font-size: 14px;
        }
        .message-box a{
          color: $color-primary;
        }
        .btn{
          margin-top: 30px;
          border: none;
          background-color: $color-success;
          color: $color-white;
        }
        .about{
          display: block;
          width: 100%;
          margin-top: 20px;
          color: $color-primary-light-6;
          font-size: 12px;
          text-align: center;
        }
      }
    }

  }
</style>
