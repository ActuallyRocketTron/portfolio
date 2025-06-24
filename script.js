const subtitles = [
    "Aspiring Programmer",
    "Discipline and Perseverance",
    "Student Leader",
    "Challenge seeker",
  ];
  
let currentIndex = 0;
const subtitleEl = document.getElementById("subtitle");
  
function cycleSubtitles() {
    // Step 1: Start fade-out
    subtitleEl.style.opacity = 0;
  
    // Step 2: Wait for fade-out to complete (500ms)
    setTimeout(() => {
      // Step 3: Update text
      currentIndex = (currentIndex + 1) % subtitles.length;
      subtitleEl.textContent = subtitles[currentIndex];
  
      // Step 4: Force a reflow so the browser registers the opacity = 0 state
      void subtitleEl.offsetWidth;
  
      // Step 5: Fade in
      subtitleEl.style.opacity = 1;
    }, 500);
  }
  
  // Step 6: Run on an interval
setInterval(cycleSubtitles, 3500);

// Scroll to sections
document.getElementById("ScrollAboutMe").addEventListener("click", function() {
    document.getElementById("AboutMePart").scrollIntoView({ behavior: "smooth" });
  });

document.getElementById("ScrollAchievements").addEventListener("click", function() {
    document.getElementById("AchievementsPart").scrollIntoView({ behavior: "smooth" });
  });

document.getElementById("ScrollPassionProjects").addEventListener("click", function() {
    document.getElementById("PassionProjectsPart").scrollIntoView({ behavior: "smooth" });
  });

document.getElementById("ScrollContactMe").addEventListener("click", function() {
    document.getElementById("ContactMePart").scrollIntoView({ behavior: "smooth" });
  });

//slideshow 
const images = [
    "images/parentcode.jpg",
    "images/Parentsguardpost.jpg"
  ];
  
let burrentIndex = 0;
const slideshow = document.getElementById("STEAMslideshow");
  
function cycleImages() {
    // Step 1: Fade out
    slideshow.style.opacity = 0;
    setTimeout(() => {
        burrentIndex = (burrentIndex + 1) % images.length;
        slideshow.src = images[burrentIndex];
        slideshow.style.opacity = 1;
    }, 500); // Wait for fade-out to finish (matches CSS transition time)
  }
  
setInterval(cycleImages, 3000);