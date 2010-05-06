<!--
   var request = false;
   var pleaseWait='لطفا کمی صبر کنید....' ;
   try {
     request = new XMLHttpRequest();
   } catch (trymicrosoft) {
     try {
       request = new ActiveXObject("Msxml2.XMLHTTP");
     } catch (othermicrosoft) {
       try {
         request = new ActiveXObject("Microsoft.XMLHTTP");
       } catch (failed) {
         request = false;
       }
     }
   }
   if (!request)
     alert("Error initializing XMLHttpRequest!");


function setAvalueNext(res1){
var bread = document.getElementById("breadcrumbcontainer");
/*var gallery = document.createElement("div");
gallery.id = "gallery";
 //And add in all the organization divs
 gallery.innerHTML = res1; */
 bread.innerHTML=res1;
 /*bread.appendChild(gallery);
     document.body.appendChild( gallery );
      Handle support for which the next and previous links
      are clicked within the gallery
     id("gallery_next").onclick = nextImage;
    id("gallery_prev").onclick = prevImage;
        .text = "";*/
    return false;
}


function updatePage() {

     if (request.readyState == 4) {
       if (request.status == 200) {
         var response = request.responseText;//.split("|");
         setAvalueNext(response);
       }else if (request.status == 404)
         alert("Request URL does not exist");
        else
         alert("status is " + request.status + '\n' + 'کمی صبر کنید یا دورباره گزینه‌ی خود را برگزینید');
     }
 }

 function getAnOfflinePage(page_name){
   var bread = document.getElementById("breadcrumbcontainer");
   bread.innerHTML=pleaseWait;
   //var url = siteAddress + "php/res.php?title=" +current_language+'/'+ page_name;
   //alert(location.pathname)
   if(navigator.appName == 'Opera'){
      ind = location.href.lastIndexOf('/')
      if(ind >=0)
         page_name = location.href.substr(0,ind+1)+ page_name ;
      else
         alert('Can not open file')
      //if(navigator.platform == 'Linux')
   }
   var url = siteAddress + page_name;
   if(location.protocol == 'file:'){
      /*  The foregoing site help me to develop this IF section::  http://www.webdeveloper.com/forum/showthread.php?t=39601*/
      request.open("GET", url, false);
      request.send();
      for(var ii=0; ii <1000 && request.readyState != 4 ; ii++)
          ;
      if(request.readyState == 4)
         bread.innerHTML = request.responseText;
       else alert('File not found :: '+ url)
   }
   else  alert('Protocol is not file');
   return false;
}
//-->
