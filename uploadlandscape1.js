var loadFile = function(event){
    var image = document.getElementById('outputlandscape1');
    image.src = URL.createObjectURL(event.target.files[0]);
};
function readURL(event) {
    var outputlandscape1 = document.getElementsByID("outputlandscape1");
    var url = URL.createObjectURL(event.target.files[0]);
        outputlandscape1[0].innerHTML="<img class=\"outputlandscape1\" src=\"" + url + "\" alt=\"img\" >";
    };