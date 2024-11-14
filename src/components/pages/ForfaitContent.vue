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
  
  