var stat = document.querySelector("h5")
var btn = document.querySelector("#add")
var flag = 0

btn.addEventListener("click", function(){
    if(flag == 0){
        stat.innerHTML = "Friends"
        stat.style.color = "green"
        btn.innerHTML = "Remove Friend"
        flag=1;
    }
    else {
        stat.innerHTML = "Stranger"
        stat.style.color = "red"
        btn.innerHTML = "Add Friend"
        flag=0;
    }
})
