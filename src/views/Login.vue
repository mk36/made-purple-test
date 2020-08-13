<style lang="scss">
  .login-page{
    .login-form{
      @include centerContent();
    }
  }
</style>

<template>
  <section class="login-page">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
  <login-form></login-form>
  </section>
</template>

<script>
import LoginForm from '@/components/forms/login.vue';

export default {
  name: 'Home',
  components: {
    LoginForm
  }
}
</script>
