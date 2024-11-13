<template>
    <div class="row mt-3 v-step-3">
        <div class="col-md-12">
            <div class="section-header">
                <h3>Mes souscriptions</h3>
                <p class="text-muted font-weight-light"> 
                    Produits &amp; services souscrits et en cours de validité sur mon compte
                </p>
            </div>
        </div>
            <div class="subscriptions-card" style="display: flex;">
                <div class="col-md-6 subscription-card">
                <div>
                    <div class="subscription-card-title">
                        <div>
                            <span class="text-muted">INTERNET</span>
                        </div>
                        
                        <div>
                            <span>150</span>
                            <span>FCFA</span>
                            
                        </div>
                    </div>
                    
                    <div class="text-muted text-truncate">
                        150F/120Mo/24h
                    </div>
                    
                    <div class="description">
                        150F/120Mo/24h actif. Restant 87 Mo valable jusqu au 13-11-24 20:27:26.Activez vos forfaits sans frais par MoMo
                    </div>
                    
                    <div>
                        <div class="custom-control custom-switch b-custom-control-md">
                            <input type="checkbox" class="custom-control-input" value="true" id="__BVID__76">
                            <label class="custom-control-label" for="__BVID__76"></label>
                        </div>
                    </div>
                    
                    <button title="Reconduire" class="btn btn-outline-secondary renew-bundle-btn">
                        <svg class="mdi mdi-reload" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M483-178q-124.23 0-212.11-87.84-87.89-87.84-87.89-212T270.89-692q87.88-90 212.11-90 73 0 136 36t104 94v-130h54v242H535v-54h162q-33-59-89.5-93.5T483-722q-103 0-174.5 71T237-478q0 103 71.5 174.5T483-232q78 0 141.5-44.5T713-396h56q-27 97-106 157.5T483-178Z"/></svg>
                    </button>
                </div>
            </div>
           
           <div class="col-md-6 subscription-card">
                <div>
                    <div class="subscription-card-title">
                        <div>
                            <span class="text-muted">INTERNET</span>
                        </div>
                        
                        <div>
                            <span>4000</span>
                            <span>FCFA</span>
                        </div>
                    </div>
                    
                    <div class="text-muted text-truncate">
                        4000F/3700Mo/20J 
                    </div>
                    
                    <div class="description">
                        4000F/3700Mo/20J actif. Restant 0 Mo valable jusqu au 24-11-24 20:53:24.Activez vos forfaits sans frais par MoMo.
                    </div>
                    
                    <div>
                        <div class="custom-control custom-switch b-custom-control-md">
                            <input type="checkbox" class="custom-control-input" value="true" id="__BVID__79">
                            <label class="custom-control-label" for="__BVID__79"></label>
                        </div>
                    </div>
                    <button title="Reconduire" class="btn btn-outline-secondary renew-bundle-btn">
                        <svg class="mdi mdi-reload" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M483-178q-124.23 0-212.11-87.84-87.89-87.84-87.89-212T270.89-692q87.88-90 212.11-90 73 0 136 36t104 94v-130h54v242H535v-54h162q-33-59-89.5-93.5T483-722q-103 0-174.5 71T237-478q0 103 71.5 174.5T483-232q78 0 141.5-44.5T713-396h56q-27 97-106 157.5T483-178Z"/></svg>
                    </button>
                </div>
            </div>
            </div>
    </div>
</template>

<script>
    export default {
        name: 'Soubscription'
    }
</script>


<style scoped>
    .mt-3, .my-3 {
    margin-top: 1rem !important;
}

@media (min-width: 768px) {
    .col-md-12 {
        -ms-flex: 0 0 100%;
        -webkit-box-flex: 0;
        flex: 0 0 100%;
        max-width: 100%;
    }
}

.section-header h3 {
    font-size: 18px;
    margin: 0;
}

h1, h2, h3, h4, h5, strong {
    font-weight: 700;
}

.section-header p {
    font-size: 16px;
}

.text-muted {
    color: #6c757d !important;
}
.font-weight-light {
    font-weight: 300 !important;
}

.subscription-card {
    margin-bottom: 30px;
}

@media (min-width: 768px) {
    .col-md-6 {
        -ms-flex: 0 0 50%;
        -webkit-box-flex: 0;
        flex: 0 0 50%;
        padding-left: 15px;
        padding-right: 15px;
        max-width: 50%;
    }
}

.subscription-card>div {
    background: #fff;
    border-radius: 8px;
    padding: 20px;
    border-left: 8px solid #ffcc01;
    min-height: 150px;
    position: relative;
    padding-right: 58px;
}

.subscription-card-title>div:first-child {
    font-size: 12px;
    margin-bottom: -10px;
}

.subscription-card-title>div:last-child {
    font-weight: 700;
    font-size: 28px;
}

.text-muted {
    color: #6c757d !important;
}

.subscription-card-title>div:last-child>span:last-child {
    font-weight: 700;
    font-size: 14px;
    margin-left: 5px;
}

.description[data-v-5df97c6d] {
    font-size: 12px !important;
    font-weight: 400 !important;
    display: -webkit-box;
    -webkit-box-orient: vertical !important;
    overflow: hidden !important;
    -webkit-line-clamp: 4 !important;
}

.subscription-card .custom-control {
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer !important;
}

.custom-switch {
    padding-left: 2.25rem;
}
.custom-control {
    position: relative;
    z-index: 1;
    display: block;
    min-height: 1.5rem;
    padding-left: 1.5rem;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
}

input[type=checkbox], input[type=radio] {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
}

.custom-control-input {
    position: absolute;
    left: 0;
    z-index: -1;
    width: 1rem;
    height: 1.25rem;
    opacity: 0;
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

.custom-control-label {
    position: relative;
    margin-bottom: 0;
    vertical-align: top;
}

label {
    display: inline-block;
    margin-bottom: .5rem;
}

.subscription-card .custom-control-input:checked~.custom-control-label:before {
    border-color: #00bd5a;
    background-color: #00bd5a;
}


.custom-control-input:checked~.custom-control-label:before {
    color: #fff;
    border-color: #007bff;
    background-color: #007bff;
}
.custom-switch .custom-control-label:before {
    left: -2.25rem;
    width: 1.75rem;
    pointer-events: all;
    border-radius: .5rem;
}
.custom-control-label:before, .custom-file-label, .custom-select {
    -webkit-transition: background-color .15s ease-in-out, border-color .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
    transition: background-color .15s ease-in-out, border-color .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
    transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
}
.custom-control-label:after, .custom-control-label:before {
    position: absolute;
    top: .25rem;
    left: -1.5rem;
    display: block;
    width: 1rem;
    height: 1rem;
    content: "";
}
.custom-control-label:before {
    pointer-events: none;
    background-color: #fff;
    border: 1px solid #adb5bd;
}

.custom-switch .custom-control-input:checked~.custom-control-label:after {
    background-color: #fff;
    -webkit-transform: translateX(.75rem);
    transform: translateX(.75rem);
}
.custom-switch .custom-control-label:after {
    top: calc(.25rem + 2px);
    left: calc(-2.25rem + 2px);
    width: calc(1rem - 4px);
    height: calc(1rem - 4px);
    background-color: #adb5bd;
    border-radius: .5rem;
    transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out, -webkit-transform .15s ease-in-out;
    -webkit-transition: background-color .15s ease-in-out, border-color .15s ease-in-out, -webkit-transform .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
    transition: background-color .15s ease-in-out, border-color .15s ease-in-out, -webkit-transform .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
    transition: transform .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    transition: transform .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out, -webkit-transform .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
    transition: transform .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out, -webkit-transform .15s ease-in-out;
}
.custom-control-label:after {
    background: 50% / 50% 50% no-repeat;
}
.custom-control-label:after, .custom-control-label:before {
    position: absolute;
    top: .25rem;
    left: -1.5rem;
    display: block;
    width: 1rem;
    height: 1rem;
    content: "";
}

.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}
[type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
    cursor: pointer;
}
.renew-bundle-btn {
    width: 30px;
    height: 30px;
    padding: 0;
    position: absolute;
    right: 20px;
    bottom: 20px;
    background-color: transparent;
}

.renew-bundle-btn svg {
    fill: #106887;
    position: absolute;
    /* margin: -10px; */
    top: 2px;
    left: 3.5px;
}
.btn-outline-secondary {
    color: #106887;
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


button, input, optgroup, select, textarea {
    font-family: inherit;
}
[type=button], [type=reset], [type=submit], button {
    -webkit-appearance: button;
}
button, select {
    text-transform: none;
}
button, input {
    overflow: visible;
}
button, input, optgroup, select, textarea {
    margin: 0;
    font-size: inherit;
    line-height: inherit;
}
button {
    border-radius: 0;
}

.mdi-set, .mdi:before {
    display: inline-block;
    font: normal normal normal 24px / 1 Material Design Icons;
    font-size: inherit;
    text-rendering: auto;
    line-height: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>