<template>
     <div
    
    id="sim_card_pin_puk_modal___BV_modal_outer_"
    style="position: absolute; z-index: 1040;"
  >
    <div
      id="sim_card_pin_puk_modal"
      role="dialog"
      aria-labelledby="sim_card_pin_puk_modal___BV_modal_title_"
      aria-describedby="sim_card_pin_puk_modal___BV_modal_body_"
      class="modal fade show"
      aria-modal="true"
      style="display: block;"
    >
      <div class="modal-dialog modal-md modal-dialog-centered">
        <span tabindex="0"></span>
        <div
          id="sim_card_pin_puk_modal___BV_modal_content_"
          tabindex="-1"
          class="modal-content"
        >
          <header
            id="sim_card_pin_puk_modal___BV_modal_header_"
            class="modal-header"
          >
            <h5
              id="sim_card_pin_puk_modal___BV_modal_title_"
              class="modal-title"
            >
              Récupérer mon code PUK
            </h5>
            <button type="button" aria-label="Close" class="close" @click="closePukModal">×</button>
          </header>
          <div
            id="sim_card_pin_puk_modal___BV_modal_body_"
            class="modal-body"
          >
            <div  class="text-center">
              <div  class="modal-header-wrap">
                <i
                  
                  class="kgk-mtn-phonelink_lock modal-header-icon yellow-muted"
                ></i>
                <h3 >Code PUK</h3>
                <p  class="text-muted">
                  Veuillez cliquer sur le bouton ci dessous pour afficher votre
                  code PUK.
                </p>
              </div>
              <!---->
              <!---->
              <div  class="mt-2 mb-2">
                <button
                  
                  type="button"
                  class="btn btn-primary"
                >
                  Afficher
                </button>
              </div>
            </div>
            <div ></div>
          </div>
          <!---->
        </div>
        <span tabindex="0"></span>
      </div>
    </div>


        <div 
  class="b-sidebar-backdrop bg-dark" 
  @click.self="closePukModal"
  style="cursor: pointer"
>
</div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  props: { 
    isModalPukOpen: { 
      type: Boolean, 
      required: true 
    } 
  },
  setup(props, { emit }) {
    const isModalPUKOpen = ref(props.isModalPukOpen);

    const openPukModal = () => {
      isModalPUKOpen.value = true;
      console.log(isModalPUKOpen.value);
    };
    
    const closePukModal = () => {
      isModalPUKOpen.value = false;
      console.log(isModalPUKOpen.value);
    };

    // Watch for changes in the ref and emit events to the parent
    watch(isModalPUKOpen, (newVal) => {
      emit('update:isModalPukOpen', newVal);
    });

    // Watch for changes in the prop value and update the ref accordingly
    watch(() => props.isModalPukOpen, (newVal) => {
      isModalPUKOpen.value = newVal;
    });

    return { isModalPUKOpen, openPukModal, closePukModal };
  },

  mounted() {
    // Importer Animate.css
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
    document.head.appendChild(link)
  }
};
</script>
<script>
import { ref, watch } from 'vue';

export default {
  props: { 
    isModalPukOpen: { 
      type: Boolean, 
      required: true 
    } 
  },

  setup(props) {
    const isModalPUKOpen = ref(props.isModalPukOpen);

    const openPukModal = () => {
      isModalPUKOpen.value = true;
      console.log(isModalPUKOpen.value);
    };
    
    const closePukModal = () => {
      isModalPUKOpen.value = false;
      console.log(isModalPUKOpen.value);
    };

    // Watch for changes in the prop value and update the ref accordingly
    watch(() => props.isModalPukOpen, (newVal) => {
      isModalPUKOpen.value = newVal;
    });

    return { isModalPUKOpen, openPukModal, closePukModal };
  },

  mounted() {
    // Importer Animate.css
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
    document.head.appendChild(link)
  }
};
</script>


<style scoped>

.modal-open .modal {
    overflow-x: hidden;
    overflow-y: auto;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    display: none;
    width: 100%;
    height: 100%;
    overflow: hidden;
    outline: 0;
}


.modal.show {
    display: block;
    opacity: 1;
}


 .modal-backdrop {
    opacity: .5;
}
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    transition: opacity 0.3s ease;
}

.modal.show .modal-backdrop {
    opacity: 0.5;
}

/* Modal Dialog Animations */
@keyframes modalSlideIn {
    from {
        opacity: 0;
        transform: translateY(-50px) scale(0.9);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

@keyframes modalSlideOut {
    from {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
    to {
        opacity: 0;
        transform: translateY(-50px) scale(0.9);
    }
}

.modal.fade .modal-dialog {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
}

.modal.show .modal-dialog {
    animation: modalSlideIn 0.3s ease-out forwards;
}

.modal.fade.closing .modal-dialog {
    animation: modalSlideOut 0.3s ease-out forwards;
}

/* Optional: Add backdrop fade animation */
@keyframes backdropFadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 0.5;
    }
}

@keyframes backdropFadeOut {
    from {
        opacity: 0.5;
    }
    to {
        opacity: 0;
    }
}

.modal.show .modal-backdrop {
    animation: backdropFadeIn 0.3s ease-out forwards;
}

.modal.fade.closing .modal-backdrop {
    animation: backdropFadeOut 0.3s ease-out forwards;
}





@media (min-width: 576px) {
    .modal-dialog-centered {
        min-height: calc(100% - 3.5rem);
    }
}
@media (min-width: 576px) {
    .modal-dialog {
        max-width: 500px;
        margin: 1.75rem auto;
    }
}
.modal-dialog-centered {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex
;
    -ms-flex-align: center;
    -webkit-box-align: center;
    align-items: center;
    min-height: calc(100% - 1rem);
}
.modal-dialog {
    position: relative;
    width: auto;
    pointer-events: none;
}

@media (min-width: 576px) {
    .modal-dialog-centered:before {
        height: calc(100vh - 3.5rem);
        height: -webkit-min-content;
        height: -moz-min-content;
        height: min-content;
    }
}
.modal-dialog-centered:before {
    display: block;
    height: calc(100vh - 1rem);
    height: -webkit-min-content;
    height: -moz-min-content;
    height: min-content;
    content: "";
}

.modal-content {
    border: none;
}
.modal-content {
    position: relative;
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex
;
    -ms-flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: .3rem;
    outline: 0;
}


.modal-header {
    background: #ffcc01;
    border: none;
}

.modal-header {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex
;
    -ms-flex-align: start;
    -webkit-box-align: start;
    align-items: flex-start;
    -ms-flex-pack: justify;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-bottom: 1px solid #dee2e6;
    border-top-left-radius: calc(.3rem - 1px);
    border-top-right-radius: calc(.3rem - 1px);
}
article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
}

.modal-body {
    position: relative;
    -ms-flex: 1 1 auto;
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    padding: 1rem;
}


.modal-title {
    margin-bottom: 0;
    line-height: 1.5;
}

h1, h2, h3, h4, h5, strong {
    font-weight: 700;
}

.modal-header .close {
    position: absolute;
    right: -30px;
    background: #fff;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 0;
    opacity: 1;
    top: 28px;
    font-size: 16px;
}
.modal-header .close {
    margin: -1rem -1rem -1rem auto;
}
[type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
    cursor: pointer;
}
button.close {
    padding: 0;
    background-color: transparent;
    border: 0;
}
.close {
    float: right;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: .5;
}


.text-center {
    text-align: center !important;
}

.modal-header-wrap {
    padding: 30px 30px 0 30px;
}

.modal-header-wrap .modal-header-icon {
    font-size: 42px;
}

.yellow-muted {
    color: #d1a000;
}

.modal-header-wrap p {
    font-size: 14px;
}

.text-muted {
    color: #6c757d !important;
}

.mb-2, .my-2 {
    margin-bottom: .5rem !important;
}

.mt-2, .my-2 {
    margin-top: .5rem !important;
}

.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}

[type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
    cursor: pointer;
}
.btn-primary {
    color: #000;
    border: none;
    background-color: #fc0;
}
.btn, .btn>span {
    vertical-align: middle;
}
.btn {
    border-radius: 30px !important;
    font-size: 14px;
    font-family: MTNBrighterSans-Medium, Century Gothic, Arial, sans-serif;
    font-weight: 500;
    padding-left: 15px;
    padding-right: 15px;
}




@media(max-width:600px) {
  .modal-content1 {
    position: fixed;
    left: 0px;
    top: 42%;
    width: 100%;
    height: auto;
    overflow-y: scroll;
    /* height: 50%; */
    bottom: 0px;
}

}


@media screen and (max-width: 600px) {
    #sim_details_sidebar {
        -webkit-animation: animatebottom .3s !important;
        animation: animatebottom .3s !important;
    }
}

@keyframes animatebottom {
  0% {
    bottom: -300px;
    opacity: 0;
}
100% {
    bottom: 0;
    opacity: 1;
}
}

@media screen and (max-width: 600px) {
    .my-sidebar-popup .b-sidebar {
        width: 100%;
        height: 80%;
        bottom: 0;
        top: auto;
    }
}

@media screen and (max-width: 600px) {
    .b-sidebar-right .close, .my-sidebar-popup .b-sidebar:not(.b-sidebar-right)>.b-sidebar-header .close {
        right: 15px !important;
        top: -45px !important;
    }
}

@media screen and (max-width: 600px) {
    .modal.fade .modal-dialog {
        -webkit-transition: none !important;
        transition: none !important;
    }
}


@media screen and (max-width: 600px) {
    .service-card .service-card-bottom .btn {
        position: absolute;
        width: 5%;
        height: 45px;
        border-radius: 50% !important;
        right: 15px;
        top: 18px;
        text-align: right;
        padding: 0;
        line-height: 40px;
        background: transparent;
        border: none;
        color: #106887;
    }
}

.modal-dialog-centered {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-align: center;
    -webkit-box-align: center;
    align-items: center;
    min-height: calc(100% - 1rem);
}

@media screen and (max-width: 600px) {
    #sim_swap_popup .modal-dialog, .modal-content {
        position: fixed;
        width: 100%;
        margin: 0;
        padding: 0;
        left: 0;
        border-radius: 0;
        bottom: -15px;
        max-height: 75%;
        -webkit-animation: animatebottom .3s !important;
        animation: animatebottom .3s !important;
    }
}

@media screen and (max-width: 600px) {
    .modal-header .close {
        right: 30px;
        top: -30px;
    }
}

@media screen and (max-width: 600px) {
    .service-card .service-card-bottom .btn span {
        display: none;
    }
}

@media screen and (max-width: 600px) {
    .service-card .service-card-bottom .btn i {
        float: none !important;
        font-size: 22px;
    }
}


@media (max-width: 600px) {
    .site-page, .page-title h1, .site-page, .page-title h2 {
        font-size: 18px;
    }
}

@media (max-width: 600px) {
    .site-page, .page-title p {
        font-size: 14px;
    }
}

@media screen and (max-width: 600px) {
    .service-card {
        margin-bottom: 15px;
    }
}

@media screen and (max-width: 600px) {
    .service-card p {
        margin-top: -2px;
    }
}

@media screen and (max-width: 600px) {
    .service-card>* {
        min-height: 77px;
    }
}


.modal-title {
    margin-bottom: 0;
    line-height: 1.5;
}

h1, h2, h3, h4, h5, strong {
    font-weight: 700;
}

.h5, h5 {
    font-size: 1.25rem;
}

h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
}

.modal-body {
    overflow-y: auto !important;
}

.modal-body {
    position: relative;
    -ms-flex: 1 1 auto;
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    padding: 1rem;
}

.form-group {
    margin-bottom: 1rem;
}

 label {
    font-size: 12px !important;
    margin-bottom: 3px !important;
    font-weight: 400 !important;
    font-weight: 700 !important;
}
.d-block {
    display: block !important;
}
label {
    display: inline-block;
    margin-bottom: .5rem;
}


.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    -webkit-transition: border-color .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
    transition: border-color .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
}


.w-100 {
    width: 100% !important;
}



.form-text {
    font-size: 10px !important;
    color: #6c757d !important;
    font-weight: 400 !important;
}

.text-muted {
    color: #6c757d !important;
}
.form-text {
    display: block;
    margin-top: .25rem;
}
.small, small {
    font-size: .875em;
    font-weight: 400;
}
small {
    font-size: 80%;
}

.text-right {
    text-align: right !important;
}

.mb-3, .my-3 {
    margin-bottom: 1rem !important;
}
.mt-3, .my-3 {
    margin-top: 1rem !important;
}

.btn, .btn>span {
    vertical-align: middle;
}
</style>
