import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getStorage, ref, uploadBytes, } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-storage.js";

const firebaseConfig = {
            apiKey: "AIzaSyDS1UPMvC_kA0Jtcla70Vz2SmhQm3shLm4",
            authDomain: "the-library-of-memories.firebaseapp.com",
            databaseURL: "https://the-library-of-memories-default-rtdb.asia-southeast1.firebasedatabase.app",
            projectId: "the-library-of-memories",
            storageBucket: "the-library-of-memories.appspot.com",
            messagingSenderId: "372481500107",
            appId: "1:372481500107:web:e60953b257f836b6e20c4e",
            measurementId: "G-QKJWV05637"
};

firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

function upload(file) {
    const storage = getStorage();
    var uploader = document.getElementById('uploader');
    var storageRef = firebase.storage().ref('img/'+event.target.files[0].name);
    var task = storageRef.put(event.target.files[0]);
    task.on('state_changed', function progress(snapshot) {
            var percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
            uploader.value = percentage;

    },

    function error(err) {
        console.log(err)

    },function complete() {

    })


};
var loadFile = function(event){
var image1 = document.getElementById('output');
    image1.src = URL.createObjectURL(event.target.files[0]);
    console.log(image1.src)
    upload(event.target.files[0].name)

};

document.getElementById("imgfile1").addEventListener("change", loadFile);


let camera_button = document.querySelector("#start-camera");
let video = document.querySelector("#video");
let click_button = document.querySelector("#click-photo");
let stop_camera = document.querySelector('#stop-camera')
let output = document.querySelector("#landscape2");

camera_button.addEventListener('click', async function() {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    video.srcObject = stream;
});

click_button.addEventListener('click', function() {
            output.getContext('2d').drawImage(video, 0, 0, output.width, output.height);
            let image_data_url = output.toDataURL('image/jpeg');
            // data url of the image
            console.log(image_data_url);
            //testing to see if this works in a different event, delete the next 6 lines if it doesn't
            video.pause();
            video.srcObject = null;
            localstream.getTracks().forEach(function(track) {
                track.stop();
            });
            console.log("Video off");
});

stop_camera.addEventListener('click', function vidOff() {
    //clearInterval(theDrawLoop);
    //ExtensionData.vidStatus = 'off';
    video.pause();
    video.srcObject = null;
    //localstream is not defined, fix it
    localstream.getTracks().forEach(function(track) {
        track.stop();
    });
    console.log("Video off");
});

//var loadfile = function(id){
//    var image = document.getElementById('output'+id.slice())
//    console.log("image found")
//}


var loadFile2 = function(event){
var image2 = document.getElementById('landscape1');
    image2.src = URL.createObjectURL(event.target.files[0]);
    console.log(image2.src)
    upload(event.target.files[0].name)

};

document.getElementById("imgfile2").addEventListener("change", loadFile2);

var loadFile3 = function(event){
var image3 = document.getElementById('landscape2');
    image3.src = URL.createObjectURL(event.target.files[0]);
    console.log(image3.src)
    upload(event.target.files[0].name)

};    

document.getElementById("imgfile3").addEventListener("change", loadFile3);

var loadFile4 = function(event){
var image4 = document.getElementById('output2');
    image4.src = URL.createObjectURL(event.target.files[0]);
    console.log(image4.src)
    upload(event.target.files[0].name)
};

document.getElementById("imgfile4").addEventListener("change", loadFile4);

