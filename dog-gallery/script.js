//picture arrays

const galleryImages = [
  {
    src: "dogpics/dogpic1.jpg",
    alt: "dog picture 1"
  },
  {
    src: "dogpics/dogpic2.jpg",
    alt: "dog picture 2"
  },
  {
    src: "dogpics/dogpic3.jpg",
    alt: "dog picture 3"
  },
  {
    src: "dogpics/dogpic4.jpg",
    alt: "dog picture 4"
  },
  {
    src: "dogpics/dogpic5.jpg",
    alt: "dog picture 5"
  },
  {
    src: "dogpics/dogpic6.jpg",
    alt: "dog picture 6"
  }
];


function menuHandler(gallery){
  let gallerySection = document.querySelector(".gallery");

  gallery.forEach(function(picture, index){
    //element create
    let picElm = document.createElement("div");
    picElm.classList.add("gallery-item");
    //pic create
    let picImg = document.createElement("img");
    picImg.classList.add("imgGallery");
    picImg.src = picture.src;
    picImg.alt = picture.alt;

    //add pic to elment
    picElm.append(picImg);

    //show element
    gallerySection.append(picElm);
  });
  

}

function clockHandler(){
  setInterval(function(){
    let localTime = new Date();
    document.querySelector(".hours").textContent = localTime.getHours().toString().padStart(2,"0")
    document.querySelector(".minutes").textContent = localTime.getMinutes().toString().padStart(2,"0")
    document.querySelector(".seconds").textContent = localTime.getSeconds().toString().padStart(2,"0")
  },1000);
}

/*<div class="gallery-item">
      <img class="img" src="dogpics/dogpic1.jpg" alt="picture">
    </div>
    <div class="gallery-item">
      <img class="img" src="dogpics/dogpic2.jpg" alt="picture">
    </div>
    <div class="gallery-item">
      <img class="img" src="dogpics/dogpic3.jpg" alt="picture">
    </div>
    <div class="gallery-item">
      <img class="img" src="dogpics/dogpic4.jpg" alt="picture">
    </div>
    <div class="gallery-item">
      <img class="img" src="dogpics/dogpic5.jpg" alt="picture">
    </div>
    <div class="gallery-item">
      <img class="img" src="dogpics/dogpic6.jpg" alt="picture">
</div>*/

menuHandler(galleryImages);
clockHandler();