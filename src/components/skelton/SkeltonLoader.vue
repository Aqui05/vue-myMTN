<template>
  <div v-if="loading" class="skeleton-loader">
    <div class="skeleton-element" v-for="n in elementsCount" :key="n"></div>
  </div>
</template>

<script>
export default {
  name: 'SkeletonLoader',
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
    elementsCount: {
      type: Number,
      default: 3,
    },
  },
};
</script>

<style scoped>
.skeleton-loader {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
}

.skeleton-element {
  height: 20px;
  width: 100%;
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
