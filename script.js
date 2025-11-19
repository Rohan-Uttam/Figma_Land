document.querySelectorAll(".footer-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetElementId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetElementId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

let currentTestimonialIndex = 0;
const testimonialItems = document.querySelectorAll(".testimonial");
const navigationDots = document.querySelectorAll(".dot");

function updateTestimonial(index) {
  testimonialItems.forEach((testimonial, i) => {
    testimonial.classList.toggle("active", i === index);
    navigationDots[i].classList.toggle("active", i === index);
  });
  currentTestimonialIndex = index;
}

window.updateTestimonial = updateTestimonial;

window.addEventListener("load", () => {
  updateTestimonial(0);
  setInterval(() => {
    const nextIndex = (currentTestimonialIndex + 1) % testimonialItems.length;
    updateTestimonial(nextIndex);
  }, 5000);
});

document.addEventListener("DOMContentLoaded", () => {
  const sendButton = document.getElementById("sendBtn");
  const nameField = document.getElementById("contactName");
  const emailField = document.getElementById("contactEmail");
  const messageField = document.getElementById("contactMessage");
  const contactModal = document.getElementById("contactModal");
  const closeModalButton = document.getElementById("closeModal");

  if (sendButton && contactModal && closeModalButton) {
    sendButton.addEventListener("click", (event) => {
      event.preventDefault();

      const name = nameField.value.trim();
      const email = emailField.value.trim();
      const message = messageField.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email || !message) {
        alert("Please complete all required fields.");
        return;
      }

      if (!emailRegex.test(email)) {
        alert("Please provide a valid email address.");
        return;
      }

      contactModal.style.display = "block";
      document.body.style.overflow = "hidden";

      nameField.value = "";
      emailField.value = "";
      messageField.value = "";
    });

    closeModalButton.addEventListener("click", () => {
      contactModal.style.display = "none";
      document.body.style.overflow = "";
    });

    window.addEventListener("click", (event) => {
      if (event.target === contactModal) {
        contactModal.style.display = "none";
        document.body.style.overflow = "";
      }
    });
  } else {
    console.error("Modal or button elements not found in DOM.");
  }
});

const subscriptionForm = document.querySelector(".subscribe-form");
if (subscriptionForm) {
  subscriptionForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailInput = subscriptionForm.querySelector("input[type='email']");
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      alert("Please enter your email address.");
    } else if (!emailRegex.test(email)) {
      alert("Please provide a valid email address.");
    } else {
      alert(`Successfully subscribed with email: ${email}`);
      emailInput.value = "";
    }
  });
}

const playButton = document.getElementById("playBtn");
const videoThumbnail = document.getElementById("videoThumb");
const featuredVideo = document.getElementById("featureVideo");

if (playButton && videoThumbnail && featuredVideo) {
  playButton.addEventListener("click", () => {
    videoThumbnail.style.display = "none";
    playButton.style.display = "none";
    featuredVideo.style.display = "block";

    setTimeout(() => {
      featuredVideo.style.opacity = "1";
      featuredVideo.play();
    }, 50);
  });
}

const mapPreviewButton = document.getElementById("mapPreview");
if (mapPreviewButton) {
  mapPreviewButton.addEventListener("click", () => {
    const mapContainer = document.getElementById("map-container");
    mapContainer.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30773484.55170563!2d61.0245165611659!3d19.69009515037612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1753034191164!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".cta-button, .cta-buttons").forEach((button) => {
    button.addEventListener("click", () => {
      const pricingSection = document.getElementById("pricing");
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const videoElement = document.getElementById("featureVideo");
  const playIconElement = document.getElementById("playIcon");

  if (videoElement && playIconElement) {
    playIconElement.style.display = "block";

    document.getElementById("videoWrapper").addEventListener("click", () => {
      if (videoElement.paused) {
        videoElement.play();
        playIconElement.style.display = "none";
      } else {
        videoElement.pause();
        playIconElement.style.display = "block";
      }
    });

    videoElement.addEventListener("ended", () => {
      playIconElement.style.display = "block";
    });
  }
});
