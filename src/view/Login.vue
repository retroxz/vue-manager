<template>
 <div class="login-wrapper">
   <div class="model">
     <el-form ref="userForm" :model="user" status-icon :rules="rules">
       <div class="title">无尽光芒</div>
       <el-form-item prop="userName">
         <el-input type="text" prefix-icon="el-icon-user" v-model="user.userName"/>
       </el-form-item>
       <el-form-item prop="userPassword">
         <el-input type="password" prefix-icon="el-icon-view" v-model="user.userPassword"/>
       </el-form-item>
       <el-form-item>
         <el-button type="primary" class="btn-login" @click="login">登录</el-button>
       </el-form-item>
     </el-form>
   </div>
 </div>
</template>

<script>
  export default {
    name: 'login',
    methods: {
      goHome(){
        this.$router.push('/welcome')
      },
      login(){
        this.$refs.userForm.validate(async valid=>{
          if(valid) {
            let res = await this.$api.login(this.user)
            console.log(res)
          }

        })
      }
    },
    data(){
      return{
        user: {
          userName:'',
          userPassword: ''
        },
        rules: {
          userName: [
            { required: true, message: '请输入用户名', trigger:'blur'}
          ],
          userPassword: [
            { required: true, message: '请输入密码', trigger:'blur'}
          ]
        }
      }
    }
  }
</script>

<style lang="scss">
.login-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9fcff;
  width: 100vw;
  height: 100vh;
  .model{
    background-color: #FFF;
    width: 500px;
    padding: 50px;
    border-radius: 4px;
    box-shadow: 0 0 10px 3px #C7C9CB4D;
    .title{
      font-size: 40px;
      line-height: 1.5;
      text-align: center;
      margin-bottom: 30px;
    }
    .btn-login{
      width: 100%;
    }
  }
}
</style>


