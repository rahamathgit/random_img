let imgcontainer = document.querySelector(".container");

let btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
    newImg = 10;
    updateImage();
})

function updateImage(){
    for (let index = 0; index < newImg; index++) {
        let newImgEl = document.createElement("img");
        newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
        imgcontainer.appendChild(newImgEl);
    }
}