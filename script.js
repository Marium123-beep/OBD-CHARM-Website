//Navtoggle
const navDialog = document.getElementById('nav-dialog');
function handleMenu(){
   navDialog.classList.toggle('hidden');
}

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const slider = document.getElementById("card-slider");

// To keep track of the current card
let currentIndex = 0;
const totalCards = document.querySelectorAll("#card-slider .flex-shrink-0").length;

const updateSliderPosition = () => {
  const offset = -(currentIndex * 100); // Adjust the offset by 100% for each card
  slider.style.transform = `translateX(${offset}%)`; // Move the slider to show the next card
};

// Handle left button click
prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
});

// Handle right button click
nextButton.addEventListener("click", () => {
  if (currentIndex < totalCards - 1) {
    currentIndex++;
    updateSliderPosition();
  }
});

//FAQs (dt per event listner lagaen gein taky click karein tw dd miljae)
const dtElements = document.querySelectorAll('dt');
dtElements.forEach(element => {
     element.addEventListener('click' , () => {
     const ddId = element.getAttribute('aria-controls');
     const ddElement = document.getElementById(ddId);
     const ddArrowIcon = element.querySelectorAll('i')[0];

     ddElement.classList.toggle('hidden');
     ddArrowIcon.classList.toggle('-rotate-180');
})

})

//JavaScript for Form Handling 

  document.getElementById("demoForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name && email) {
      alert(`Thank you, ${name}! Your request for a demo has been submitted.`);
    } else {
      alert("Please fill in all fields.");
    }
  });

   //on scrolling content is showed
  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".animate-on-scroll");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0", "translate-x-0");
          entry.target.classList.remove("opacity-0", "translate-y-10", "translate-x-[-100px]", "translate-x-[100px]");
        }
      });
    }, { threshold: 0.2 });
  
    sections.forEach((section) => {
      observer.observe(section);
    });
  });
  
  

 