/**
 * ELITE FORCE Gaming Clan Website
 * Modern JavaScript with advanced animations and interactions
 */

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Initialize libraries
    const { gsap } = window;
    const ScrollTrigger = window.ScrollTrigger;
    const MotionPathPlugin = window.MotionPathPlugin;
    const particlesJS = window.particlesJS;
    
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
    
    // Initialize components
    // Removed initLoader() as requested
    initCursor();
    initMobileMenu();
    initNavigation();
    initParticles();
    initHeroAnimations();
    initCounters();
    initTicker();
    initSectionAnimations();
    initFeatureCards();
    initEventsSlider();
    initGalleryFilter();
    initLightbox();
    initFormAnimations();
    initBackToTop();
    init3DEffects();
    
    // Start page animations immediately instead of waiting for loader
    startPageAnimations();
    
    /**
     * Start page animations (no longer after loader)
     */
    function startPageAnimations() {
      // Remove loading class from body
      document.querySelector("body").classList.remove("loading");
      
      // Reveal header
      gsap.from(".header", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
      
      // Reveal hero content
      const heroTl = gsap.timeline();
      
      heroTl.from(".hero-badge", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
      
      heroTl.from(".hero-title-text", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      }, "-=0.4");
      
      heroTl.from(".hero-description", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6");
      
      heroTl.from(".hero-buttons .btn", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      }, "-=0.6");
      
      heroTl.from(".hero-image-container", {
        scale: 0.5,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      }, "-=1");
      
      heroTl.from(".hero-image-orbit", {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      }, "-=0.8");
      
      heroTl.from(".hero-stat", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      }, "-=0.8");
      
      heroTl.from(".scroll-indicator", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6");
    }
    
    /**
     * Initialize custom cursor
     */
    function initCursor() {
      const cursor = document.querySelector(".cursor");
      const cursorDot = document.querySelector(".cursor-dot");
      const cursorOutline = document.querySelector(".cursor-outline");
      const cursorText = document.querySelector(".cursor-text");
      
      if (!cursor || !cursorDot || !cursorOutline || !cursorText) return;
      
      // Show cursor on mouse move
      document.addEventListener("mousemove", (e) => {
        gsap.to(cursorDot, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: "power2.out"
        });
        
        gsap.to(cursorOutline, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.5,
          ease: "power2.out"
        });
        
        gsap.to(cursorText, {
          x: e.clientX,
          y: e.clientY + 30,
          duration: 0.3,
          ease: "power2.out"
        });
        
        // Show cursor
        if (cursor.style.opacity !== "1") {
          gsap.to(cursor, {
            opacity: 1,
            duration: 0.3
          });
        }
      });
      
      // Hide cursor when leaving window
      document.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
          opacity: 0,
          duration: 0.3
        });
      });
      
      // Custom cursor states
      const cursorTargets = document.querySelectorAll("[data-cursor]");
      
      cursorTargets.forEach(target => {
        const cursorType = target.getAttribute("data-cursor");
        
        target.addEventListener("mouseenter", () => {
          document.body.setAttribute("data-cursor", cursorType);
          
          // Add custom text for specific cursor types
          if (cursorType === "button") {
            cursorText.textContent = "Click";
            document.body.setAttribute("data-cursor", "text");
          } else if (cursorType === "link") {
            cursorText.textContent = "Open";
            document.body.setAttribute("data-cursor", "text");
          } else if (cursorType === "expand") {
            cursorText.textContent = "View";
            document.body.setAttribute("data-cursor", "text");
          } else if (cursorType === "scroll") {
            cursorText.textContent = "Scroll";
            document.body.setAttribute("data-cursor", "text");
          } else if (cursorType === "drag") {
            cursorText.textContent = "Hover";
            document.body.setAttribute("data-cursor", "text");
          } else if (cursorType === "prev") {
            cursorText.textContent = "Previous";
            document.body.setAttribute("data-cursor", "text");
          } else if (cursorType === "next") {
            cursorText.textContent = "Next";
            document.body.setAttribute("data-cursor", "text");
          } else if (cursorType === "close") {
            cursorText.textContent = "Close";
            document.body.setAttribute("data-cursor", "text");
          } else if (cursorType === "filter") {
            cursorText.textContent = "Filter";
            document.body.setAttribute("data-cursor", "text");
          } else if (cursorType === "view") {
            cursorText.textContent = "View";
            document.body.setAttribute("data-cursor", "text");
          } else if (cursorType === "back") {
            cursorText.textContent = "Top";
            document.body.setAttribute("data-cursor", "text");
          } else if (cursorType === "logo") {
            cursorText.textContent = "Home";
            document.body.setAttribute("data-cursor", "text");
          } else if (cursorType === "menu") {
            cursorText.textContent = "Menu";
            document.body.setAttribute("data-cursor", "text");
          }
        });
        
        target.addEventListener("mouseleave", () => {
          document.body.removeAttribute("data-cursor");
          cursorText.textContent = "";
        });
      });
    }
    
    /**
     * Initialize mobile menu
     */
    function initMobileMenu() {
      const menuToggle = document.querySelector(".menu-toggle");
      const mobileMenu = document.querySelector(".mobile-menu");
      const mobileMenuClose = document.querySelector(".mobile-menu-close");
      const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
      
      if (!menuToggle || !mobileMenu) return;
      
      // Toggle mobile menu
      menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        mobileMenu.classList.toggle("active");
        document.body.classList.toggle("menu-open");
      });
      
      // Close mobile menu
      if (mobileMenuClose) {
        mobileMenuClose.addEventListener("click", () => {
          menuToggle.classList.remove("active");
          mobileMenu.classList.remove("active");
          document.body.classList.remove("menu-open");
        });
      }
      
      // Close mobile menu when clicking on a link
      mobileNavLinks.forEach(link => {
        link.addEventListener("click", () => {
          menuToggle.classList.remove("active");
          mobileMenu.classList.remove("active");
          document.body.classList.remove("menu-open");
        });
      });
    }
    
    /**
     * Initialize navigation
     */
    function initNavigation() {
      const sections = document.querySelectorAll("section[id]");
      const navLinks = document.querySelectorAll(".nav-link");
      const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
      const header = document.querySelector(".header");
      
      // Add scroll class to header when scrolling
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
        
        // Update active nav link based on scroll position
        let current = "";
        
        sections.forEach(section => {
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.offsetHeight;
          
          if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
          }
        });
        
        // Update desktop nav
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
          }
        });
        
        // Update mobile nav
        mobileNavLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
          }
        });
      });
      
      // Smooth scroll for navigation links
      const allNavLinks = [...navLinks, ...mobileNavLinks];
      
      allNavLinks.forEach(link => {
        link.addEventListener("click", function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute("href");
          const targetSection = document.querySelector(targetId);
          
          if (targetSection) {
            window.scrollTo({
              top: targetSection.offsetTop - 80,
              behavior: "smooth"
            });
          }
        });
      });
    }
    
    /**
     * Initialize particles.js
     */
    function initParticles() {
      if (typeof particlesJS !== "undefined" && document.getElementById("particles-js")) {
        particlesJS("particles-js", {
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffd700",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffd700",
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        });
      }
    }
    
    /**
     * Initialize hero animations
     */
    function initHeroAnimations() {
      // Animate hero image on mouse move
      const heroImage = document.querySelector(".hero-image-container");
      const heroSection = document.querySelector(".hero");
      
      if (heroImage && heroSection) {
        heroSection.addEventListener("mousemove", (e) => {
          const xPos = (e.clientX / window.innerWidth - 0.5) * 20;
          const yPos = (e.clientY / window.innerHeight - 0.5) * 20;
          
          gsap.to(heroImage, {
            rotationY: xPos,
            rotationX: -yPos,
            duration: 1,
            ease: "power2.out"
          });
        });
        
        heroSection.addEventListener("mouseleave", () => {
          gsap.to(heroImage, {
            rotationY: 0,
            rotationX: 0,
            duration: 1,
            ease: "power2.out"
          });
        });
      }
      
      // Scroll indicator animation
      const scrollIndicator = document.querySelector(".scroll-indicator");
      
      if (scrollIndicator) {
        scrollIndicator.addEventListener("click", () => {
          const aboutSection = document.querySelector("#about");
          
          if (aboutSection) {
            window.scrollTo({
              top: aboutSection.offsetTop - 80,
              behavior: "smooth"
            });
          }
        });
      }
    }
    
    /**
     * Initialize counters animation
     */
    function initCounters() {
      const counters = document.querySelectorAll(".hero-stat-number");
      
      if (counters.length === 0) return;
      
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute("data-count"));
        let count = 0;
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        
        const updateCounter = () => {
          if (count < target) {
            count += increment;
            counter.textContent = Math.ceil(count);
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target;
          }
        };
        
        // Start counter animation immediately
        updateCounter();
      });
    }
    
    /**
     * Initialize ticker animation
     */
    function initTicker() {
      const tickerTrack = document.querySelector(".ticker-track");
      
      if (!tickerTrack) return;
      
      // Clone ticker items for infinite loop
      const tickerContent = tickerTrack.innerHTML;
      tickerTrack.innerHTML = tickerContent + tickerContent;
      
      // Make ticker items interactive
      const tickerItems = document.querySelectorAll(".ticker-item");
      
      tickerItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
          tickerTrack.style.animationPlayState = "paused";
        });
        
        item.addEventListener("mouseleave", () => {
          tickerTrack.style.animationPlayState = "running";
        });
      });
    }
    
    /**
     * Initialize section animations with ScrollTrigger
     */
    function initSectionAnimations() {
      if (typeof ScrollTrigger === "undefined") return;
      
      // Register ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);
      
      // About section animation
      gsap.from(".about-image", {
        scrollTrigger: {
          trigger: ".about",
          start: "top 80%",
          end: "bottom 80%",
          toggleActions: "play none none none"
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
      
      gsap.from(".about-text", {
        scrollTrigger: {
          trigger: ".about",
          start: "top 80%",
          end: "bottom 80%",
          toggleActions: "play none none none"
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
      
      gsap.from(".about-feature", {
        scrollTrigger: {
          trigger: ".about-features",
          start: "top 80%",
          end: "bottom 80%",
          toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
      
      // Features section animation
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: ".features-grid",
          start: "top 80%",
          end: "bottom 80%",
          toggleActions: "play none none none"
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      });
      
      // Events section animation
      gsap.from(".event-card", {
        scrollTrigger: {
          trigger: ".events-slider",
          start: "top 80%",
          end: "bottom 80%",
          toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
      
      // Gallery section animation
      gsap.from(".gallery-filter-btn", {
        scrollTrigger: {
          trigger: ".gallery-filter",
          start: "top 80%",
          end: "bottom 80%",
          toggleActions: "play none none none"
        },
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out"
      });
      
      gsap.from(".gallery-item", {
        scrollTrigger: {
          trigger: ".gallery-grid",
          start: "top 80%",
          end: "bottom 80%",
          toggleActions: "play none none none"
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      });
      
      // Contact section animation
      gsap.from(".contact-info", {
        scrollTrigger: {
          trigger: ".contact-content",
          start: "top 80%",
          end: "bottom 80%",
          toggleActions: "play none none none"
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
      
      gsap.from(".contact-form-wrapper", {
        scrollTrigger: {
          trigger: ".contact-content",
          start: "top 80%",
          end: "bottom 80%",
          toggleActions: "play none none none"
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
      
      // Section headers animation
      const sectionHeaders = document.querySelectorAll(".section-header");
      
      sectionHeaders.forEach(header => {
        gsap.from(header.querySelector(".section-badge"), {
          scrollTrigger: {
            trigger: header,
            start: "top 80%",
            end: "bottom 80%",
            toggleActions: "play none none none"
          },
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out"
        });
        
        gsap.from(header.querySelector(".section-title"), {
          scrollTrigger: {
            trigger: header,
            start: "top 80%",
            end: "bottom 80%",
            toggleActions: "play none none none"
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out"
        });
        
        gsap.from(header.querySelector(".section-subtitle"), {
          scrollTrigger: {
            trigger: header,
            start: "top 80%",
            end: "bottom 80%",
            toggleActions: "play none none none"
          },
          y: 30,
          opacity: 0,
          duration: 0.6,
          delay: 0.4,
          ease: "power3.out"
        });
      });
    }
    
    /**
     * Initialize feature cards
     */
    function initFeatureCards() {
      const featureCards = document.querySelectorAll(".feature-card");
      
      featureCards.forEach(card => {
        const cardInner = card.querySelector(".feature-card-inner");
        
        card.addEventListener("mouseenter", () => {
          gsap.to(cardInner, {
            rotationY: 180,
            duration: 0.8,
            ease: "power3.out"
          });
        });
        
        card.addEventListener("mouseleave", () => {
          gsap.to(cardInner, {
            rotationY: 0,
            duration: 0.8,
            ease: "power3.out"
          });
        });
      });
    }
    
    /**
     * Initialize events slider
     */
    function initEventsSlider() {
      const eventsTrack = document.querySelector(".events-track");
      const eventCards = document.querySelectorAll(".event-card");
      const prevBtn = document.querySelector(".events-nav-prev");
      const nextBtn = document.querySelector(".events-nav-next");
      const pagination = document.querySelector(".events-pagination");
      
      if (!eventsTrack || eventCards.length === 0) return;
      
      let currentSlide = 0;
      let slidesToShow = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
      const totalSlides = Math.ceil(eventCards.length / slidesToShow);
      
      // Create pagination dots
      for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("div");
        dot.classList.add("events-pagination-dot");
        if (i === 0) dot.classList.add("active");
        
        dot.addEventListener("click", () => {
          goToSlide(i);
        });
        
        pagination.appendChild(dot);
      }
      
      // Update pagination
      function updatePagination() {
        const dots = document.querySelectorAll(".events-pagination-dot");
        
        dots.forEach((dot, index) => {
          dot.classList.toggle("active", index === currentSlide);
        });
      }
      
      // Go to slide
      function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        
        const slideWidth = eventCards[0].offsetWidth + parseInt(window.getComputedStyle(eventCards[0]).marginRight);
        const offset = -slideIndex * slideWidth * slidesToShow;
        
        gsap.to(eventsTrack, {
          x: offset,
          duration: 0.8,
          ease: "power3.out"
        });
        
        updatePagination();
      }
      
      // Next slide
      function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        goToSlide(currentSlide);
      }
      
      // Previous slide
      function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        goToSlide(currentSlide);
      }
      
      // Event listeners
      if (prevBtn) prevBtn.addEventListener("click", prevSlide);
      if (nextBtn) nextBtn.addEventListener("click", nextSlide);
      
      // Responsive
      window.addEventListener("resize", () => {
        const newSlidesToShow = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
        
        if (newSlidesToShow !== slidesToShow) {
          slidesToShow = newSlidesToShow;
          goToSlide(0);
        }
      });
    }
    
    /**
     * Initialize gallery filter
     */
    function initGalleryFilter() {
      const filterBtns = document.querySelectorAll(".gallery-filter-btn");
      const galleryItems = document.querySelectorAll(".gallery-item");
      
      if (filterBtns.length === 0 || galleryItems.length === 0) return;
      
      filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          // Update active button
          filterBtns.forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          
          const filterValue = btn.getAttribute("data-filter");
          
          // Filter gallery items
          galleryItems.forEach(item => {
            const itemCategory = item.getAttribute("data-category");
            
            if (filterValue === "all" || filterValue === itemCategory) {
              gsap.to(item, {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                ease: "power3.out",
                clearProps: "scale"
              });
              item.style.display = "block";
            } else {
              gsap.to(item, {
                scale: 0.8,
                opacity: 0,
                duration: 0.5,
                ease: "power3.out",
                onComplete: () => {
                  item.style.display = "none";
                }
              });
            }
          });
        });
      });
      
      // Add this at the end of your initGalleryFilter function
      function debugGalleryImages() {
        const galleryImages = document.querySelectorAll('.gallery-img');
        console.log(`Found ${galleryImages.length} gallery images`);
        
        galleryImages.forEach((img, index) => {
          console.log(`Image ${index + 1}: ${img.src}, Loaded: ${img.complete}, Size: ${img.naturalWidth}x${img.naturalHeight}`);
          
          // Add error handler to show when images fail to load
          img.onerror = function() {
            console.error(`Failed to load image: ${img.src}`);
            img.style.border = '2px solid red';
            img.style.minHeight = '200px';
            img.style.background = 'rgba(255,0,0,0.2)';
          };
        });
      }
      
      // Call this function after your gallery is initialized
      setTimeout(debugGalleryImages, 1000);
    }
    
    /**
     * Initialize lightbox
     */
    function initLightbox() {
      const lightbox = document.querySelector(".lightbox");
      const lightboxImage = document.querySelector(".lightbox-image");
      const lightboxCaption = document.querySelector(".lightbox-caption");
      const lightboxClose = document.querySelector(".lightbox-close");
      const lightboxPrev = document.querySelector(".lightbox-prev");
      const lightboxNext = document.querySelector(".lightbox-next");
      const galleryLinks = document.querySelectorAll("[data-lightbox]");
      
      if (!lightbox || !lightboxImage || galleryLinks.length === 0) return;
      
      let currentIndex = 0;
      const galleryImages = [];
      
      // Collect gallery images
      galleryLinks.forEach((link, index) => {
        const imageUrl = link.getAttribute("href");
        const imageCaption = link.closest(".gallery-item").querySelector(".gallery-title").textContent;
        
        galleryImages.push({
          url: imageUrl,
          caption: imageCaption
        });
        
        link.addEventListener("click", (e) => {
          e.preventDefault();
          openLightbox(index);
        });
      });
      
      // Open lightbox
      function openLightbox(index) {
        currentIndex = index;
        updateLightboxContent();
        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";
      }
      
      // Close lightbox
      function closeLightbox() {
        lightbox.classList.remove("active");
        document.body.style.overflow = "";
      }
      
      // Update lightbox content
      function updateLightboxContent() {
        const image = galleryImages[currentIndex];
        
        lightboxImage.src = image.url;
        lightboxCaption.textContent = image.caption;
      }
      
      // Next image
      function nextImage() {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        updateLightboxContent();
      }
      
      // Previous image
      function prevImage() {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        updateLightboxContent();
      }
      
      // Event listeners
      if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
      if (lightboxNext) lightboxNext.addEventListener("click", nextImage);
      if (lightboxPrev) lightboxPrev.addEventListener("click", prevImage);
      
      // Keyboard navigation
      document.addEventListener("keydown", (e) => {
        if (!lightbox.classList.contains("active")) return;
        
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
      });
      
      // Close lightbox when clicking outside the image
      lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
      });
    }
    
    /**
     * Initialize form animations
     */
    function initFormAnimations() {
      const formControls = document.querySelectorAll(".form-control");
      const contactForm = document.getElementById("contactForm");
      
      if (formControls.length === 0) return;
      
      // Animate form controls on focus
      formControls.forEach(control => {
        control.addEventListener("focus", () => {
          const formGroup = control.closest(".form-group");
          
          if (formGroup) {
            gsap.to(formGroup, {
              y: -5,
              duration: 0.3,
              ease: "power2.out"
            });
          }
        });
        
        control.addEventListener("blur", () => {
          const formGroup = control.closest(".form-group");
          
          if (formGroup) {
            gsap.to(formGroup, {
              y: 0,
              duration: 0.3,
              ease: "power2.out"
            });
          }
        });
      });
      
      // Form submission animation
      if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
          e.preventDefault();
          
          // Validate form
          const isValid = Array.from(formControls).every(control => {
            if (control.hasAttribute("required")) {
              return control.value.trim() !== "";
            }
            return true;
          });
          
          if (isValid) {
            // Submit animation
            const submitBtn = contactForm.querySelector("button[type='submit']");
            
            if (submitBtn) {
              const originalText = submitBtn.innerHTML;
              
              submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Sending...`;
              submitBtn.disabled = true;
              
              // Simulate form submission
              setTimeout(() => {
                submitBtn.innerHTML = `<i class="fas fa-check"></i> Message Sent!`;
                
                // Reset form
                setTimeout(() => {
                  contactForm.reset();
                  submitBtn.innerHTML = originalText;
                  submitBtn.disabled = false;
                }, 3000);
              }, 2000);
            }
          }
        });
      }
    }
    
    /**
     * Initialize back to top button
     */
    function initBackToTop() {
      const backToTopBtn = document.querySelector(".back-to-top");
      
      if (!backToTopBtn) return;
      
      // Show/hide button based on scroll position
      window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
          backToTopBtn.classList.add("active");
        } else {
          backToTopBtn.classList.remove("active");
        }
      });
      
      // Scroll to top when clicked
      backToTopBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
    }
    
    /**
     * Initialize 3D effects
     */
    function init3DEffects() {
      // 3D tilt effect for cards
      const cards = document.querySelectorAll(".event-card-inner, .contact-form-wrapper");
      
      cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const xPercent = x / rect.width - 0.5;
          const yPercent = y / rect.height - 0.5;
          
          const rotateX = yPercent * -10;
          const rotateY = xPercent * 10;
          
          gsap.to(card, {
            rotateX,
            rotateY,
            transformPerspective: 1000,
            duration: 0.5,
            ease: "power2.out"
          });
        });
        
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: "power2.out"
          });
        });
      });
      
      // Parallax effect for background shapes
      const shapes = document.querySelectorAll(".hero-bg-shape");
      
      if (shapes.length > 0) {
        document.addEventListener("mousemove", (e) => {
          const xPos = e.clientX / window.innerWidth - 0.5;
          const yPos = e.clientY / window.innerHeight - 0.5;
          
          shapes.forEach((shape, index) => {
            const factor = (index + 1) * 20;
            
            gsap.to(shape, {
              x: xPos * factor,
              y: yPos * factor,
              duration: 1,
              ease: "power2.out"
            });
          });
        });
      }
    }
  
  // Initialize member cards
  function initMemberCards() {
    // Get all cards
    const cardWrappers = document.querySelectorAll('.card-wrapper');
    const cards = document.querySelectorAll('.card');
    const cardInners = document.querySelectorAll('.card-inner');
    
    // Initialize card effects
    cardWrappers.forEach((wrapper, index) => {
      const card = cards[index];
      const cardInner = cardInners[index];
      
      // Flip card on click
      card.addEventListener('click', function() {
        card.classList.toggle('flipped');
      });
      
      // 3D tilt effect on mouse move
      wrapper.addEventListener('mousemove', function(e) {
        const cardRect = wrapper.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;
        
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        // Calculate rotation values based on mouse position
        const rotateY = (mouseX - cardCenterX) / 10;
        const rotateX = (cardCenterY - mouseY) / 10;
        
        // Apply rotation
        cardInner.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
        
        // Dynamic shine effect
        const shine = wrapper.querySelector('.card-shine');
        const shineX = ((mouseX - cardRect.left) / cardRect.width) * 100;
        const shineY = ((mouseY - cardRect.top) / cardRect.height) * 100;
        shine.style.background = `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 60%)`;
      });
      
      // Reset card position when mouse leaves
      wrapper.addEventListener('mouseleave', function() {
        cardInner.style.transform = 'rotateY(0) rotateX(0)';
        const shine = wrapper.querySelector('.card-shine');
        shine.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.03) 40%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.03) 60%, rgba(255, 255, 255, 0) 100%)';
      });
    });
  }
  
  // Call the function to initialize member cards
  initMemberCards();
  });
