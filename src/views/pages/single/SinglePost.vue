<template>
  <div>
       <div class="col-lg-8 col-md-8 col-sm-8">
        <div class="left_content">
        <div class="single_page">
            <ol class="breadcrumb">
              <li><a href="">Home</a></li>
              <li><a href="">catname</a></li>
              <li class="active">sub</li>
              <!-- <li ><a class="active" href="">sub</a></li> -->
            </ol>
        {{ detailspost }}
            <h1>{{ detailspost.title }}</h1>
            <div class="post_commentbox"> 
                <!--<a href="#"><i class="fa fa-user"></i>{{ $post->user->name }}</a> -->
                <span style="color:crimson"><i class="fa fa-calendar"></i>
                   </span>
                <a style="color:crimson" target="_blank" href=""><i class="fa fa-certificate"></i>cat</a>

                 <a  style="color:crimson" target="_blank" href=""><i class="fa fa-tags"></i>tag</a>

                 <a  style="color:crimson" target="_blank" href=""><i class="fa fa-eye"></i>count</a> 

                 <a style="color:crimson" target="_blank" href=""><i class="fa fa-comments"></i> comment count</a>

                <div class="fb-share-button" data-href="https://ssbedunews.com/" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fssbedunews.com%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>

              </div>
            <div class="single_page_content"> <img class="img-center"  src="" alt="">
              <h4 style="text-align: justify;color: #000">de</h4>
               <!-- <blockquote style="text-align: justify;color: blue"> <i> {!! $post->description !!} </i></blockquote> -->
              
              <div style="padding-top: 50px" >
               
                <a target="_blank" href="" class="btn btn-primary">File Download <i class="fa fa-arrow-right"></i></a>
               
                <a target="_blank" href="" class="btn btn-danger"> Visit Website Link <i class="fa fa-arrow-right"></i></a>
            
                
                  
               
               
                
               
              </div>
              
            </div>

         <releated></releated>

        <popular></popular>

         <latest></latest>

          </div>
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
name:'SinglePost',
data(){
            return{

                detailspost: {},
            }
        },
        created() {
            

    this.getSingleData();
  },

  methods: {
 
     getSingleData() {
      axios
        .get('http://127.0.0.1:8000/api/single/post/'+this.$route.params.post_id)
        .then(response => {
          this.detailspost = response.data;
       
        })
        .catch(e => {
          console.log(e);
         
        });
    },
  }

}
</script>

<style>

</style>