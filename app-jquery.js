$(document).ready(function () {
   // $('#padre').on('click','div',function(){
   //    var piano='#'+'n'+$(this).attr('id');
   //    $(piano)[0].pause();
   //    $(piano)[0].currentTime=0;
   //    $(piano)[0].play();

   // });

   $('.boton').on('click',sonido);
   function sonido(e){
      var nota= e.target.dataset.value;
      //console.log(nota);

      var audio = "#"+ "n" + nota;
      //console.log(audio);
         
      $(audio)[0].pause();
      $(audio)[0].currentTime=0;
      $(audio)[0].play();
   }
   
      $("body").keypress(function(tecla){  
         var key = tecla.key;       
         //var key = (String.fromCharCode(tecla.which));
         //console.log(tecla);
         //console.log(tecla.which);
         //console.log(key);
         //var letra =`audio[data-value="${key}"]`;
         //console.log(letra);
         if(key !== "q" && key !== "w" && key !== "e" && key !== "r" && key !== "t" && key !== "y" && key !== "u"){ 
            
            alert("solo se considera las letras: q, w, e, r, t, y, u ");
      
      }else {
         $(`audio[data-value="${key}"]`)[0].pause();
         $(`audio[data-value="${key}"]`)[0].currentTime=0;
         $(`audio[data-value="${key}"]`)[0].play();
      }




         // if(key==="a"){
         //    $(`audio[data-value="q"]`)[0].pause();
         //    $(`audio[data-value="q"]`)[0].currentTime=0;
         //    $(`audio[data-value="q"]`)[0].play();
         // }else if(key==="s"){
         //    $("#nre")[0].pause();
         //    $("#nre")[0].currentTime=0;
         //    $("#nre")[0].play();
         // }else if(key==="d"){
         //    $("#nmi")[0].pause();
         //    $("#nmi")[0].currentTime=0;
         //    $("#nmi")[0].play();
         // }else if(key==="f"){
         //    $("#nfa")[0].pause();
         //    $("#nfa")[0].currentTime=0;
         //    $("#nfa")[0].play();
         // }else if(key==="g"){
         //    $("#nsol")[0].pause();
         //    $("#nsol")[0].currentTime=0;
         //    $("#nsol")[0].play();
         // }else if(key==="h"){
         //    $("#nla")[0].pause();
         //    $("#nla")[0].currentTime=0;
         //    $("#nla")[0].play();
         // }else if(key==="j"){
         //    $("#nsi")[0].pause();
         //    $("#nsi")[0].currentTime=0;
         //    $("#nsi")[0].play();
         // }
         

         

      });
  
});