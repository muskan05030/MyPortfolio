
// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
menuToggle.addEventListener('click', () => {
mobileMenu.classList.toggle('hidden');
if (mobileMenu.classList.contains('hidden')) {
menuToggle.innerHTML = '<i class="ri-menu-line ri-lg"></i>';
} else {
menuToggle.innerHTML = '<i class="ri-close-line ri-lg"></i>';
}
});
// Add custom animation for profile picture outline
const profilePicture = document.querySelector('.md\\:w-1\\/2 .relative .border-dashed');
if (profilePicture) {
setInterval(() => {
profilePicture.classList.toggle('border-primary');
profilePicture.classList.toggle('border-[#67AE6E]');
}, 2000);
}
// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();
if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
mobileMenu.classList.add('hidden');
menuToggle.innerHTML = '<i class="ri-menu-line ri-lg"></i>';
}
const targetId = this.getAttribute('href');
const targetElement = document.querySelector(targetId);
if (targetElement) {
window.scrollTo({
top: targetElement.offsetTop - 80,
behavior: 'smooth'
});
}
});
});
// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
if (window.pageYOffset > 300) {
backToTopButton.classList.remove('opacity-0', 'invisible');
backToTopButton.classList.add('opacity-100', 'visible');
} else {
backToTopButton.classList.remove('opacity-100', 'visible');
backToTopButton.classList.add('opacity-0', 'invisible');
}
});
backToTopButton.addEventListener('click', () => {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
});
// Active Navigation Link Highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
let current = '';
sections.forEach(section => {
const sectionTop = section.offsetTop;
const sectionHeight = section.clientHeight;
if (pageYOffset >= sectionTop - 200) {
current = section.getAttribute('id');
}
});
navLinks.forEach(link => {
link.classList.remove('active-nav');
if (link.getAttribute('href') === `#${current}`) {
link.classList.add('active-nav');
}
});
});
// Form Validation
const contactForm = document.querySelector('form');
if (contactForm) {
contactForm.addEventListener('submit', function(e) {
e.preventDefault();
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
let isValid = true;
if (!nameInput.value.trim()) {
isValid = false;
nameInput.style.borderColor = '#FF6B6B';
} else {
nameInput.style.borderColor = '#90C67C';
}
if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
isValid = false;
emailInput.style.borderColor = '#FF6B6B';
} else {
emailInput.style.borderColor = '#90C67C';
}
if (!messageInput.value.trim()) {
isValid = false;
messageInput.style.borderColor = '#FF6B6B';
} else {
messageInput.style.borderColor = '#90C67C';
}
if (isValid) {
// Create custom success notification instead of alert
const notification = document.createElement('div');
notification.className = 'fixed top-20 right-4 bg-primary text-white px-6 py-3 rounded shadow-lg z-50 transform transition-all duration-500 translate-x-full';
notification.innerHTML = '<div class="flex items-center"><i class="ri-check-line mr-2"></i> Message sent successfully!</div>';
document.body.appendChild(notification);
// Animate notification
setTimeout(() => {
notification.classList.remove('translate-x-full');
}, 100);
// Remove notification after 3 seconds
setTimeout(() => {
notification.classList.add('translate-x-full');
setTimeout(() => {
document.body.removeChild(notification);
}, 500);
}, 3000);
contactForm.reset();
}
});
}
function isValidEmail(email) {
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(String(email).toLowerCase());
}
// Skill Bar Animation
const skillBars = document.querySelectorAll('.skill-progress');
const animateSkillBars = () => {
skillBars.forEach(bar => {
const width = bar.style.width;
bar.style.width = '0';
setTimeout(() => {
bar.style.width = width;
bar.style.transition = 'width 1s ease';
}, 100);
});
};
// Run animation when in viewport
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
animateSkillBars();
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1 });
const skillsSection = document.getElementById('skills');
if (skillsSection) {
observer.observe(skillsSection);
}
