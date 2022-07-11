// var sothu1 = document.getElementById("sothu1"); 
// var sothu2 = document.getElementById("sothu2") ;
// var sothu3 = document.getElementById("sothu3") ;
// console.log(sothu1 , sothu2 , sothu3) ; 
function sapxep(){
    let min = 0   , max = 0 , mid = 0  ; 
    let sothu1 = document.getElementById("sothu1").value ; 
    let sothu2 = document.getElementById("sothu2").value ; 
    let sothu3 = document.getElementById("sothu3").value ; 
    
    sothu1 = Number(sothu1) ; 
    sothu2 = Number(sothu2) ; 
    sothu3 = Number(sothu3) ; 
//    sothu1 = Number(sothu1.value) ;  
//    sothu2 = Number(sothu2.value) ;
//    sothu3 = Number(sothu3.value) ;
   console.log(sothu1 , sothu2 , sothu3) ; 

   
    if(sothu1 <= sothu2 && sothu1 <= sothu3){
        min = sothu1 ;
        if(sothu2 <= sothu3){
            max = sothu3 ; 
            mid = sothu2 ; 
        }else {
            max = sothu2 ; 
            mid = sothu3 ; 
        }
    }else if(sothu2 <= sothu1 && sothu2 <= sothu3){
        min = sothu2 ; 
        if(sothu1 <= sothu3) {
            max = sothu3 ; 
            mid = sothu1 ; 
        }else {
            max = sothu1 ; 
            mid = sothu3 ; 
        }
    }else {
        min = sothu3 ; 
        if(sothu1 <= sothu2){
            max = sothu2 ; 
            mid = sothu1 ; 
        }else {
            max = sothu1 ; 
            mid = sothu2 ; 
        }
    }
    // document.getElementById("result1").innerHTML
    // = min + mid + max ; 
    document.getElementById("result1").innerHTML
    = min + " " + mid + " " + max ; 
}
document.getElementById("btnBai1").onclick = sapxep ; 