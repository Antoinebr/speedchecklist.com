<template>
  <div class="recos">

    <div class="container u-pts u-pbl u-xs-ptn">

      <div class="row u-mbs hidden-xs">

          <div class="col-sm-12">

            <h2 class="u-mbn u-pbn u-txtCenter"> What to check and how to fix the issues</h2>
            <p class="u-txtCenter"> Let’s fix issues with the “stack overflow” way to do it </p>

          </div>

      </div>



      <div class="row u-mbm hidden-xs">

          <div class="col-sm-7 filters-bar">
            <button class="button button--small button--circular button--ghost" @click="filter('all')" :class="{ 'active' : filters.includes('all') }">All</button>
            <button class="button button--small button--circular button--ghost" @click="filter('javascript')" :class="{ 'active' : filters.includes('javascript') }">JavaScript</button>
            <button class="button button--small button--circular button--ghost" @click="filter('images')" :class="{ 'active' : filters.includes('images') }">Images</button>
            <button class="button button--small button--circular button--ghost" @click="filter('backend')" :class="{ 'active' : filters.includes('backend') }">Backend</button>
            <button class="button button--small button--circular button--ghost" @click="filter('server-optimization')" :class="{ 'active' : filters.includes('server-optimization') }">Server</button>
            <button class="button button--small button--circular button--ghost" @click="filter('fonts')" :class="{ 'active' : filters.includes('fonts') }">Font</button>
          </div>


      </div> 



      <header class="row table-header hidden-xs">

        <div class="col-sm-1 u-txtCenter" >Priority</div>

        <div class="col-sm-1 u-txtCenter">Type</div>

        <div class="col-sm-1 u-txtCenter"> Dificulty </div>

        <div class="col-sm-3 align" @click="sortList('title')">Title</div>

      </header>

      <reco v-for="(recomendation,index) in tips" :reco="recomendation,index" :key="recomendation.id" />


    
    </div> <!-- container -->

  </div>
</template>

<script>
import reco from './reco.vue';
import {getPosts,getCategories} from '../../api/api.js';
import orderBy from 'lodash/orderBy'; 

export default {
    name: 'recomendations',
    components:{
      'reco': reco
    },
     data(){
        return{
            recomendations : null,
            categories: null,
            filters:[],
            order :{
              title: "asc",
              dificulty:'asc',
              priority:"asc"
            }
        }
    },

    methods:{

      filter(val){
        
        VueScrollTo.scrollTo( '.recos', 800,  {offset: 0});

        this.filters = [];
        this.filters.push(val);

        window.location.hash = `/filters/${val}`;

      },
      sortList(by){
      
        this.order[by] = (this.order[by] === "asc") ? "dsc" : "asc";

        if( by === "title") this.recomendations = orderBy(this.recomendations, ['title.rendered'],[this.order[by]] );

        // if( by === "dificulty") this.recomendations = sortBy(this.recomendations, [ o => o.acf.complexity]);

        // if( by === "priority") this.recomendations = sortBy(this.recomendations, [ o => o.acf.complexity]);

      },

    },

    computed:{


        tips(){
            
            if(this.filters.includes("all") || this.filters.length === 0 ) return this.recomendations;
            
            return this.recomendations.filter( r => this.filters.includes( r._embedded["wp:term"][0][0].slug ) );
        }

    },
    created(){


      getPosts().then( r =>{

        this.recomendations = r;
        if (this.$route.params.filter) this.filter(this.$route.params.filter);
        
      });


      


    }

   
}
</script>



<style scoped>

h2{
    font-size: 27px;
    font-weight: 800;
}

p{color:#8e979c; font-weight: 800;}

.table-header{
  color:#8e979c; font-weight: 800;
  font-size: 13px;
  margin-bottom: 8px;
}

.recos{
  background-color: #f0fefe;
  overflow-x: hidden;
  min-height: 100vh;
}

.filters-bar{
  display: block;
  margin: auto;
  float: none;
}

.filters-bar button{
    padding-right: 2em!important;
    padding-left: 2em!important;
}
.filters-bar .active{
  background-color: #fffffff5;
}
</style>

