<template>
    <div>
        <article class="row" v-if="reco && categories">

            <div class="col-sm-1"> <div class="number">{{index+1}}</div> </div>

            <div class="col-sm-1">
                
                <my-icon class="icon" :type="categorieName" />
            </div>

            <div class="col-sm-1"> <span class="tag">{{reco.acf.complexity}}</span> </div>

            <div class="col-sm-3 align title">{{reco.title.rendered}}</div>

            <div class="col-sm-4 align intro">{{shortDesc}}</div>

            <div class="col-sm-2 btn-container u-pls">
                <button  @click="content = !content" class="button button--circular">
                    <span v-if="!content">see more</span>
                    <span v-else>see less</span>
                </button>
            </div>

        </article>

        <div class="row">
            <transition name="fade">  <my-content v-if="content" :reco="reco" /> </transition>
        </div>
     
        <div style="margin-bottom: 15px;"></div>

    </div>
</template>

<script>
import  myIcon from './icon';
import  myContent from './Content';
import find from 'lodash/find';
import truncate from 'lodash/truncate';

export default {
    name: 'reco',
    props : ['reco','categories','index'],
     components: {
        'my-content' : myContent,
        'my-icon' : myIcon,
    },
 
    data(){
        return{
            content : false
        }
    },

    computed: {
        
        categorieName(){

            const categorie = find(this.categories, ['id', this.reco.categories[0]] );

            return categorie.name;
            
        },

        shortDesc(){

            return truncate(this.reco.acf.description,{'length': 90})

        }
    },
}
</script>


<style scoped>

article{
    background-color: #FFF;
    height: 100px;
    padding: 20px;
    line-height: 60px;
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

