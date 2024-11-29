<template>
    <div >
  <div  class="v-step-0">
    <div class="row">
      <div class="col-md-12">
        <div class="section-header">
          <h3>Forfaits</h3>
          <p class="text-muted font-weight-light">
            Sélectionner le forfait que tu souhaites activer
          </p>
        </div>
      </div>
    </div>

    <div class="row">

      <div class="skeleton-loader" v-if="loading"> 
          <div class="skeleton-text"></div> 
      </div>

      <div  class="col-md-3 service-card" v-else>
        <div>
          <div>
            <h3  class="text-truncate">Wabaa</h3>    
          </div>
          <p  class="text-muted"></p>
          <div  class="service-card-bottom">
            <button class="btn btn-secondary ripple" @click="openWabaa">
              <span class="float-left">Afficher</span>
              <i class="mdi mdi-arrow-right float-right"></i>
            </button>
          </div>
        </div>
      </div>


      <div class="skeleton-loader" v-if="loading"> 
          <div class="skeleton-text"></div> 
      </div>
      <div v-else  class="col-md-3 service-card">
        
        <div>
          <div>
            <h3  class="text-truncate">Internet</h3>   
          </div>
          <p  class="text-muted"></p>
          <div  class="service-card-bottom">
            <button class="btn btn-secondary ripple" @click="openInternet">
              <span class="float-left">Afficher</span>
              <i class="mdi mdi-arrow-right float-right"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="skeleton-loader" v-if="loading"> 
          <div class="skeleton-text"></div> 
      </div>
      <div v-else class="col-md-3 service-card">
        <div>
          <div>
            <h3  class="text-truncate">Yellow game</h3>    
          </div>
          <p  class="text-muted"></p>
          <div  class="service-card-bottom">
            <button class="btn btn-secondary ripple" @click="openGame">
              <span class="float-left">Afficher</span>
              <i class="mdi mdi-arrow-right float-right"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="skeleton-loader" v-if="loading"> 
          <div class="skeleton-text"></div> 
      </div>
      <div v-else class="col-md-3 service-card">
        <div>
          <div>
            <h3  class="text-truncate">Maxi</h3> 
          </div>
          <p  class="text-muted"></p>
          <div  class="service-card-bottom">
            <button class="btn btn-secondary ripple" @click="openMaxi">
              <span class="float-left">Afficher</span>
              <i class="mdi mdi-arrow-right float-right"></i>
            </button>
          </div>
        </div>
      </div>

      <div v-if="!loading" class="col-md-3 service-card">
        <div >
          <div>
            <h3  class="text-truncate">Go Pack</h3>     
          </div>
          <p  class="text-muted"></p>
          <div  class="service-card-bottom">
            <button class="btn btn-secondary ripple" @click="openGopack">
              <span class="float-left">Afficher</span>
              <i class="mdi mdi-arrow-right float-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    
<transition
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
  >
  <div v-if="isGameOpen" tabindex="-1" class="b-sidebar-outer bundle-sidebar my-sidebar-popup">
    <div tabindex="0"></div>
    <div id="bundle_sidebar_yellow_game" 
        tabindex="-1" 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="bundle_sidebar_yellow_game___title__" 
        class="b-sidebar shadow b-sidebar-right bg-light text-dark" 
        style=""
    >  

            <header class="b-sidebar-header">
            <button type="button" aria-label="Close" class="close text-dark"  @click="closeGame">
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
                    <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                    ></path>
                </g>
                </svg>
            </button>
            <strong id="bundle_sidebar_yellow_game___title__">Yellow Game</strong>
            </header>


            <div class="b-sidebar-body">
            <div>
                <div class="bundle-sidebar-header">
                <div id="bundle_filter_list">
                    <div class="row">
                    <div class="col bundle-filter-item active">
                        <div class="text-truncate">Jours</div>
                    </div>
                    </div>
                </div>
                </div>

                <div role="tablist" class="accordion">
                <!-- First Card -->

            <div class="card collapsed">
                <header
                    role="tab"
                    class="card-header p-1"
                    @click="toggleCollapse(0)"
                >
                    <div
                    class="bundle-activation-card-header"
                    role="button"
                    tabindex="0"
                    :aria-expanded="collapsedCards[0]"
                    :aria-controls="'accordion0'"
                    style="overflow-anchor: none;"
                    >
                    <div class="font-weight-bold">50 FCFA</div>
                    <p class="text-muted">Yellow_Game_3Days</p>
                    <span class="icon" v-if="collapsedCards[0]">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                        <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                        </svg>
                    </span>
                    <span class="icon" v-else>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                        <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
                        </svg>
                    </span>
                    </div>
                </header>

                <div :id="'accordion0'" v-show="collapsedCards[0]" role="tabpanel">
                  <InfosModal />
                </div>
            </div>


                
                <div class="card collapsed">
                    <header
                    role="tab"
                    class="card-header p-1"
                    @click="toggleCollapse(1)"
                >
                    <div
                    class="bundle-activation-card-header"
                    role="button"
                    tabindex="1"
                    :aria-expanded="collapsedCards[1]"
                    :aria-controls="'accordion1'"
                    style="overflow-anchor: none;"
                    >
                    <div class="font-weight-bold">100 FCFA</div>
                    <p class="text-muted">Yellow_Game_3Days(100F/200MB/3D)</p>
                    <span class="icon" v-if="collapsedCards[1]">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                        <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                        </svg>
                    </span>
                    <span class="icon" v-else>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                        <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
                        </svg>
                    </span>
                    </div>
                </header>

                        <div :id="'accordion1'" v-show="collapsedCards[1]" role="tabpane2">
                          <InfosModal />
                    </div>
                </div>



                <div class="card collapsed">
                    <header
                    role="tab"
                    class="card-header p-1"
                    @click="toggleCollapse(2)"
                >

                    <div
                    class="bundle-activation-card-header"
                    role="button"
                    tabindex="2"
                    :aria-expanded="collapsedCards[2]"
                    :aria-controls="'accordion2'"
                    style="overflow-anchor: none;"
                    >

                    <div class="font-weight-bold">150 FCFA</div>
                        <p class="text-muted">Yellow_Game_Weekly(150F/400MB/7D)</p>
                        <span class="icon" v-if="collapsedCards[2]">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
                        </span>
                        <span class="icon" v-else>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                        </span>
                    </div>
                    </header>

                    <div :id="'accordion3'" v-show="collapsedCards[2]" role="tabpane3">
                      <InfosModal />
                    </div>
                </div>
                </div>
            </div>
            </div>


    </div>

    <transition
        enter-active-class="animate__animated animate__slideInLeft"
        leave-active-class="animate__animated animate__slideOutLeft"
      >
        <div 
            class="b-sidebar-backdrop bg-dark" 
            @click.self="closeGame"
            style="cursor: pointer"
            >
            </div>

</transition>
</div>

</transition>


<transition
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
  >
  <div v-if="isWabaaOpen" tabindex="-1" class="b-sidebar-outer bundle-sidebar my-sidebar-popup">
    <div tabindex="0"></div>
    <div
      id="bundle_sidebar_wabaa"
      tabindex="-1"
      role="dialog"
      aria-modal="true"
      aria-labelledby="bundle_sidebar_wabaa___title__"
      class="b-sidebar shadow b-sidebar-right bg-light text-dark"
    >
      <header class="b-sidebar-header">
        <button type="button" aria-label="Close" class="close text-dark" @click="closeWabaa">
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
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              ></path>
            </g>
          </svg>
        </button>
        <strong id="bundle_sidebar_wabaa___title__">Wabaa</strong>
      </header>
      <div class="b-sidebar-body">
        <div>
          <div class="bundle-sidebar-header"> 
            <div id="bundle_filter_list"> 
              <div class="row"> 
                <div class="col bundle-filter-item" :class="{ active: activeTab === 'jours' }" 
                  @click="setActiveTab('jours')" > 
                  <div class="text-truncate">Jours</div> 
                </div> 
                <div class="col bundle-filter-item" :class="{ active: activeTab === 'semaines' }" @click="setActiveTab('semaines')" > 
                  <div class="text-truncate">Semaines</div> 
                </div> 
                <div class="col bundle-filter-item" :class="{ active: activeTab === 'mois' }" @click="setActiveTab('mois')" > 
                  <div class="text-truncate">Mois</div> 
                </div> 
              </div> 
            </div> 
          </div>

          
          <div class="tab-content"> 
            <div v-if="activeTab === 'jours'">
              <div role="tablist" class="accordion">
                <div class="card collapsed">
          
                  <header  @click="toggleCollapse(3)" role="tab" class="card-header p-1">
                    <div
                      class="bundle-activation-card-header"
                      role="button"
                      tabindex="3"
                      :aria-expanded="collapsedCards[3]"
                      :aria-controls="'accordion3'"
                      style="overflow-anchor: none;"
                    >
                      <div class="font-weight-bold">100 FCFA</div>
                      <p class="text-muted">Wabaa 100F (4 min/24H)</p>
                      <span v-if="collapsedCards[3]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
                      <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
                    </div>
                  </header>

                  <transition
                    name="custom-classes-transition"
                    enter-active-class="animate__animated animate__slideInDown"
                    leave-active-class="animate__animated animate__slideOutUp"
                  >
                  <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[3]" role="tabpane4">
                    <InfosModal />
                  </div>

                  </transition>
                </div>

                <div class="card collapsed">
    <header @click="toggleCollapse(6)" role="tab" class="card-header p-1">
      <div 
        class="bundle-activation-card-header not-collapsed" 
        role="button" 
        tabindex="6" 
        :aria-expanded="collapsedCards[6]" 
        :aria-controls="'accordion6'" 
        style="overflow-anchor: none;">
        <div class="font-weight-bold">150 FCFA</div>
        <p class="text-muted">Wabaa 150F (6 min/24H)</p>
        <span v-if="collapsedCards[6]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
        <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
      </div>
    </header>
    
    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__slideInDown"
      leave-active-class="animate__animated animate__slideOutUp"
    >

    <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[6]" role="tabpane4">
            <InfosModal />
          </div>
    </transition>
                </div>

                <div class="card collapsed">
          
          <header  @click="toggleCollapse(15)" role="tab" class="card-header p-1">
            <div
              class="bundle-activation-card-header"
              role="button"
              tabindex="14"
              :aria-expanded="collapsedCards[15]"
              :aria-controls="'accordion14'"
              style="overflow-anchor: none;"
            >
              <div class="font-weight-bold">200 FCFA</div>
              <p class="text-muted">Wabaa 200F (8 min/24H)</p>
              <span v-if="collapsedCards[15]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
              <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
            </div>
          </header>

          <transition
            name="custom-classes-transition"
            enter-active-class="animate__animated animate__slideInDown"
            leave-active-class="animate__animated animate__slideOutUp"
            >
          <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[15]" role="tabpane4">
            <InfosModal />
          </div>

          </transition>
        </div>

        <div class="card collapsed">
          
          <header  @click="toggleCollapse(13)" role="tab" class="card-header p-1">
            <div
              class="bundle-activation-card-header"
              role="button"
              tabindex="13"
              :aria-expanded="collapsedCards[13]"
              :aria-controls="'accordion13'"
              style="overflow-anchor: none;"
            >
              <div class="font-weight-bold">300 FCFA</div>
              <p class="text-muted">Wabaa 300F (12 min/24H)</p>
              <span v-if="collapsedCards[13]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
              <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
            </div>
          </header>

          <transition
name="custom-classes-transition"
enter-active-class="animate__animated animate__slideInDown"
leave-active-class="animate__animated animate__slideOutUp"
>
          <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[13]" role="tabpane4">
            <InfosModal />
          </div>

          </transition>
        </div>

        <div class="card collapsed">
          
          <header  @click="toggleCollapse(12)" role="tab" class="card-header p-1">
            <div
              class="bundle-activation-card-header"
              role="button"
              tabindex="12"
              :aria-expanded="collapsedCards[12]"
              :aria-controls="'accordion3'"
              style="overflow-anchor: none;"
            >
              <div class="font-weight-bold">500 FCFA</div>
              <p class="text-muted">Wabaa 500F (20 min/3J)</p>
              <span v-if="collapsedCards[12]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
              <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
            </div>
          </header>

          <transition
name="custom-classes-transition"
enter-active-class="animate__animated animate__slideInDown"
leave-active-class="animate__animated animate__slideOutUp"
>
          <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[12]" role="tabpane4">
            <InfosModal />
          </div>

          </transition>
        </div>

                
              </div>
            </div>

            <div v-if="activeTab === 'semaines'">
              <div role="tablist" class="accordion">
                <div class="card collapsed">
          
                  <header  @click="toggleCollapse(7)" role="tab" class="card-header p-1">
                    <div
                      class="bundle-activation-card-header"
                      role="button"
                      tabindex="3"
                      :aria-expanded="collapsedCards[7]"
                      :aria-controls="'accordion7'"
                      style="overflow-anchor: none;"
                    >
                      <div class="font-weight-bold">500 FCFA</div>
                      <p class="text-muted">Wabaa 500F (20 min/24H)</p>
                      <span v-if="collapsedCards[7]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
                      <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
                    </div>
                  </header>

                  <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__slideInDown"
      leave-active-class="animate__animated animate__slideOutUp"
    >
                  <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[7]" role="tabpane4">
                    <InfosModal />
                  </div>

                  </transition>
                </div>

                <div class="card collapsed">
          
          <header  @click="toggleCollapse(8)" role="tab" class="card-header p-1">
            <div
              class="bundle-activation-card-header"
              role="button"
              tabindex="3"
              :aria-expanded="collapsedCards[8]"
              :aria-controls="'accordion7'"
              style="overflow-anchor: none;"
            >
              <div class="font-weight-bold">1000 FCFA</div>
              <p class="text-muted">Wabaa 1000F (40 min/7J)</p>
              <span v-if="collapsedCards[8]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
              <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
            </div>
          </header>

          <transition
            name="custom-classes-transition"
            enter-active-class="animate__animated animate__slideInDown"
            leave-active-class="animate__animated animate__slideOutUp"
            >
          <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[8]" role="tabpane4">
            <InfosModal />
          </div>

          </transition>
        </div>

        <div class="card collapsed">
          
          <header  @click="toggleCollapse(9)" role="tab" class="card-header p-1">
            <div
              class="bundle-activation-card-header"
              role="button"
              tabindex="3"
              :aria-expanded="collapsedCards[9]"
              :aria-controls="'accordion9'"
              style="overflow-anchor: none;"
            >
              <div class="font-weight-bold">1500 FCFA</div>
              <p class="text-muted">Wabaa 1500F (62 min/7J)</p>
              <span v-if="collapsedCards[9]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
              <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
            </div>
          </header>

          <transition
            name="custom-classes-transition"
            enter-active-class="animate__animated animate__slideInDown"
            leave-active-class="animate__animated animate__slideOutUp"
            >
          <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[9]" role="tabpane4">
            <InfosModal />
          </div>

          </transition>
        </div>
              
              </div>
            </div>

            <div v-if="activeTab === 'mois'">
              <div role="tablist" class="accordion">
                <div class="card collapsed">
          
          <header  @click="toggleCollapse(10)" role="tab" class="card-header p-1">
            <div
              class="bundle-activation-card-header"
              role="button"
              tabindex="3"
              :aria-expanded="collapsedCards[10]"
              :aria-controls="'accordion9'"
              style="overflow-anchor: none;"
            >
              <div class="font-weight-bold">2500 FCFA</div>
              <p class="text-muted">Wabaa 2500F (102 min/20J)</p>
              <span v-if="collapsedCards[10]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
              <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
            </div>
          </header>

          <transition
            name="custom-classes-transition"
            enter-active-class="animate__animated animate__slideInDown"
            leave-active-class="animate__animated animate__slideOutUp"
            >
          <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[10]" role="tabpane4">
            <InfosModal />
          </div>

          </transition>
                </div>

        <div class="card collapsed">
          
          <header  @click="toggleCollapse(11)" role="tab" class="card-header p-1">
            <div
              class="bundle-activation-card-header"
              role="button"
              tabindex="3"
              :aria-expanded="collapsedCards[11]"
              :aria-controls="'accordion11'"
              style="overflow-anchor: none;"
            >
              <div class="font-weight-bold">5000 FCFA</div>
              <p class="text-muted">Wabaa 5000F (208 min/30J)</p>
              <span v-if="collapsedCards[11]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
              <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
            </div>
          </header>

          <transition
            name="custom-classes-transition"
            enter-active-class="animate__animated animate__slideInDown"
            leave-active-class="animate__animated animate__slideOutUp"
            >
          <div :id="'accordion11'" class="collapse show" v-show="collapsedCards[11]" role="tabpane11">
            <InfosModal />
          </div>

          </transition>
        </div>
              
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>

    <transition
        enter-active-class="animate__animated animate__slideInLeft"
        leave-active-class="animate__animated animate__slideOutLeft"
      >
    <div 
  class="b-sidebar-backdrop bg-dark" 
  @click.self="closeWabaa"
  style="cursor: pointer"
>
  </div>
</transition>

</div>

</transition>





<!-- INTERNET MODAL -->
<transition
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
  >
  <div v-if="isInternetOpen" tabindex="-1" class="b-sidebar-outer bundle-sidebar my-sidebar-popup">
    <div tabindex="0"></div>
    <div
      id="bundle_sidebar_wabaa"
      tabindex="-1"
      role="dialog"
      aria-modal="true"
      aria-labelledby="bundle_sidebar_wabaa___title__"
      class="b-sidebar shadow b-sidebar-right bg-light text-dark"
    >
      <header class="b-sidebar-header">
        <button type="button" aria-label="Close" class="close text-dark" @click="closeInternet">
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
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              ></path>
            </g>
          </svg>
        </button>
        <strong id="bundle_sidebar_wabaa___title__">Internet</strong>
      </header>
      <div class="b-sidebar-body">
        <div>
          <div class="bundle-sidebar-header"> 
            <div id="bundle_filter_list"> 
              <div class="row"> 
                <div class="col bundle-filter-item" :class="{ active: activeTab === 'jours' }" 
                  @click="setActiveTab('jours')" > 
                  <div class="text-truncate">Jours</div> 
                </div> 
                <div class="col bundle-filter-item" :class="{ active: activeTab === 'semaines' }" @click="setActiveTab('semaines')" > 
                  <div class="text-truncate">Semaines</div> 
                </div> 
                <div class="col bundle-filter-item" :class="{ active: activeTab === 'mois' }" @click="setActiveTab('mois')" > 
                  <div class="text-truncate">Mois</div> 
                </div>
                <div class="col bundle-filter-item" :class="{ active: activeTab === 'illimites' }" @click="setActiveTab('illimites')" > 
                  <div class="text-truncate">Illimités</div> 
                </div> 
              </div> 
            </div> 
          </div>

          
          <div class="tab-content"> 
            <div v-if="activeTab === 'jours'">
              <div role="tablist" class="accordion">
                <div class="card collapsed">
          
                  <header  @click="toggleCollapse(3)" role="tab" class="card-header p-1">
                    <div
                      class="bundle-activation-card-header"
                      role="button"
                      tabindex="3"
                      :aria-expanded="collapsedCards[3]"
                      :aria-controls="'accordion3'"
                      style="overflow-anchor: none;"
                    >
                      <div class="font-weight-bold">100 FCFA</div>
                      <p class="text-muted">100F/70Mo/24h</p>
                      <span v-if="collapsedCards[3]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
                      <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
                    </div>
                  </header>

                  <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__slideInDown"
      leave-active-class="animate__animated animate__slideOutUp"
    >
                  <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[3]" role="tabpane4">
                    <InfosModal />
                  </div>

                  </transition>
                </div>

                <div class="card collapsed">
    <header @click="toggleCollapse(6)" role="tab" class="card-header p-1">
      <div 
        class="bundle-activation-card-header not-collapsed" 
        role="button" 
        tabindex="6" 
        :aria-expanded="collapsedCards[6]" 
        :aria-controls="'accordion6'" 
        style="overflow-anchor: none;">
        <div class="font-weight-bold">150 FCFA</div>
        <p class="text-muted">150F/120Mo/24h</p>
        <span v-if="collapsedCards[6]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
        <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
      </div>
    </header>
    
    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__slideInDown"
      leave-active-class="animate__animated animate__slideOutUp"
    >

    <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[6]" role="tabpane4">
            <InfosModal />
          </div>
    </transition>
                </div>

                <div class="card collapsed">
          
          <header  @click="toggleCollapse(14)" role="tab" class="card-header p-1">
            <div
              class="bundle-activation-card-header"
              role="button"
              tabindex="14"
              :aria-expanded="collapsedCards[14]"
              :aria-controls="'accordion14'"
              style="overflow-anchor: none;"
            >
              <div class="font-weight-bold">200 FCFA</div>
              <p class="text-muted">200F/170Mo/24h</p>
              <span v-if="collapsedCards[14]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
              <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
            </div>
          </header>

          <transition
            name="custom-classes-transition"
            enter-active-class="animate__animated animate__slideInDown"
            leave-active-class="animate__animated animate__slideOutUp"
            >
          <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[14]" role="tabpane4">
            <InfosModal />
          </div>

          </transition>
        </div>

        <div class="card collapsed">
          
          <header  @click="toggleCollapse(16)" role="tab" class="card-header p-1">
            <div
              class="bundle-activation-card-header"
              role="button"
              tabindex="16"
              :aria-expanded="collapsedCards[16]"
              :aria-controls="'accordion16'"
              style="overflow-anchor: none;"
            >
              <div class="font-weight-bold">250 FCFA</div>
              <p class="text-muted">250F/220Mo/24h</p>
              <span v-if="collapsedCards[13]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
              <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
            </div>
          </header>

          <transition
name="custom-classes-transition"
enter-active-class="animate__animated animate__slideInDown"
leave-active-class="animate__animated animate__slideOutUp"
>
          <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[16]" role="tabpane4">
            <InfosModal />
          </div>

          </transition>
        </div>

        <div class="card collapsed">
          
          <header  @click="toggleCollapse(13)" role="tab" class="card-header p-1">
            <div
              class="bundle-activation-card-header"
              role="button"
              tabindex="13"
              :aria-expanded="collapsedCards[13]"
              :aria-controls="'accordion13'"
              style="overflow-anchor: none;"
            >
              <div class="font-weight-bold">300 FCFA</div>
              <p class="text-muted">300F/260Mo/24h</p>
              <span v-if="collapsedCards[13]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
              <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
            </div>
          </header>

          <transition
name="custom-classes-transition"
enter-active-class="animate__animated animate__slideInDown"
leave-active-class="animate__animated animate__slideOutUp"
>
          <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[13]" role="tabpane4">
            <InfosModal />
          </div>

          </transition>
        </div>

        <div class="card collapsed">
          
          <header  @click="toggleCollapse(12)" role="tab" class="card-header p-1">
            <div
              class="bundle-activation-card-header"
              role="button"
              tabindex="12"
              :aria-expanded="collapsedCards[12]"
              :aria-controls="'accordion3'"
              style="overflow-anchor: none;"
            >
              <div class="font-weight-bold">500 FCFA</div>
              <p class="text-muted">500F/450Mo/03J</p>
              <span v-if="collapsedCards[12]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
              <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
            </div>
          </header>

          <transition
name="custom-classes-transition"
enter-active-class="animate__animated animate__slideInDown"
leave-active-class="animate__animated animate__slideOutUp"
>
          <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[12]" role="tabpane4">
            <InfosModal />
          </div>

          </transition>
        </div>

                
              </div>
            </div>

            <div v-if="activeTab === 'semaines'">
              <div role="tablist" class="accordion">
                <div class="card collapsed">
          
                  <header  @click="toggleCollapse(7)" role="tab" class="card-header p-1">
                    <div
                      class="bundle-activation-card-header"
                      role="button"
                      tabindex="3"
                      :aria-expanded="collapsedCards[7]"
                      :aria-controls="'accordion7'"
                      style="overflow-anchor: none;"
                    >
                      <div class="font-weight-bold">500 FCFA</div>
                      <p class="text-muted">Wabaa 500F (20 min/24H)</p>
                      <span v-if="collapsedCards[7]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
                      <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
                    </div>
                  </header>

                  <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__slideInDown"
      leave-active-class="animate__animated animate__slideOutUp"
    >
                  <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[7]" role="tabpane4">
                    <InfosModal />
                  </div>

                  </transition>
                </div>

                <div class="card collapsed">
          
          <header  @click="toggleCollapse(8)" role="tab" class="card-header p-1">
            <div
              class="bundle-activation-card-header"
              role="button"
              tabindex="3"
              :aria-expanded="collapsedCards[8]"
              :aria-controls="'accordion7'"
              style="overflow-anchor: none;"
            >
              <div class="font-weight-bold">1000 FCFA</div>
              <p class="text-muted">Wabaa 1000F (40 min/7J)</p>
              <span v-if="collapsedCards[8]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
              <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
            </div>
          </header>

          <transition
            name="custom-classes-transition"
            enter-active-class="animate__animated animate__slideInDown"
            leave-active-class="animate__animated animate__slideOutUp"
            >
          <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[8]" role="tabpane4">
            <InfosModal />
          </div>

          </transition>
        </div>

        <div class="card collapsed">
          
          <header  @click="toggleCollapse(9)" role="tab" class="card-header p-1">
            <div
              class="bundle-activation-card-header"
              role="button"
              tabindex="3"
              :aria-expanded="collapsedCards[9]"
              :aria-controls="'accordion9'"
              style="overflow-anchor: none;"
            >
              <div class="font-weight-bold">1500 FCFA</div>
              <p class="text-muted">Wabaa 1500F (62 min/7J)</p>
              <span v-if="collapsedCards[9]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
              <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
            </div>
          </header>

          <transition
            name="custom-classes-transition"
            enter-active-class="animate__animated animate__slideInDown"
            leave-active-class="animate__animated animate__slideOutUp"
            >
          <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[9]" role="tabpane4">
            <InfosModal />
          </div>

          </transition>
        </div>
              
              </div>
            </div>

            <div v-if="activeTab === 'mois'">
              <div role="tablist" class="accordion">
                <div class="card collapsed">
          
          <header  @click="toggleCollapse(10)" role="tab" class="card-header p-1">
            <div
              class="bundle-activation-card-header"
              role="button"
              tabindex="3"
              :aria-expanded="collapsedCards[10]"
              :aria-controls="'accordion9'"
              style="overflow-anchor: none;"
            >
              <div class="font-weight-bold">2500 FCFA</div>
              <p class="text-muted">Wabaa 2500F (102 min/20J)</p>
              <span v-if="collapsedCards[10]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
              <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
            </div>
          </header>

          <transition
            name="custom-classes-transition"
            enter-active-class="animate__animated animate__slideInDown"
            leave-active-class="animate__animated animate__slideOutUp"
            >
          <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[10]" role="tabpane4">
            <InfosModal />
          </div>

          </transition>
                </div>

        <div class="card collapsed">
          
          <header  @click="toggleCollapse(11)" role="tab" class="card-header p-1">
            <div
              class="bundle-activation-card-header"
              role="button"
              tabindex="3"
              :aria-expanded="collapsedCards[11]"
              :aria-controls="'accordion11'"
              style="overflow-anchor: none;"
            >
              <div class="font-weight-bold">5000 FCFA</div>
              <p class="text-muted">Wabaa 5000F (208 min/30J)</p>
              <span v-if="collapsedCards[11]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
              <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
            </div>
          </header>

          <transition
            name="custom-classes-transition"
            enter-active-class="animate__animated animate__slideInDown"
            leave-active-class="animate__animated animate__slideOutUp"
            >
          <div :id="'accordion11'" class="collapse show" v-show="collapsedCards[11]" role="tabpane11">
            <InfosModal />
          </div>

          </transition>
        </div>
              
              </div>
            </div>

            <div v-if="activeTab === 'illimites'">
              <div role="tablist" class="accordion">
                <div class="card collapsed">
          
          <header  @click="toggleCollapse(10)" role="tab" class="card-header p-1">
            <div
              class="bundle-activation-card-header"
              role="button"
              tabindex="3"
              :aria-expanded="collapsedCards[10]"
              :aria-controls="'accordion9'"
              style="overflow-anchor: none;"
            >
              <div class="font-weight-bold">2500 FCFA</div>
              <p class="text-muted">Wabaa 2500F (102 min/20J)</p>
              <span v-if="collapsedCards[10]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
              <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
            </div>
          </header>

          <transition
            name="custom-classes-transition"
            enter-active-class="animate__animated animate__slideInDown"
            leave-active-class="animate__animated animate__slideOutUp"
            >
          <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[10]" role="tabpane4">
            <InfosModal />
          </div>

          </transition>
                </div>

        <div class="card collapsed">
          
          <header  @click="toggleCollapse(11)" role="tab" class="card-header p-1">
            <div
              class="bundle-activation-card-header"
              role="button"
              tabindex="3"
              :aria-expanded="collapsedCards[11]"
              :aria-controls="'accordion11'"
              style="overflow-anchor: none;"
            >
              <div class="font-weight-bold">5000 FCFA</div>
              <p class="text-muted">Wabaa 5000F (208 min/30J)</p>
              <span v-if="collapsedCards[11]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
              <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
            </div>
          </header>

          <transition
            name="custom-classes-transition"
            enter-active-class="animate__animated animate__slideInDown"
            leave-active-class="animate__animated animate__slideOutUp"
            >
          <div :id="'accordion11'" class="collapse show" v-show="collapsedCards[11]" role="tabpane11">
            <InfosModal />
          </div>

          </transition>
        </div>
              
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>

    <transition
        enter-active-class="animate__animated animate__slideInLeft"
        leave-active-class="animate__animated animate__slideOutLeft"
      >
    <div 
  class="b-sidebar-backdrop bg-dark" 
  @click.self="closeInternet"
  style="cursor: pointer"
>
  </div>
</transition>

</div>

</transition>


<!-- Maxi MODAL -->
<transition
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
  >
  <div v-if="isMaxiOpen" tabindex="-1" class="b-sidebar-outer bundle-sidebar my-sidebar-popup">
    <div tabindex="0"></div>
    <div
      id="bundle_sidebar_wabaa"
      tabindex="-1"
      role="dialog"
      aria-modal="true"
      aria-labelledby="bundle_sidebar_wabaa___title__"
      class="b-sidebar shadow b-sidebar-right bg-light text-dark"
    >
      <header class="b-sidebar-header">
        <button type="button" aria-label="Close" class="close text-dark" @click="closeMaxi">
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
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              ></path>
            </g>
          </svg>
        </button>
        <strong id="bundle_sidebar_wabaa___title__">MaXi</strong>
      </header>
      <div class="b-sidebar-body">
        <div>
          <div class="bundle-sidebar-header"> 
            <div id="bundle_filter_list"> 
              <div class="row"> 
                <div class="col bundle-filter-item" :class="{ active: activeTab === 'jours' }" 
                  @click="setActiveTab('jours')" > 
                  <div class="text-truncate">Jours</div> 
                </div> 
                <div class="col bundle-filter-item" :class="{ active: activeTab === 'semaines' }" @click="setActiveTab('semaines')" > 
                  <div class="text-truncate">Semaines</div> 
                </div> 
                <div class="col bundle-filter-item" :class="{ active: activeTab === 'mois' }" @click="setActiveTab('mois')" > 
                  <div class="text-truncate">Mois</div> 
                </div>
                <div class="col bundle-filter-item" :class="{ active: activeTab === 'illimites' }" @click="setActiveTab('illimites')" > 
                  <div class="text-truncate">Illimités</div> 
                </div> 
              </div> 
            </div> 
          </div>

          
          <div class="tab-content"> 
            <div v-if="activeTab === 'jours'">
              <div role="tablist" class="accordion">
                <div class="card collapsed">
          
                  <header  @click="toggleCollapse(3)" role="tab" class="card-header p-1">
                    <div
                      class="bundle-activation-card-header"
                      role="button"
                      tabindex="3"
                      :aria-expanded="collapsedCards[3]"
                      :aria-controls="'accordion3'"
                      style="overflow-anchor: none;"
                    >
                      <div class="font-weight-bold">100 FCFA</div>
                      <p class="text-muted">Wabaa 100F (4 min/24H)</p>
                      <span v-if="collapsedCards[3]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
                      <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
                    </div>
                  </header>

                  <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__slideInDown"
      leave-active-class="animate__animated animate__slideOutUp"
    >
                  <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[3]" role="tabpane4">
                    <InfosModal />
                  </div>

                  </transition>
                </div>

                <div class="card collapsed">
    <header @click="toggleCollapse(6)" role="tab" class="card-header p-1">
      <div 
        class="bundle-activation-card-header not-collapsed" 
        role="button" 
        tabindex="6" 
        :aria-expanded="collapsedCards[6]" 
        :aria-controls="'accordion6'" 
        style="overflow-anchor: none;">
        <div class="font-weight-bold">150 FCFA</div>
        <p class="text-muted">Wabaa 150F (6 min/24H)</p>
        <span v-if="collapsedCards[6]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
        <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
      </div>
    </header>
    
    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__slideInDown"
      leave-active-class="animate__animated animate__slideOutUp"
    >

    <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[6]" role="tabpane4">
            <InfosModal />
          </div>
    </transition>
                </div>

                <div class="card collapsed">
          
          <header  @click="toggleCollapse(14)" role="tab" class="card-header p-1">
            <div
              class="bundle-activation-card-header"
              role="button"
              tabindex="14"
              :aria-expanded="collapsedCards[14]"
              :aria-controls="'accordion14'"
              style="overflow-anchor: none;"
            >
              <div class="font-weight-bold">200 FCFA</div>
              <p class="text-muted">Wabaa 200F (8 min/24H)</p>
              <span v-if="collapsedCards[14]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
              <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
            </div>
          </header>

          <transition
            name="custom-classes-transition"
            enter-active-class="animate__animated animate__slideInDown"
            leave-active-class="animate__animated animate__slideOutUp"
            >
          <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[14]" role="tabpane4">
            <InfosModal />
          </div>

          </transition>
        </div>

        <div class="card collapsed">
          
          <header  @click="toggleCollapse(13)" role="tab" class="card-header p-1">
            <div
              class="bundle-activation-card-header"
              role="button"
              tabindex="13"
              :aria-expanded="collapsedCards[13]"
              :aria-controls="'accordion13'"
              style="overflow-anchor: none;"
            >
              <div class="font-weight-bold">300 FCFA</div>
              <p class="text-muted">Wabaa 300F (12 min/24H)</p>
              <span v-if="collapsedCards[13]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
              <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
            </div>
          </header>

          <transition
name="custom-classes-transition"
enter-active-class="animate__animated animate__slideInDown"
leave-active-class="animate__animated animate__slideOutUp"
>
          <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[13]" role="tabpane4">
            <InfosModal />
          </div>

          </transition>
        </div>

        <div class="card collapsed">
          
          <header  @click="toggleCollapse(12)" role="tab" class="card-header p-1">
            <div
              class="bundle-activation-card-header"
              role="button"
              tabindex="12"
              :aria-expanded="collapsedCards[12]"
              :aria-controls="'accordion3'"
              style="overflow-anchor: none;"
            >
              <div class="font-weight-bold">500 FCFA</div>
              <p class="text-muted">Wabaa 500F (20 min/3J)</p>
              <span v-if="collapsedCards[12]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
              <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
            </div>
          </header>

          <transition
name="custom-classes-transition"
enter-active-class="animate__animated animate__slideInDown"
leave-active-class="animate__animated animate__slideOutUp"
>
          <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[12]" role="tabpane4">
            <InfosModal />
          </div>

          </transition>
        </div>

                
              </div>
            </div>

            <div v-if="activeTab === 'semaines'">
              <div role="tablist" class="accordion">
                <div class="card collapsed">
          
                  <header  @click="toggleCollapse(7)" role="tab" class="card-header p-1">
                    <div
                      class="bundle-activation-card-header"
                      role="button"
                      tabindex="3"
                      :aria-expanded="collapsedCards[7]"
                      :aria-controls="'accordion7'"
                      style="overflow-anchor: none;"
                    >
                      <div class="font-weight-bold">500 FCFA</div>
                      <p class="text-muted">Wabaa 500F (20 min/24H)</p>
                      <span v-if="collapsedCards[7]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
                      <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
                    </div>
                  </header>

                  <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__slideInDown"
      leave-active-class="animate__animated animate__slideOutUp"
    >
                  <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[7]" role="tabpane4">
                    <InfosModal />
                  </div>

                  </transition>
                </div>

                <div class="card collapsed">
          
          <header  @click="toggleCollapse(8)" role="tab" class="card-header p-1">
            <div
              class="bundle-activation-card-header"
              role="button"
              tabindex="3"
              :aria-expanded="collapsedCards[8]"
              :aria-controls="'accordion7'"
              style="overflow-anchor: none;"
            >
              <div class="font-weight-bold">1000 FCFA</div>
              <p class="text-muted">Wabaa 1000F (40 min/7J)</p>
              <span v-if="collapsedCards[8]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
              <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
            </div>
          </header>

          <transition
            name="custom-classes-transition"
            enter-active-class="animate__animated animate__slideInDown"
            leave-active-class="animate__animated animate__slideOutUp"
            >
          <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[8]" role="tabpane4">
            <InfosModal />
          </div>

          </transition>
        </div>

        <div class="card collapsed">
          
          <header  @click="toggleCollapse(9)" role="tab" class="card-header p-1">
            <div
              class="bundle-activation-card-header"
              role="button"
              tabindex="3"
              :aria-expanded="collapsedCards[9]"
              :aria-controls="'accordion9'"
              style="overflow-anchor: none;"
            >
              <div class="font-weight-bold">1500 FCFA</div>
              <p class="text-muted">Wabaa 1500F (62 min/7J)</p>
              <span v-if="collapsedCards[9]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
              <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
            </div>
          </header>

          <transition
            name="custom-classes-transition"
            enter-active-class="animate__animated animate__slideInDown"
            leave-active-class="animate__animated animate__slideOutUp"
            >
          <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[9]" role="tabpane4">
            <InfosModal />
          </div>

          </transition>
        </div>
              
              </div>
            </div>

            <div v-if="activeTab === 'mois'">
              <div role="tablist" class="accordion">
                <div class="card collapsed">
          
          <header  @click="toggleCollapse(10)" role="tab" class="card-header p-1">
            <div
              class="bundle-activation-card-header"
              role="button"
              tabindex="3"
              :aria-expanded="collapsedCards[10]"
              :aria-controls="'accordion9'"
              style="overflow-anchor: none;"
            >
              <div class="font-weight-bold">2500 FCFA</div>
              <p class="text-muted">Wabaa 2500F (102 min/20J)</p>
              <span v-if="collapsedCards[10]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
              <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
            </div>
          </header>

          <transition
            name="custom-classes-transition"
            enter-active-class="animate__animated animate__slideInDown"
            leave-active-class="animate__animated animate__slideOutUp"
            >
          <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[10]" role="tabpane4">
            <InfosModal />
          </div>

          </transition>
                </div>

        <div class="card collapsed">
          
          <header  @click="toggleCollapse(11)" role="tab" class="card-header p-1">
            <div
              class="bundle-activation-card-header"
              role="button"
              tabindex="3"
              :aria-expanded="collapsedCards[11]"
              :aria-controls="'accordion11'"
              style="overflow-anchor: none;"
            >
              <div class="font-weight-bold">5000 FCFA</div>
              <p class="text-muted">Wabaa 5000F (208 min/30J)</p>
              <span v-if="collapsedCards[11]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
              <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
            </div>
          </header>

          <transition
            name="custom-classes-transition"
            enter-active-class="animate__animated animate__slideInDown"
            leave-active-class="animate__animated animate__slideOutUp"
            >
          <div :id="'accordion11'" class="collapse show" v-show="collapsedCards[11]" role="tabpane11">
            <InfosModal />
          </div>

          </transition>
        </div>
              
              </div>
            </div>

            <div v-if="activeTab === 'illimites'">
              <div role="tablist" class="accordion">
                <div class="card collapsed">
          
          <header  @click="toggleCollapse(10)" role="tab" class="card-header p-1">
            <div
              class="bundle-activation-card-header"
              role="button"
              tabindex="3"
              :aria-expanded="collapsedCards[10]"
              :aria-controls="'accordion9'"
              style="overflow-anchor: none;"
            >
              <div class="font-weight-bold">2500 FCFA</div>
              <p class="text-muted">Wabaa 2500F (102 min/20J)</p>
              <span v-if="collapsedCards[10]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
              <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
            </div>
          </header>

          <transition
            name="custom-classes-transition"
            enter-active-class="animate__animated animate__slideInDown"
            leave-active-class="animate__animated animate__slideOutUp"
            >
          <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[10]" role="tabpane4">
            <InfosModal />
          </div>

          </transition>
                </div>

        <div class="card collapsed">
          
          <header  @click="toggleCollapse(11)" role="tab" class="card-header p-1">
            <div
              class="bundle-activation-card-header"
              role="button"
              tabindex="3"
              :aria-expanded="collapsedCards[11]"
              :aria-controls="'accordion11'"
              style="overflow-anchor: none;"
            >
              <div class="font-weight-bold">5000 FCFA</div>
              <p class="text-muted">Wabaa 5000F (208 min/30J)</p>
              <span v-if="collapsedCards[11]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
              <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
            </div>
          </header>

          <transition
            name="custom-classes-transition"
            enter-active-class="animate__animated animate__slideInDown"
            leave-active-class="animate__animated animate__slideOutUp"
            >
          <div :id="'accordion11'" class="collapse show" v-show="collapsedCards[11]" role="tabpane11">
            <InfosModal />
          </div>

          </transition>
        </div>
              
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>

    <transition
        enter-active-class="animate__animated animate__slideInLeft"
        leave-active-class="animate__animated animate__slideOutLeft"
      >
    <div 
  class="b-sidebar-backdrop bg-dark" 
  @click.self="closeMaxi"
  style="cursor: pointer"
>
  </div>
</transition>

</div>

</transition>


<!-- GoPack MODAL -->
<transition
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
  >
  <div v-if="isGopackOpen" tabindex="-1" class="b-sidebar-outer bundle-sidebar my-sidebar-popup">
    <div tabindex="0"></div>
    <div
      id="bundle_sidebar_wabaa"
      tabindex="-1"
      role="dialog"
      aria-modal="true"
      aria-labelledby="bundle_sidebar_wabaa___title__"
      class="b-sidebar shadow b-sidebar-right bg-light text-dark"
    >
      <header class="b-sidebar-header">
        <button type="button" aria-label="Close" class="close text-dark" @click="closeGopack">
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
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              ></path>
            </g>
          </svg>
        </button>
        <strong id="bundle_sidebar_wabaa___title__">Go Pack</strong>
      </header>
      <div class="b-sidebar-body">
        <div>
          <div class="bundle-sidebar-header"> 
            <div id="bundle_filter_list"> 
              <div class="row"> 
                <div class="col bundle-filter-item" :class="{ active: activeTab === 'jours' }" 
                  @click="setActiveTab('jours')" > 
                  <div class="text-truncate">Jours</div> 
                </div> 
                <div class="col bundle-filter-item" :class="{ active: activeTab === 'semaines' }" @click="setActiveTab('semaines')" > 
                  <div class="text-truncate">Semaines</div> 
                </div> 
                <div class="col bundle-filter-item" :class="{ active: activeTab === 'mois' }" @click="setActiveTab('mois')" > 
                  <div class="text-truncate">Mois</div> 
                </div>
              </div> 
            </div> 
          </div>

          
          <div class="tab-content"> 
            <div v-if="activeTab === 'jours'">
              <div role="tablist" class="accordion">
                <div class="card collapsed">
          
                  <header  @click="toggleCollapse(3)" role="tab" class="card-header p-1">
                    <div
                      class="bundle-activation-card-header"
                      role="button"
                      tabindex="3"
                      :aria-expanded="collapsedCards[3]"
                      :aria-controls="'accordion3'"
                      style="overflow-anchor: none;"
                    >
                      <div class="font-weight-bold">100 FCFA</div>
                      <p class="text-muted">100F (3Min+3sms+3Mo/24H)</p>
                      <span v-if="collapsedCards[3]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
                      <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
                    </div>
                  </header>

                  <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__slideInDown"
      leave-active-class="animate__animated animate__slideOutUp"
    >
                  <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[3]" role="tabpane4">
                    <InfosModal />
                  </div>

                  </transition>
                </div>

                <div class="card collapsed">
    <header @click="toggleCollapse(6)" role="tab" class="card-header p-1">
      <div 
        class="bundle-activation-card-header not-collapsed" 
        role="button" 
        tabindex="6" 
        :aria-expanded="collapsedCards[6]" 
        :aria-controls="'accordion6'" 
        style="overflow-anchor: none;">
        <div class="font-weight-bold">150 FCFA</div>
        <p class="text-muted">150F (5Min + 5sms + 5Mo/24H)</p>
        <span v-if="collapsedCards[6]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
        <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
      </div>
    </header>
    
    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__slideInDown"
      leave-active-class="animate__animated animate__slideOutUp"
    >

    <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[6]" role="tabpane4">
            <InfosModal />
          </div>
    </transition>
                </div>

                <div class="card collapsed">
          
          <header  @click="toggleCollapse(14)" role="tab" class="card-header p-1">
            <div
              class="bundle-activation-card-header"
              role="button"
              tabindex="14"
              :aria-expanded="collapsedCards[14]"
              :aria-controls="'accordion14'"
              style="overflow-anchor: none;"
            >
              <div class="font-weight-bold">200 FCFA</div>
              <p class="text-muted">200F (7Min + 7sms + 7Mo/24H)</p>
              <span v-if="collapsedCards[14]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
              <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
            </div>
          </header>

          <transition
            name="custom-classes-transition"
            enter-active-class="animate__animated animate__slideInDown"
            leave-active-class="animate__animated animate__slideOutUp"
            >
          <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[14]" role="tabpane4">
            <InfosModal />
          </div>

          </transition>
        </div>

        <div class="card collapsed">
          
          <header  @click="toggleCollapse(13)" role="tab" class="card-header p-1">
            <div
              class="bundle-activation-card-header"
              role="button"
              tabindex="13"
              :aria-expanded="collapsedCards[13]"
              :aria-controls="'accordion13'"
              style="overflow-anchor: none;"
            >
              <div class="font-weight-bold">300 FCFA</div>
              <p class="text-muted">300F (11min + 11sms + 11Mo/24H)</p>
              <span v-if="collapsedCards[13]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
              <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
            </div>
          </header>

          <transition
name="custom-classes-transition"
enter-active-class="animate__animated animate__slideInDown"
leave-active-class="animate__animated animate__slideOutUp"
>
          <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[13]" role="tabpane4">
            <InfosModal />
          </div>

          </transition>
        </div>

        <div class="card collapsed">
          
          <header  @click="toggleCollapse(12)" role="tab" class="card-header p-1">
            <div
              class="bundle-activation-card-header"
              role="button"
              tabindex="12"
              :aria-expanded="collapsedCards[12]"
              :aria-controls="'accordion3'"
              style="overflow-anchor: none;"
            >
              <div class="font-weight-bold">500 FCFA</div>
              <p class="text-muted">Wabaa 500F (20 min/3J)</p>
              <span v-if="collapsedCards[12]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
              <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
            </div>
          </header>

          <transition
name="custom-classes-transition"
enter-active-class="animate__animated animate__slideInDown"
leave-active-class="animate__animated animate__slideOutUp"
>
          <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[12]" role="tabpane4">
            <InfosModal />
          </div>

          </transition>
        </div>

                
              </div>
            </div>

            <div v-if="activeTab === 'semaines'">
              <div role="tablist" class="accordion">

                <div class="card collapsed">
          
          <header  @click="toggleCollapse(8)" role="tab" class="card-header p-1">
            <div
              class="bundle-activation-card-header"
              role="button"
              tabindex="3"
              :aria-expanded="collapsedCards[8]"
              :aria-controls="'accordion7'"
              style="overflow-anchor: none;"
            >
              <div class="font-weight-bold">1000 FCFA</div>
              <p class="text-muted">1000F (35min+35Mo/07J)</p>
              <span v-if="collapsedCards[8]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
              <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
            </div>
          </header>

          <transition
            name="custom-classes-transition"
            enter-active-class="animate__animated animate__slideInDown"
            leave-active-class="animate__animated animate__slideOutUp"
            >
          <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[8]" role="tabpane4">
            <InfosModal />
          </div>

          </transition>
        </div>

        <div class="card collapsed">
          
          <header  @click="toggleCollapse(9)" role="tab" class="card-header p-1">
            <div
              class="bundle-activation-card-header"
              role="button"
              tabindex="3"
              :aria-expanded="collapsedCards[9]"
              :aria-controls="'accordion9'"
              style="overflow-anchor: none;"
            >
              <div class="font-weight-bold">1500 FCFA</div>
              <p class="text-muted">1500F (60min+60Mo/07J)</p>
              <span v-if="collapsedCards[9]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
              <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
            </div>
          </header>

          <transition
            name="custom-classes-transition"
            enter-active-class="animate__animated animate__slideInDown"
            leave-active-class="animate__animated animate__slideOutUp"
            >
          <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[9]" role="tabpane4">
            <InfosModal />
          </div>

          </transition>
        </div>
              
              </div>
            </div>

            <div v-if="activeTab === 'mois'">
              <div role="tablist" class="accordion">
                <div class="card collapsed">
          
          <header  @click="toggleCollapse(10)" role="tab" class="card-header p-1">
            <div
              class="bundle-activation-card-header"
              role="button"
              tabindex="3"
              :aria-expanded="collapsedCards[10]"
              :aria-controls="'accordion9'"
              style="overflow-anchor: none;"
            >
              <div class="font-weight-bold">2500 FCFA</div>
              <p class="text-muted">500F (19min+19Mo/3J)</p>
              <span v-if="collapsedCards[10]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
              <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
            </div>
          </header>

          <transition
            name="custom-classes-transition"
            enter-active-class="animate__animated animate__slideInDown"
            leave-active-class="animate__animated animate__slideOutUp"
            >
          <div :id="'accordion3'" class="collapse show" v-show="collapsedCards[10]" role="tabpane4">
            <InfosModal />
          </div>

          </transition>
                </div>

        <div class="card collapsed">
          
          <header  @click="toggleCollapse(11)" role="tab" class="card-header p-1">
            <div
              class="bundle-activation-card-header"
              role="button"
              tabindex="3"
              :aria-expanded="collapsedCards[11]"
              :aria-controls="'accordion11'"
              style="overflow-anchor: none;"
            >
              <div class="font-weight-bold">5000 FCFA</div>
              <p class="text-muted">5000F (175Min+175SMS+175Mo/30J)</p>
              <span v-if="collapsedCards[11]" class="kgk-mtn-keyboard_arrow_down icon-not-collapsed"></span>
              <span v-else class="kgk-mtn-keyboard_arrow_right icon-collapsed"></span>
            </div>
          </header>

          <transition
            name="custom-classes-transition"
            enter-active-class="animate__animated animate__slideInDown"
            leave-active-class="animate__animated animate__slideOutUp"
            >
          <div :id="'accordion11'" class="collapse show" v-show="collapsedCards[11]" role="tabpane11">
            <InfosModal />
          </div>

          </transition>
        </div>
              
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <transition
        enter-active-class="animate__animated animate__slideInLeft"
        leave-active-class="animate__animated animate__slideOutLeft"
      >
    <div 
  class="b-sidebar-backdrop bg-dark" 
  @click.self="closeGopack"
  style="cursor: pointer"
>
  </div>
</transition>

</div>

</transition>


</template>
<script>
import { ref } from 'vue';
import InfosModal from '../modals/Infos.vue';

export default {
  name: 'ForfaitContent',
  components: {
    InfosModal,
  },

  setup() {
    const isGameOpen = ref(false);
    const isWabaaOpen = ref(false);
    const isInternetOpen = ref(false);
    const isMaxiOpen = ref(false);
    const isGopackOpen = ref(false);

    const isCollapsed = ref(true);
    const collapsedCards = ref([false, false]);

    const openGame = () => {
      isGameOpen.value = true;
    };

    const closeGame = () => {
      isGameOpen.value = false;
    };

    const openWabaa = () => {
      isWabaaOpen.value = true;
    };

    const closeWabaa = () => {
      isWabaaOpen.value = false;
    };

    const openInternet = () => {
      isInternetOpen.value = true;
    };

    const closeInternet = () => {
      isInternetOpen.value = false;
    };

    const openMaxi = () => {
      isMaxiOpen.value = true;
    };

    const closeMaxi = () => {
      isMaxiOpen.value = false;
    };

    const openGopack = () => {
      isGopackOpen.value = true;
    };

    const closeGopack = () => {
      isGopackOpen.value = false;
    };

// Fonction pour basculer l'état des cartes
const toggleCollapse = (index) => {
  // Fermer tous les autres collapses
  Object.keys(collapsedCards.value).forEach(key => {
    if (key !== index.toString()) {
      collapsedCards.value[key] = false;
    }
  });

  // Basculer l'état du collapse sélectionné
  collapsedCards.value[index] = !collapsedCards.value[index];
};
    // Retournez toutes les propriétés et méthodes nécessaires au template
    return { 
      isGameOpen, 
      isWabaaOpen,
      collapsedCards,
      isInternetOpen,
      isMaxiOpen,
      isGopackOpen,
      
      openGame, 
      closeGame,
      openWabaa,
      closeWabaa,
      closeInternet,
      openInternet,
      openMaxi,
      closeMaxi,
      openGopack,
      closeGopack,
      

      toggleCollapse 
    };
  },
  data() {
    return {
      loading: true,
      activeTab: 'jours',
    }
  },
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

  methods: { 
    setActiveTab(tab) { 
      this.activeTab = tab; 
    }, 
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

@media screen and (max-width: 600px) {
    .service-card .service-card-bottom .btn span {
        display: none;
    }
}


@media (min-width: 600px) {
  .svg-mobile {
    display: none;
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

#bundle_filter_list>div[data-v-58f8d25d] {
    padding: 0 !important;
}

#bundle_filter_list>div {
    padding: 0 10px;
}
.row[data-v-58f8d25d] {
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


@media screen and (max-width: 600px) {
    .service-card {
        margin-bottom: 15px;
    }
}

@media screen and (max-width: 600px) {
    .service-card>* {
        min-height: 77px;
    }
}

@media screen and (max-width: 600px) {
    .service-card p {
        margin-top: -2px;
    }
}

@media screen and (max-width: 600px) {
    .service-card .service-card-bottom .btn {
        position: absolute;
        width: 40px;
        height: 40px;
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

@media screen and (max-width: 600px) {
    .service-card .service-card-bottom .btn i {
        float: none !important;
        font-size: 22px;
    }
}


</style>