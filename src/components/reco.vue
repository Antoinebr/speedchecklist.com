<template>
    <div>

        <article class="row">

            <div class="col-sm-1"> <div class="number">1</div> </div>

            <div class="col-sm-1"><img class="icon icon-js" src="../assets/svg/icon-js.svg"></div>

            <div class="col-sm-1"> <span class="tag">hard </span> </div>

            <div class="col-sm-3 align title">Does the website load acarousel/slider above the fold?</div>

            <div class="col-sm-4 align intro">If the website load a carousel / slider Above the fold (ATF), the content ATF will need to wait for</div>

            <div class="col-sm-2 btn-container u-pls"><a href="#/content" @click="showContent()" class="button button--circular">see more</a></div>

        </article>

        <my-content/>

    </div>
</template>

<script>
import  myContent from './Content';
export default {
    name: 'reco',
     components: {
        'my-content' : myContent
    },
 
    methods:{

       


    }
}
</script>


<style scoped>

article{
    background-color: #FFF;
    height: 100px;
    padding: 20px;
    line-height: 60px;
    margin-bottom: 15px;
}

.align{
    line-height: 21px;
    margin-top: 13px;
}
.title{
    font-weight: bold;
}

.intro{
  color:#8e979c; font-weight: 800;
  font-size: 15px;
}

.btn-container .button{
    padding-left: 2.75em !important;
    padding-right: 2.75em !important;
}

.icon{
    width: 40px;
    padding-top:13px;
}

.tag{
    display: block;
    border: solid 2px #dddede;
    height: 25px;
    line-height: 25px;
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
    color: #5b6265;
    border-radius: 4px;
    margin: auto;
    margin-top: 23px;
}

.number{
    height: 60px;
    width: 60px;
    padding: 10px;
    text-align: center;
    background-color: #eff6f9;

    font-size: 25px;
    font-weight: bold;
    line-height: 40px;
}
</style>

