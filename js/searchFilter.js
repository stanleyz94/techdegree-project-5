

document.getElementById("myInput").addEventListener("keyup", myFunction);




function myFunction() {

    var x, y, z, imglist, i;

    x = document.getElementById("myInput").value.toUpperCase(); 
    y = document.querySelectorAll(".txthidden");
    imglist = document.querySelectorAll("img");
  
   

        for( i = 0; i < y.length; i++ ) {
            z = y[i].textContent;
            console.log(z);
            if(z.toUpperCase().indexOf(x) > -1){
                imglist[i].style.display = "";
            
            } else {
                imglist[i].style.display = "none";
            }
           
        }


}
