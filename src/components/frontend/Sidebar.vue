<template>
  <div>
    <div class="col-lg-4 col-md-4 col-sm-4">
        <aside class="right_content">
          <div class="single_sidebar">
            <h2><span>পাবলিক বিশ্ববিদ্যারয়</span></h2>
            <ul class="spost_nav">
                 <li v-for="value in publicposts" :key="value.id">
                <div class="media"> <router-link :to="{name:'SinglePost',params:{post_id:value.id}}" class="media-left"> <img alt="" :src="'http://127.0.0.1:8000/upload/postimage/' + value.image"> </router-link>
                  <div class="media-body"> <router-link :to="{name:'SinglePost',params:{post_id:value.id}}" class="catg_title">{{ value.title }} </router-link> </div>
                </div>
              </li>
             </ul>
            <div class="text-right">
              <a href="" class="btn btn-primary" >আরও দেখুন &nbsp;&nbsp;<i class="fa fa-arrow-right"></i></a>
            </div>
          </div>
          <div class="single_sidebar">
            <ul class="nav nav-tabs" role="tablist">
              <li role="presentation" class="active"><a href="#category" aria-controls="home" role="tab" data-toggle="tab">ভর্তি</a></li>
              <li role="presentation"><a href="#video" aria-controls="profile" role="tab" data-toggle="tab">পরীক্ষা</a></li>
              <li role="presentation"><a href="#comments" aria-controls="messages" role="tab" data-toggle="tab">ফলাফল</a></li>
            </ul>
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="category">
                <ul class="spost_nav">         
                <li v-for="admission in admissionposts" :key="admission.id">
                <div class="media"> <router-link :to="{name:'SinglePost',params:{post_id:admission.id}}" class="media-left"> <img alt="" :src="'http://127.0.0.1:8000/upload/postimage/' + admission.image"> </router-link>
                  <div class="media-body"> <router-link :to="{name:'SinglePost',params:{post_id:admission.id}}" class="catg_title">{{ admission.title }} </router-link> </div>
                </div>
              </li>         
                </ul>
            <div class="text-right">
              <a href="alladmission-post.html" class="btn btn-primary" >আরও দেখুন &nbsp;&nbsp;<i class="fa fa-arrow-right"></i></a>
            </div>
              </div>
              <div role="tabpanel" class="tab-pane" id="video">
                <div class="vide_area">
                  <ul class="spost_nav">         
                   <li v-for="exam in examposts" :key="exam.id">
                <div class="media"> <router-link :to="{name:'SinglePost',params:{post_id:exam.id}}" class="media-left"> <img alt="" :src="'http://127.0.0.1:8000/upload/postimage/' + exam.image"> </router-link>
                  <div class="media-body"> <router-link :to="{name:'SinglePost',params:{post_id:exam.id}}" class="catg_title">{{ exam.title }} </router-link> </div>
                </div>
              </li>         
                </ul>
            <div class="text-right">
              <a href="allexam-post.html" class="btn btn-primary" >আরও দেখুন &nbsp;&nbsp;<i class="fa fa-arrow-right"></i></a>
            </div>
                </div>
              </div>
              <div role="tabpanel" class="tab-pane" id="comments">
                <ul class="spost_nav">         
                <li v-for="result in resultposts" :key="result.id">
                <div class="media"> <router-link :to="{name:'SinglePost',params:{post_id:result.id}}" class="media-left"> <img alt="" :src="'http://127.0.0.1:8000/upload/postimage/' + result.image"> </router-link>
                  <div class="media-body"> <router-link :to="{name:'SinglePost',params:{post_id:result.id}}" class="catg_title">{{ result.title }} </router-link> </div>
                </div>
              </li>       
                </ul>
            <div class="text-right">
              <a href="allresult-post.html" class="btn btn-primary" >আরও দেখুন &nbsp;&nbsp;<i class="fa fa-arrow-right"></i></a>
            </div>
              </div>
            </div>
          </div>
          <div class="single_sidebar">
            <ul class="nav nav-tabs" role="tablist">
              <li role="presentation" class="active"><a href="#category1" aria-controls="home" role="tab" data-toggle="tab">বৃত্তি</a></li>
              <li role="presentation"><a href="#video1" aria-controls="profile" role="tab" data-toggle="tab">উপবৃত্তি</a></li>
              <li role="presentation"><a href="#comments1" aria-controls="messages" role="tab" data-toggle="tab">প্রশাসনিক</a></li>
            </ul>
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="category1">
                <ul class="spost_nav">         
                   <li v-for="scholar in scholarposts" :key="scholar.id">
                <div class="media"> <router-link :to="{name:'SinglePost',params:{post_id:scholar.id}}" class="media-left"> <img alt="" :src="'http://127.0.0.1:8000/upload/postimage/' + scholar.image"> </router-link>
                  <div class="media-body"> <router-link :to="{name:'SinglePost',params:{post_id:scholar.id}}" class="catg_title">{{ scholar.title }} </router-link> </div>
                </div>
              </li>        
                </ul>
            <div class="text-right">
              <a href="allscholar-post.html" class="btn btn-primary" >আরও দেখুন &nbsp;&nbsp;<i class="fa fa-arrow-right"></i></a>
            </div>
              </div>
              <div role="tabpanel" class="tab-pane" id="video1">
                <div class="vide_area">
                  <ul class="spost_nav">         
                  <li v-for="stipend in stipendposts" :key="stipend.id">
                <div class="media"> <router-link :to="{name:'SinglePost',params:{post_id:stipend.id}}" class="media-left"> <img alt="" :src="'http://127.0.0.1:8000/upload/postimage/' + stipend.image"> </router-link>
                  <div class="media-body"> <router-link :to="{name:'SinglePost',params:{post_id:stipend.id}}" class="catg_title">{{ stipend.title }} </router-link> </div>
                </div>
              </li>           
                </ul>
            <div class="text-right">
              <a href="allstipend-post.html" class="btn btn-primary" >আরও দেখুন &nbsp;&nbsp;<i class="fa fa-arrow-right"></i></a>
            </div>
                </div>
              </div>
              <div role="tabpanel" class="tab-pane" id="comments1">
               <ul class="spost_nav">         
                  <li v-for="admin in adminsposts" :key="admin.id">
                <div class="media"> <router-link :to="{name:'SinglePost',params:{post_id:admin.id}}" class="media-left"> <img alt="" :src="'http://127.0.0.1:8000/upload/postimage/' + admin.image"> </router-link>
                  <div class="media-body"> <router-link :to="{name:'SinglePost',params:{post_id:admin.id}}" class="catg_title">{{ admin.title }} </router-link> </div>
                </div>
              </li>          
                </ul>
            <div class="text-right">
              <a href="allmoney-post.html" class="btn btn-primary" >আরও দেখুন &nbsp;&nbsp;<i class="fa fa-arrow-right"></i></a>
            </div>
              </div>
            </div>
          </div>
          <div class="single_sidebar">
            <ul class="nav nav-tabs" role="tablist">
              <li role="presentation" class="active"><a href="#category4" aria-controls="home" role="tab" data-toggle="tab">এমপিওভুক্তি</a></li>
              <li role="presentation"><a href="#video4" aria-controls="profile" role="tab" data-toggle="tab">এমপিও </a></li>
              <li role="presentation"><a href="#comments4" aria-controls="messages" role="tab" data-toggle="tab">নিবন্ধন</a></li>
            </ul>
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="category4">
               <ul class="spost_nav">         
                     <li v-for="mpo in mpoposts" :key="mpo.id">
                <div class="media"> <router-link :to="{name:'SinglePost',params:{post_id:mpo.id}}" class="media-left"> <img alt="" :src="'http://127.0.0.1:8000/upload/postimage/' + mpo.image"> </router-link>
                  <div class="media-body"> <router-link :to="{name:'SinglePost',params:{post_id:mpo.id}}" class="catg_title">{{ mpo.title }} </router-link> </div>
                </div>
              </li>        
                </ul>
            <div class="text-right">
              <a href="allnewmpo-post.html" class="btn btn-primary" >আরও দেখুন &nbsp;&nbsp;<i class="fa fa-arrow-right"></i></a>
            </div>
              </div>
              <div role="tabpanel" class="tab-pane" id="video4">
                <div class="vide_area">
                 <ul class="spost_nav">         
                    <li v-for="mposar in mposarposts" :key="mposar.id">
                <div class="media"> <router-link :to="{name:'SinglePost',params:{post_id:mposar.id}}" class="media-left"> <img alt="" :src="'http://127.0.0.1:8000/upload/postimage/' + mposar.image"> </router-link>
                  <div class="media-body"> <router-link :to="{name:'SinglePost',params:{post_id:mposar.id}}" class="catg_title">{{ mposar.title }} </router-link> </div>
                </div>
              </li>        
                </ul>
            <div class="text-right">
              <a href="allmposar-post.html" class="btn btn-primary" >আরও দেখুন &nbsp;&nbsp;<i class="fa fa-arrow-right"></i></a>
            </div>
                </div>
              </div>
              <div role="tabpanel" class="tab-pane" id="comments4">
                <ul class="spost_nav">         
                     <li v-for="ntrca in ntrcaposts" :key="ntrca.id">
                <div class="media"> <router-link :to="{name:'SinglePost',params:{post_id:ntrca.id}}" class="media-left"> <img alt="" :src="'http://127.0.0.1:8000/upload/postimage/' + ntrca.image"> </router-link>
                  <div class="media-body"> <router-link :to="{name:'SinglePost',params:{post_id:ntrca.id}}" class="catg_title">{{ ntrca.title }} </router-link> </div>
                </div>
              </li>         
                </ul>
            <div class="text-right">
              <a href="allteacherregi-post.html" class="btn btn-primary" >আরও দেখুন &nbsp;&nbsp;<i class="fa fa-arrow-right"></i></a>
            </div>
              </div>
            </div>
          </div>

           <div class="single_sidebar">
            <ul class="nav nav-tabs" role="tablist">
              <li role="presentation" class="active"><a href="#category5" aria-controls="home" role="tab" data-toggle="tab">শিক্ষক</a></li>
              <li role="presentation"><a href="#video5" aria-controls="profile" role="tab" data-toggle="tab">শিক্ষার্থী</a></li>
              <li role="presentation"><a href="#comments5" aria-controls="messages" role="tab" data-toggle="tab">কর্মচারী</a></li>
            </ul>
             <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="category5">
               <ul class="spost_nav">         
                      <li v-for="teacher in teacherposts" :key="teacher.id">
                <div class="media"> <router-link :to="{name:'SinglePost',params:{post_id:teacher.id}}" class="media-left"> <img alt="" :src="'http://127.0.0.1:8000/upload/postimage/' + teacher.image"> </router-link>
                  <div class="media-body"> <router-link :to="{name:'SinglePost',params:{post_id:teacher.id}}" class="catg_title">{{ teacher.title }} </router-link> </div>
                </div>
              </li>         
                </ul>
            <div class="text-right">
              <a href="allteacher-post.html" class="btn btn-primary" >আরও দেখুন &nbsp;&nbsp;<i class="fa fa-arrow-right"></i></a>
            </div>
              </div>
              <div role="tabpanel" class="tab-pane" id="video5">
                <div class="vide_area">
                 <ul class="spost_nav">         
                      <li v-for="student in studentposts" :key="student.id">
                <div class="media"> <router-link :to="{name:'SinglePost',params:{post_id:student.id}}" class="media-left"> <img alt="" :src="'http://127.0.0.1:8000/upload/postimage/' + student.image"> </router-link>
                  <div class="media-body"> <router-link :to="{name:'SinglePost',params:{post_id:student.id}}" class="catg_title">{{ student.title }} </router-link> </div>
                </div>
              </li>         
                </ul>
            <div class="text-right">
              <a href="allstudent-post.html" class="btn btn-primary" >আরও দেখুন &nbsp;&nbsp;<i class="fa fa-arrow-right"></i></a>
            </div>
                </div>
              </div>
              <div role="tabpanel" class="tab-pane" id="comments5">
               <ul class="spost_nav">         
                       <li v-for="stuff in stuffposts" :key="stuff.id">
                <div class="media"> <router-link :to="{name:'SinglePost',params:{post_id:stuff.id}}" class="media-left"> <img alt="" :src="'http://127.0.0.1:8000/upload/postimage/' + stuff.image"> </router-link>
                  <div class="media-body"> <router-link :to="{name:'SinglePost',params:{post_id:stuff.id}}" class="catg_title">{{ stuff.title }} </router-link> </div>
                </div>
              </li>         
                </ul>
            <div class="text-right">
              <a href="allstuff-post.html" class="btn btn-primary" >আরও দেখুন &nbsp;&nbsp;<i class="fa fa-arrow-right"></i></a>
            </div>
              </div>
            </div>
          </div>
          
          

           <div class="single_sidebar">
            <ul class="nav nav-tabs" role="tablist">
              <li role="presentation" class="active"><a href="#category2" aria-controls="home" role="tab" data-toggle="tab">ক্যাটেগরি</a></li>
              <li role="presentation"><a href="#comments2" aria-controls="messages" role="tab" data-toggle="tab"> সাব ক্যাটেঃ</a></li>
              <li role="presentation"><a href="#video2" aria-controls="profile" role="tab" data-toggle="tab">ট্যাগ</a></li>
            </ul>
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="category2">
                <ul v-for="category in categories" :key="category.id">
                   <li class="cat-item"><router-link :to="{name:'CategoryBy',params:{category_id:category.id}}">{{category.name }}</router-link></li>       
               </ul>
              </div>
             
              <div role="tabpanel" class="tab-pane" id="comments2">
                <ul v-for="subcategory in subcategories" :key="subcategory.id">
                   <li class="cat-item"><router-link :to="{name:'SubCategoryBy',params:{subcategory_id:subcategory.id}}">{{subcategory.name }}</router-link></li>       
               </ul>
              </div>
               <div role="tabpanel" class="tab-pane" id="video2">
                <ul v-for="alltag in alltagposts" :key="alltag.id">
                   <li class="cat-item"><a href="">{{alltag.tag }}</a></li>       
               </ul>
              </div>
            </div>
          </div>
          <div class="single_sidebar wow fadeInDown" style="padding-top: 25px">
            <h2><span>Sponsor</span></h2>
            <a class="sideAdd" href="#"><img src="frontend/images/add_img.jpg" alt=""></a> </div>
          <div class="single_sidebar wow fadeInDown">
            <h2><span>Category Archive</span></h2>
            <select class="catgArchive">
              <option>Select Category</option>
               <option value="1" v-for="category in categories" :key="category.id">{{ category.name }}</option> 
               
            </select>
          </div>
          <div class="single_sidebar wow fadeInDown">
            <h2><span>Links</span></h2>
            <ul>
              <li><a href="#">Ministry Of Education</a></li>
              <li><a href="#">Directorate Of Ministry</a></li>
              <li><a href="#">National University</a></li>
            </ul>
          </div>
        </aside>
      </div> 
  </div>
</template>

<script>
import axios from 'axios';
export default {
name:'Sidebar',
data(){     
   return{
           posts: [],
           publicposts: [],
           admissionposts: [],
           examposts: [],
           resultposts: [],
           scholarposts: [],
           stipendposts: [],
           adminsposts: [],
           mpoposts: [],
           mposarposts: [],
           ntrcaposts: [],
           teacherposts: [],
           studentposts: [],
           stuffposts: [],
           categories: [],
           subcategories: [],
           alltagposts: [],

           }
        },
        mounted() {
    this.getData();
    this.getPublicData();
    this.getAdmissionData();
    this.getExamData();
    this.getResultData();
    this.getScholarData();
    this.getStipendData();
    this.getAdminsData();
    this.getMpoData();
    this.getMposarData();
    this.getNtrcaData();
    this.getTeacherData();
    this.getStudentData();
    this.getStuffData();
    this.getAlltagData();
    this.loadCategories();
    this.loadSubCategories();
    

  },
  methods: {
     getData() {
      axios .get("http://127.0.0.1:8000/api/posts")
        .then(response => {
          this.posts = response.data.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
      getPublicData() {
      axios .get("http://127.0.0.1:8000/api/public/posts")
        .then(response => {
          this.publicposts = response.data.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    getAdmissionData() {
      axios .get("http://127.0.0.1:8000/api/admission/posts")
        .then(response => {
          this.admissionposts = response.data.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    getExamData() {
      axios .get("http://127.0.0.1:8000/api/exam/posts")
        .then(response => {
          this.examposts = response.data.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    getResultData() {
      axios .get("http://127.0.0.1:8000/api/result/posts")
        .then(response => {
          this.resultposts = response.data.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    getScholarData() {
      axios .get("http://127.0.0.1:8000/api/scholar/posts")
        .then(response => {
          this.scholarposts = response.data.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
     getStipendData() {
      axios .get("http://127.0.0.1:8000/api/stipend/posts")
        .then(response => {
          this.stipendposts = response.data.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
     getAdminsData() {
      axios .get("http://127.0.0.1:8000/api/admins/posts")
        .then(response => {
          this.adminsposts = response.data.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
     getMpoData() {
      axios .get("http://127.0.0.1:8000/api/mpo/posts")
        .then(response => {
          this.mpoposts = response.data.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
     getMposarData() {
      axios .get("http://127.0.0.1:8000/api/mposar/posts")
        .then(response => {
          this.mposarposts = response.data.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
     getNtrcaData() {
      axios .get("http://127.0.0.1:8000/api/ntrca/posts")
        .then(response => {
          this.ntrcaposts = response.data.data;
        })
        .catch(e => {
          console.log(e);
        });
    },

    getTeacherData() {
      axios .get("http://127.0.0.1:8000/api/teacher/posts")
        .then(response => {
          this.teacherposts = response.data.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    getStudentData() {
      axios .get("http://127.0.0.1:8000/api/student/posts")
        .then(response => {
          this.studentposts = response.data.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    getStuffData() {
      axios .get("http://127.0.0.1:8000/api/stuff/posts")
        .then(response => {
          this.stuffposts = response.data.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    loadCategories(){
        axios.get('http://127.0.0.1:8000/api/categories').then(response =>{
          this.categories = response.data;
        });
      },
   loadSubCategories(){
        axios.get('http://127.0.0.1:8000/api/subcategories').then(response =>{
          this.subcategories = response.data;
        });
      },
      getAlltagData() {
      axios .get("http://127.0.0.1:8000/api/alltag/posts")
        .then(response => {
          this.alltagposts = response.data.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
}
</script>

<style>

</style>