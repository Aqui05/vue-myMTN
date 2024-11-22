<template>

    <b-sidebar v-if="simNumber && simDetails?.length">
      <template #default="{ hide }">
        <header class="b-sidebar-header">
          <strong id="sim_details_sidebar___title__">Infos {{ simNumber }}</strong>
          <button 
            type="button" 
            aria-label="Close" 
            class="close text-dark" 
            @click="hide"
          >
            <svg 
              viewBox="0 0 16 16" 
              width="1em" 
              height="1em" 
              focusable="false" 
              role="img" 
              aria-label="x" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="currentColor" 
              class="bi-x b-icon bi"
            >
              <g>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
              </g>
            </svg>
          </button>
        </header>
        
        <div class="b-sidebar-body">
          <table class="table table-striped">
            <tbody>
              <tr v-for="(detail, key) in simDetails" :key="key">
                <td class="font-weight-bold">{{ detail.label }}</td>
                <td>{{ detail.value }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </b-sidebar>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from 'vue'
  
  // Define the type for simDetails
  interface SimDetail {
    label: string;
    value: string;
  }


  
  // Props for customizing SIM details
  const props = defineProps<{
    simNumber?: string; // Make optional with ?
    simDetails?: SimDetail[]; // Make optional
  }>()
  
  // Event emitter
  const emit = defineEmits(['close'])
  </script>
  
  <style scoped>
  #sim-details-sidebar {
    height: 100%;
    width: 200px;
  }
  </style>
  