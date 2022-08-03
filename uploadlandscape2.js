var loadFile = function(event){
    var image = document.getElementById('outputlandscape2');
    image.src = URL.createObjectURL(event.target.files[0]);
};
function readURL(event) {
    var outputlandscape2 = document.getElementsByID("outputlandscape2");
    var url = URL.createObjectURL(event.target.files[0]);
        outputlandscape2[0].innerHTML="<img class=\"outputlandscape2\" src=\"" + url + "\" alt=\"img\" >";
    };