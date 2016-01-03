 $.ajax({
   url: 'http://api.flickr.com/services/feeds/groups_pool.gne?id=807213@N20&lang=en-us&format=json&jsoncallback=?',
   dataType: 'jsonp'
 }).then(data => {
   const items = data.items;
   items.forEach((el) => {
     const img = new Image();
     img.src = el.media.m;
     img.className = "pics";
     setTimeout(() => {
       $('#content').append(img);
     }, 1000);
   });
 });
 
 /*
 <div id="content"></div>
 .pics {
  max-width:100px;
  height:auto;
  border:2px solid #fff;
}

#content {
  max-width:600px;
  display:block;
  margin:0 auto;
}

 */
