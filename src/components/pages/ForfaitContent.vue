<template>
    <div class="forfait-content">
        <div class="forfait-section">
            <ForfaitContent/>
        </div>
        <div class="service-section">
            <ServiceContent/>
        </div>
    </div>
  </template>
  
  <script>
import ForfaitContent from '../forfait/ForfaitContent.vue';
import ServiceContent from '../forfait/ServiceContent.vue';

  export default {
    name: 'forfait',
    components: {
     ForfaitContent,
     ServiceContent
    },
  }
  </script>
  

  <style scoped>
  @media (max-width: 768px) {
    .forfait-content {
        padding: 0 15px;
    }
}
</style>
  