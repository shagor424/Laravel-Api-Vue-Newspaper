<template>
  <div>
          <div class="related_post">
               <h3>সর্বশেষ সংবাদ</h3>
              <hr style="border: solid crimson">
              <ul class="photograph_nav  wow fadeInDown">
               
                 <li v-for="value in ltposts" :key="value.id">
                  <div style="height: 125px" class="media"> <a class="media-left" href=""> <img :src="'http://127.0.0.1:8000/upload/postimage/' + value.image" alt=""> </a>
                    <div class="media-body"> <a class="catg_title" href="">{{ value.title}}</a> </div>
                  </div>
                </li>
              </ul>
            
            </div>
        
  </div>
</template>

<script>
import axios from 'axios';

    export default {
      name:'Latest',
        data(){
            return{

                ltposts: [],
            }
        },
        mounted() {
            

    this.getLtData();
  },

  methods: {
 
     getLtData() {
      
      axios
        .get("http://127.0.0.1:8000/api/latest/posts")
        .then(response => {
          this.ltposts = response.data.data;
       
        })
        .catch(e => {
          console.log(e);
         
        });
    },
  }

  };


</script>