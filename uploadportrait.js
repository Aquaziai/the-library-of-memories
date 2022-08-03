var loadFile = function(event){
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};
function readURL(event) {
    var output = document.getElementsByID("output");
    var url = URL.createObjectURL(event.target.files[0]);
        output[0].innerHTML="<img class=\"output\" src=\"" + url + "\" alt=\"img\" >";
    };