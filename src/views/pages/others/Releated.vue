<template>
  <div>
        <div class="related_post">
              <h3>সম্পর্কিত সংবাদ</h3>
              <hr style="border: solid crimson">
                <ul class="photograph_nav  wow fadeInDown">
               <li v-for="value in rlposts" :key="value.id">
                  <div style="height: 125px" class="media"> <router-link target="_blank" class="media-left" :to="{name:'SinglePost',params:{post_id:value.id}}"> <img :src="'http://127.0.0.1:8000/upload/postimage/' + value.image" alt=""> </router-link>
                    <div class="media-body"> <router-link class="catg_title" :to="{name:'SinglePost',params:{post_id:value.id}}">{{ value.title}}</router-link> </div>
                  </div>
                </li>
            </ul>
            </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'Releated',
      data(){
            return{

                rlposts: [],
               
                path: 'http://127.0.0.1:8000'
            }
        },
        mounted() {
            

    this.getRlData();
    
    
  },
  methods: {
    // getblogs(){
    //   axios.get('http://127.0.0.1:8000/api/blogs')
    //   .then((response) => {
    //     this.results = response.data;
    //   }).catch( error => { console.log(error); });
    // }
     getRlData() {
      
      axios
        .get("http://127.0.0.1:8000/api/releated/posts")
        .then(response => {
          this.rlposts = response.data.data;
       
        })
        .catch(e => {
          console.log(e);
         
        });
    },

}

}
</script>

