

<template>
   <div>

  <div class="bg-clouds">

    <div class="container u-ptl">

        <div class="row">

          <div class="col-sm-12 u-mtm hero-container">

            <h1 class="u-mbn">Speed checklist</h1>
            <h2 class="u-mbm"> <span>Webperformance</span> made simple</h2>

            <button class="button button--circular" @click="goReco()"> speed-up my site </button>
            <!-- <router-link to="Recos" class="button button--circular" >speed-up my site</router-link> -->

            <img class="jet" src="./assets/svg/jet.svg">
           
          </div> <!-- col- -->

      </div> <!-- row -->

    </div> <!-- container-->

  </div> <!-- clouds -->

    <recomendations></recomendations>

  </div>
</template>


<script>
import recomendations from '@/components/recomendations.vue'
export default { 
  components:{
      'recomendations' : recomendations
  },
  name: 'Home',
  methods:{


    goReco(){

      setTimeout( () => VueScrollTo.scrollTo( '.recos', 800,  {offset: 0} ) ,300);

    }

  }
}
</script>

<style scoped>



.bg-clouds{
  background-image: url('./assets/svg/clouds.svg');
  height: 33vw;
  min-height: 450px;
  max-height:600px; 
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment:fixed; 
}

.hero-container{
  position:relative;
  background-image: url('./assets/stars.png');
  background-repeat: no-repeat;
  background-position: top center;
  /* border: solid 2px red; */
}

.jet{
  position: absolute;
  right: 3%;
  top: 0px;
  width: 15vw;
  max-height:245px;
}

h1{
  font-weight: 300;
}

h2{font-size: 37px;}
h2 span{font-weight: 800;}

</style>

