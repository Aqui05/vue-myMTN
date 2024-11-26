
<template>
  <div id="app">
    <Loader v-if="isLoading" />
    <div v-else>
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import Loader from './components/skelton/Loader.vue';

export default {
  name: 'App',
  components: {
    Loader,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    // Simulez le chargement du contenu
    setTimeout(() => {
      this.isLoading = false;
    }, 2000); // Ajustez le temps de chargement selon vos besoins
  },
};
</script>


<style scoped>

</style>



