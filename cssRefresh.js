window.addEventListener('load',function(){
  Array.from(document.querySelectorAll('link')).forEach(function(e){
    var d = new Date().getTime();
    if( e.href.indexOf('?') === -1 ){
      e.href = e.href+"?"+d;
    }else{
      e.href = e.href+"&"+d;
    }
  })
},false);

