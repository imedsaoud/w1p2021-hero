<template>
    <div class ="big-header">
        <div>{{step.title}}</div>
        <div> {{step.explication}}</div>
        <div v-on:click = "doEffect(action)" v-for="action in step.actions" class = "button">{{ action.label }}</div>
        <img :src="step.img" alt="">
    </div>
</template>

<script>
  import data from '../services/data.json';
  import GameService from '../services/GameService.js';

  export default {
    data: function() {
      return {
        services : GameService,
        step: data.choices[this.$route.params.id]
      };
    },
    mounted() {  
    },
    watch: {
      '$route' (to,from) {
        this.step = data.choices[this.$route.params.id]
      }
    },
    methods: {
      doEffect (action) {
       
        if (action.weapon){
          GameService.weapon = action.weapon
        }

        if(action.to) {
          this.$router.push({params: {id:action.to}})
        }


        if(GameService.weapon !== 'Grappin' && this.$route.params.id === 3 ) {
          this.$router.push({path: '/game/3.4'})
        }

         if(GameService.weapon !== 'Grappin' && this.$route.params.id === 9 ) {
          this.$router.push({path: '/lost'})
          
        }
        
        
        if (action.to === "win"){
          this.$router.push({path: '/win'})
        }  if (action.to === 'lost'){
          this.$router.push({path: '/lost'})
        }
      console.log(this.$route.params.id);
      console.log(GameService.weapon);
      
      }
      
    },

  }
</script>

