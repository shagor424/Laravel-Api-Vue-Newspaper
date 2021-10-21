<template>
  <div>

      <div class="col-lg-8 col-md-8 col-sm-8">
        <div class="left_content">
         <div class="contact_area">
           <h2> আমাদের সম্পর্কে </h2>
            
            <h3><u>আমাদের প্রধান উদ্দেশ্য :</u></h3>
            <p style="color:crimson;">আমাদের এই অনলাইন পত্রিকার মাধ্যমে সকল শিক্ষক-কর্মচারী ও শিক্ষার্থীদের কাছে  যে কোন প্রকার শিক্ষা বিষয়ক সংবাদ তাদের কাছে সহজে পৌছে যায়। যাতে তারা এখান থেকে উপকৃত হতে পারে।</p>

         <releated></releated>

         <popular></popular>

           <latest></latest>

          </div>
        </div>
      </div>
    
   
     
   
  
  </div>
</template>

<script>
import Releated from '../others/Releated.vue'
import Latest from '../others/Latest.vue'
import Popular from '../others/Popular.vue'


export default {
  components: {Latest,Popular,Releated},
    name:'Contact',

}
</script>

<style>

</style>