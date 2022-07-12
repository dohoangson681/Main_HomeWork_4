
function sapxep(){
    var min   , max  , mid   ; 
    let sothu1 = document.getElementById("sothu1").value ; 
    let sothu2 = document.getElementById("sothu2").value ; 
    let sothu3 = document.getElementById("sothu3").value ; 
    
    sothu1 = Number(sothu1) ; 
    sothu2 = Number(sothu2) ; 
    sothu3 = Number(sothu3) ; 
    
  

   
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