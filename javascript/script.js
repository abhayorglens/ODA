  // 3) Hide and show the header when we scrollup then show the header and when we scroll down then hide the header
  let lastScrollTop = 0;

  // Listen for scroll events on the window
  window.addEventListener("scroll", function() {
      // Get the current scroll position
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Get the header element
      let header = document.querySelector(".headerContent");

      if (scrollTop > lastScrollTop) {
          // User is scrolling down
          header.style.transform = "translateY(-100%)"; // Slide up (hide)
      } else {
          // User is scrolling up
          header.style.transform = "translateY(0)"; // Slide down (show)
      }

      // Update the last scroll position
      lastScrollTop = scrollTop;
  });


     

  
  
  
  // Variable to track the active link
  let activeLink = 'body';

  // Function to update the `active` class on navigation links
  function updateNavLinkClasses() {
      const navLinks = document.querySelectorAll('.headerNavLink');
      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.classList.contains(activeLink)) {
              link.classList.add('active');
          }
      });
  }

  // Function to load header and footer
  function loadContent() {
      // Load header
      fetch('header.html')
          .then(response => {
              if (!response.ok) throw new Error('Failed to load header');
              return response.text();
          })
          .then(data => {
              document.getElementById('header').innerHTML = data;
              updateNavLinkClasses(); // Ensure active links are updated after loading
          })
          .catch(error => console.error(error));

      // Load footer
      fetch('footer.html')
          .then(response => {
              if (!response.ok) throw new Error('Failed to load footer');
              return response.text();
          })
          .then(data => {
              document.getElementById('footer').innerHTML = data;
              updateNavLinkClasses(); // Ensure active links are updated after loading
          })
          .catch(error => console.error(error));
  }

  // Function to update the activeLink based on the URL
  function updateActiveLinkOnUrlChange() {
      const urlParams = new URLSearchParams(window.location.search);
      const section = urlParams.get('section');
      const currentUrl = window.location.href;

      if (section) {
          activeLink = section;
      } else if (currentUrl.includes('index.html')) {
          activeLink = 'body';
      } else if (currentUrl.includes('aboutus.html')) {
          activeLink = 'aboutus';
      } else if (currentUrl.includes('contactus.html')) {
          activeLink = 'contactus';
      } else if (currentUrl.includes('privacyPolicy.html')) {
          activeLink = 'privacyAndPolicy';
      } else if (currentUrl.includes('termsAndCondition.html')) {
          activeLink = 'termsAndConditions';
      }

      updateNavLinkClasses();
  }

  // Function to navigate to a different section using links
  function navigateTo(section) {
      // Check if we are currently on index.html
      if (window.location.pathname.includes("index.html")) {
          // If the section is 'body', redirect to index.html without a section
          if (section === 'body') {
              window.location.href = 'index.html';
              return;
          }

          // If we are on index.html, update the URL to include the section parameter
          let currentUrl = new URL(window.location.href);

          // Update the 'section' parameter or add it if it doesn't exist
          currentUrl.searchParams.set('section', section);

          // Update the URL without reloading the page
          history.pushState(null, '', currentUrl.toString());

          // Update the active link and scroll to the section
          updateActiveLinkOnUrlChange();
          checkAndScrollToSection();
      } else {
          // If we are not on index.html, redirect to index.html with the section parameter
          if (section === 'body') {
              window.location.href = 'index.html'; // Navigate to home
          } else {
              // Redirect to index.html with the specific section
              window.location.href = `index.html?section=${section}`;
          }
      }
  }

  // Function to scroll to a specific section by ID
  function scrollToSection(section) {
      const targetSection = document.getElementById(section);
      if (targetSection) {
          const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
          });
      }
  }

  // Function to check if the URL has 'section' and scroll to that section
  function checkAndScrollToSection() {
      const urlParams = new URLSearchParams(window.location.search);
      const section = urlParams.get('section');

      if (section) {
          scrollToSection(section);
      }
  }

  // Call the loadContent function when the page loads
  window.onload = () => {
      loadContent();
      updateActiveLinkOnUrlChange();
      checkAndScrollToSection();
  };

  // Listen for URL changes (for back/forward navigation)
  window.addEventListener('popstate', function () {
      updateActiveLinkOnUrlChange();
      checkAndScrollToSection();
  });

  // Override pushState and replaceState to detect URL changes programmatically
  (function (history) {
      const pushState = history.pushState;
      history.pushState = function (state) {
          const result = pushState.apply(history, arguments);
          updateActiveLinkOnUrlChange();
          return result;
      };

      const replaceState = history.replaceState;
      history.replaceState = function (state) {
          const result = replaceState.apply(history, arguments);
          updateActiveLinkOnUrlChange();
          return result;
      };
  })(window.history);