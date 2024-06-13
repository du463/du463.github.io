var posts=["2024/04/03/Codeforces Ronud 892（Div.2）/","2024/04/04/Codeforces Round 931 (Div. 2)/","2024/04/03/hello-world/","2024/06/13/牛客第46场周赛/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };