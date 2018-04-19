<template>

<div class="content">

  <div class="bg-clouds">

    <div class="container  u-ptl">

        <div class="row">

          <div class="col-sm-12 u-mtm hero-container">

            <div class="title-container">
                <h1>Optimizing the first response : Time to first byte</h1>
                <hr/>
                <p>TTFB measures the duration from the user or client making an HTTP request to the first byte of the page being received by the client's browser</p>
            </div>
        

            <svg  class="icon"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 395 395"><path d="M395 279.46V382.5c0 4.14-3.36 7.5-7.5 7.5H7.5c-4.15 0-7.5-3.36-7.5-7.5V279.46c0-4.14 3.35-7.5 7.5-7.5h21.87v-15.44H7.5c-4.15 0-7.5-3.36-7.5-7.5V145.98c0-4.14 3.35-7.5 7.5-7.5h21.87v-15.44H7.5c-4.15 0-7.5-3.36-7.5-7.5V12.5C0 8.36 3.35 5 7.5 5h380c4.14 0 7.5 3.36 7.5 7.5v103.04c0 4.14-3.36 7.5-7.5 7.5h-21.87v15.44h21.87c4.14 0 7.5 3.36 7.5 7.5v103.04c0 4.14-3.36 7.5-7.5 7.5h-21.87v15.44h21.87c4.14 0 7.5 3.36 7.5 7.5zM380 375v-88.04h-39.17V375H380zm0-133.48v-88.04h-39.17v88.04H380zm0-133.48V20h-39.17v88.04H380zm-29.37 163.92v-15.44H44.37v15.44h306.26zm0-133.48v-15.44H44.37v15.44h306.26zM325.83 375v-88.04h-39.01V375h39.01zm0-133.48v-88.04h-39.01v88.04h39.01zm0-133.48V20h-39.01v88.04h39.01zM271.82 375v-88.04H15V375h256.82zm0-133.48v-88.04H15v88.04h256.82zm0-133.48V20H15v88.04h256.82z"/><path fill="#3dd0f2" d="M340.83 286.96H380V375h-39.17zM340.83 153.48H380v88.04h-39.17zM340.83 20H380v88.04h-39.17zM271.82 286.96V375H15v-88.04h256.82zM75 330.98c0-1.97-.8-3.91-2.2-5.3-1.4-1.4-3.33-2.2-5.3-2.2-1.98 0-3.91.8-5.31 2.2-1.39 1.4-2.19 3.33-2.19 5.3s.8 3.91 2.19 5.3a7.55 7.55 0 0 0 5.31 2.2 7.51 7.51 0 0 0 7.5-7.5zm-24 0c0-1.97-.8-3.9-2.2-5.3-1.4-1.4-3.33-2.2-5.3-2.2-1.98 0-3.91.8-5.31 2.2a7.56 7.56 0 0 0-2.19 5.3c0 1.98.8 3.91 2.19 5.3a7.55 7.55 0 0 0 5.31 2.2c1.97 0 3.9-.8 5.3-2.2 1.4-1.39 2.2-3.33 2.2-5.3zM271.82 153.48v88.04H15v-88.04h256.82zM75 197.5c0-1.97-.8-3.91-2.2-5.3-1.4-1.4-3.33-2.2-5.3-2.2-1.98 0-3.91.8-5.31 2.2a7.56 7.56 0 0 0-2.19 5.3c0 1.98.8 3.91 2.19 5.3a7.55 7.55 0 0 0 5.31 2.2 7.51 7.51 0 0 0 7.5-7.5zm-24 0c0-1.97-.8-3.91-2.2-5.3-1.4-1.4-3.33-2.2-5.3-2.2-1.98 0-3.91.8-5.31 2.2-1.39 1.39-2.19 3.33-2.19 5.3s.8 3.91 2.19 5.3a7.55 7.55 0 0 0 5.31 2.2c1.97 0 3.9-.8 5.3-2.2 1.4-1.39 2.2-3.33 2.2-5.3zM271.82 20v88.04H15V20h256.82zM75 64.02c0-1.97-.8-3.91-2.2-5.3-1.4-1.4-3.33-2.2-5.3-2.2-1.98 0-3.91.8-5.31 2.2a7.56 7.56 0 0 0-2.19 5.3c0 1.97.8 3.91 2.19 5.3a7.55 7.55 0 0 0 5.31 2.2c1.97 0 3.9-.8 5.3-2.2 1.4-1.39 2.2-3.33 2.2-5.3zm-24 0c0-1.97-.8-3.91-2.2-5.3-1.4-1.4-3.33-2.2-5.3-2.2-1.98 0-3.91.8-5.31 2.2a7.56 7.56 0 0 0-2.19 5.3c0 1.97.8 3.91 2.19 5.3a7.55 7.55 0 0 0 5.31 2.2c1.97 0 3.9-.8 5.3-2.2 1.4-1.39 2.2-3.33 2.2-5.3z"/><path d="M72.8 58.72c1.4 1.39 2.2 3.33 2.2 5.3 0 1.97-.8 3.91-2.2 5.3-1.4 1.4-3.33 2.2-5.3 2.2-1.98 0-3.91-.8-5.31-2.2a7.56 7.56 0 0 1-2.19-5.3c0-1.97.8-3.91 2.19-5.3a7.55 7.55 0 0 1 5.31-2.2c1.97 0 3.9.8 5.3 2.2zM72.8 192.2c1.4 1.39 2.2 3.33 2.2 5.3a7.51 7.51 0 0 1-7.5 7.5c-1.98 0-3.91-.8-5.31-2.2a7.543 7.543 0 0 1-2.19-5.3c0-1.97.8-3.91 2.19-5.3a7.55 7.55 0 0 1 5.31-2.2c1.97 0 3.9.8 5.3 2.2zM72.8 325.68c1.4 1.39 2.2 3.33 2.2 5.3a7.51 7.51 0 0 1-7.5 7.5c-1.98 0-3.91-.8-5.31-2.2-1.39-1.39-2.19-3.33-2.19-5.3s.8-3.9 2.19-5.3a7.55 7.55 0 0 1 5.31-2.2c1.97 0 3.9.8 5.3 2.2zM48.8 58.72c1.4 1.39 2.2 3.33 2.2 5.3 0 1.97-.8 3.91-2.2 5.3-1.4 1.4-3.33 2.2-5.3 2.2-1.98 0-3.91-.8-5.31-2.2a7.56 7.56 0 0 1-2.19-5.3c0-1.97.8-3.91 2.19-5.3a7.55 7.55 0 0 1 5.31-2.2c1.97 0 3.9.8 5.3 2.2zM48.8 192.2c1.4 1.39 2.2 3.33 2.2 5.3s-.8 3.91-2.2 5.3c-1.4 1.4-3.33 2.2-5.3 2.2-1.98 0-3.91-.8-5.31-2.2-1.39-1.39-2.19-3.33-2.19-5.3s.8-3.91 2.19-5.3a7.55 7.55 0 0 1 5.31-2.2c1.97 0 3.9.8 5.3 2.2zM48.8 325.68c1.4 1.4 2.2 3.33 2.2 5.3s-.8 3.91-2.2 5.3c-1.4 1.4-3.33 2.2-5.3 2.2-1.98 0-3.91-.8-5.31-2.2a7.543 7.543 0 0 1-2.19-5.3c0-1.97.8-3.91 2.19-5.3a7.55 7.55 0 0 1 5.31-2.2c1.97 0 3.9.8 5.3 2.2z"/></svg>
           
          </div> <!-- col- -->

      </div> <!-- row -->

    </div> <!-- container-->

  </div> <!-- clouds -->

  <div class="container content-container shadow u-ptm u-plm u-prm">
    <div class="row">

      <div class="col-sm-12">
        <p>Lorem ipsum dolor sit met, qui at desert mandamus, adduce ullum apeirian mea at. Eu mel vide saltando vituperata, sonet quidam deterruisset te qui. Te cum vivendum explicate abhorrent. Id venom argumentum vel. Ut lorem bocent hendrerit eam. </p>
     
        <h2>How to check the Time To First Byte ?</h2>

        <p>Lorem ipsum dolor sit met, qui at desert mandamus, adduce ullum apeirian mea at. Eu mel vide saltando vituperata, sonet quidam deterruisset te qui. Te cum vivendum explicate abhorrent. Id venom argumentum vel. Ut lorem bocent hendrerit eam. </p>
        
        <img src="https://speedchecklist.com/img/01-ttf.png">

        <p>Lorem ipsum dolor sit met, qui at desert mandamus, adduce ullum apeirian mea at. Eu mel vide saltando vituperata, sonet quidam deterruisset te qui. Te cum vivendum explicate abhorrent. Id venom argumentum vel. Ut lorem bocent hendrerit eam. </p>

        <p>Lorem ipsum dolor sit met, qui at desert mandamus, adduce ullum apeirian mea at. Eu mel vide saltando vituperata, sonet quidam deterruisset te qui. Te cum vivendum explicate abhorrent. Id venom argumentum vel. Ut lorem bocent hendrerit eam. </p>

        <p>Lorem ipsum dolor sit met, qui at desert mandamus, adduce ullum apeirian mea at. Eu mel vide saltando vituperata, sonet quidam deterruisset te qui. Te cum vivendum explicate abhorrent. Id venom argumentum vel. Ut lorem bocent hendrerit eam. </p>


        <h2>How to fix the issue ?</h2>


        <p>Lorem ipsum dolor sit met, qui at desert mandamus, adduce ullum apeirian mea at. Eu mel vide saltando vituperata, sonet quidam deterruisset te qui. Te cum vivendum explicate abhorrent. Id venom argumentum vel. Ut lorem bocent hendrerit eam. </p>

        <p>Lorem ipsum dolor sit met, qui at desert mandamus, adduce ullum apeirian mea at. Eu mel vide saltando vituperata, sonet quidam deterruisset te qui. Te cum vivendum explicate abhorrent. Id venom argumentum vel. Ut lorem bocent hendrerit eam. </p>

        <p>Lorem ipsum dolor sit met, qui at desert mandamus, adduce ullum apeirian mea at. Eu mel vide saltando vituperata, sonet quidam deterruisset te qui. Te cum vivendum explicate abhorrent. Id venom argumentum vel. Ut lorem bocent hendrerit eam. </p>



      </div>

    </div>
  </div>



  </div> <!-- content -->
</template>

<script>



export default {
  name: 'my-content',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>


<style scoped>

.content{background-color: #f0fefe;}

.content-container{
  background-color: #FFF;
  font-size: 17px;
  color:#5a6367;
  line-height: 30px;
}

.content-container h2{
  font-size: 29px;
  margin-top: 40px;
}

.content-container img{
  box-shadow: 0 1px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);
  display:block;
  margin:auto;
  max-width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
}

.bg-clouds{
  background-image: url('../assets/svg/clouds-light.svg');
  height: 55vh;
  max-height:600px; 
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment:fixed; 

  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%235c9cf2' fill-opacity='0.02' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E");
}

.hero-container{
  
  position:relative;

}

.title-container{
  width: 50%;
}

.title-container p{ font-size: 18px;}

.icon{
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

.shadow{
   box-shadow: 0 1px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);
}
</style>

