<template>
  <div>
<section id="sliderSection" >
    <div class="row">
      <div class="col-lg-8 col-md-8 col-sm-8">
        <!-- <div class="slick_slider">
              <div class="single_iteam" v-for="slider in sliderposts" :key="slider.id"> <a href="" alt="">{{ slider.title }}</a>
            <div class="slider_article">
              <h2><a class="slider_tittle" href="">{{ slider.title }}</a></h2>
              <p></p>
            </div>
          </div> 
        </div>  -->
      </div>
      <div class="col-lg-4 col-md-4 col-sm-4">
          <div class="latest_post">
          <h2><span>সর্বশেষ সংবাদ</span></h2>
          <div class="latest_post_container">
            <div id="prev-button"><i class="fa fa-chevron-up"></i></div>
            <ul class="latest_postnav">
             
              <li v-for="value in posts" :key="value.id">
                <div class="media"> <router-link :to="{name:'SinglePost',params:{post_id:value.id}}" class="media-left"> <img alt="" :src="'http://127.0.0.1:8000/upload/postimage/' + value.image"> </router-link>
                  <div class="media-body"> <router-link :to="{name:'SinglePost',params:{post_id:value.id}}" class="catg_title">{{ value.title }} </router-link> </div>
                </div>
              </li>
          
            </ul>
            <div id="next-button"><i class="fa  fa-chevron-down"></i></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
import axios from 'axios';

    export default {
      name:'MySlider',
        data(){
            return{

                posts: [],
                sliderposts: [],
                path: 'http://127.0.0.1:8000'
            }
        },
        mounted() {
            

    this.getData();
    this.getSliderData();
    
  },
  methods: {
    // getblogs(){
    //   axios.get('http://127.0.0.1:8000/api/blogs')
    //   .then((response) => {
    //     this.results = response.data;
    //   }).catch( error => { console.log(error); });
    // }
     getData() {
      
      axios
        .get("http://127.0.0.1:8000/api/posts")
        .then(response => {
          this.posts = response.data.data;
       
        })
        .catch(e => {
          console.log(e);
         
        });
    },

      getSliderData() {
      
      axios
        .get("http://127.0.0.1:8000/api/slider/posts")
        .then(response => {
          this.sliderposts = response.data.data;
       
        })
        .catch(e => {
          console.log(e);
         
        });
    },
    
  },

  };


</script>