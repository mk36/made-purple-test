<style lang="scss">
.feed{
    &__cats{
        @include flex(100%, flex, left, center);
        flex-wrap: wrap;

        &__breed{
            flex-basis: 50%;
            max-height: 200px;

            @include tablet{
                flex-basis: 33.3333%;
            }

            @include desktop{
                flex-basis: 25%;
            }

            img{
                object-fit: cover;
                height: 200px;
            }
        }
    }

    .feed-filter-bar{
        @include paddingBorderBox(15px);
        @include flex(100%, flex, space-between, center);
        @include positioningOffset(fixed, 0, unset, unset, 0);
        box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.2);
        background-color: $white;

        &__breed-filter{

        }

        &__breed-details-btn{
            visibility: hidden;
            height: 30px;
            pointer-events: none;

            &.visible{
                visibility: visible;
                pointer-events: auto;
            }
        }
    }
}
</style>

<template>
    <section class="feed">
        <div class="feed-filter-bar">
            <button @click="showBreedDetails()" :class="{'visible': requestData.breed.length > 0}" class="feed-filter-bar__breed-details-btn std-btn">View breed details</button>

            <select class="feed-filter-bar__breed-filter" name="" id="" v-model="requestData.breed" @change="filterByBreed">
                <option value="">Show all cat breeds</option>
                <option v-for="(breed, index) in breedList" :key="index" :value="breed.id">{{breed.name}}</option>
            </select>
        </div>

        <custom-modal :open="showModal" @close="showCustomModal(false)">
            <template slot="content">
                <breed-details v-if="activeBreed" :breed="activeBreed"></breed-details>
            </template>
        </custom-modal>


        <div class="feed__cats">
            <p v-if="cats.length === 0">No cats found</p>
            <p v-if="errorMsg.length > 0">{{errorMsg}}</p>

            <section class="feed__cats__breed" v-for="(breed,index) in cats" :key="index">
                <img :src="breed.url" alt="">
                <p>{{breed.name}}</p>
            </section>
        </div>

    </section>
</template>

<script>
    import FeedService from './feedService';
    import CustomModal from '../modal/modal';
    import BreedDetails from './breedDetails';

    export default {
        components: {
            CustomModal,
            BreedDetails
        },
        props:[''],
        data: function(){
            return{
                feedService: new FeedService(),
                cats: [],
                breedList: [],
                errorMsg: '',
                requestData: {
                    page: 1,
                    breed: ''
                },
                searchTimeout: false,
                showModal: false,
                activeBreed: false
            }
        },
        mounted: function () {
            this.setUp();
        },
        methods: {
            setUp: function () {
                let vm = this;

                vm.getBreedList();
                vm.getRandomCats(vm.requestData.page);
                vm.setUpInfiniteScroll();
            },
            setErrorMessage(text){
                this.errorMsg = text;
            },
            getBreedList(){
                let vm = this;

                vm.feedService.getBreeds().then(function (result) {
                    vm.breedList = result;
                    vm.setErrorMessage('');
                }).catch(function (error) {
                    console.log('error', error);
                    vm.setErrorMessage('Could not get cat cats');
                });
            },
            filterByBreed(){
                let vm = this;
                vm.cats = []; // reset result
                vm.requestData.page = 1;
                vm.getRandomCats(vm.requestData.page);
            },
            getRandomCats(page){
                let vm = this;
                vm.feedService.getRandomCats(page, vm.requestData.breed).then(function (result) {
                    vm.cats = vm.cats.concat(result);
                    vm.setErrorMessage('');
                    vm.requestData.page += 1;
                }).catch(function (error) {
                    console.log('error', error);
                    vm.setErrorMessage('Could not get cat pictures');
                });
            },
            setUpInfiniteScroll(){
                let vm = this;
                let d = document.documentElement;

                window.onscroll = function() {
                    let offset = d.scrollTop + window.innerHeight;
                    let height = d.offsetHeight;

                    if (offset > (height - 50)) {
                        clearTimeout(vm.searchTimeout); // Clear the timeout if it has already been set.

                        // Make a new timeout set to go off in 500ms
                        vm.searchTimeout = setTimeout(function () {
                            vm.getRandomCats(vm.requestData.page);
                        }, 500);
                    }
                };
            },
            showCustomModal(value){
                this.showModal = value;
            },
            showBreedDetails(){
                let vm = this;

                vm.activeBreed = vm.feedService.getBreedById(vm.breedList, vm.requestData.breed);
                vm.showCustomModal(true);
            }
        }
    }
</script>
