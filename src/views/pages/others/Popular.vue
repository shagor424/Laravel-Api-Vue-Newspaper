<template>
  <div>
           <div class="related_post">
               <h3>জনপ্রিয় সংবাদ</h3>
              <hr style="border: solid crimson">
              <ul class="photograph_nav  wow fadeInDown">
               
                 <li v-for="value in ppposts" :key="value.id">
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
    name:'Popular',
    data(){
            return{

                ppposts: [],
               
                path: 'http://127.0.0.1:8000'
            }
        },
        mounted() {
            

    this.getPpData();
    
    
  },
  methods: {
    // getblogs(){
    //   axios.get('http://127.0.0.1:8000/api/blogs')
    //   .then((response) => {
    //     this.results = response.data;
    //   }).catch( error => { console.log(error); });
    // }
     getPpData() {
      
      axios
        .get("http://127.0.0.1:8000/api/popular/posts")
        .then(response => {
          this.ppposts = response.data.data;
       
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