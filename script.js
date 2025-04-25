// DOM Elements
const darkModeToggle = document.getElementById('darkModeToggle');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');
const languageSelect = document.getElementById('languageSelect');
const feedbackForm = document.getElementById('feedbackForm');
const newsletterForm = document.getElementById('newsletterForm');
const formResult = document.getElementById('form-result');

// Current Date Elements
const goldPriceDisplay = document.querySelector('.gold-price');
const goldChangeDisplay = document.querySelector('.gold-change');
const usdRateDisplay = document.querySelector('.usd-rate');
const inrRateDisplay = document.querySelector('.inr-rate');
const weatherTempDisplay = document.querySelector('.weather-temp');
const weatherDescDisplay = document.querySelector('.weather-desc');

// Dark Mode Toggle
darkModeToggle.addEventListener('click', () => {
    document.body.setAttribute('data-theme', 
        document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    
    // Update icon
    const icon = darkModeToggle.querySelector('i');
    if (document.body.getAttribute('data-theme') === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
    
    // Save preference to localStorage
    localStorage.setItem('theme', document.body.getAttribute('data-theme'));
});

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
    const icon = darkModeToggle.querySelector('i');
    if (savedTheme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        mobileMenuBtn.querySelector('i').classList.remove('fa-times');
    });
});

// Mobile dropdown toggle
document.querySelectorAll('.dropdown > a').forEach(dropdownLink => {
    dropdownLink.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const dropdown = dropdownLink.parentElement;
            dropdown.classList.toggle('active');
        }
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown') && window.innerWidth > 768) {
        document.querySelectorAll('.dropdown-content').forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    }
});

// Language Switcher
languageSelect.addEventListener('change', (e) => {
    // In a real implementation, this would change the language of the page
    alert(`Language changed to ${e.target.value === 'en' ? 'English' : 'Nepali'}`);
});

// Fetch gold prices (mock data - replace with real API)
function fetchGoldPrices() {
    // In a real implementation, this would fetch from an API
    const goldData = {
        price: "Rs. 125,000 per tola",
        change: "+0.5% (Rs. 600)"
    };
    
    goldPriceDisplay.textContent = goldData.price;
    goldChangeDisplay.textContent = goldData.change;
}

// Fetch forex rates from NRB API
async function fetchForexRates() {
    try {
        const response = await fetch('https://www.nrb.org.np/api/forex/v1/');
        const data = await response.json();
        
        if (data.data && data.data.length > 0) {
            const usdRate = data.data.find(currency => currency.iso3 === 'USD');
            const inrRate = data.data.find(currency => currency.iso3 === 'INR');
            
            if (usdRate) {
                usdRateDisplay.textContent = `USD 1 = Rs. ${usdRate.buy.toFixed(2)}`;
            }
            if (inrRate) {
                inrRateDisplay.textContent = `INR 1 = Rs. ${inrRate.buy.toFixed(2)}`;
            }
        }
    } catch (error) {
        console.error('Error fetching forex rates:', error);
        usdRateDisplay.textContent = 'USD: Data unavailable';
        inrRateDisplay.textContent = 'INR: Data unavailable';
    }
}

// Fetch weather data from OpenWeatherMap
async function fetchWeather() {
    try {
        // Get user's location
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=55714597e97df7446072b3eddd3b93e0&units=metric`);
            const data = await response.json();
            
            if (data.main && data.weather) {
                weatherTempDisplay.textContent = `${Math.round(data.main.temp)}°C`;
                weatherDescDisplay.textContent = data.weather[0].description;
            }
        }, (error) => {
            // Default to Kathmandu if location access is denied
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kathmandu,Nepal&appid=55714597e97df7446072b3eddd3b93e0&units=metric`)
                .then(response => response.json())
                .then(data => {
                    if (data.main && data.weather) {
                        weatherTempDisplay.textContent = `${Math.round(data.main.temp)}°C`;
                        weatherDescDisplay.textContent = data.weather[0].description;
                    }
                });
        });
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherTempDisplay.textContent = 'Data unavailable';
        weatherDescDisplay.textContent = '';
    }
}

// Form Submissions
if (feedbackForm) {
    feedbackForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(feedbackForm);
        
        try {
            const response = await fetch(feedbackForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            const result = await response.json();
            
            if (result.success) {
                formResult.textContent = 'Thank you for your message! We will get back to you soon.';
                formResult.className = 'success';
                formResult.style.display = 'block';
                feedbackForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formResult.style.display = 'none';
                }, 5000);
            } else {
                throw new Error(result.message || 'Failed to send message');
            }
        } catch (error) {
            formResult.textContent = 'There was an error sending your message. Please try again later.';
            formResult.className = 'error';
            formResult.style.display = 'block';
            
            // Hide error message after 5 seconds
            setTimeout(() => {
                formResult.style.display = 'none';
            }, 5000);
        }
    });
}

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    });
}

// Floating Calculator Menu
const calculatorContainer = document.querySelector('.calculator-container');
const mainIcon = document.querySelector('.main-icon');

// Toggle calculator menu
mainIcon.addEventListener('click', (e) => {
  e.stopPropagation();
  calculatorContainer.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.calculator-container')) {
    calculatorContainer.classList.remove('active');
  }
});

// Prevent menu from closing when clicking on menu items
document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    fetchGoldPrices();
    fetchForexRates();
    fetchWeather();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
