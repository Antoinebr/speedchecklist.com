<template>
      <div>
          <img :src="iconByCatName(type)">
     </div>
</template>

<script>

export default {
    name: 'my-icon',
    props : ['type'],
     data(){
        return{
            myData : ""
        }
    },
    methods: {
        
        getSvg(icon){

            return require('../assets/svg/' + icon + '.svg')

            //return '../assets/' + icon+ '.svg';

        },
        iconByCatName(catName){
            switch (catName) {

                case 'JavaScript':
                    return this.getSvg('icon-js-2');
         
                case 'Images':
                    return this.getSvg('icon-img');

                case 'Backend':
                    return this.getSvg('icon-backend');

                case 'Server optimization':
                    return this.getSvg('icon-server');

                case 'Fonts':
                    return this.getSvg('icon-fonts');    
       
            }
        }
    },
    
}
</script>

