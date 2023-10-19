
function displayText() {
    
    var inputText = document.getElementById("textInput").value;

    
    document.getElementById("output").textContent = "You entered: " + inputText;
}

function displayImage() {
    
    var imageInput = document.getElementById("imageInput");
    var selectedImage = imageInput.files[0];

    if (selectedImage) {
        
        var imageUrl = URL.createObjectURL(selectedImage);
        var imageContainer = document.getElementById("imageContainer");
        var image = document.createElement("img");
        image.src = imageUrl;

        
        imageContainer.innerHTML = "";
        imageContainer.appendChild(image);
    }
}

function displayVideo() {
    
    var videoInput = document.getElementById("videoInput");
    var selectedVideo = videoInput.files[0];

    if (selectedVideo) {
        
        var videoUrl = URL.createObjectURL(selectedVideo);
        var videoContainer = document.getElementById("videoContainer");
        var video = document.createElement("video");
        video.src = videoUrl;
        video.controls = true;

        
        videoContainer.innerHTML = "";
        videoContainer.appendChild(video);
    }
}