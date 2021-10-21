<template>
  <div>
      <section id="navArea"  >
    <nav class="navbar navbar-inverse" role="navigation">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav main_nav">
          <li class="active"><router-link :to="{ name:'Home' }"><span class="fa fa-home desktop-home"></span><span class="mobile-show">Home</span></router-link></li>
          
                    <li class="dropdown"> <a href="category-post/%e0%a6%b8%e0%a7%8d%e0%a6%95%e0%a7%81%e0%a6%b2-%e0%a6%95%e0%a6%b2%e0%a7%87%e0%a6%9c.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">স্কুল-কলেজ</a>
            <ul class="dropdown-menu" role="menu">
                            <li><a href="subcategory-post/%e0%a6%aa%e0%a6%bf%e0%a6%87%e0%a6%b8%e0%a6%bf.html">পিইসি</a></li>
                            <li><a href="subcategory-post/%e0%a6%9c%e0%a7%87%e0%a6%8f%e0%a6%b8%e0%a6%b8%e0%a6%bf.html">জেএসসি</a></li>
                            <li><a href="subcategory-post/%e0%a6%8f%e0%a6%b8%e0%a6%8f%e0%a6%b8%e0%a6%b8%e0%a6%bf.html">এসএসসি</a></li>
                            <li><a href="subcategory-post/%e0%a6%8f%e0%a6%87%e0%a6%9a%e0%a6%8f%e0%a6%b8%e0%a6%b8%e0%a6%bf.html">এইচএসসি</a></li>
                            <li><a href="subcategory-post/%e0%a6%ad%e0%a6%b0%e0%a7%8d%e0%a6%a4%e0%a6%bf%20%e0%a6%b8%e0%a6%82%e0%a6%95%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%a8%e0%a7%8d%e0%a6%a4.html">ভর্তি সংক্রান্ত</a></li>
                            <li><a href="subcategory-post/%e0%a6%aa%e0%a6%b0%e0%a7%80%e0%a6%95%e0%a7%8d%e0%a6%b7%e0%a6%be%20%e0%a6%b8%e0%a6%82%e0%a6%95%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%b8%e0%a7%8d%e0%a6%a4.html">পরীক্ষা সংক্রাস্ত</a></li>
                            <li><a href="subcategory-post/%e0%a6%ab%e0%a6%b2%e0%a6%be%e0%a6%ab%e0%a6%b2%20%e0%a6%b8%e0%a6%82%e0%a6%95%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%b8%e0%a7%8d%e0%a6%a4.html">ফলাফল সংক্রাস্ত</a></li>
                            <li><a href="subcategory-post/%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%b6%e0%a6%be%e0%a6%b8%e0%a6%a8%e0%a6%bf%e0%a6%95.html">প্রশাসনিক</a></li>
                            <li><a href="subcategory-post/%e0%a6%89%e0%a6%aa%e0%a6%ac%e0%a7%83%e0%a6%a4%e0%a7%8d%e0%a6%a4%e0%a6%bf.html">উপবৃত্তি</a></li>
                          </ul>
          </li>
          
                    <li class="dropdown"> <a href="category-post/%e0%a6%9c%e0%a6%be%e0%a6%a4%e0%a7%80%e0%a7%9f%20%e0%a6%ac%e0%a6%bf%e0%a6%b6%e0%a7%8d%e0%a6%ac%e0%a6%83.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">জাতীয় বিশ্বঃ</a>
            <ul class="dropdown-menu" role="menu">
                            <li><a href="subcategory-post/%e0%a6%a1%e0%a6%bf%e0%a6%97%e0%a7%8d%e0%a6%b0%e0%a7%80%20%e0%a7%a7%e0%a6%ae%20%e0%a6%ac%e0%a6%b0%e0%a7%8d%e0%a6%b7.html">ডিগ্রী ১ম বর্ষ</a></li>
                            <li><a href="subcategory-post/%e0%a6%a1%e0%a6%bf%e0%a6%97%e0%a7%8d%e0%a6%b0%e0%a7%80%20%e0%a7%a8%e0%a7%9f%20%e0%a6%ac%e0%a6%b0%e0%a7%8d%e0%a6%b7.html">ডিগ্রী ২য় বর্ষ</a></li>
                            <li><a href="subcategory-post/%e0%a6%a1%e0%a6%bf%e0%a6%97%e0%a7%8d%e0%a6%b0%e0%a7%80%20%e0%a7%a9%e0%a7%9f%20%e0%a6%ac%e0%a6%b0%e0%a7%8d%e0%a6%b7.html">ডিগ্রী ৩য় বর্ষ</a></li>
                            <li><a href="subcategory-post/%e0%a6%85%e0%a6%a8%e0%a6%be%e0%a6%b0%e0%a7%8d%e0%a6%b8%20%e0%a7%a7%e0%a6%ae%20%e0%a6%ac%e0%a6%b0%e0%a7%8d%e0%a6%b7.html">অনার্স ১ম বর্ষ</a></li>
                            <li><a href="subcategory-post/%e0%a6%85%e0%a6%a8%e0%a6%be%e0%a6%b0%e0%a7%8d%e0%a6%b8%20%e0%a7%a8%e0%a7%9f%20%e0%a6%ac%e0%a6%b0%e0%a7%8d%e0%a6%b7.html">অনার্স ২য় বর্ষ</a></li>
                            <li><a href="subcategory-post/%e0%a6%85%e0%a6%a8%e0%a6%be%e0%a6%b0%e0%a7%8d%e0%a6%b8%20%e0%a7%a9%e0%a7%9f%20%e0%a6%ac%e0%a6%b0%e0%a7%8d%e0%a6%b7.html">অনার্স ৩য় বর্ষ</a></li>
                            <li><a href="subcategory-post/%e0%a6%85%e0%a6%a8%e0%a6%be%e0%a6%b0%e0%a7%8d%e0%a6%b8%20%e0%a7%aa%e0%a6%b0%e0%a7%8d%e0%a6%a5%20%20%e0%a6%ac%e0%a6%b0%e0%a7%8d%e0%a6%b7.html">অনার্স ৪র্থ  বর্ষ</a></li>
                            <li><a href="subcategory-post/%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%bf%e0%a6%b2%e0%a6%bf%e0%a6%ae%e0%a6%bf%e0%a6%a8%e0%a6%be%e0%a6%b0%e0%a7%80.html">প্রিলিমিনারী</a></li>
                            <li><a href="subcategory-post/%e0%a6%ae%e0%a6%be%e0%a6%b8%e0%a7%8d%e0%a6%9f%e0%a6%be%e0%a6%b0%e0%a7%8d%e0%a6%b8.html">মাস্টার্স</a></li>
                            <li><a href="subcategory-post/%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%b6%e0%a6%be%e0%a6%b8%e0%a6%a8.html">প্রশাসন</a></li>
                            <li><a href="subcategory-post/%e0%a6%aa%e0%a6%b0%e0%a7%80%e0%a6%95%e0%a7%8d%e0%a6%b7%e0%a6%be%20%e0%a6%b8%e0%a6%82%e0%a6%95%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%b8%e0%a7%8d%e0%a6%a4.html">পরীক্ষা সংক্রাস্ত</a></li>
                            <li><a href="subcategory-post/%e0%a6%aa%e0%a6%b0%e0%a7%80%e0%a6%95%e0%a7%8d%e0%a6%b7%e0%a6%be%20%e0%a6%b8%e0%a6%82%e0%a6%95%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%b8%e0%a7%8d%e0%a6%a4.html">পরীক্ষা সংক্রাস্ত</a></li>
                            <li><a href="subcategory-post/%e0%a6%ab%e0%a6%b2%e0%a6%be%e0%a6%ab%e0%a6%b2%20%e0%a6%b8%e0%a6%82%e0%a6%95%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%b8%e0%a7%8d%e0%a6%a4.html">ফলাফল সংক্রাস্ত</a></li>
                          </ul>
          </li>
          
                    <li class="dropdown"> <a href="category-post/%e0%a6%aa%e0%a6%be%e0%a6%ac%e0%a6%b2%e0%a6%bf%e0%a6%95%20%e0%a6%ac%e0%a6%bf%e0%a6%b6%e0%a7%8d%e0%a6%ac%e0%a6%83.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">পাবলিক বিশ্বঃ</a>
            <ul class="dropdown-menu" role="menu">
                            <li><a href="subcategory-post/%e0%a6%aa%e0%a6%b0%e0%a7%80%e0%a6%95%e0%a7%8d%e0%a6%b7%e0%a6%be%20%e0%a6%b8%e0%a6%82%e0%a6%95%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%b8%e0%a7%8d%e0%a6%a4.html">পরীক্ষা সংক্রাস্ত</a></li>
                            <li><a href="subcategory-post/%e0%a6%ad%e0%a6%b0%e0%a7%8d%e0%a6%a4%e0%a6%bf%20%e0%a6%b8%e0%a6%82%e0%a6%95%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%a8%e0%a7%8d%e0%a6%a4.html">ভর্তি সংক্রান্ত</a></li>
                            <li><a href="subcategory-post/%e0%a6%ab%e0%a6%b2%e0%a6%be%e0%a6%ab%e0%a6%b2%20%e0%a6%b8%e0%a6%82%e0%a6%95%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%b8%e0%a7%8d%e0%a6%a4.html">ফলাফল সংক্রাস্ত</a></li>
                            <li><a href="subcategory-post/%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%b6%e0%a6%be%e0%a6%b8%e0%a6%a8%e0%a6%bf%e0%a6%95.html">প্রশাসনিক</a></li>
                          </ul>
          </li>
          
                    <li class="dropdown"> <a href="category-post/%e0%a6%b8%e0%a6%b0%e0%a6%83-%e0%a6%ac%e0%a7%87%e0%a6%b8%e0%a6%83%20%e0%a6%9a%e0%a6%be%e0%a6%95%e0%a7%81%e0%a6%b0%e0%a7%80.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">সরঃ-বেসঃ চাকুরী</a>
            <ul class="dropdown-menu" role="menu">
                            <li><a href="subcategory-post/%e0%a6%b8%e0%a7%8d%e0%a6%95%e0%a7%81%e0%a6%b2-%e0%a6%95%e0%a6%b2%e0%a7%87%e0%a6%9c.html">স্কুল-কলেজ</a></li>
                            <li><a href="subcategory-post/%e0%a6%ae%e0%a6%a8%e0%a7%8d%e0%a6%a4%e0%a7%8d%e0%a6%b0%e0%a6%a8%e0%a6%be%e0%a6%b2%e0%a7%9f.html">মন্ত্রনালয়</a></li>
                            <li><a href="subcategory-post/%e0%a6%85%e0%a6%a7%e0%a6%bf%e0%a6%a6%e0%a6%aa%e0%a7%8d%e0%a6%a4%e0%a6%b0.html">অধিদপ্তর</a></li>
                            <li><a href="subcategory-post/%e0%a6%ac%e0%a6%bf%e0%a6%b8%e0%a6%bf%e0%a6%8f%e0%a6%b8.html">বিসিএস</a></li>
                            <li><a href="subcategory-post/%e0%a6%95%e0%a7%8d%e0%a6%af%e0%a6%be%e0%a6%a1%e0%a6%be%e0%a6%b0.html">ক্যাডার</a></li>
                            <li><a href="subcategory-post/%e0%a6%a8%e0%a6%a8-%e0%a6%95%e0%a7%8d%e0%a6%af%e0%a6%be%e0%a6%a1%e0%a6%be%e0%a6%b0.html">নন-ক্যাডার</a></li>
                            <li><a href="subcategory-post/%e0%a6%85%e0%a6%a8%e0%a7%8d%e0%a6%af%e0%a6%be%e0%a6%a8%e0%a7%8d%e0%a6%af.html">অন্যান্য</a></li>
                            <li><a href="subcategory-post/%e0%a6%ac%e0%a7%8d%e0%a6%af%e0%a6%be%e0%a6%82%e0%a6%95.html">ব্যাংক</a></li>
                            <li><a href="subcategory-post/%e0%a6%b6%e0%a6%bf%e0%a6%95%e0%a7%8d%e0%a6%b7%e0%a6%95.html">শিক্ষক</a></li>
                          </ul>
          </li>
          
                    <li class="dropdown"> <a href="category-post/%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%87%e0%a6%ad%e0%a7%87%e0%a6%9f%20%e0%a6%9a%e0%a6%be%e0%a6%95%e0%a7%81%e0%a6%b0%e0%a7%80.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">প্রাইভেট চাকুরী</a>
            <ul class="dropdown-menu" role="menu">
                            <li><a href="subcategory-post/%e0%a6%b8%e0%a7%8d%e0%a6%95%e0%a7%81%e0%a6%b2-%e0%a6%95%e0%a6%b2%e0%a7%87%e0%a6%9c.html">স্কুল-কলেজ</a></li>
                            <li><a href="subcategory-post/%e0%a6%ac%e0%a7%8d%e0%a6%af%e0%a6%be%e0%a6%82%e0%a6%95.html">ব্যাংক</a></li>
                            <li><a href="subcategory-post/%e0%a6%b6%e0%a6%bf%e0%a6%95%e0%a7%8d%e0%a6%b7%e0%a6%95.html">শিক্ষক</a></li>
                            <li><a href="subcategory-post/%e0%a6%ae%e0%a6%be%e0%a6%b2%e0%a7%8d%e0%a6%9f%e0%a6%bf%e0%a6%a8%e0%a7%8d%e0%a6%af%e0%a6%be%e0%a6%b6%e0%a6%a8%e0%a6%be%e0%a6%b2%20%e0%a6%95%e0%a7%8b%e0%a6%ae%e0%a7%8d%e0%a6%aa%e0%a6%be%e0%a6%a8%e0%a6%bf.html">মাল্টিন্যাশনাল কোম্পানি</a></li>
                            <li><a href="subcategory-post/%e0%a6%95%e0%a7%8b%e0%a6%ae%e0%a7%8d%e0%a6%aa%e0%a6%be%e0%a6%a8%e0%a6%bf.html">কোম্পানি</a></li>
                            <li><a href="subcategory-post/%e0%a6%b8%e0%a6%ab%e0%a6%9f%e0%a6%93%e0%a7%9f%e0%a7%8d%e0%a6%af%e0%a6%be%e0%a6%b0%20%e0%a6%95%e0%a7%8b%e0%a6%ae%e0%a7%8d%e0%a6%aa%e0%a6%be%e0%a6%a8%e0%a7%80.html">সফটওয়্যার কোম্পানী</a></li>
                            <li><a href="subcategory-post/%e0%a6%97%e0%a7%8d%e0%a6%b0%e0%a7%81%e0%a6%aa%20%e0%a6%95%e0%a7%8b%e0%a6%ae%e0%a7%8d%e0%a6%aa%e0%a6%be%e0%a6%a8%e0%a7%80.html">গ্রুপ কোম্পানী</a></li>
                            <li><a href="subcategory-post/%e0%a6%ae%e0%a6%be%e0%a6%b0%e0%a7%8d%e0%a6%95%e0%a7%87%e0%a6%9f%e0%a6%bf%e0%a6%82.html">মার্কেটিং</a></li>
                            <li><a href="subcategory-post/%e0%a6%a8%e0%a6%bf%e0%a6%b0%e0%a6%be%e0%a6%aa%e0%a6%a4%e0%a7%8d%e0%a6%a4%e0%a6%be%20%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%b9%e0%a6%b0%e0%a7%80.html">নিরাপত্তা প্রহরী</a></li>
                            <li><a href="subcategory-post/%e0%a6%ac%e0%a7%8d%e0%a6%b0%e0%a7%8d%e0%a6%af%e0%a6%be%e0%a6%a8%e0%a7%8d%e0%a6%a1%20%e0%a6%95%e0%a7%8b%e0%a6%ae%e0%a7%8d%e0%a6%aa%e0%a6%be%e0%a6%a8%e0%a7%80.html">ব্র্যান্ড কোম্পানী</a></li>
                          </ul>
          </li>
          
                    <li class="dropdown"> <a href="category-post/%e0%a6%89%e0%a6%aa%e0%a6%ac%e0%a7%83%e0%a6%a4%e0%a7%8d%e0%a6%a4%e0%a6%bf.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">উপবৃত্তি</a>
            <ul class="dropdown-menu" role="menu">
                            <li><a href="subcategory-post/%e0%a6%b8%e0%a7%8d%e0%a6%95%e0%a7%81%e0%a6%b2-%e0%a6%95%e0%a6%b2%e0%a7%87%e0%a6%9c.html">স্কুল-কলেজ</a></li>
                            <li><a href="subcategory-post/%e0%a6%a1%e0%a6%bf%e0%a6%97%e0%a7%8d%e0%a6%b0%e0%a7%80-%e0%a6%85%e0%a6%a8%e0%a6%be%e0%a6%b0%e0%a7%8d%e0%a6%b8-%e0%a6%ae%e0%a6%be%e0%a6%b8%e0%a7%8d%e0%a6%9f%e0%a6%be%e0%a6%b0%e0%a7%8d%e0%a6%b8.html">ডিগ্রী-অনার্স-মাস্টার্স</a></li>
                          </ul>
          </li>
          
                    <li class="dropdown"> <a href="category-post/%e0%a6%ac%e0%a7%83%e0%a6%a4%e0%a7%8d%e0%a6%a4%e0%a6%bf.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">বৃত্তি</a>
            <ul class="dropdown-menu" role="menu">
                          </ul>
          </li>
          
                    <li class="dropdown"> <a href="category-post/%e0%a6%ad%e0%a6%b0%e0%a7%8d%e0%a6%a4%e0%a6%bf.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">ভর্তি</a>
            <ul class="dropdown-menu" role="menu">
                            <li><a href="subcategory-post/%e0%a6%8f%e0%a6%87%e0%a6%9a%e0%a6%8f%e0%a6%b8%e0%a6%b8%e0%a6%bf.html">এইচএসসি</a></li>
                            <li><a href="subcategory-post/%e0%a6%85%e0%a6%a8%e0%a6%be%e0%a6%b0%e0%a7%8d%e0%a6%b8%20%e0%a7%a7%e0%a6%ae%20%e0%a6%ac%e0%a6%b0%e0%a7%8d%e0%a6%b7.html">অনার্স ১ম বর্ষ</a></li>
                            <li><a href="subcategory-post/%e0%a6%a1%e0%a6%bf%e0%a6%97%e0%a7%8d%e0%a6%b0%e0%a7%80%20%e0%a7%a7%e0%a6%ae%20%e0%a6%ac%e0%a6%b0%e0%a7%8d%e0%a6%b7.html">ডিগ্রী ১ম বর্ষ</a></li>
                            <li><a href="subcategory-post/%e0%a6%85%e0%a6%a8%e0%a6%be%e0%a6%b0%e0%a7%8d%e0%a6%b8%20%e0%a7%a7%e0%a6%ae%20%e0%a6%ac%e0%a6%b0%e0%a7%8d%e0%a6%b7.html">অনার্স ১ম বর্ষ</a></li>
                            <li><a href="subcategory-post/%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%bf%e0%a6%b2%e0%a6%bf%e0%a6%ae%e0%a6%bf%e0%a6%a8%e0%a6%be%e0%a6%b0%e0%a7%80.html">প্রিলিমিনারী</a></li>
                            <li><a href="subcategory-post/%e0%a6%ae%e0%a6%be%e0%a6%b8%e0%a7%8d%e0%a6%9f%e0%a6%be%e0%a6%b0%e0%a7%8d%e0%a6%b8.html">মাস্টার্স</a></li>
                            <li><a href="subcategory-post/%e0%a6%89%e0%a6%a8%e0%a7%8d%e0%a6%ae%e0%a7%81%e0%a6%95%e0%a7%8d%e0%a6%a4%20%e0%a6%ac%e0%a6%bf%e0%a6%b6%e0%a7%8d%e0%a6%ac%e0%a6%83.html">উন্মুক্ত বিশ্বঃ</a></li>
                            <li><a href="subcategory-post/%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%87%e0%a6%ae%e0%a6%be%e0%a6%b0%e0%a7%80.html">প্রাইমারী</a></li>
                            <li><a href="subcategory-post/%e0%a6%ad%e0%a7%8b%e0%a6%95%e0%a7%87%e0%a6%b6%e0%a6%a8%e0%a6%be%e0%a6%b2.html">ভোকেশনাল</a></li>
                          </ul>
          </li>
          
                    <li class="dropdown"> <a href="category-post/%e0%a6%ab%e0%a6%b2%e0%a6%be%e0%a6%ab%e0%a6%b2.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">ফলাফল</a>
            <ul class="dropdown-menu" role="menu">
                            <li><a href="subcategory-post/%e0%a6%9c%e0%a7%87%e0%a6%8f%e0%a6%b8%e0%a6%b8%e0%a6%bf.html">জেএসসি</a></li>
                            <li><a href="subcategory-post/%e0%a6%8f%e0%a6%b8%e0%a6%8f%e0%a6%b8%e0%a6%b8%e0%a6%bf.html">এসএসসি</a></li>
                            <li><a href="subcategory-post/%e0%a6%8f%e0%a6%87%e0%a6%9a%e0%a6%8f%e0%a6%b8%e0%a6%b8%e0%a6%bf.html">এইচএসসি</a></li>
                            <li><a href="subcategory-post/%e0%a6%a1%e0%a6%bf%e0%a6%97%e0%a7%8d%e0%a6%b0%e0%a7%80%20%e0%a7%a7%e0%a6%ae%20%e0%a6%ac%e0%a6%b0%e0%a7%8d%e0%a6%b7.html">ডিগ্রী ১ম বর্ষ</a></li>
                            <li><a href="subcategory-post/%e0%a6%a1%e0%a6%bf%e0%a6%97%e0%a7%8d%e0%a6%b0%e0%a7%80%20%e0%a7%a8%e0%a7%9f%20%e0%a6%ac%e0%a6%b0%e0%a7%8d%e0%a6%b7.html">ডিগ্রী ২য় বর্ষ</a></li>
                            <li><a href="subcategory-post/%e0%a6%a1%e0%a6%bf%e0%a6%97%e0%a7%8d%e0%a6%b0%e0%a7%80%20%e0%a7%a9%e0%a7%9f%20%e0%a6%ac%e0%a6%b0%e0%a7%8d%e0%a6%b7.html">ডিগ্রী ৩য় বর্ষ</a></li>
                            <li><a href="subcategory-post/%e0%a6%85%e0%a6%a8%e0%a6%be%e0%a6%b0%e0%a7%8d%e0%a6%b8%20%e0%a7%a7%e0%a6%ae%20%e0%a6%ac%e0%a6%b0%e0%a7%8d%e0%a6%b7.html">অনার্স ১ম বর্ষ</a></li>
                            <li><a href="subcategory-post/%e0%a6%85%e0%a6%a8%e0%a6%be%e0%a6%b0%e0%a7%8d%e0%a6%b8%20%e0%a7%a8%e0%a7%9f%20%e0%a6%ac%e0%a6%b0%e0%a7%8d%e0%a6%b7.html">অনার্স ২য় বর্ষ</a></li>
                            <li><a href="subcategory-post/%e0%a6%85%e0%a6%a8%e0%a6%be%e0%a6%b0%e0%a7%8d%e0%a6%b8%20%e0%a7%a9%e0%a7%9f%20%e0%a6%ac%e0%a6%b0%e0%a7%8d%e0%a6%b7.html">অনার্স ৩য় বর্ষ</a></li>
                            <li><a href="subcategory-post/%e0%a6%85%e0%a6%a8%e0%a6%be%e0%a6%b0%e0%a7%8d%e0%a6%b8%20%e0%a7%aa%e0%a6%b0%e0%a7%8d%e0%a6%a5%20%e0%a6%ac%e0%a6%b0%e0%a7%8d%e0%a6%b7.html">অনার্স ৪র্থ বর্ষ</a></li>
                            <li><a href="subcategory-post/%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%bf%e0%a6%b2%e0%a6%bf%e0%a6%ae%e0%a6%bf%e0%a6%a8%e0%a6%be%e0%a6%b0%e0%a7%80.html">প্রিলিমিনারী</a></li>
                            <li><a href="subcategory-post/%e0%a6%ae%e0%a6%be%e0%a6%b8%e0%a7%8d%e0%a6%9f%e0%a6%be%e0%a6%b0%e0%a7%8d%e0%a6%b8.html">মাস্টার্স</a></li>
                            <li><a href="subcategory-post/%e0%a6%9c%e0%a7%87%e0%a6%a1%e0%a6%bf%e0%a6%b8%e0%a6%bf.html">জেডিসি</a></li>
                            <li><a href="subcategory-post/%e0%a6%a6%e0%a6%be%e0%a6%96%e0%a6%bf%e0%a6%b2.html">দাখিল</a></li>
                            <li><a href="subcategory-post/%e0%a6%86%e0%a6%b2%e0%a6%bf%e0%a6%ae.html">আলিম</a></li>
                            <li><a href="subcategory-post/%e0%a6%89%e0%a6%a8%e0%a7%8d%e0%a6%ae%e0%a7%81%e0%a6%95%e0%a7%8d%e0%a6%a4%20%e0%a6%ac%e0%a6%bf%e0%a6%b6%e0%a7%8d%e0%a6%ac%e0%a6%83.html">উন্মুক্ত বিশ্বঃ</a></li>
                            <li><a href="subcategory-post/%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%87%e0%a6%ae%e0%a6%be%e0%a6%b0%e0%a7%80.html">প্রাইমারী</a></li>
                            <li><a href="subcategory-post/%e0%a6%ad%e0%a7%8b%e0%a6%95%e0%a7%87%e0%a6%b6%e0%a6%a8%e0%a6%be%e0%a6%b2.html">ভোকেশনাল</a></li>
                          </ul>
          </li>
          
                    <li class="dropdown"> <a href="category-post/%e0%a6%aa%e0%a6%b0%e0%a7%80%e0%a6%95%e0%a7%8d%e0%a6%b7%e0%a6%be.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">পরীক্ষা</a>
            <ul class="dropdown-menu" role="menu">
                            <li><a href="subcategory-post/%e0%a6%9c%e0%a7%87%e0%a6%8f%e0%a6%b8%e0%a6%b8%e0%a6%bf.html">জেএসসি</a></li>
                            <li><a href="subcategory-post/%e0%a6%8f%e0%a6%b8%e0%a6%8f%e0%a6%b8%e0%a6%b8%e0%a6%bf.html">এসএসসি</a></li>
                            <li><a href="subcategory-post/%e0%a6%8f%e0%a6%87%e0%a6%9a%e0%a6%8f%e0%a6%b8%e0%a6%b8%e0%a6%bf.html">এইচএসসি</a></li>
                            <li><a href="subcategory-post/%e0%a6%a1%e0%a6%bf%e0%a6%97%e0%a7%8d%e0%a6%b0%e0%a7%80%20%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%a5%e0%a6%ae%20%e0%a6%ac%e0%a6%b0%e0%a7%8d%e0%a6%b7.html">ডিগ্রী প্রথম বর্ষ</a></li>
                            <li><a href="subcategory-post/%e0%a6%a1%e0%a6%bf%e0%a6%97%e0%a7%8d%e0%a6%b0%e0%a7%80%20%e0%a7%a8%e0%a7%9f%20%e0%a6%ac%e0%a6%b0%e0%a7%8d%e0%a6%b7.html">ডিগ্রী ২য় বর্ষ</a></li>
                            <li><a href="subcategory-post/%e0%a6%a1%e0%a6%bf%e0%a6%97%e0%a7%8d%e0%a6%b0%e0%a7%80%20%e0%a7%a9%e0%a7%9f%20%e0%a6%ac%e0%a6%b0%e0%a7%8d%e0%a6%b7.html">ডিগ্রী ৩য় বর্ষ</a></li>
                            <li><a href="subcategory-post/%e0%a6%85%e0%a6%a8%e0%a6%be%e0%a6%b0%e0%a7%8d%e0%a6%b8%20%e0%a7%a7%e0%a6%ae%20%e0%a6%ac%e0%a6%b0%e0%a7%8d%e0%a6%b7.html">অনার্স ১ম বর্ষ</a></li>
                            <li><a href="subcategory-post/%e0%a6%85%e0%a6%a8%e0%a6%be%e0%a6%b0%e0%a7%8d%e0%a6%b8%20%e0%a7%a8%e0%a7%9f%20%e0%a6%ac%e0%a6%b0%e0%a7%8d%e0%a6%b7.html">অনার্স ২য় বর্ষ</a></li>
                            <li><a href="subcategory-post/%e0%a6%85%e0%a6%a8%e0%a6%be%e0%a6%b0%e0%a7%8d%e0%a6%b8%20%e0%a7%a9%e0%a7%9f%20%e0%a6%ac%e0%a6%b0%e0%a7%8d%e0%a6%b7.html">অনার্স ৩য় বর্ষ</a></li>
                            <li><a href="subcategory-post/%e0%a6%85%e0%a6%a8%e0%a6%be%e0%a6%b0%e0%a7%8d%e0%a6%b8%20%e0%a7%aa%e0%a6%b0%e0%a7%8d%e0%a6%a5%20%e0%a6%ac%e0%a6%b0%e0%a7%8d%e0%a6%b7.html">অনার্স ৪র্থ বর্ষ</a></li>
                            <li><a href="subcategory-post/%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%bf%e0%a6%b2%e0%a6%bf%e0%a6%ae%e0%a6%bf%e0%a6%a8%e0%a6%be%e0%a6%b0%e0%a7%80.html">প্রিলিমিনারী</a></li>
                            <li><a href="subcategory-post/%e0%a6%ae%e0%a6%be%e0%a6%b8%e0%a7%8d%e0%a6%9f%e0%a6%be%e0%a6%b0%e0%a7%8d%e0%a6%b8.html">মাস্টার্স</a></li>
                            <li><a href="subcategory-post/%e0%a6%9c%e0%a7%87%e0%a6%a1%e0%a6%bf%e0%a6%b8%e0%a6%bf.html">জেডিসি</a></li>
                            <li><a href="subcategory-post/%e0%a6%a6%e0%a6%be%e0%a6%96%e0%a6%bf%e0%a6%b2.html">দাখিল</a></li>
                            <li><a href="subcategory-post/%e0%a6%89%e0%a6%a8%e0%a7%8d%e0%a6%ae%e0%a7%81%e0%a6%95%e0%a7%8d%e0%a6%a4%20%e0%a6%ac%e0%a6%bf%e0%a6%b6%e0%a7%8d%e0%a6%ac%e0%a6%83.html">উন্মুক্ত বিশ্বঃ</a></li>
                            <li><a href="subcategory-post/%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%87%e0%a6%ae%e0%a6%be%e0%a6%b0%e0%a7%80.html">প্রাইমারী</a></li>
                            <li><a href="subcategory-post/%e0%a6%ad%e0%a7%8b%e0%a6%95%e0%a7%87%e0%a6%b6%e0%a6%a8%e0%a6%be%e0%a6%b2.html">ভোকেশনাল</a></li>
                          </ul>
          </li>
          
                    <li class="dropdown"> <a href="category-post/%e0%a6%96%e0%a7%87%e0%a6%b2%e0%a6%be.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">খেলা</a>
            <ul class="dropdown-menu" role="menu">
                            <li><a href="subcategory-post/%e0%a6%95%e0%a7%8d%e0%a6%b0%e0%a6%bf%e0%a6%95%e0%a7%87%e0%a6%9f.html">ক্রিকেট</a></li>
                            <li><a href="subcategory-post/%e0%a6%ab%e0%a7%81%e0%a6%9f%e0%a6%ac%e0%a6%b2.html">ফুটবল</a></li>
                            <li><a href="subcategory-post/%e0%a6%9f%e0%a7%87%e0%a6%a8%e0%a6%bf%e0%a6%b8.html">টেনিস</a></li>
                            <li><a href="subcategory-post/%e0%a6%86%e0%a6%87%e0%a6%aa%e0%a6%bf%e0%a6%8f%e0%a6%b2.html">আইপিএল</a></li>
                          </ul>
          </li>
          
                    <li class="dropdown"> <a href="category-post/%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%b6%e0%a6%be%e0%a6%b8%e0%a6%a8%e0%a6%bf%e0%a6%95.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">প্রশাসনিক</a>
            <ul class="dropdown-menu" role="menu">
                            <li><a href="subcategory-post/%e0%a6%b8%e0%a7%8d%e0%a6%95%e0%a7%81%e0%a6%b2-%e0%a6%95%e0%a6%b2%e0%a7%87%e0%a6%9c.html">স্কুল-কলেজ</a></li>
                            <li><a href="subcategory-post/%e0%a6%9c%e0%a6%be%e0%a6%a4%e0%a7%80%e0%a7%9f%20%e0%a6%ac%e0%a6%bf%e0%a6%b6%e0%a7%8d%e0%a6%ac%e0%a6%ac%e0%a6%bf%e0%a6%a6%e0%a7%8d%e0%a6%af%e0%a6%be%e0%a6%b2%e0%a7%9f.html">জাতীয় বিশ্ববিদ্যালয়</a></li>
                            <li><a href="subcategory-post/%e0%a6%aa%e0%a6%be%e0%a6%ac%e0%a6%b2%e0%a6%bf%e0%a6%95%20%e0%a6%ac%e0%a6%bf%e0%a6%b6%e0%a7%8d%e0%a6%ac%e0%a6%ac%e0%a6%bf%e0%a6%a6%e0%a7%8d%e0%a6%af%e0%a6%be%e0%a6%b2%e0%a7%9f.html">পাবলিক বিশ্ববিদ্যালয়</a></li>
                          </ul>
          </li>
          
                    <li class="dropdown"> <a href="category-post/%e0%a6%b6%e0%a6%bf%e0%a6%95%e0%a7%8d%e0%a6%b7%e0%a6%95.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">শিক্ষক</a>
            <ul class="dropdown-menu" role="menu">
                            <li><a href="subcategory-post/%e0%a6%b8%e0%a7%8d%e0%a6%95%e0%a7%81%e0%a6%b2-%e0%a6%95%e0%a6%b2%e0%a7%87%e0%a6%9c.html">স্কুল-কলেজ</a></li>
                            <li><a href="subcategory-post/%e0%a6%aa%e0%a6%be%e0%a6%ac%e0%a6%b2%e0%a6%bf%e0%a6%95%20%e0%a6%ac%e0%a6%bf%e0%a6%b6%e0%a7%8d%e0%a6%ac%e0%a6%ac%e0%a6%bf%e0%a6%a6%e0%a7%8d%e0%a6%af%e0%a6%be%e0%a6%b2%e0%a7%9f.html">পাবলিক বিশ্ববিদ্যালয়</a></li>
                            <li><a href="subcategory-post/%e0%a6%b8%e0%a6%b0%e0%a6%95%e0%a6%be%e0%a6%b0%e0%a7%80%20%e0%a6%b8%e0%a7%8d%e0%a6%95%e0%a7%81%e0%a6%b2-%e0%a6%95%e0%a6%b2%e0%a7%87%e0%a6%9c.html">সরকারী স্কুল-কলেজ</a></li>
                          </ul>
          </li>
          
                    <li class="dropdown"> <a href="category-post/%e0%a6%b6%e0%a6%bf%e0%a6%95%e0%a7%8d%e0%a6%b7%e0%a6%be%e0%a6%b0%e0%a7%8d%e0%a6%a5%e0%a7%80.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">শিক্ষার্থী</a>
            <ul class="dropdown-menu" role="menu">
                            <li><a href="subcategory-post/%e0%a6%b8%e0%a7%8d%e0%a6%95%e0%a7%81%e0%a6%b2-%e0%a6%95%e0%a6%b2%e0%a7%87%e0%a6%9c.html">স্কুল-কলেজ</a></li>
                            <li><a href="subcategory-post/%e0%a6%9c%e0%a6%be%e0%a6%a4%e0%a7%80%e0%a7%9f%20%e0%a6%ac%e0%a6%bf%e0%a6%b6%e0%a7%8d%e0%a6%ac%e0%a6%ac%e0%a6%bf%e0%a6%a6%e0%a7%8d%e0%a6%af%e0%a6%be%e0%a6%b2%e0%a7%9f.html">জাতীয় বিশ্ববিদ্যালয়</a></li>
                            <li><a href="subcategory-post/%e0%a6%aa%e0%a6%be%e0%a6%ac%e0%a6%b2%e0%a6%bf%e0%a6%95%20%e0%a6%ac%e0%a6%bf%e0%a6%b6%e0%a7%8d%e0%a6%ac%e0%a6%ac%e0%a6%bf%e0%a6%a6%e0%a7%8d%e0%a6%af%e0%a6%be%e0%a6%b2%e0%a7%9f.html">পাবলিক বিশ্ববিদ্যালয়</a></li>
                            <li><a href="subcategory-post/%e0%a6%b8%e0%a6%b0%e0%a6%95%e0%a6%be%e0%a6%b0%e0%a7%80%20%e0%a6%b8%e0%a7%8d%e0%a6%95%e0%a7%81%e0%a6%b2-%e0%a6%95%e0%a6%b2%e0%a7%87%e0%a6%9c.html">সরকারী স্কুল-কলেজ</a></li>
                          </ul>
          </li>
          
                    <li class="dropdown"> <a href="category-post/%e0%a6%95%e0%a6%b0%e0%a7%8d%e0%a6%ae%e0%a6%9a%e0%a6%be%e0%a6%b0%e0%a7%80.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">কর্মচারী</a>
            <ul class="dropdown-menu" role="menu">
                            <li><a href="subcategory-post/%e0%a6%b8%e0%a7%8d%e0%a6%95%e0%a7%81%e0%a6%b2-%e0%a6%95%e0%a6%b2%e0%a7%87%e0%a6%9c.html">স্কুল-কলেজ</a></li>
                            <li><a href="subcategory-post/%e0%a6%aa%e0%a6%be%e0%a6%ac%e0%a6%b2%e0%a6%bf%e0%a6%95%20%e0%a6%ac%e0%a6%bf%e0%a6%b6%e0%a7%8d%e0%a6%ac%e0%a6%ac%e0%a6%bf%e0%a6%a6%e0%a7%8d%e0%a6%af%e0%a6%be%e0%a6%b2%e0%a7%9f.html">পাবলিক বিশ্ববিদ্যালয়</a></li>
                            <li><a href="subcategory-post/%e0%a6%b8%e0%a6%b0%e0%a6%95%e0%a6%be%e0%a6%b0%e0%a7%80%20%e0%a6%b8%e0%a7%8d%e0%a6%95%e0%a7%81%e0%a6%b2-%e0%a6%95%e0%a6%b2%e0%a7%87%e0%a6%9c.html">সরকারী স্কুল-কলেজ</a></li>
                          </ul>
          </li>
          
                    <li class="dropdown"> <a href="category-post/%e0%a6%8f%e0%a6%ae%e0%a6%aa%e0%a6%bf%e0%a6%93%e0%a6%ad%e0%a7%81%e0%a6%95%e0%a7%8d%e0%a6%a4%e0%a6%bf.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">এমপিওভুক্তি</a>
            <ul class="dropdown-menu" role="menu">
                            <li><a href="subcategory-post/%e0%a6%b8%e0%a7%8d%e0%a6%95%e0%a7%81%e0%a6%b2.html">স্কুল</a></li>
                            <li><a href="subcategory-post/%e0%a6%95%e0%a6%b2%e0%a7%87%e0%a6%9c.html">কলেজ</a></li>
                            <li><a href="subcategory-post/%e0%a6%a8%e0%a6%a4%e0%a7%81%e0%a6%a8%20%e0%a6%8f%e0%a6%ae%e0%a6%aa%e0%a6%bf%e0%a6%93.html">নতুন এমপিও</a></li>
                            <li><a href="subcategory-post/%e0%a6%ae%e0%a6%be%e0%a6%a6%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%b8%e0%a6%be.html">মাদ্রাসা</a></li>
                            <li><a href="subcategory-post/%e0%a6%a8%e0%a7%80%e0%a6%a4%e0%a6%bf%e0%a6%ae%e0%a6%be%e0%a6%b2%e0%a6%be.html">নীতিমালা</a></li>
                            <li><a href="subcategory-post/%e0%a6%ac%e0%a6%be%e0%a6%a4%e0%a6%bf%e0%a6%b2.html">বাতিল</a></li>
                          </ul>
          </li>
          
                    <li class="dropdown"> <a href="category-post/%e0%a6%8f%e0%a6%ae%e0%a6%aa%e0%a6%bf%e0%a6%93%20%e0%a6%9b%e0%a6%be%e0%a7%9c.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">এমপিও ছাড়</a>
            <ul class="dropdown-menu" role="menu">
                            <li><a href="subcategory-post/%e0%a6%b8%e0%a7%8d%e0%a6%95%e0%a7%81%e0%a6%b2-%e0%a6%95%e0%a6%b2%e0%a7%87%e0%a6%9c.html">স্কুল-কলেজ</a></li>
                            <li><a href="subcategory-post/%e0%a6%ae%e0%a6%be%e0%a6%a6%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%b8%e0%a6%be.html">মাদ্রাসা</a></li>
                            <li><a href="subcategory-post/%e0%a6%95%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%97%e0%a6%b0%e0%a6%bf.html">কারিগরি</a></li>
                            <li><a href="subcategory-post/%e0%a6%89%e0%a7%8e%e0%a6%b8%e0%a6%ac%20%e0%a6%ad%e0%a6%be%e0%a6%a4%e0%a6%be.html">উৎসব ভাতা</a></li>
                          </ul>
          </li>
          
                    <li class="dropdown"> <a href="category-post/%e0%a6%b6%e0%a6%bf%e0%a6%95%e0%a7%8d%e0%a6%b7%e0%a6%95%20%e0%a6%a8%e0%a6%bf%e0%a6%ac%e0%a6%a8%e0%a7%8d%e0%a6%a7%e0%a6%a8.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">শিক্ষক নিবন্ধন</a>
            <ul class="dropdown-menu" role="menu">
                            <li><a href="subcategory-post/%e0%a6%aa%e0%a6%b0%e0%a7%80%e0%a6%95%e0%a7%8d%e0%a6%b7%e0%a6%be.html">পরীক্ষা</a></li>
                            <li><a href="subcategory-post/%e0%a6%ab%e0%a6%b2%e0%a6%be%e0%a6%ab%e0%a6%b2.html">ফলাফল</a></li>
                            <li><a href="subcategory-post/%e0%a6%a8%e0%a6%bf%e0%a7%9f%e0%a7%8b%e0%a6%97.html">নিয়োগ</a></li>
                            <li><a href="subcategory-post/%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%b6%e0%a6%be%e0%a6%b8%e0%a6%a8.html">প্রশাসন</a></li>
                          </ul>
          </li>
          
                    <li class="dropdown"> <a href="category-post/%e0%a6%ae%e0%a6%be%e0%a6%a6%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%b8%e0%a6%be.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">মাদ্রাসা</a>
            <ul class="dropdown-menu" role="menu">
                            <li><a href="subcategory-post/%e0%a6%9c%e0%a7%87%e0%a6%a1%e0%a6%bf%e0%a6%b8%e0%a6%bf.html">জেডিসি</a></li>
                            <li><a href="subcategory-post/%e0%a6%a6%e0%a6%be%e0%a6%96%e0%a6%bf%e0%a6%b2.html">দাখিল</a></li>
                            <li><a href="subcategory-post/%e0%a6%86%e0%a6%b2%e0%a6%bf%e0%a6%ae.html">আলিম</a></li>
                            <li><a href="subcategory-post/%e0%a6%86%e0%a6%b2%e0%a6%bf%e0%a6%ae.html">আলিম</a></li>
                            <li><a href="subcategory-post/%e0%a6%aa%e0%a6%b0%e0%a7%80%e0%a6%95%e0%a7%8d%e0%a6%b7%e0%a6%be%20%e0%a6%b8%e0%a6%82%e0%a6%95%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%b8%e0%a7%8d%e0%a6%a4.html">পরীক্ষা সংক্রাস্ত</a></li>
                            <li><a href="subcategory-post/%e0%a6%ad%e0%a6%b0%e0%a7%8d%e0%a6%a4%e0%a6%bf%20%e0%a6%b8%e0%a6%82%e0%a6%95%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%a8%e0%a7%8d%e0%a6%a4.html">ভর্তি সংক্রান্ত</a></li>
                            <li><a href="subcategory-post/%e0%a6%ab%e0%a6%b2%e0%a6%be%e0%a6%ab%e0%a6%b2%20%e0%a6%b8%e0%a6%82%e0%a6%95%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%b8%e0%a7%8d%e0%a6%a4.html">ফলাফল সংক্রাস্ত</a></li>
                          </ul>
          </li>
          
                    <li class="dropdown"> <a href="category-post/%e0%a6%89%e0%a6%a8%e0%a7%8d%e0%a6%ae%e0%a7%81%e0%a6%95%e0%a7%8d%e0%a6%a4%20%e0%a6%ac%e0%a6%bf%e0%a6%b6%e0%a7%8d%e0%a6%ac%e0%a6%83.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">উন্মুক্ত বিশ্বঃ</a>
            <ul class="dropdown-menu" role="menu">
                            <li><a href="subcategory-post/%e0%a6%8f%e0%a6%b8%e0%a6%8f%e0%a6%b8%e0%a6%b8%e0%a6%bf.html">এসএসসি</a></li>
                            <li><a href="subcategory-post/%e0%a6%a1%e0%a6%bf%e0%a6%97%e0%a7%8d%e0%a6%b0%e0%a7%80%20%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%a5%e0%a6%ae%20%e0%a6%ac%e0%a6%b0%e0%a7%8d%e0%a6%b7.html">ডিগ্রী প্রথম বর্ষ</a></li>
                            <li><a href="subcategory-post/%e0%a6%a1%e0%a6%bf%e0%a6%97%e0%a7%8d%e0%a6%b0%e0%a7%80%20%e0%a7%a8%e0%a7%9f%20%e0%a6%ac%e0%a6%b0%e0%a7%8d%e0%a6%b7.html">ডিগ্রী ২য় বর্ষ</a></li>
                            <li><a href="subcategory-post/%e0%a6%a1%e0%a6%bf%e0%a6%97%e0%a7%8d%e0%a6%b0%e0%a7%80%20%e0%a7%a9%e0%a7%9f%20%e0%a6%ac%e0%a6%b0%e0%a7%8d%e0%a6%b7.html">ডিগ্রী ৩য় বর্ষ</a></li>
                            <li><a href="subcategory-post/%e0%a6%ad%e0%a6%b0%e0%a7%8d%e0%a6%a4%e0%a6%bf%20%e0%a6%b8%e0%a6%82%e0%a6%95%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%a8%e0%a7%8d%e0%a6%a4.html">ভর্তি সংক্রান্ত</a></li>
                            <li><a href="subcategory-post/%e0%a6%aa%e0%a6%b0%e0%a7%80%e0%a6%95%e0%a7%8d%e0%a6%b7%e0%a6%be%20%e0%a6%b8%e0%a6%82%e0%a6%95%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%b8%e0%a7%8d%e0%a6%a4.html">পরীক্ষা সংক্রাস্ত</a></li>
                            <li><a href="subcategory-post/%e0%a6%ab%e0%a6%b2%e0%a6%be%e0%a6%ab%e0%a6%b2%20%e0%a6%b8%e0%a6%82%e0%a6%95%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%b8%e0%a7%8d%e0%a6%a4.html">ফলাফল সংক্রাস্ত</a></li>
                            <li><a href="subcategory-post/%e0%a6%8f%e0%a6%ae.html">এম.এ</a></li>
                            <li><a href="subcategory-post/%e0%a6%ac%e0%a6%bf.html">বি.এড</a></li>
                            <li><a href="subcategory-post/%e0%a6%8f%e0%a6%ae-2.html">এম.এড</a></li>
                          </ul>
          </li>
          
                    <li class="dropdown"> <a href="category-post/%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%87%e0%a6%ae%e0%a6%be%e0%a6%b0%e0%a7%80.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">প্রাইমারী</a>
            <ul class="dropdown-menu" role="menu">
                            <li><a href="subcategory-post/%e0%a6%aa%e0%a6%bf%e0%a6%87%e0%a6%b8%e0%a6%bf.html">পিইসি</a></li>
                            <li><a href="subcategory-post/%e0%a6%ad%e0%a6%b0%e0%a7%8d%e0%a6%a4%e0%a6%bf%20%e0%a6%b8%e0%a6%82%e0%a6%95%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%a8%e0%a7%8d%e0%a6%a4.html">ভর্তি সংক্রান্ত</a></li>
                            <li><a href="subcategory-post/%e0%a6%aa%e0%a6%b0%e0%a7%80%e0%a6%95%e0%a7%8d%e0%a6%b7%e0%a6%be%20%e0%a6%b8%e0%a6%82%e0%a6%95%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%b8%e0%a7%8d%e0%a6%a4.html">পরীক্ষা সংক্রাস্ত</a></li>
                            <li><a href="subcategory-post/%e0%a6%ab%e0%a6%b2%e0%a6%be%e0%a6%ab%e0%a6%b2%20%e0%a6%b8%e0%a6%82%e0%a6%95%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%b8%e0%a7%8d%e0%a6%a4.html">ফলাফল সংক্রাস্ত</a></li>
                            <li><a href="subcategory-post/%e0%a6%89%e0%a6%aa%e0%a6%ac%e0%a7%83%e0%a6%a4%e0%a7%8d%e0%a6%a4%e0%a6%bf.html">উপবৃত্তি</a></li>
                          </ul>
          </li>
          
                    <li class="dropdown"> <a href="category-post/%e0%a6%ad%e0%a7%8b%e0%a6%95%e0%a7%87%e0%a6%b6%e0%a6%a8%e0%a6%be%e0%a6%b2.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">ভোকেশনাল</a>
            <ul class="dropdown-menu" role="menu">
                            <li><a href="subcategory-post/%e0%a6%8f%e0%a6%b8%e0%a6%8f%e0%a6%b8%e0%a6%b8%e0%a6%bf.html">এসএসসি</a></li>
                            <li><a href="subcategory-post/%e0%a6%8f%e0%a6%b8%e0%a6%8f%e0%a6%b8%e0%a6%b8%e0%a6%bf.html">এসএসসি</a></li>
                            <li><a href="subcategory-post/%e0%a6%8f%e0%a6%87%e0%a6%9a%e0%a6%8f%e0%a6%b8%e0%a6%b8%e0%a6%bf.html">এইচএসসি</a></li>
                            <li><a href="subcategory-post/%e0%a6%a1%e0%a6%bf%e0%a6%aa%e0%a7%8d%e0%a6%b2%e0%a7%8b%e0%a6%ae%e0%a6%be.html">ডিপ্লোমা</a></li>
                            <li><a href="subcategory-post/%e0%a6%ad%e0%a6%b0%e0%a7%8d%e0%a6%a4%e0%a6%bf%20%e0%a6%b8%e0%a6%82%e0%a6%95%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%a8%e0%a7%8d%e0%a6%a4.html">ভর্তি সংক্রান্ত</a></li>
                            <li><a href="subcategory-post/%e0%a6%aa%e0%a6%b0%e0%a7%80%e0%a6%95%e0%a7%8d%e0%a6%b7%e0%a6%be%20%e0%a6%b8%e0%a6%82%e0%a6%95%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%b8%e0%a7%8d%e0%a6%a4.html">পরীক্ষা সংক্রাস্ত</a></li>
                            <li><a href="subcategory-post/%e0%a6%ab%e0%a6%b2%e0%a6%be%e0%a6%ab%e0%a6%b2%20%e0%a6%b8%e0%a6%82%e0%a6%95%e0%a7%8d%e0%a6%b0%e0%a6%be%e0%a6%b8%e0%a7%8d%e0%a6%a4.html">ফলাফল সংক্রাস্ত</a></li>
                          </ul>
          </li>
          
                    <li class="dropdown"> <a href="category-post/%e0%a6%85%e0%a6%a8%e0%a7%8d%e0%a6%af%e0%a6%be%e0%a6%a8%e0%a7%8d%e0%a6%af.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">অন্যান্য</a>
            <ul class="dropdown-menu" role="menu">
                            <li><a href="subcategory-post/%e0%a6%b0%e0%a6%be%e0%a6%9c%e0%a6%a8%e0%a7%80%e0%a6%a4%e0%a6%bf.html">রাজনীতি</a></li>
                            <li><a href="subcategory-post/%e0%a6%b8%e0%a6%be%e0%a6%ae%e0%a6%be%e0%a6%9c%e0%a6%bf%e0%a6%95.html">সামাজিক</a></li>
                            <li><a href="subcategory-post/%e0%a6%85%e0%a6%b0%e0%a7%8d%e0%a6%a5%e0%a6%a8%e0%a7%88%e0%a6%a4%e0%a6%bf%e0%a6%95.html">অর্থনৈতিক</a></li>
                            <li><a href="subcategory-post/%e0%a6%b8%e0%a6%be%e0%a6%82%e0%a6%b8%e0%a7%8d%e0%a6%95%e0%a7%83%e0%a6%a4%e0%a6%bf%e0%a6%95.html">সাংস্কৃতিক</a></li>
                            <li><a href="subcategory-post/%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%b6%e0%a6%be%e0%a6%b8%e0%a6%a8%e0%a6%bf%e0%a6%95.html">প্রশাসনিক</a></li>
                            <li><a href="subcategory-post/%e0%a6%86%e0%a6%ac%e0%a6%b9%e0%a6%be%e0%a6%93%e0%a7%9f%e0%a6%be.html">আবহাওয়া</a></li>
                            <li><a href="subcategory-post/%e0%a6%a7%e0%a6%b0%e0%a7%8d%e0%a6%ae%e0%a7%80%e0%a7%9f.html">ধর্মীয়</a></li>
                            <li><a href="subcategory-post/%e0%a6%b6%e0%a6%bf%e0%a6%95%e0%a7%8d%e0%a6%b7%e0%a6%be.html">শিক্ষা</a></li>
                          </ul>
          </li>
                  </ul>
      </div>
    </nav>
  </section>
  <section id="newsSection"  >
    <div class="row">
      <div class="col-lg-12 col-md-12">
        <div class="latest_newsarea" style="height: 40px;background-color: #605ca8;"> <span style="background: crimson;height: 40px;">আর্জেন্ট সংবাদ</span>
          <ul id="ticker01" class="news_sticker" >
            <li style="font-size:15px" v-for="value in posts" :key="value.id"><a href=""><img src="" alt="">{{ value.title }}</a></li>
           
            </ul>
          <div class="social_area" style="height: 40px;padding-top: 3px;background-color: lightgreen">
            <ul class="social_nav" >
              <li class="facebook"><a href="#"></a></li>
              <li class="twitter"><a href="#"></a></li>
              <li class="googleplus"><a href="#"></a></li>
              <li class="youtube"><a href="#"></a></li>
              
            </ul>
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
      name:'MyNavbar',
        data(){
            return{

                posts: [],
                path: 'http://127.0.0.1:8000'
            }
        },
        mounted() {
            

    this.getData();
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
        .get("http://127.0.0.1:8000/api/argent/posts")
        .then(response => {
          this.posts = response.data.data;
       
        })
        .catch(e => {
          console.log(e);
         
        });
    },
  },

  };


</script>