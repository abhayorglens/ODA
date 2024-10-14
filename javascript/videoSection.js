

// video section
function playVideo() {
    const video = document.getElementById('myVideo');
    const playButton = document.querySelector('.playButton');
    const thumbnail = document.querySelector('.video');
  
    // Hide the thumbnail and play button
    playButton.style.display = 'none';
    thumbnail.style.maxHeight = '0'; // Shrink the thumbnail
    video.style.maxHeight = '500px'; // Expand the video to 500px
  
    // Show the video element
    video.style.display = 'block';
  
    // Play the video and handle errors
    video.play();
  }
  