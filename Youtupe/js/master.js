let btnopenaside = document.querySelector("header .left-section .bars")

let aside = document.querySelector("aside")



btnopenaside.onclick = function () {
    aside.classList.toggle("open")
}
// =====================================


let videos = document.querySelectorAll(".video")


videos.forEach((video)=>{
    video.addEventListener("click", ()=>{
        video.children[1].children[1].children[1].click()
    })
})

