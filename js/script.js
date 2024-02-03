let wname = document.querySelector(".home_des_des")
let count = 0;
let wnameList = ["Developer","Designer","Blogger","Youtuber"]
console.log(wname.innerHTML)
if(wname.innerHTML == ""){
    wname.innerHTML = "Developer"
}
setInterval(()=>{
    
        wname.innerHTML = wnameList[count]
        count++;
    if(count > wnameList.length-1){
        count = 0
    }
    console.log(count)
},4000)


let ul = document.querySelector(".nav-list-items")
ul.style.display = "flex"
const togglemenu = () => {
    if(ul.style.display == "none"){
        ul.style.display = "flex"
    }
    else if(ul.style.display == "flex"){
        ul.style.display = "none"
    }
} 