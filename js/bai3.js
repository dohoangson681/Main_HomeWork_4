/**
 * cho 3 so nguyen 
 * xuat ra xem co bn so le va so chan
 */
function demChanLe(){
    var cntChan = 0 ; 
    var cntLe = 0 ; 
    var soThu1Bai3 = Number(document.getElementById("sothu1Bai3").value) ; 
    var soThu2Bai3 = Number(document.getElementById("sothu2Bai3").value) ;
    var soThu3Bai3 = Number(document.getElementById("sothu3Bai3").value) ;
    if(soThu1Bai3 % 2 == 0){
            cntChan++ ;
        }else {
            cntLe++ ; 
   }
    if(soThu2Bai3 % 2 == 0){
            cntChan++ ;
        }else {
            cntLe++ ; 
    }
    if(soThu3Bai3 % 2 == 0){
            cntChan++ ;
        }else {
            cntLe++ ; 
    }
    console.log(cntChan , cntLe) ; 
    document.getElementById("result3").innerHTML = "Có " + cntChan + " số chẵn và " + cntLe + " số lẻ." ;
    
}
document.getElementById("btnBai3").onclick = demChanLe ; 
