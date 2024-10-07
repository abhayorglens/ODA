
// 1) We insert common header and footer section in all pages ////////////////

async function loadComponent(file, elementId, retries = 3) {
  try {
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${file}: ${response.statusText}`);
    }
    const data = await response.text();
    
    // Ensure the target element exists before inserting the content
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
      targetElement.innerHTML = data;
    } else {
      console.error(`Element with ID '${elementId}' not found.`);
    }
  } catch (error) {
    if (retries > 0) {
      console.warn(`Retrying to load ${file}. Attempts left: ${retries}`);
      setTimeout(() => loadComponent(file, elementId, retries - 1), 1000);
    } else {
      console.error('Error loading component:', error);
    }
  }
}

// Load header and footer when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Ensure the path is correct
  loadComponent('/pages/header.html', 'header'); // Use an absolute path if necessary
  loadComponent('/pages/footer.html', 'footer');
});


// 2) Redirect to goToODPublicationPage from home page////////////////////
function goToODPublicationPage(){
  window.location.href = '../pages/odpublication.html';
}


// 3) scroll to different section with the help of navigation link in the header and footer////////////////////////////
function navigateTo(section) {
  // Check if 'index.html' is NOT present in the current URL
  if (!window.location.href.includes('index.html')) {
    // Redirect to 'index.html' with the section name as a query parameter
    window.location.href = window.location.origin + '/index.html?section=' + section;
    return; // Stop execution after the redirection
  }

  // If already on 'index.html', navigate to the section
  scrollToSection(section);

   

  // we add active state in the header links
    // Select all elements with the class 'headerNavLink'/////////////////////////////
    const navLinks = document.querySelectorAll('.headerNavLink');

    // Remove the 'active' class from all the nav links
    navLinks.forEach(link => link.classList.remove('active'));

    // Add the 'active' class to the clicked link whose class matches the parameter
    navLinks.forEach(link => {
        if (link.classList.contains(section)) {
            link.classList.add('active');
        }
    });
}





function scrollToSection(section) {
  const targetSection = document.getElementById(section);

  if (targetSection) {
    // Get the top position of the section minus 80px
    const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - 80;

    // Smooth scroll to the position
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}

window.onload = function() {
  const params = new URLSearchParams(window.location.search);
  const section = params.get('section');

  // If section is provided, scroll to that section
  if (section) {
    scrollToSection(section);
  }
};


