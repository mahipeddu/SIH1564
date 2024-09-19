const descriptions = [
    {
        title: "Background",
        text: "With the availability of medium-resolution satellite images from the Boonidhi portal, the Department of Space provides Resourcesat images (LISS IV sensor) that can capture roads of 20 feet and above. These roads appear as linear features in satellite imagery and are easily distinguishable to the human eye. However, with the growing volume of satellite data, manual interpretation is not feasible."
    },
    {
        title: "Objective",
        text: "This project focuses on developing an automated system for road extraction from satellite images, saving the extracted roads in a GIS database. Additionally, the system will monitor for any new road developments or changes in comparison to previous images of the same area. In case of a new road detection, an alert will be generated and sent to configured email addresses."
    },
    {
        title: "Expected Solution",
        text: "The software solution will provide a user-friendly interface (GUI) where users can specify areas of interest for road extraction and set up alerts. The output will be delivered in the form of shapefiles with geographical references, utilizing satellite imagery from ISRO’s Boonidhi portal. Alerts will be automatically triggered and sent to predefined email recipients when changes are detected."
    }
];

const descriptionBlock = document.getElementById('description-block');
let currentIndex = 0;

function updateDescription() {
    const { title, text } = descriptions[currentIndex];
    descriptionBlock.innerHTML = `
        <h2>${title}:</h2>
        <p>${text}</p>
    `;
    currentIndex = (currentIndex + 1) % descriptions.length;
}

function handleClick() {
    updateDescription();
    clearInterval(autoChangeInterval);
    autoChangeInterval = setInterval(updateDescription, 5000);
}

descriptionBlock.addEventListener('click', handleClick);

let autoChangeInterval = setInterval(updateDescription, 5000);
updateDescription();

document.addEventListener('DOMContentLoaded', function () {
    const profilePhoto = document.getElementById('profile-photo');
    const dropdownMenu = document.getElementById('dropdown-menu');

    profilePhoto.addEventListener('click', function () {
        dropdownMenu.classList.toggle('show');
    });

    window.addEventListener('click', function (e) {
        if (!profilePhoto.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
});

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 }, 
        zoom: 8
    });
}

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 }, 
        zoom: 8
    });
    var marker = new google.maps.Marker({
        position: { lat: -34.397, lng: 150.644 }, 
        map: map,
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 8,  
            fillColor: '#FF0000', 
            fillOpacity: 1,
            strokeWeight: 2, 
            strokeColor: '#FFFFFF' 
        }
    });
    marker.addListener('click', function() {
        console.log("Marker clicked! Redirecting...");
        window.location.href = "./maps.html";
    });
}

