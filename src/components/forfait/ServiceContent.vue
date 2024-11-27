<template>
    <div>
  <div class="v-step-1">
    <div class="row">
      <div class="col-md-12">
        <div class="section-header">
          <h3>Services</h3>
          <p class="text-muted font-weight-light">
            Profite de tous les services disponibles
          </p>
        </div>
      </div>
    </div>
    <div class="row"></div>
  </div>
</div>

</template>

<script>
      export default {
    name: 'ServiceContent',
  };
</script>

<style scoped>
  .section-header h3 {
    font-size: 18px;
    margin: 0;
    font-family: 'MTNBrighterSans-Bold';
}

h1, h2, h3, h4, h5, strong {
    font-weight: 700;
}

.section-header p {
    font-size: 16px;
    font-family: 'MTNBrighterSans-light';
}

p {
    margin-top: 0;
    margin-bottom: 1rem;
}

@media (min-width: 768px) {
    .col-md-12 {
        -ms-flex: 0 0 100%;
        -webkit-box-flex: 0;
        flex: 0 0 100%;
        max-width: 100%;
        padding-left: 15px;
        padding-right: 15px;
    }
}

.text-muted {
    color: #6c757d !important;
}
.font-weight-light {
    font-weight: 300 !important;
}
</style>