<style lang="scss">
    .custom-modal{
        width: 100%;
        height: 100%;
        @include positioningOffset(fixed, 0, unset, unset, 0);
        background-color: rgba(0,0,0,0.4);
        transform: translateX(-110%);
        transition: transform ease 0.5s;

        &.open{
            transform: translateX(0);
        }

        &__content{
            width: 100%;
            max-width: 600px;
            background-color: $white;
            @include paddingBorderBox(15px);

            @include centerContent();
            &__header{
               @include flex(100%, flex, right, center);
                .close{
                    display: inline-block;
                    font-size: 20pt;
                    cursor: pointer;
                    @include paddingBorderBox(10px);
                }
            }
        }
    }
</style>

<template>
    <div class="custom-modal" :class="{'open': open}" jest="custom-modal">
        <div class="custom-modal__content">
            <div class="custom-modal__content__header">
                <span @click="$emit('close')" class="close">X</span>
                <slot name="header"></slot>
          </div>

            <div class="custom-modal__content__main">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {},
        props: {
            open: Boolean
        },
        data: function(){
            return{
                test: false
            }
        },
        mounted: function () {
            this.setUp();
        },
        methods: {
            setUp: function () {

            },
            /**
             * Emit an event to close the modal
             */
            closeModel(){
                this.$emit('open', false);
            },
            disablePageScrolling(value){
                document.querySelector('body').classList.toggle('noScroll', value);
            }
        }
    }
</script>
