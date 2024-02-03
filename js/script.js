let wname = document.querySelector(".home_des_des")
let count = 0;
let wnameCount = 0
console.log(wname)
let wnameList = ["development","design"]
setInterval(()=>{
    if(count%4 == 0||count==0){
        wname.innerHTML = wnameList[wnameCount]
        wnameCount++;
    }
    if(wnameCount > wnameList.length-1){
        wnameCount = 0
    }
    console.log(count)
    count++;
    if(count == 200){
        count = 0;
    }
},1000)


let ul = document.querySelector(".nav-list-items")
ul.style.display = "flex"
const togglemenu = () => {
    if(ul.style.display == "none"){
        ul.style.display = "flex"
    }
    else if(ul.style.display == "flex"){
        ul.style.display = "none"
    }
    console.log(ul)
    // if()
} 