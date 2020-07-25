

var  downloads= document.body.querySelectorAll("#images");
// buttonstatus();
var x='';


for(var i=0;i<50;i++){
    (function(x){
downloads[x].addEventListener("click",function(){
   var url=this.src;
   x=randomnumber();
forceDownload(url,"image"+x+".jpg");

 
});
})(i)}
// generate random file name
function randomnumber(){
    var res=Math.floor(Math.random()*5000);
    return '"'+res+'"' ;
}
function forceDownload(url, fileName){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function(){
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(this.response);
        var tag = document.createElement('a');
        tag.href = imageUrl;
        tag.download = fileName;
        document.body.appendChild(tag);
        tag.click();
        document.body.removeChild(tag);
    }
    xhr.send();
}
// function buttonstatus(){
// var p=document.querySelectorAll("#next");
// if(p[0].title=="false"){
//     p[0].disabled=true;
//     p[0].setAttribute("title","No More Post");
//     p[0].innerHTML="You have reached the last Post .. THANK YOU"
// }
// }






// for(var i=0;i<50;i++){
//     downloads[i].addEventListner("click",function(){
//         function onStartedDownload(id) {
//             console.log(`Started downloading: ${id}`);
//           }
          
//           function onFailed(error) {
//             console.log(`Download failed: ${error}`);
//           }
          
//           var downloadUrl = "https://instagram.fccu17-1.fna.fbcdn.net/v/t51.2885-15/e35/92409645_2925064307550017_3147341619730145006_n.jpg?_nc_ht=instagram.fccu17-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=ysT8ak-zMeUAX-zxGSk&oh=ed2bff5a72d0ec057293c077cac4d9b7&oe=5EB7F2F7";
          
//           var downloading = browser.downloads.download({
//             url : downloadUrl,
//             filename : 'my-image-again.png',
//             conflictAction : 'uniquify'
//           });
          
//           downloading.then(onStartedDownload, onFailed);
// //     })
// // }

// var link=document.querySelector("#images");
// console.log(link);

// document.body.appendChild(link);
// link.click();
// document.body.removeChild(link);

// var link = document.createElement('a');
// link.href = 'https://instagram.fccu17-1.fna.fbcdn.net/v/t51.2885-15/e35/92419461_219364909275852_6830732362788064363_n.jpg?_nc_ht=instagram.fccu17-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=MEGIfVenYccAX8uheB5&oh=f141a6c4605168265969b805b2e3fee2&oe=5EB76205';
// link.download = 'Download.jpg';
// document.body.appendChild(link);
// link.click();
// document.body.removeChild(link);