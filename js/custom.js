var getReadToEdit = () => {

    // var getImgPath = document.getElementById('img').accept;
    // alert(getImgPath);
    var fileInput = document.getElementById('img');
    var file = fileInput.files[0];

    if (file) {
        var imagePath = URL.createObjectURL(file);
        alert("Selected image path: " + imagePath);
        displayImagePreview(imagePath);
    } else {
        alert("No image selected.");
    }

}

function displayImagePreview(imagePath) {
    var imagePreview = document.getElementById('imagePreview');
    // Clear previous image previews
    imagePreview.innerHTML = '';
    // Create an image element and set its source to the selected image path
    var imgElement = document.createElement('img');
    imgElement.src = imagePath;
    // Append the image element to the imagePreview div
    imagePreview.appendChild(imgElement);
}