var i = 1;
var numOfImg = 6;
function changeImageNext(){
    if(i== numOfImg){
        i=0;
    }
    i++;
    document.querySelector(".show-img img").setAttribute("src","Images/"+i+".jpg");

}
function changeImagePrev(){
    if(i== 1){
        i=numOfImg+1;
    }
    i--;
    document.querySelector(".show-img img").setAttribute("src","Images/"+i+".jpg");


}