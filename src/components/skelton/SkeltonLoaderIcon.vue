<template>
    <div class="skeleton-icon"></div>
  </template>
  
  <script>
  export default {
    name: 'SkeletonLoaderIcon',
  };
  </script>
  
  <style scoped>
  .skeleton-icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(-90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%);
    background-size: 200% 200%;
    animation: loading 1.5s infinite;
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
  