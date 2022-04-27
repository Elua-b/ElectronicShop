function change(){
let searchBox = document.querySelector('input[type=search]')
let nameHolders = document.querySelectorAll('.product-name')
searchBox.onkeyup = (e)=>{
    console.log("Changed the value")
    for(let name of nameHolders){
        if(searchBox.value === ""){
            name.parentElement.parentElement.style.display = "";
        }
        if(!name.textContent.toLowerCase().match(searchBox.value)){
            name.parentElement.parentElement.style.display = "none"
        }
        else{
            name.parentElement.parentElement.style.display= "";
        }
    }
}}
export default change
