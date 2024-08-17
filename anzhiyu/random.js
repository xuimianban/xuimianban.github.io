var posts=["2024/08/14/纯小注册使用白教程/","2024/07/20/搭建01/","2024/08/08/代码/","2024/07/20/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };