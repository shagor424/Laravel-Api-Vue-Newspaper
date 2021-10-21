<template>
  <div id="master">

        <div id="fb-root"></div>
    <!-- Your Chat plugin code -->
    <div id="fb-customer-chat" class="fb-customerchat"></div>
    
        <div id="preloader">
            <div id="status">&nbsp;</div>
        </div>

        <a class="scrollToTop" href="#"><i class="fa fa-angle-up"></i></a>

    <div class="container">
            <main-header></main-header>
            <my-navbar></my-navbar>
    
     
        <section id="contentSection" >
            <div class="row">
               
             <router-view></router-view>

            <sidebar></sidebar>
            
            </div>
        </section>



           
            <main-footer></main-footer>
    </div>

  </div>
</template>

<script>
import MainHeader from '../components/frontend/MainHeader.vue'
import MyNavbar from '../components/frontend/MyNavbar.vue'
import Sidebar from '../components/frontend/Sidebar.vue'
import MainFooter from '../components/frontend/MainFooter.vue'


export default {
name:'Master',
components:{MainHeader, MyNavbar, MainFooter,Sidebar}
}
</script>

MainHeader
<style>

</style>