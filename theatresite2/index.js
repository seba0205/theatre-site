

let constrain = 50;
let mouseOverContainer1 = document.getElementById("tilt1");
let img1 = document.getElementById("tilt-img1");


let img2 = document.getElementById("tilt-img2");


let img3 = document.getElementById("tilt-img3");

function transforms(x, y, el) {
    let box = el.getBoundingClientRect();
    let calcX = -(y - box.y - (box.height / 2)) / constrain;
    let calcY = (x - box.x - (box.width / 2)) / constrain;

    return "perspective(200px) "
        + "   rotateY(" + calcY + "deg) "
        + "   rotateX(" + calcX + "deg) ";
};

function transformElement(el, xyEl) {
    el.style.transform = transforms.apply(null, xyEl);
}

mouseOverContainer1.onmousemove = function (e) {
    let xy = [e.clientX, e.clientY];
    let position = xy.concat([img1]);

    window.requestAnimationFrame(function () {
        transformElement(img1, position);
    });


    let position2 = xy.concat([img2]);

    window.requestAnimationFrame(function () {
        transformElement(img2, position2);
    });

    let position3 = xy.concat([img3]);

    window.requestAnimationFrame(function () {
        transformElement(img3, position3);
    });
};


