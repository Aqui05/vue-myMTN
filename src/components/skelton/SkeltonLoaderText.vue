<template>
    <div class="skeleton-text" v-for="n in 3" :key="n"></div>
  </template>
  
  <script>
  export default {
    name: 'SkeletonLoaderText',
  };
  </script>
  
  <style scoped>
  .skeleton-text {
    height: 20px;
    width: 100%;
    background: linear-gradient(-90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%);
    background-size: 200% 200%;
    animation: loading 1.5s infinite;
    margin-bottom: 10px;
  }
  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
  </style>
  