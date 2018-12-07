   $(document).ready(function(){
       let mobile = (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())); 
       
function ShowFavourites() {
//Event One
    $("#oneshowbutton").on("click",function(){
try{
            let event = $("#oneshow").text();
let file = JSON.parse(localStorage.getItem("Favourites"));
		if(file == null || file == undefined){
			file = [];
		}
        file.push(event);
		localStorage.setItem("Favourites", JSON.stringify(file));
    FavouriteAlert();
	}catch(e){
		if(e == QUOTA_EXCEEDED_ERR){
			console.log("Unable to save to file");
		}else{
			console.log(e);
		}}
       });  
  //Event Two
    $("#twoshowbutton").on("click",function(){
try{
            let eventtwo = $("#twoshow").text();
let file = JSON.parse(localStorage.getItem("Favourites"));
		if(file == null || file == undefined){
			file = [];
		}
        file.push(eventtwo);
		localStorage.setItem("Favourites", JSON.stringify(file));
    FavouriteAlert();
	}catch(e){
		if(e == QUOTA_EXCEEDED_ERR){
			console.log("Unable to save to file");
		}else{
			console.log(e);
		}}
       });
 //Event Three
     $("#threeshowbutton").on("click",function(){
try{
            let eventthree = $("#threeshow").text();
let file = JSON.parse(localStorage.getItem("Favourites"));
		if(file == null || file == undefined){
			file = [];
		}
        file.push(eventthree);
		localStorage.setItem("Favourites", JSON.stringify(file));
    FavouriteAlert();
	}catch(e){
		if(e == QUOTA_EXCEEDED_ERR){
			console.log("Unable to save to file");
		}else{
			console.log(e);
		}}
       });   
}
function CatwalkFavourites(){
    //Catwalk one
    $("#catwalkonebutton").on("click",function(){
try{
            let catwalkone = $("#catwalkone").text();
let file = JSON.parse(localStorage.getItem("Favourites"));
		if(file == null || file == undefined){
			file = [];
		}
        file.push(catwalkone);
		localStorage.setItem("Favourites", JSON.stringify(file));
    FavouriteAlert();
	}catch(e){
		if(e == QUOTA_EXCEEDED_ERR){
			console.log("Unable to save to file");
		}else{
			console.log(e);
		}}
       });   
    
//Catwalk two
     $("#catwalktwobutton").on("click",function(){
try{
            let catwalktwo = $("#catwalktwo").text();
let file = JSON.parse(localStorage.getItem("Favourites"));
		if(file == null || file == undefined){
			file = [];
		}
        file.push(catwalktwo);
		localStorage.setItem("Favourites", JSON.stringify(file));
    FavouriteAlert();
	}catch(e){
		if(e == QUOTA_EXCEEDED_ERR){
			console.log("Unable to save to file");
		}else{
			console.log(e);
		}}
       });  
    
//Catwalk Three
         $("#catwalkthreebutton").on("click",function(){
try{
            let catwalkthree = $("#catwalkthree").text();
let file = JSON.parse(localStorage.getItem("Favourites"));
		if(file == null || file == undefined){
			file = [];
		}
        file.push(catwalkthree);
		localStorage.setItem("Favourites", JSON.stringify(file));
    FavouriteAlert();
	}catch(e){
		if(e == QUOTA_EXCEEDED_ERR){
			console.log("Unable to save to file");
		}else{
			console.log(e);
		}}
       });  
    
}
 function PartyFavourites(){
     //Party One
    $("#partyonebutton").on("click",function(){
try{
            let partyone = $("#partyone").text();
let file = JSON.parse(localStorage.getItem("Favourites"));
		if(file == null || file == undefined){
			file = [];
		}
        file.push(partyone);
		localStorage.setItem("Favourites", JSON.stringify(file));
    FavouriteAlert();
	}catch(e){
		if(e == QUOTA_EXCEEDED_ERR){
			console.log("Unable to save to file");
		}else{
			console.log(e);
		}}
       }); 
     //Party Two
    $("#partytwobutton").on("click",function(){
try{
            let partytwo = $("#partytwo").text();
let file = JSON.parse(localStorage.getItem("Favourites"));
		if(file == null || file == undefined){
			file = [];
		}
        file.push(partytwo);
		localStorage.setItem("Favourites", JSON.stringify(file));
    FavouriteAlert();
	}catch(e){
		if(e == QUOTA_EXCEEDED_ERR){
			console.log("Unable to save to file");
		}else{
			console.log(e);
		}}
       });  
     //Party Three
    $("#partythreebutton").on("click",function(){
try{
            let partythree = $("#partythree").text();
let file = JSON.parse(localStorage.getItem("Favourites"));
		if(file == null || file == undefined){
			file = [];
		}
        file.push(partythree);
		localStorage.setItem("Favourites", JSON.stringify(file));
    FavouriteAlert();
	}catch(e){
		if(e == QUOTA_EXCEEDED_ERR){
			console.log("Unable to save to file");
		}else{
			console.log(e);
		}}
       });
 }
 function GalleryFavourites(){
     //Gallery One
     $("#galleryonebutton").on("click",function(){
try{
            let galleryone = $("#galleryone").text();
let file = JSON.parse(localStorage.getItem("Favourites"));
		if(file == null || file == undefined){
			file = [];
		}
        file.push(galleryone);
		localStorage.setItem("Favourites", JSON.stringify(file));
    FavouriteAlert();
	}catch(e){
		if(e == QUOTA_EXCEEDED_ERR){
			console.log("Unable to save to file");
		}else{
			console.log(e);
		}}
       });
     //Gallery Two
      $("#gallerytwobutton").on("click",function(){
try{
            let gallerytwo = $("#gallerytwo").text();
let file = JSON.parse(localStorage.getItem("Favourites"));
		if(file == null || file == undefined){
			file = [];
		}
        file.push(gallerytwo);
		localStorage.setItem("Favourites", JSON.stringify(file));
    FavouriteAlert();
	}catch(e){
		if(e == QUOTA_EXCEEDED_ERR){
			console.log("Unable to save to file");
		}else{
			console.log(e);
		}}
       });
 //Gallery Three
$("#gallerythreebutton").on("click",function(){
try{
            let gallerythree = $("#gallerythree").text();
let file = JSON.parse(localStorage.getItem("Favourites"));
		if(file == null || file == undefined){
			file = [];
		}
        file.push(gallerythree);
		localStorage.setItem("Favourites", JSON.stringify(file));
    FavouriteAlert();
	}catch(e){
		if(e == QUOTA_EXCEEDED_ERR){
			console.log("Unable to save to file");
		}else{
			console.log(e);
		}}
       });
     
     
 }      
function Favourites(){
     ShowFavourites();
     CatwalkFavourites();
     PartyFavourites();
    GalleryFavourites();
 }      
  Favourites();     
       
 let oneevent ="Inspiring Edge Fashion Show";
 let twoevent= "Swimwear and Lingerie Fashion Show";
 let threevent= "London Fashion Week // OFS AW19";
let fourevent = "SMGlobal Catwalk - LONDON FASHION WEEK (Season 5)";
let fiveevent = "SMGlobal Catwalk - LONDON FASHION WEEK (Season 4)";
let sixevent = "The Wedding Lounge";
let sevenevent = "UK Glamour Awards Christmas Party";
let eightevent = "London Runway Issue 30 Launch Party and Christmas Celebration";
let nineevent = "Burst: All White Party";
let tenevent = "Nakshi Fashion Week 2018";
let elevenevent = "Tres Rasche pop up Party + Presentation";
let twelveevent = "Kryptik Clothing Launch Party";

   function FavouriteAlert(){
      alert("Favourite has been Added");
  }
   function ShowOneEvent(){
       $("#showone").show();
   }
        function ShowTwoEvent(){
       $("#showtwo").show();
   } 
        function ShowThreeEvent(){
       $("#showthree").show();
   } 
        function CatwalkOne(){
       $("#catwalkone").show();
   } 
        function CatwalkTwo(){
       $("#catwalktwo").show();
   } 
        function CatwalkThree(){
       $("#catwalkthree").show();
   } 
    function PartyOne(){
       $("#partyone").show();
   } 
        function PartyTwo(){
       $("#partytwo").show();
   } 
        function PartyThree(){
       $("#partythree").show();
   } 
        function GalleryOne(){
       $("#galleryone").show();
   } 
        function GalleryTwo(){
       $("#gallerytwo").show();
   } 
        function GalleryThree(){
       $("#gallerythree").show();
   } 
    
  function ReadStorage(){
   let events = JSON.parse(localStorage.getItem("Favourites"));
      for(let i=0; i<events.length; i++){
          if(events[i] == oneevent){
             ShowOneEvent();
             }
           if(events[i] == twoevent){
             ShowTwoEvent();
             }
           if(events[i] == threevent){
             ShowThreeEvent();
             }
           if(events[i] == fourevent){
             CatwalkOne();
             }
           if(events[i] == fiveevent){
             CatwalkTwo();
             }
           if(events[i] == sixevent){
             CatwalkThree();
             }
           if(events[i] == sevenevent){
            PartyOne();
             }
           if(events[i] == eightevent){
             PartyTwo();
             }
           if(events[i] == nineevent){
             PartyThree();
             }
           if(events[i] == tenevent){
             GalleryOne();
             }
           if(events[i] == elevenevent){
             GalleryTwo();
             }
           if(events[i] == twelveevent){
             GalleryThree();
             }
      }
  }    

ReadStorage();
        
if(mobile){
   Favourites();  
    ReadStorage();
}
    });