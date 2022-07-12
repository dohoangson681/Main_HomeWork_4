var canhthu1 ; 
var canhthu2 ; 
var canhthu3 ; 
function kiemTraTamGiac(canhthu1 ,canhthu2 , canhthu3 ){
    canhthu1 = Number(document.getElementById("canhthu1").value) ; 
    canhthu2 = Number(document.getElementById("canhthu2").value) ;  
    canhthu3 = Number(document.getElementById("canhthu3").value) ; 
    var text = "" ; 
    // console.log(canhthu1 , canhthu2 , canhthu3) ;
    if(canhthu1 + canhthu2 > canhthu3 && canhthu2 + canhthu3 > canhthu1 && canhthu1 + canhthu3 > canhthu2){
        text = check(canhthu1,canhthu2,canhthu3) ; 

    }else {
        alert("3 cạnh không là 3 cạnh của một tam giác") ; 
    }
    // console.log(text) ; 
    document.getElementById("result4").innerHTML = text ; 
}
document.getElementById("btnBai4").onclick = kiemTraTamGiac ; 
function check(canh1 , canh2 , canh3){
    if(canh1 == canh2 && canh1 == canh3){
        return "Đây là tam giác đều" ;
    }else if( canh1*canh1 + canh2*canh2 == canh3*canh3 || canh1*canh1 + canh3*canh3 == canh2*canh2 || canh2*canh2 + canh3*canh3 == canh1*canh1){
        return "Đây là tam giác vuông" ; 
    }else if(canh1 == canh2 || canh1 == canh3 || canh2 == canh3 ){
        return "Đây là tam giác đều"; 
    }else {
        return "Đây là tam giác thường"
    }

}
