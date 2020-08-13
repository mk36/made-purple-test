<style lang="scss">
.login-form{
    background-color: $form-background;
    max-width: 350px;
    margin: auto;
    @include paddingBorderBox(20px);
    @include flex(100%, flex, unset, unset);
    flex-wrap: wrap;

    &__item{
        flex-basis: 100%;
        margin-bottom: $std-margin-spacing;

        input{
            width: 100%;
            margin-top: 5px;
            @include paddingBorderBox(10px 10px 10px 0);
            text-indent: 5px;
        }
    }

    button{
        @include paddingBorderBox(10px);
        margin-bottom: 0;
    }
}
</style>

<template>
    <form class="login-form">
        <label class="login-form__item" for="email">email <input id="email" placeholder="Email" type="email" required></label>
        <label class="login-form__item" for="password">password <input id="password" placeholder="Password" type="password" required></label>
        <button class="login-form__item std-btn" @click="submitForm">Sign in</button>
    </form>
</template>

<script>
    export default {
        components: {},
        props:[''],
        data: function(){
            return{
                disabled: true
            }
        },
        mounted: function () {
            this.setUp();
        },
        methods: {
            setUp: function () {


            },
            isFormValid(){
                let form = document.querySelector('.login-form');

                return (form && form.checkValidity());
            },
            submitForm(){
                let vm = this;
                if(vm.isFormValid()){
                    vm.$router.push({ name: 'feed', params: {}});
                }
            }
        }
    }
</script>
