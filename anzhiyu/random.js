var posts=["2024/07/20/hello-world/","2024/07/20/搭建01/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };