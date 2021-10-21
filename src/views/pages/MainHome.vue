<template>
  <div>

         <my-slider></my-slider>
        <div class="col-lg-8 col-md-8 col-sm-8">
        <div class="left_content">
         <div class="col-md-6">
            <div class="single_sidebar" >
            <h2><span>স্কুল/কলেজ</span></h2>
              <ul class="spost_nav">
                <li v-for="college in collegeposts" :key="college.id">
                <div class="media"> <router-link to="" class="media-left"> <img alt="" :src="'http://127.0.0.1:8000/upload/postimage/' + college.image"> </router-link>
                  <div class="media-body"> <router-link to="" class="catg_title">{{ college.title }} </router-link> </div>
                </div>
              </li>
              </ul>
            <div class="text-right">
              <a href="allschool-post.html" class="btn btn-primary" >আরও দেখুন &nbsp;&nbsp;<i class="fa fa-arrow-right"></i></a>
            </div>
          </div>
         </div>

         <div class="col-md-6">
            <div class="single_sidebar">
            <h2><span>জাতীয় বিশ্ববিদ্যালয়</span></h2>
            <ul class="spost_nav">
                <li v-for="nu in nuposts" :key="nu.id">
                <div class="media"> <router-link to="" class="media-left"> <img alt="" :src="'http://127.0.0.1:8000/upload/postimage/' + nu.image"> </router-link>
                  <div class="media-body"> <router-link to="" class="catg_title">{{ nu.title }} </router-link> </div>
                </div>
              </li>
              </ul>
            <div class="text-right">
              <a href="allnu-post.html" class="btn btn-primary" >আরও দেখুন &nbsp;&nbsp;<i class="fa fa-arrow-right"></i></a>
            </div>
          </div>
         </div>
         
          <div class="col-md-6">
            <div class="single_sidebar" >
            <h2><span>মাদ্রাসা</span></h2>
           <ul class="spost_nav">
                <li v-for="mad in madposts" :key="mad.id">
                <div class="media"> <router-link to="" class="media-left"> <img alt="" :src="'http://127.0.0.1:8000/upload/postimage/' + mad.image"> </router-link>
                  <div class="media-body"> <router-link to="" class="catg_title">{{ mad.title }} </router-link> </div>
                </div>
              </li>
              </ul>
            <div class="text-right">
              <a href="allmad-post.html" class="btn btn-primary" >আরও দেখুন &nbsp;&nbsp;<i class="fa fa-arrow-right"></i></a>
            </div>
          </div>
         </div>
         
          <div class="col-md-6">
            <div class="single_sidebar" >
            <h2><span>উন্মুক্ত বিশ্ববিদ্যালয়</span></h2>
           <ul class="spost_nav">
                <li v-for="bou in bouposts" :key="bou.id">
                <div class="media"> <router-link to="" class="media-left"> <img alt="" :src="'http://127.0.0.1:8000/upload/postimage/' + bou.image"> </router-link>
                  <div class="media-body"> <router-link to="" class="catg_title">{{ bou.title }} </router-link> </div>
                </div>
              </li>
              </ul>
            <div class="text-right">
              <a href="allbou-post.html" class="btn btn-primary" >আরও দেখুন &nbsp;&nbsp;<i class="fa fa-arrow-right"></i></a>
            </div>
          </div>
         </div>
          
          <div class="col-md-6">
            <div class="single_sidebar" >
            <h2><span>প্রাইমারী</span></h2>
            <ul class="spost_nav">
                <li v-for="primary in primaryposts" :key="primary.id">
                <div class="media"> <router-link to="" class="media-left"> <img alt="" :src="'http://127.0.0.1:8000/upload/postimage/' + primary.image"> </router-link>
                  <div class="media-body"> <router-link to="" class="catg_title">{{ primary.title }} </router-link> </div>
                </div>
              </li>
              </ul>
            <div class="text-right">
              <a href="allprimary-post.html" class="btn btn-primary" >আরও দেখুন &nbsp;&nbsp;<i class="fa fa-arrow-right"></i></a>
            </div>
          </div>
         </div>
          
          <div class="col-md-6">
            <div class="single_sidebar" >
            <h2><span>ভোকেশনাল</span></h2>
            <ul class="spost_nav">
                <li v-for="voc in vocposts" :key="voc.id">
                <div class="media"> <router-link to="" class="media-left"> <img alt="" :src="'http://127.0.0.1:8000/upload/postimage/' + voc.image"> </router-link>
                  <div class="media-body"> <router-link to="" class="catg_title">{{ voc.title }} </router-link> </div>
                </div>
              </li>
              </ul>
            <div class="text-right">
              <a href="allvoc-post.html" class="btn btn-primary" >আরও দেখুন &nbsp;&nbsp;<i class="fa fa-arrow-right"></i></a>
            </div>
          </div>
         </div>
          <div class="fashion_technology_area">
            <div class="fashion">
              <div class="single_post_content">
                <h2><span>সরকারী চাকুরী</span></h2>
                
                <ul class="spost_nav">
                <li v-for="govjob in govjobposts" :key="govjob.id">
                <div class="media"> <router-link to="" class="media-left"> <img alt="" :src="'http://127.0.0.1:8000/upload/postimage/' + govjob.image"> </router-link>
                  <div class="media-body"> <router-link to="" class="catg_title">{{ govjob.title }} </router-link> </div>
                </div>
              </li>
              </ul>
                <div class="text-right">
              <a href="allgj-post.html" class="btn btn-primary" >আরও দেখুন &nbsp;&nbsp;<i class="fa fa-arrow-right"></i></a>
            </div>
              </div>
            </div>
            <div class="technology">
              <div class="single_post_content">
                <h2><span>প্রাইভেট চাকুরী</span></h2>
               
               <ul class="spost_nav">
                <li v-for="pvtjob in pvtjobposts" :key="pvtjob.id">
                <div class="media"> <router-link to="" class="media-left"> <img alt="" :src="'http://127.0.0.1:8000/upload/postimage/' + pvtjob.image"> </router-link>
                  <div class="media-body"> <router-link to="" class="catg_title">{{ pvtjob.title }} </router-link> </div>
                </div>
              </li>
              </ul>
                <div class="text-right">
              <a href="allpj-post.html" class="btn btn-primary" >আরও দেখুন &nbsp;&nbsp;<i class="fa fa-arrow-right"></i></a>
            </div>
              </div>
            </div>
          </div>
          
          <div class="fashion_technology_area">
            <div class="fashion">
              <div class="single_post_content">
                <h2><span>অন্যান্য</span></h2>
                
               <ul class="spost_nav">
                <li v-for="other in otherposts" :key="other.id">
                <div class="media"> <router-link to="" class="media-left"> <img alt="" :src="'http://127.0.0.1:8000/upload/postimage/' + other.image"> </router-link>
                  <div class="media-body"> <router-link to="" class="catg_title">{{ other.title }} </router-link> </div>
                </div>
              </li>
              </ul>
                <div class="text-right">
              <a href="allothers-post.html" class="btn btn-primary" >আরও দেখুন &nbsp;&nbsp;<i class="fa fa-arrow-right"></i></a>
            </div>
              </div>
            </div>
             
            <div class="technology">
              <div class="single_post_content">
                <h2><span>খেলাধুলা</span></h2>
               <ul class="spost_nav">
                <li v-for="sport in sportposts" :key="sport.id">
                <div class="media"> <router-link to="" class="media-left"> <img alt="" :src="'http://127.0.0.1:8000/upload/postimage/' + sport.image"> </router-link>
                  <div class="media-body"> <router-link to="" class="catg_title">{{ sport.title }} </router-link> </div>
                </div>
              </li>
              </ul>
                <div class="text-right">
              <a href="allpj-post.html" class="btn btn-primary" >আরও দেখুন &nbsp;&nbsp;<i class="fa fa-arrow-right"></i></a>
            </div>
              </div>
            </div>
          </div>

           
         <video-gallery></video-gallery>
          
         <photo-gallery></photo-gallery>
         
        </div>
      </div>
     

    


  </div>
</template>

<script>
import MySlider from '../../components/frontend/MySlider.vue'
import axios from 'axios';
import VideoGallery from '../../components/frontend/VideoGallery.vue';
import PhotoGallery from '../../components/frontend/PhotoGallery.vue';
// import MySlider from '../../components/frontend/MySlider.vue'
export default {
name:'MainHome',
components:{MySlider, VideoGallery, PhotoGallery},

 data(){
            return{

                collegeposts: [],
                nuposts: [],
                madposts: [],
                bouposts: [],
                primaryposts: [],
                vocposts: [],
                gobjobposts: [],
                pvtjobposts: [],
                sportposts: [],
                otherposts: [],
                path: 'http://127.0.0.1:8000'
            }
        },
        mounted() {
            

    this.getData();
    this. getNuData();
    this. getMadData();
    this. getBouData();
    this. getPrimaryData();
    this. getVocData();
    this. getGovjobData();
    this. getPvtjobData();
    this. getSportData();
    this. getOtherData();
  },
  methods: {
    // getblogs(){
    //   axios.get('http://127.0.0.1:8000/api/blogs')
    //   .then((response) => {
    //     this.results = response.data;
    //   }).catch( error => { console.log(error); });
    // }
     getData() {
      
      axios.get("http://127.0.0.1:8000/api/school/college/posts")
        .then(response => {
          this.collegeposts = response.data.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
 
     getNuData() {
      axios.get("http://127.0.0.1:8000/api/nu/posts")
        .then(response => {
          this.nuposts = response.data.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    getMadData() {
      axios.get("http://127.0.0.1:8000/api/madrasa/posts")
        .then(response => {
          this.madposts = response.data.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
     getBouData() {
      axios.get("http://127.0.0.1:8000/api/bou/posts")
        .then(response => {
          this.bouposts = response.data.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
     getPrimaryData() {
      axios.get("http://127.0.0.1:8000/api/primary/posts")
        .then(response => {
          this.primaryposts = response.data.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
      getVocData() {
      axios.get("http://127.0.0.1:8000/api/vocational/posts")
        .then(response => {
          this.vocposts = response.data.data;
        })
        .catch(e => {
          console.log(e);
        });
    },

    getGovjobData() {
      axios.get("http://127.0.0.1:8000/api/gov/job/posts")
        .then(response => {
          this.govjobposts = response.data.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    getPvtjobData() {
      axios.get("http://127.0.0.1:8000/api/private/job/posts")
        .then(response => {
          this.pvtjobposts = response.data.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    getSportData() {
      axios.get("http://127.0.0.1:8000/api/sport/posts")
        .then(response => {
          this.sportposts = response.data.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    getOtherData() {
      axios.get("http://127.0.0.1:8000/api/others/posts")
        .then(response => {
          this.otherposts = response.data.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    
    
    
    



   },

  };

</script>

<style>

</style>