<style lang="scss">
.breed-details{
    max-height: 400px;
    overflow: auto;

    &__item{
        margin-bottom: 15px;

        h4{
            margin: 0 0 15px 0;
        }
    }
}
</style>

<template>
   <section class="breed-details">
       <section class="breed-details__item">
           <h4>Description</h4>
           <p>{{breed.description}}</p>
       </section>

       <section class="breed-details__item">
           <h4 v-if="breed.adaptability">Adaptability: {{breed.adaptability}} / 5</h4>
           <h4 v-if="breed.affection_level">Affection level: {{breed.affection_level}} / 5</h4>
           <h4 v-if="breed.child_friendly">Child friendly: {{breed.child_friendly}} / 5</h4>
           <h4 v-if="breed.dog_friendly">Dog friendly: {{breed.dog_friendly}} / 5</h4>
           <h4 v-if="breed.energy_level">Energy level: {{breed.energy_level}} / 5</h4>
           <h4 v-if="breed.grooming">Grooming: {{breed.grooming}} / 5</h4>
           <h4>Is Hypoallergenic: {{breed.hypoallergenic ? 'Yes' : 'No'}}</h4>
           <h4>Is Hairless: {{breed.hairless ? 'Yes' : 'No'}}</h4>
           <h4>Is Indoor: {{breed.indoor ? 'Yes' : 'No'}}</h4>
       </section>

   </section>
</template>

<script>
    export default {
        components: {

        },
        props:['breed'],
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
