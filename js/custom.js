//  create url for user selected image
var imagePath;
var getReadToEdit = () => {
    var fileInput = document.getElementById('img');
    var file = fileInput.files[0];

    if (file) {
        var imagePath = URL.createObjectURL(file);
        alert("continue 😁😎🫡 " + imagePath);
        displayImagePreview(imagePath);
    } else {
        alert("please select image first 😢😢  !!!");
    }

}

// fetch user selected image on UI
function displayImagePreview(imagePath) {

    var imagePreview = document.getElementById('imagePreview');
    var imgElement = document.createElement('img');

    imagePreview.innerHTML = '';
    imgElement.src = imagePath;

    imagePreview.appendChild(imgElement);

    if (imagePath) {

        document.getElementById('editButton').classList.remove('d-none');
        document.getElementById('filterSelect').classList.remove('d-none');

    } 
}

// Function to rotate the image 90 degrees to the right
var rotationDegree = 0;
function rotateRight() {

    var image = document.querySelector('.imgBlock img:first-child');
    rotationDegree += 90;
    image.style.transform = `rotate(${rotationDegree}deg)`;
}

// Function to apply selected filter to the image
function applyFilter() {
    var image = document.querySelector('.imgBlock img:first-child');
    var selectedFilter = document.getElementById('filterSelect').value;
    console.log(selectedFilter);

    // Reset previous filters
    image.style.filter = 'none';

    // Apply selected filter
    switch(selectedFilter) {
        case 'grayscale':
            image.style.filter = 'grayscale(100%)';
            enableDownloadButton();

            break;
        case 'sepia':
            image.style.filter = 'sepia(100%)';
            enableDownloadButton();

            break;
        case 'blur':
            image.style.filter = 'blur(5px)';
            enableDownloadButton();

            break;
        case 'brightness':
            image.style.filter = 'brightness(150%)';
            enableDownloadButton();

            break;
        case 'contrast':
            image.style.filter = 'contrast(200%)';
            enableDownloadButton();

            break;
        case 'hue-rotate':
            image.style.filter = 'hue-rotate(90deg)';
            enableDownloadButton();

            break;
        case 'invert':
            image.style.filter = 'invert(100%)';
            enableDownloadButton();

            break;
        case 'opacity':
            image.style.filter = 'opacity(50%)';
            enableDownloadButton();

            break;
        case 'saturate':
            image.style.filter = 'saturate(200%)';
            enableDownloadButton();

            break;
        case 'drop-shadow':
            image.style.filter = 'drop-shadow(8px 8px 10px green)';
            enableDownloadButton();

            break;
        default:
            image.style.filter = 'none';
            enableDownloadButton();

            break;
    }
}

// Function to enable the download button
function enableDownloadButton() {
    document.getElementById('downloadButton').classList.remove('d-none');
}

// Function to download the edited image
function downloadImage() {
    var image = document.querySelector('.imgBlock img:first-child');
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    // Set canvas dimensions to match the rotated image
    var rotation = rotationDegree % 360;
    var width = rotation === 90 || rotation === 270 ? image.height : image.width;
    var height = rotation === 90 || rotation === 270 ? image.width : image.height;
    canvas.width = width;
    canvas.height = height;

    // Apply rotation
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(rotation * Math.PI / 180);
    ctx.drawImage(image, -image.width / 2, -image.height / 2);

    // Apply filter
    var selectedFilter = document.getElementById('filterSelect').value;
    if (selectedFilter !== '') {
        ctx.filter = image.style.filter;
        ctx.drawImage(image, -image.width / 2, -image.height / 2, image.width, image.height);
    }

    // Get the edited image as a data URL
    var editedImageDataUrl = canvas.toDataURL();

    // Create a temporary link element
    var downloadLink = document.createElement('a');
    downloadLink.href = editedImageDataUrl;
    downloadLink.download = 'edited_image.png'; // You can set the filename here
    document.body.appendChild(downloadLink);

    // Trigger the click event on the link to initiate download
    downloadLink.click();

    // Remove the temporary link element
    document.body.removeChild(downloadLink);
}

