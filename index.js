const photos = document.querySelector(".photos");

const hrefs = [
  "images/pic-landscape-fall.png",
  "images/pic-landscape-h20.png",
  "images/pic-landscape-h2o-snow.png",
  "images/pic-landscape-h2o.png",
  "images/pic-landscape-road.png",
];

const imgs = hrefs.map(function (hrf) {
  const img = new Image();
  img.src = hrf;
  slider.appendChild(img);
  return img;
});
