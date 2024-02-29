const myname=document.getElementById("name");
const button1=document.getElementById("my-button20")
const button2=document.getElementById("my-button50")
const button=document.getElementById("my-button70")


function sizeSetter(size){
    function setSize(){
        myname.style.fontSize = `${size}px`;
    }
    return setSize; // Closure Return function
}

const size20 = sizeSetter(20);
const size50 = sizeSetter(50);
const size70 = sizeSetter(70);


button1.addEventListener("click",size20);

button2.addEventListener("click",size50);

button.addEventListener("click",size70);