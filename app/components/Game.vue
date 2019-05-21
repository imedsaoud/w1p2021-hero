<template>
    <div>
        <div>{{step.title}}</div>
        <div v-on:click = "doEffect(action)" v-for="action in step.actions">{{ action.label }}</div>
        <img :src="step.img" alt="">
    </div>
</template>

<script>
  import data from '../services/data.json';

  export default {
    data: function() {
      return {
        step: data.choices[this.$route.params.id]
      };
    },
    mounted() {
      console.log(this.step)
    },
    watch: {
      '$route' (to,from) {
        this.step = data.choices[this.$route.params.id]
      }
    },
    methods: {
      doEffect (action) {
        if(action.to) {
          this.$router.push({params: {id:action.to}})
        }

        if (action.to === "win"){
          this.$router.push({path: '/win'})
        }  if (action.to === 'lost'){
          this.$router.push({path: '/lost'})
        }

      }
    },

  }

</script>

<style scoped>

</style>
