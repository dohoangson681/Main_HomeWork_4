function guiLoiChao(){
    var thanhVien =  document.getElementById("seclectBai2").value ; 
    switch (thanhVien) {
        case  "1":
            document.getElementById("loiChao").innerHTML = "Con chào bố ! " ;
            break;
        case "2":
            document.getElementById("loiChao").innerHTML = "Con chào mẹ ! " ;
            break;
        case "3":
            document.getElementById("loiChao").innerHTML = "Chào thằng anh ! " ;
            break;
        case "4":
            document.getElementById("loiChao").innerHTML = "Hello em gái ! " ;
            break;
    
        default:
            document.getElementById("loiChao").innerHTML = "Chọn 1 thành viên đê ! " ;
            break;
    }
}
document.getElementById("btnBai2").onclick = guiLoiChao ; 
