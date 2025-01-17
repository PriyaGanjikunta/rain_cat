im1 = document.querySelector(".im1");
b1 = document.querySelector(".b1");
b2 = document.querySelector(".b2");

b1.addEventListener("click",() => {
    im1.src="images/water.jpg";
});

b2.addEventListener("click",() => {
    im1.src="images/cool.jpg";
});
