
// Trusted by section /////////////////////////////////////
const scrollLeftBtn = document.getElementById('scroll-left');
const scrollRightBtn = document.getElementById('scroll-right');
const logoWrapper = document.querySelector('.logo-wrapper');
const scrollAmount = 200; // Amount to scroll on each click
const tolerance = 5; // Tolerance value to account for minor scroll differences


let autoScrollInterval;
let isManualScroll = false;
let isHovering = false;
let maxScrollLeft = logoWrapper.scrollWidth - logoWrapper.clientWidth;

// Function to update arrow visibility
function updateArrowVisibility() {
    const scrollLeft = logoWrapper.scrollLeft;

    // Update maxScrollLeft to ensure it's accurate
    maxScrollLeft = logoWrapper.scrollWidth - logoWrapper.clientWidth;

    // Show/hide left arrow based on scroll position
    if (scrollLeft <= 0) {
        scrollLeftBtn.style.display = 'none';
        scrollLeftBtn.style.pointerEvents = 'none';  // Disable interactions when hidden
    } else {
        scrollLeftBtn.style.display = 'block';
        scrollLeftBtn.style.pointerEvents = 'auto';  // Re-enable when visible
    }

    // Show/hide right arrow based on scroll position (with tolerance)
    if (scrollLeft >= maxScrollLeft - tolerance) {
        scrollRightBtn.style.display = 'none';
        scrollRightBtn.style.pointerEvents = 'none';  // Disable interactions when hidden
    } else {
        scrollRightBtn.style.display = 'block';
        scrollRightBtn.style.pointerEvents = 'auto';  // Re-enable when visible
    }
}

// Get references to logo rows
const logoRow1 = document.querySelectorAll('.logo-row')[0];
const logoRow2 = document.querySelectorAll('.logo-row')[1];
const toggleButton = document.getElementById('toggle-button');
const logoScrollerContainer = document.querySelector('.logo-scroller-container');



// Auto-scroll function
function autoScroll() {
    autoScrollInterval = setInterval(() => {
        if (isManualScroll || isHovering) return;  // Stop auto-scroll if manual scrolling or hovering

        maxScrollLeft = logoWrapper.scrollWidth - logoWrapper.clientWidth; // Update max scroll
        if (logoWrapper.scrollLeft >= maxScrollLeft - tolerance) {
            clearInterval(autoScrollInterval);  // Stop auto-scroll at the end
        } else {
            logoWrapper.scrollBy({ left: 2, behavior: 'smooth' });
        }
    }, 50);  // Adjust auto-scroll speed with 50ms interval
    
}


// Resume auto-scroll after manual interaction or hover
function resumeAutoScroll() {
    setTimeout(() => {
        if (!isHovering && !isManualScroll) {
            autoScroll();  // Resume auto-scroll if no manual interaction or hovering
            updateArrowVisibility();
        }
    }, 500);  // Increased delay to 0.5 seconds for better UX
}


// Populate logos on page load
const logoImages = [
    "Wallpaper/1.jpg", "Wallpaper/2.jpg", "Wallpaper/3.jpg", "Wallpaper/4.jpg", 
    "Wallpaper/5.jpg", "Wallpaper/6.jpg", "Wallpaper/7.jpg", "Wallpaper/8.jpg", 
    "Wallpaper/9.jpg", "Wallpaper/10.jpg", "Wallpaper/11.jpg", "Wallpaper/12.jpg", 
    "Wallpaper/13.jpg", "Wallpaper/14.jpg", "Wallpaper/15.jpg", "Wallpaper/16.jpg",
    "Wallpaper/17.jpg", "Wallpaper/18.jpg", "Wallpaper/19.jpg", "Wallpaper/20.jpg", 
    "Wallpaper/21.jpg", "Wallpaper/22.jpg", "Wallpaper/23.jpg", "Wallpaper/24.jpg", 
    "Wallpaper/25.jpg", "Wallpaper/26.jpg", "Wallpaper/27.jpg", "Wallpaper/28.jpg", 
    "Wallpaper/29.jpg", "Wallpaper/30.jpg", "Wallpaper/31.jpg", "Wallpaper/32.jpg", 
    "Wallpaper/33.jpg", "Wallpaper/34.jpg", "Wallpaper/35.jpg", "Wallpaper/36.jpg", 
    "Wallpaper/37.jpg", "Wallpaper/38.jpg", "Wallpaper/39.jpg", "Wallpaper/40.jpg", 
    "Wallpaper/41.jpg", "Wallpaper/42.jpg", "Wallpaper/43.jpg", "Wallpaper/44.jpg", 
    "Wallpaper/45.jpg", "Wallpaper/46.jpg", "Wallpaper/47.jpg", "Wallpaper/48.jpg", "Wallpaper/49.jpg"
];

// Function to populate logos in rows
function populateLogos() {
    const numberOfLogos = logoImages.length;
    const midIndex = Math.ceil(numberOfLogos / 2);

    // Add logos to the first row
    for (let i = 0; i < midIndex; i++) {
        const img = document.createElement('img');
        img.src = logoImages[i];
        img.alt = `Logo ${i + 1}`;
        logoRow1.appendChild(img);
    }

    // Add logos to the second row
    for (let i = midIndex; i < numberOfLogos; i++) {
        const img = document.createElement('img');
        img.src = logoImages[i];
        img.alt = `Logo ${i + 1}`;
        logoRow2.appendChild(img);
    }
    autoScroll();  // Start auto-scroll immediately when page loads
    updateArrowVisibility();  // Ensure arrows are visible when page loads if needed
    
}
// Populate logos on page load
populateLogos();

// Start auto-scroll on page load
document.addEventListener('DOMContentLoaded', () => {
    autoScroll();  // Start auto-scroll immediately when page loads
    updateArrowVisibility();  // Ensure arrows are visible when page loads if needed
});


// Scroll left manually when clicking the left button
scrollLeftBtn.addEventListener('click', () => {
    clearInterval(autoScrollInterval);  // Temporarily stop auto-scroll
    logoWrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    isManualScroll = true;
    setTimeout(() => isManualScroll = false, 100); // Delay before auto-scroll resumes
    updateArrowVisibility();  // Update arrow visibility immediately after scroll
    resumeAutoScroll();
});

// Scroll right manually when clicking the right button
scrollRightBtn.addEventListener('click', () => {
    clearInterval(autoScrollInterval);  // Temporarily stop auto-scroll
    logoWrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    isManualScroll = true;
    setTimeout(() => isManualScroll = false, 100); // Delay before auto-scroll resumes
    updateArrowVisibility();  // Update arrow visibility immediately after scroll
    resumeAutoScroll();
});

// Sync scrolling for both rows
const logoRows = document.querySelectorAll('.logo-row');
let scrollTimeout;
logoWrapper.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        const scrollPosition = logoWrapper.scrollLeft;
        logoRows.forEach(row => row.scrollLeft = scrollPosition);
        updateArrowVisibility(); // Update arrow visibility after debounce
    }, 100);  // Debounce scroll event to reduce event spam
});





// Pause auto-scroll when hovering the container
logoWrapper.addEventListener('mouseenter', () => {
    clearInterval(autoScrollInterval);  // Pause auto scroll
    isHovering = true;
});

// Resume auto-scroll when mouse leaves the container
logoWrapper.addEventListener('mouseleave', () => {
    isHovering = false;
    resumeAutoScroll();  // Resume auto-scroll when mouse leaves
});

// Pause auto-scroll when hovering over arrow buttons
scrollLeftBtn.addEventListener('mouseenter', () => {
    clearInterval(autoScrollInterval);
    isHovering = true;
});
scrollRightBtn.addEventListener('mouseenter', () => {
    clearInterval(autoScrollInterval);
    isHovering = true;
});

// Resume auto-scroll when leaving arrow buttons
scrollLeftBtn.addEventListener('mouseleave', () => {
    isHovering = false;
    resumeAutoScroll();
});
scrollRightBtn.addEventListener('mouseleave', () => {
    isHovering = false;
    resumeAutoScroll();
});

// Stop auto-scroll when clicking navbar links
document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener('click', () => {
        clearInterval(autoScrollInterval);  // Stop auto-scroll when clicking links
    });
});


// Function to create gallery
function createGallery() {
    const galleryDiv = document.createElement('div');
    galleryDiv.classList.add('gallery');

    logoImages.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Logo ${index + 1}`;
        
        galleryDiv.appendChild(img);
    });

    return galleryDiv;
}

// Handle button click event
toggleButton.addEventListener('click', function () {
    const galleryExists = document.querySelector('.gallery');
    
    if (galleryExists) {
        // If gallery exists, remove it and show original content
        galleryExists.remove();
        logoScrollerContainer.style.display = 'flex'; // Show original content
        toggleButton.textContent = 'See all'; // Change button text
        autoScroll(); // Start auto-scrolling when going back to the logo scroller
    } else {
        // Hide original content and show gallery
        logoScrollerContainer.style.display = 'none';
        const gallery = createGallery();
        logoScrollerContainer.parentNode.insertBefore(gallery, logoScrollerContainer.nextSibling);
        toggleButton.textContent = 'See less'; // Change button text
        clearInterval(autoScrollInterval); // Stop auto-scroll when showing the gallery
    }
    updateArrowVisibility();
});


