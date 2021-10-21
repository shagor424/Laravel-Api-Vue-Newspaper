<template>
  <div>
      <header id="header"  >
    <div class="row" >
      <div class="col-lg-12 col-md-12 col-sm-12">
        <div class="header_top">
          <div class="header_top_left" >
            <ul class="top_nav" >
              <li style="font-size: 16px"><router-link :to="{ name:'Home' }">হোম</router-link></li>
              <li style="font-size: 16px"><router-link :to="{ name:'About' }">সম্পর্কে</router-link></li>
              <li style="font-size: 16px"><router-link :to="{ name:'Contact' }">যোগাযোগ</router-link></li>
            </ul>
          </div>
          <div >
          </div>
          <div class="header_top_right">
            <p >18-Oct-2021 03:53:PM</p>
          </div>
        </div>
        <!--<br>-->
        <!-- <div style="height: 175px;background-color: #605ca8;">-->
        <!-- <a href="http://ssbedunews.com"><img src="http://ssbedunews.com/upload/original2.jpg" style="width: 100%;"></a>-->

          
        <!--  </div>-->
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12">
        <div class="header_bottom">
          <div class="logo_area"><a href="#" class="logo"><img src="upload/logo/20210701logo.jpg" height="100px" width="100%" alt=""></a></div>
          <div class="add_banner"><a target="_blank" href="https://www.youtube.com/channel/UCAK11GRnijWJSuoa7sRBQjA"><img src="upload/mainlogo/20210618header-logo.jpg"  height="100px" width="100%" alt=""></a></div>
        </div>
      </div>
    </div>
  </header>
  </div>
</template>

<script>
export default {
name:'MainHeader',
}
</script>

<style>

</style>