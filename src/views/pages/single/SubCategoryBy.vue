<template>
  <div>
       <div class="col-lg-8 col-md-8 col-sm-8">
         <div class="left_content">
          <div class="single_page">
            <ol class="breadcrumb" style="height: 50px;background-color: #1A5276;color: #fff">
               <li style="padding-top:;font-size: 20px"><a href="">সাব-ক্যাটেগরি : </a></li>
              
            </ol>
            
          
            <div class="error_page" v-if="subcategoryByPost==null">
            <h3>We Are Sorry</h3>
            <h1> Not Found !</h1>
            <p>Unfortunately, the page you were looking for could not be found. It may be temporarily unavailable, moved or no longer exists</p>
            <span></span> <router-link :to="{name:'Home'}" class="wow fadeInLeftBig">Go to home page</router-link> </div>

   
           <div class="related_post">
             
                <ul class="photograph_nav  wow fadeInDown">
               <li v-for="value in subcategoryByPost" :key="value.id">
                  <div style="height: 125px" class="media"> <router-link target="_blank" class="media-left" :to="{name:'SinglePost',params:{post_id:value.id}}"> <img :src="'http://127.0.0.1:8000/upload/postimage/' + value.image" alt=""> </router-link>
                    <div class="media-body"> <router-link class="catg_title" :to="{name:'SinglePost',params:{post_id:value.id}}">{{ value.title}}</router-link> </div>
                  </div>
                </li>
            </ul>
            </div>
          



          </div>
     

        

         <releated></releated>

        <popular></popular>

         <latest></latest>

          </div>
        </div>
      </div>
   
</template>

<script>
import axios from 'axios';
import Latest from '../others/Latest.vue'
import Popular from '../others/Popular.vue'
import Releated from '../others/Releated.vue'
export default {
  components: { Releated, Popular, Latest },
name:'SubCategoryBy',

data(){
            return{

                subcategoryByPost: [],
            }
     },


  methods: {
 
     getSubCategoryBy() {
      axios
        .get('http://127.0.0.1:8000/api/subcategory/post/'+this.$route.params.subcategory_id)
        .then(response => {
          this.subcategoryByPost = response.data;
       
        })
        .catch(e => {
          console.log(e);
         
        });
    },
 },


    mounted() {
        this.getSubCategoryBy();
    },

        watch:{
  $route(){
    this.getSubCategoryBy();
  }
}
 

}
</script>

<style>

</style>