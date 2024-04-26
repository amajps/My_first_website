var count = 0;
document.getElementById("myButton").onclick = function() {
    count ++;
    if (count % 2 == 0){
        document.getElementById("demo").innerHTML ="";
    } else {
        var img = document.createElement("img");
        img.src = "https://virtus-img.cdnvideo.ru/images/details-photo/plain/6c/6c4f5427-ed63-44e4-8a8d-e047c8d9c09a.jpg";
        document.getElementById("demo").appendChild(img)
    }
}