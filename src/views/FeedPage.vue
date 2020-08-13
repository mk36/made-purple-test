<style lang="scss">
  .feed-page{
    h1{
      padding: 0 15px;
    }
  }
</style>

<template>
  <section class="feed-page">
    <h1>Cat Feed</h1>

    <feed></feed>
  </section>
</template>

<script>
  import Feed from '@/components/feed/feed.vue';

  export default {
    components: { Feed },
    props:[''],
    data: function(){
      return{
        test: ''
      }
    },
    mounted: function () {
      this.setUp();
    },
    methods: {
      setUp: function () {

      }
    }
  }
</script>
