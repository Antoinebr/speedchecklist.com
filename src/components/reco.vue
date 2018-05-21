<template>
    <div class="reco">
        <article class="row" v-if="reco" @click="showMobile()">

            <div class="col-sm-1 col-xs-2 col-xs-pull-1"> <div class="number">{{index+1}}</div> </div>

            <div class="col-sm-1 hidden-xs hidden-sm">            
                <my-icon class="icon" :type="reco._embedded['wp:term'][0][0].name" />
            </div>

            <div class="col-sm-1 col-xs-3 col-xs-push-8"> <span class="tag">{{reco.acf.complexity}}</span> </div>

            <div class="col-sm-3 col-xs-7 col-xs-pull-3 align title">{{reco.title.rendered}}</div>

            <div class="col-sm-4 hidden-xs align intro">{{shortDesc}}</div>

            <div class="col-sm-2 hidden-xs btn-container u-pls">
                <button  @click="show()" class="button button--circular">
                    <span v-if="!content">see more</span>
                    <span v-else>see less</span>
                </button>
            </div>

        </article>

        <div class="row">
            <transition name="fade"> 
                <my-content v-if="content" :reco="reco" v-bind:slug="reco.slug"> 
                    <!-- <div class="close">X</div>  -->
                </my-content>
            </transition>
        </div>

        <div class="spacer"></div>
    </div>
</template>

<script>
import  myIcon from './icon';
import  myContent from './Content';
import find from 'lodash/find';
import truncate from 'lodash/truncate';

export default {
    name: 'reco',
    props : ['reco','index'],
     components: {
        'my-content' : myContent,
        'my-icon' : myIcon,
    },
 
    data(){
        return{
            content : false
        }
    },

    methods:{

        show(){

            this.content = !this.content;
                
            setTimeout( () => VueScrollTo.scrollTo( `[slug='${this.reco.slug}']` , 800, VueScollToOptions) ,300);

            window.location.hash = `/tips/${this.reco.slug}`;
   

        },

        showMobile(){

            if (window.innerWidth <= 765) this.show();
        }

    },
    computed: {
        

        shortDesc(){

            return truncate(this.reco.acf.description,{'length': 90})

        }
    },


    mounted(){
            
        let hash = window.location.hash;
       
        if (this.$route.params.hash === this.reco.slug ) this.show();

    }
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

.reco{
    position: relative;
}

.reco .close{
    position: absolute;
    bottom: 10px;
    right: 20px;
}

.btn-container button{
    min-width: 140px;
}


@media only screen and (min-width: 990px){
        
    .btn-container .button{
        padding-left: 2.75em !important;
        padding-right: 2.75em !important;
    }   
        
}

.spacer{
    margin-top: 15px;
}

.icon{
    width: 40px;
    padding-top:2px;
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

.close{

}


@media only screen and (max-width: 992px){
    	
    article{
        height: 115px;
        border-bottom: #5b626524 1px solid;
        margin-bottom: 0px;
        padding-bottom: 15px;
    }

    .spacer{
           margin-top: 0px;
    }
}




</style>

