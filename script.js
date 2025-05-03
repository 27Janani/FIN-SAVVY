// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Form submission handling
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    // Here you would typically send the data to a server
    console.log("Form submitted:", data);

    // Show success message
    alert("Thank you for your message! We will get back to you soon.");
    this.reset();
  });
}

// Add scroll-based navbar styling
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
  } else {
    navbar.style.backgroundColor = "white";
    navbar.style.boxShadow = "none";
  }
});

// Add animation to feature cards when they come into view
const featureCards = document.querySelectorAll(".feature-card");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.1,
  }
);

featureCards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "opacity 0.5s, transform 0.5s";
  observer.observe(card);
});

// Add hover effect to CTA button
const ctaButton = document.querySelector(".cta-button");
if (ctaButton) {
  ctaButton.addEventListener("mouseenter", () => {
    ctaButton.style.transform = "scale(1.05)";
  });

  ctaButton.addEventListener("mouseleave", () => {
    ctaButton.style.transform = "scale(1)";
  });
}
