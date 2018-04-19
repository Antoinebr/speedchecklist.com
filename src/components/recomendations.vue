<template>
  <div class="recos">

    <div class="container u-pts u-pbl">

      <div class="row u-mbm">

          <div class="col-sm-12">

            <h2 class="u-mbn u-pbn u-txtCenter"> What to check and how to fix the issue</h2>
            <p class="u-txtCenter"> Let’s fix issues with the “stack overflow” way to do it </p>

          </div>

      </div>


      <header class="row table-header">

            <div class="col-sm-1"></div>

            <div class="col-sm-1 u-txtCenter">Type</div>

            <div class="col-sm-1 u-txtCenter"> Dificulty </div>

            <div class="col-sm-3 align">Title</div>
        </header>
      
      <reco/>

      <reco/>

      <reco/>

      <reco/>

      <reco/>

      <reco/>

      <reco/>

      <reco/>

      <reco/>

      <reco/>

      <reco/>

      <reco/>

  

    </div> <!-- container -->

  </div>
</template>

<script>
import reco from './reco.vue';
export default {
    name: 'recomendations',
    components:{
      'reco': reco
    },
     data(){
        return{
            myData : ""
        }
    },
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
}
</style>

