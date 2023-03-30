const imageUrls = [
    {
        src: "images/image-1-small.jpg",
        caption: "hello",
        largeImg: "images/image-1-large.jpg"
    },
    {
        src: "images/image-2-small.jpg",
        caption: "hello",
        largeImg: "images/image-2-large.jpg",
    },
    {
        src: "images/image-3-small.jpg",
        caption: "hello",
        largeImg: "images/image-3-large.png",
    },
    {
        src: "images/image-4-small.jpg",
        caption: "hello",
        largeImg: "images/image-4-large.jpg",
    },
    {
        src: "images/image-5-small.jpg",
        caption: "hello",
        largeImg: "images/image-5-large.jpg",
    },
    {
        src: "images/image-6-small.jpg",
        caption: "hello",
        largeImg: "images/image-6-large.jpg",
    },
    {
        src: "images/image-7-small.jpg",
        caption: "hello",
        largeImg: "images/image-7-large.jpg",
    },
    {
        src: "images/image-8-small.jpg",
        caption: "hello",
        largeImg: "images/image-8-large.jpg",
    },
    {
        src: "images/image-9-small.jpg",
        caption: "hello",
        largeImg: "images/image-9-large.jpg",
    },
    {
        src: "images/image-10-small.jpg",
        caption: "hello",
        largeImg: "images/image-10-large.jpg",
    },
    {
        src: "images/image-11-small.jpg",
        caption: "hello",
        largeImg: "images/image-11-large.jpg",
    },
    {
        src: "images/image-12-small.jpg",
        caption: "hello",
        largeImg: "images/image-12-large.jpg",
    },
];

const allImages = document.getElementById("all-images");


for (const image of imageUrls) {
    allImages.innerHTML += `
    <img src=${image.src} alt=${image.caption} data-source=${image.caption} data-large=${image.largeImg} />`
}

const imgs = document.querySelectorAll('img');
const modal = document.querySelector('.modal')


allImages.addEventListener('click', function (e) {
        modal.innerHTML = `
        <img src="${e.target.dataset.large}" alt=${e.target.dataset.source}/>   
        <p>${e.target.dataset.source}</p>`
        modal.classList.add("show")
})


modal.addEventListener('click', function () {
    modal.classList.remove('show')
})


