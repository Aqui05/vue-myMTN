<template>
            <div class="card-body">
              <form>
                <div class="bundle-activation-card-options">
                  <label class="mr-1">
                    <input name="WABAA_100" value="activate" type="radio" checked="checked" />
                    <div>Activer</div>
                    <p class="text-muted">Activer sur votre numéro</p>
                  </label>
                  <label>
                    <input name="WABAA_100" value="offer" type="radio" />
                    <div>Offrir</div>
                    <p class="text-muted">Activer sur un autre numéro</p>
                  </label>
                </div>
                <div class="bundle-activation-card-payment-mode mt-2">
                  <div class="form-group">
                    <div >
                        <label class="font-weight-bold">
                          Sélectionnez un mode de paiement
                        </label>
                      </div>
                    <label class="mr-3">
                      <input
                        value="main"
                        name="mode_WABAA_100"
                        type="radio"
                        checked="checked"
                        class="hidden-radio"
                      />
                      <span class="bundle-mode-icon mr-2">
                        <i class="mtn-icon mtn-icon-phone"></i>
                      </span>
                      <span class="bundle-mode-title">Compte principal</span>
                    </label>
                    <label>
                      <input value="MO" name="mode_WABAA_100" type="radio" class="hidden-radio" />
                      <span class="bundle-mode-icon mr-2">
                        <i class="mtn-icon mtn-icon-mtn-momo"></i>
                      </span>
                      <span class="bundle-mode-title">Mobile Money</span>
                    </label>
                  </div>
                </div>
                <button class="btn btn-primary float-right plus-haut">
                  <span>Activer</span>
                </button>
                <div class="clearfix"></div>
              </form>
            </div>
</template>


<script>
import { ref } from 'vue';

export default {
  name: 'InfoModal',

 
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 2000);

        // Importer Animate.css
        const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
    document.head.appendChild(link)
  },
};
</script>



<style scoped>


.skeleton-loader { 
          -ms-flex: 0 0 25%;
        -webkit-box-flex: 0;
        flex: 0 0 25%;
        padding-left: 15px;
        padding-right: 15px;
        margin-bottom: 20px;
} 

.skeleton-text { 
  height: 100px;
  border-radius: 15px; 
  width: 100%; 
  background: 
  linear-gradient(-90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%); 
  background-size: 200% 200%; 
  animation: loading 1.5s infinite; 
} 

@keyframes loading { 
  0% { background-position: 200% 0; } 
  100% { background-position: -200% 0; } 
}


    .row {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
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

.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.2;
}

h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: .5rem;
}

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

.text-muted {
    color: #6c757d !important;
}
.font-weight-light {
    font-weight: 300 !important;
}

.service-card {
    margin-bottom: 30px;
}

@media (min-width: 768px) {
    .col-md-3 {
        -ms-flex: 0 0 25%;
        -webkit-box-flex: 0;
        flex: 0 0 25%;
        padding-left: 15px;
        padding-right: 15px;
    }
}

@media (max-width: 768px) {
 .skeleton-loader {
  flex: 0 0 100%;
 } 
}

.service-card>* {
    background: #fff;
    padding: 15px;
    border-radius: 15px;
    overflow: hidden;
    display: block;
    position: relative;
    color: #000;
}

.service-card h3 {
    font-size: 16px;
}

.service-card h3 {
    color: #000;
}
.text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.service-card p {
    font-size: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 18px;
}

.text-muted {
    color: #6c757d !important;
}


.service-card .service-card-bottom {
    margin-left: -15px;
    margin-right: -15px;
    margin-bottom: -15px;
}

.service-card .service-card-bottom .btn {
    vertical-align: middle;
    width: 100%;
    border-radius: 0 !important;
    font-weight: 400;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: flex-start;
    flex-wrap: wrap;
    /* flex-direction: row; */
}

.btn, .btn>span {
    vertical-align: middle;
}

.float-left {
    float: left !important;
    font-family: MTNBrighterSans-Medium;
}

.service-card .service-card-bottom .btn i {
    font-size: 16px;
}

.float-right {
    float: right !important;
}

.ripple {
    position: relative;
    overflow: hidden;
}

.btn-secondary {
    background-color: #106887;
}
.btn-outline-secondary:hover, .btn-secondary {
    color: #fff;
    border-color: #106887;
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


@media (min-width: 600px) {
  .svg-mobile {
    display: none;
  }
}

@media (max-width: 600px) {
  .svg-mobile {
    display: block;
    fill: #106887;
  }

  .service-card-bottom {
    display: none;
  }

  .mobile-align {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

@media screen and (max-width: 600px) {
  .service-card > * {
    height: 77px;
  }
}



.b-sidebar.b-sidebar-right {
    left: auto;
    right: 0;
}
.b-sidebar {
    width: 40%;
}
.b-sidebar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    max-width: 100%;
    max-height: 100%;
    margin: 0;
    outline: 0;
    -webkit-transform: translateX(0);
    transform: translateX(0);
}
.b-sidebar, .b-sidebar-backdrop {
    position: fixed;
    top: 0;
    height: 100vh;
}
.text-dark {
    color: #343a40 !important;
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


.shadow {
    -webkit-box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
}
.bg-light {
    background-color: #f8f9fa !important;
}


.b-sidebar>.b-sidebar-header {
    font-size: 1.5rem;
    padding: .5rem 1rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
}
.b-sidebar-header {
    background: #ffcc01;
    padding: 15px 20px !important;
}
article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
}


.b-sidebar.b-sidebar-right>.b-sidebar-header .close {
    margin-right: auto;
}
.b-sidebar>.b-sidebar-header .close {
    float: none;
    font-size: 1.5rem;
}
.b-sidebar-right .close {
    right: auto;
    left: -50px !important;
}
.b-sidebar-header .close {
    position: absolute;
    right: -50px;
    background: 40px;
    width: 30px;
    background: #fff;
    opacity: 1;
    margin: 0;
    display: block;
    border-radius: 50%;
    height: 30px;
    line-height: 34px;
    color: #bfbfbf !important;
    justify-content: center;
    display: flex;
    border: none;
}

.b-icon.bi {
    display: inline-block;
    overflow: visible;
    vertical-align: -.15em;
}
svg {
    overflow: hidden;
}
img, svg {
    vertical-align: middle;
}

.b-sidebar-header strong {
    font-size: 18px;
}

h1, h2, h3, h4, h5, strong {
    font-weight: 700;
}

.bundle-sidebar .b-sidebar-body {
    background: #fff !important;
}

.b-sidebar>.b-sidebar-body {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    height: 100%;
    overflow-y: auto;
}

.bundle-sidebar-header {
    padding: 15px;
}

#bundle_filter_list {
    background: #f4f4f4;
    padding: 7px;
    border-radius: 50px;
    font-size: 14px;
    color: #6c757d;
}

#bundle_filter_list>div {
    padding: 0 !important;
}
#bundle_filter_list>div {
    padding: 0 10px;
}
.row {
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    width: 100% !important;
    overflow-x: auto;
    margin: 0 !important;
}
.row {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}

p {
    margin-top: 0;
    margin-bottom: 1rem;
}

.bundle-filter-item {
    text-align: center;
    padding-left: 5px !important;
    padding-right: 5px !important;
}

.col {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    -webkit-box-flex: 1;
    flex-grow: 1;
    max-width: 100%;
    padding-left: 15px;
    padding-right: 15px;
}

.accordion {
    overflow-anchor: none;
}

.bundle-sidebar .accordion>.card {
    overflow: hidden;
    border-left: none !important;
    border-right: none !important;
    border-radius: 0 !important;
}
.accordion>.card:not(:last-of-type) {
    border-bottom: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}
.accordion>.card {
    overflow: hidden;
}
.card {
    position: relative;
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, .125);
    border-radius: .25rem;
}

.accordion>.card>.card-header {
    background: #fff;
}
.accordion>.card>.card-header {
    border-radius: 0;
    margin-bottom: -1px;
}
.card-header:first-child {
    border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
}
.p-1 {
    padding: .25rem !important;
}
.card-header {
    padding: .75rem 1.25rem;
    margin-bottom: 0;
    background-color: rgba(0, 0, 0, .03);
    border-bottom: 1px solid rgba(0, 0, 0, .125);
}
article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
}

.bundle-activation-card-header {
    padding: 10px 15px;
    position: relative;
    cursor: pointer;
}
[role=button] {
    cursor: pointer;
}


.font-weight-bold {
    font-weight: 700 !important;
}

.bundle-activation-card-header>p {
    font-size: 14px;
    margin: 5px 0 0 0;
}

.text-muted {
    color: #6c757d !important;
}

.bundle-activation-card-header.collapsed .icon-collapsed, .bundle-activation-card-header.not-collapsed .icon-not-collapsed {
    display: block;
}
.bundle-activation-card-header>span {
    position: absolute;
    right: 15px;
    top: 24px;
    font-size: 24px;
    color: #00678f;
}

.bundle-activation-card-header>span {
    position: absolute;
    right: 15px;
    top: 24px;
    font-size: 24px;
    color: #00678f;
}
.bundle-sidebar, .card, .card-body {
    background: #f4f4f4 !important;
}

.card-body {
    -ms-flex: 1 1 auto;
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;

}



.bundle-activation-card-options label {
    display: inline-block;
    vertical-align: top;
    width: 48%;
    background: #fff;
    padding: 10px;
    border: 2px solid #ced4d9;
    border-radius: 7px;
    cursor: pointer;
    position: relative;
}
.mr-1, .mx-1 {
    margin-right: .25rem !important;
}
label {
    display: inline-block;
    margin-bottom: .5rem;
}


.bundle-activation-card-options input[type=radio] {
    position: absolute;
    right: 10px;
    top: 10px;
}
input[type=checkbox], input[type=radio] {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
}
button, input, optgroup, select, textarea {
    font-family: inherit;
}
button, input {
    overflow: visible;
}
button, input, optgroup, select, textarea {
    margin: 0;
    font-size: inherit;
    line-height: inherit;
}

.bundle-activation-card-options label div {
    font-size: 14px;
    font-family: MTNBrighterSans-Medium, Century Gothic, Arial, sans-serif;
}

.bundle-activation-card-options label p {
    font-size: 12px;
    margin: 5px 0 0 0;
}

.bundle-sidebar .card .card-body {
    background: #f4f4f4 !important;
}

.form-group {
    margin-bottom: 1rem;
}

.font-weight-bold {
    font-weight: 700 !important;
}

label {
    display: inline-block;
    margin-bottom: .5rem;
}

.mr-3, .mx-3 {
    margin-right: 1rem !important;
}

label {
    display: inline-block;
    margin-bottom: .5rem;
}

input[type=checkbox], input[type=radio] {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
}

.hidden-radio {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}


label input:checked~.bundle-mode-icon {
    border-color: #ffc107;
    background: #fff2bf;
}
.bundle-activation-card-payment-mode label .bundle-mode-icon {
    width: 28px;
    height: 28px;
    background: #fff;
    border-radius: 50%;
    font-size: 12px;
    text-align: center;
    line-height: 25px;
    border: 3px solid #ced4d9;
}
.bundle-activation-card-payment-mode label span {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
}

.bundle-activation-card-payment-mode label .bundle-mode-title {
    font-size: 14px;
}
.bundle-activation-card-payment-mode label span {
    display: inline-block;
    vertical-align: middle;
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
.float-right {
    float: right !important;
}


.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(51 51 51 / 50%);
  z-index: 1050;
  display: flex;
  justify-content: center;
  align-items: center;
}




.b-sidebar-outer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 0;
    overflow: visible;
    z-index: 1035;
}






/* STLES DES MODALS */

.b-sidebar.b-sidebar-right {
    left: auto;
    right: 0;
}

.b-sidebar, .b-sidebar-backdrop {
    position: fixed;
    top: 0;
    height: 100vh;
}
.text-dark {
    color: #343a40 !important;
}
.shadow {
    -webkit-box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important;
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important;
}
.bg-light {
    background-color: #f8f9fa !important;
}

.b-sidebar, .b-sidebar-backdrop {
    position: fixed;
    top: 0;
    height: 100vh;
}
.b-sidebar-backdrop {
    left: 0;
    z-index: -1;
    width: 100vw;
    opacity: .6;
}
.bg-dark {
    background-color: #343a40 !important;
}

.b-sidebar>.b-sidebar-header {
    font-size: 1.5rem;
    padding: .5rem 1rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.b-sidebar-header {
    background: #ffcc01;
    padding: 15px 20px !important;
}
article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
}

.b-sidebar.b-sidebar-right>.b-sidebar-header .close {
    margin-right: auto;
}
.b-sidebar>.b-sidebar-header .close {
    float: none;
    font-size: 1.5rem;
}
.b-sidebar-right .close {
    right: auto;
    left: -50px !important;
}
.b-sidebar-header .close {
    position: absolute;
    right: -50px;
    background: 40px;
    width: 30px;
    background: #fff;
    opacity: 1;
    margin: 0;
    display: block;
    border-radius: 50%;
    height: 30px;
    line-height: 34px;
    color: #bfbfbf !important;
}
[type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
    cursor: pointer;
}
button.close {
    padding: 0;
    background-color: transparent;
    border: 0;
}
.text-dark {
    color: #343a40 !important;
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
[type=button], [type=reset], [type=submit], button {
    -webkit-appearance: button;
}
button, input, optgroup, select, textarea {
    font-family: inherit;
}
button, select {
    text-transform: none;
}
button, input {
    overflow: visible;
}

.b-sidebar-header strong {
    font-size: 18px;
}
h1, h2, h3, h4, h5, strong {
    font-weight: 700;
}

.b-icon.bi {
    display: inline-block;
    overflow: visible;
    vertical-align: -.15em;
}
svg {
    overflow: hidden;
}
img, svg {
    vertical-align: middle;
}

.bundle-sidebar .b-sidebar-body {
    background: #fff !important;
}
.b-sidebar>.b-sidebar-body {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    height: 100%;
    overflow-y: auto;
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
    .b-sidebar-right .close {
        left: auto !important;
    }
}


.plus-haut {
  bottom: 1.5rem;
    position: relative;
}


#bundle_filter_list {
    background: #f4f4f4;
    padding: 7px;
    border-radius: 50px;
    font-size: 14px;
    color: #6c757d;
}

#bundle_filter_list>div {
    padding: 0 !important;
}

#bundle_filter_list>div {
    padding: 0 10px;
}
.row {
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    width: 100% !important;
    overflow-x: auto;
    margin: 0 !important;
}

.bundle-filter-item {
    text-align: center;
    padding-left: 5px !important;
    padding-right: 5px !important;
}
.col {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    -webkit-box-flex: 1;
    flex-grow: 1;
    max-width: 100%;
}

.bundle-filter-item.active>div {
    background: #fff;
    color: #000;
    font-size: medium;
}
.bundle-filter-item>div {
    border-radius: 30px;
    text-align: center;
    padding: 7px;
    cursor: pointer;
}
.text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}


</style>
