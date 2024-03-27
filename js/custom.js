//  create url for user selected image
var imagePath;
var getReadToEdit = () => {
    var fileInput = document.getElementById('img');
    var file = fileInput.files[0];

    if (file) {
        var imagePath = URL.createObjectURL(file);
        alert("continue " + imagePath);
        displayImagePreview(imagePath);
    } else {
        alert("please select image first!!!");
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

    } else {

        document.getElementById('editButton').classList.add('d-none');
        document.getElementById('filterSelect').classList.add('d-none');

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

    image.style.filter = 'none';

    // Apply selected filter
    switch(selectedFilter) {
        case 'grayscale':
            image.style.filter = 'grayscale(100%)';
            break;
        case 'sepia':
            image.style.filter = 'sepia(100%)';
            break;
        case 'blur':
            image.style.filter = 'blur(5px)';
            break;
        case 'brightness':
            image.style.filter = 'brightness(150%)';
            break;
        case 'contrast':
            image.style.filter = 'contrast(200%)';
            break;
        case 'hue-rotate':
            image.style.filter = 'hue-rotate(90deg)';
            break;
        case 'invert':
            image.style.filter = 'invert(100%)';
            break;
        case 'opacity':
            image.style.filter = 'opacity(50%)';
            break;
        case 'saturate':
            image.style.filter = 'saturate(200%)';
            break;
        case 'drop-shadow':
            image.style.filter = 'drop-shadow(8px 8px 10px green)';
            break;
        default:
            image.style.filter = 'none';
            break;
    }
}
