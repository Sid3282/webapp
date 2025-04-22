// DOM Elements
const darkModeToggle = document.getElementById('darkModeToggle');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');
const languageSelect = document.getElementById('languageSelect');
const dateAD = document.getElementById('ad-date');
const dateBSYear = document.getElementById('bs-year');
const dateBSMonth = document.getElementById('bs-month');
const dateBSDay = document.getElementById('bs-day');
const swapDatesBtn = document.getElementById('swap-dates');
const conversionResult = document.getElementById('conversion-result');
const calculateGoldBtn = document.getElementById('calculate-gold');
const goldResult = document.getElementById('gold-result');
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.getElementById('newsletterForm');

// Current Date Elements
const dateADDisplay = document.querySelector('.date-ad');
const dateBSDisplay = document.querySelector('.date-bs');
const goldPrice24k = document.getElementById('gold-price-24k');
const goldChange24k = document.getElementById('gold-change-24k');
const goldPrice22k = document.getElementById('gold-price-22k');
const goldChange22k = document.getElementById('gold-change-22k');
const silverPrice = document.getElementById('silver-price');
const silverChange = document.getElementById('silver-change');
const usdRate = document.querySelector('.usd-rate');
const eurRate = document.querySelector('.eur-rate');
const weatherTemp = document.querySelector('.weather-temp');
const weatherDesc = document.querySelector('.weather-desc');

// Chart Element
let goldChart;

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

// Initialize Date Converter
function initDateConverter() {
    // Set today's date in AD input
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    dateAD.value = formattedDate;
    
    // Populate BS year dropdown (2080-2090)
    for (let year = 2080; year <= 2090; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        if (year === 2080) option.selected = true;
        dateBSYear.appendChild(option);
    }
    
    // Populate BS month dropdown (1-12)
    for (let month = 1; month <= 12; month++) {
        const option = document.createElement('option');
        option.value = month;
        option.textContent = month;
        if (month === 1) option.selected = true;
        dateBSMonth.appendChild(option);
    }
    
    // Populate BS day dropdown (1-32)
    for (let day = 1; day <= 32; day++) {
        const option = document.createElement('option');
        option.value = day;
        option.textContent = day;
        if (day === 1) option.selected = true;
        dateBSDay.appendChild(option);
    }
    
    // Update current date displays
    updateCurrentDates();
    
    // Set up event listeners
    dateAD.addEventListener('change', convertADtoBS);
    dateBSYear.addEventListener('change', convertBStoAD);
    dateBSMonth.addEventListener('change', convertBStoAD);
    dateBSDay.addEventListener('change', convertBStoAD);
    swapDatesBtn.addEventListener('click', swapDates);
}

// Update current date displays
function updateCurrentDates() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    // AD date
    dateADDisplay.textContent = today.toLocaleDateString('en-US', options);
    
    // BS date - in a real app, this would use a proper conversion library
    const bsDate = "2080 Bhadra 15"; // Placeholder
    dateBSDisplay.textContent = bsDate;
}

// Convert AD to BS
function convertADtoBS() {
    const adDate = new Date(dateAD.value);
    // In a real app, this would use a proper conversion library
    const bsDate = "2080 Bhadra 15"; // Placeholder based on input
    
    conversionResult.innerHTML = `
        <p><strong>Gregorian (AD):</strong> ${adDate.toLocaleDateString('en-US')}</p>
        <p><strong>Bikram Sambat (BS):</strong> ${bsDate}</p>
    `;
}

// Convert BS to AD
function convertBStoAD() {
    const bsYear = dateBSYear.value;
    const bsMonth = dateBSMonth.value;
    const bsDay = dateBSDay.value;
    
    // In a real app, this would use a proper conversion library
    const adDate = new Date(); // Placeholder based on input
    
    conversionResult.innerHTML = `
        <p><strong>Bikram Sambat (BS):</strong> ${bsYear}/${bsMonth}/${bsDay}</p>
        <p><strong>Gregorian (AD):</strong> ${adDate.toLocaleDateString('en-US')}</p>
    `;
}

// Swap dates
function swapDates() {
    // In a real implementation, this would swap the conversion direction
    alert('Date conversion direction swapped!');
}

// Initialize Gold Price Tracker
function initGoldPriceTracker() {
    // Mock data - in a real app, this would come from an API
    const goldData = {
        price24k: "Rs. 125,000",
        change24k: "+0.5% (Rs. 600)",
        price22k: "Rs. 118,750",
        change22k: "+0.5% (Rs. 570)",
        silverPrice: "Rs. 1,650",
        silverChange: "+0.3% (Rs. 5)",
        updateTime: new Date().toLocaleTimeString()
    };
    
    // Update UI
    goldPrice24k.textContent = goldData.price24k;
    goldChange24k.textContent = goldData.change24k;
    goldPrice22k.textContent = goldData.price22k;
    goldChange22k.textContent = goldData.change22k;
    silverPrice.textContent = goldData.silverPrice;
    silverChange.textContent = goldData.silverChange;
    document.querySelectorAll('.gold-update-time').forEach(el => {
        el.textContent = goldData.updateTime;
    });
    
    // Initialize chart
    initGoldChart();
    
    // Set up event listeners
    calculateGoldBtn.addEventListener('click', calculateGoldValue);
}

// Initialize gold price chart
function initGoldChart() {
    const ctx = document.getElementById('goldChart').getContext('2d');
    
    // Mock data - in a real app, this would come from an API
    const labels = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Today'];
    const data24k = [124000, 124200, 124500, 124300, 124400, 124700, 125000];
    const data22k = [117800, 118000, 118300, 118100, 118200, 118500, 118750];
    
    if (goldChart) goldChart.destroy();
    
    goldChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: '24K Gold',
                    data: data24k,
                    borderColor: '#FFD700',
                    backgroundColor: 'rgba(255, 215, 0, 0.1)',
                    tension: 0.3,
                    fill: true
                },
                {
                    label: '22K Gold',
                    data: data22k,
                    borderColor: '#D32F2F',
                    backgroundColor: 'rgba(211, 47, 47, 0.1)',
                    tension: 0.3,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: Rs. ${context.raw.toLocaleString()}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return 'Rs. ' + value.toLocaleString();
                        }
                    }
                }
            }
        }
    });
}

// Calculate gold value
function calculateGoldValue() {
    const amount = parseFloat(document.getElementById('gold-amount').value) || 0;
    const unit = document.getElementById('gold-unit').value;
    const type = document.getElementById('gold-type').value;
    
    // Conversion factors
    const tolaToGram = 11.6638;
    const pauToGram = 11.6638 * 0.5;
    const dharniToGram = 11.6638 * 2.5;
    
    // Current prices (from mock data)
    const price24kPerGram = 125000 / tolaToGram;
    const price22kPerGram = 118750 / tolaToGram;
    
    let grams;
    switch (unit) {
        case 'tola': grams = amount * tolaToGram; break;
        case 'gram': grams = amount; break;
        case 'pau': grams = amount * pauToGram; break;
        case 'dharni': grams = amount * dharniToGram; break;
    }
    
    const value = type === '24k' 
        ? grams * price24kPerGram 
        : grams * price22kPerGram;
    
    goldResult.innerHTML = `
        <p><strong>Amount:</strong> ${amount} ${unit}</p>
        <p><strong>Type:</strong> ${type === '24k' ? '24 Karat Gold' : '22 Karat Gold'}</p>
        <p><strong>Current Value:</strong> Rs. ${value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
    `;
}

// Initialize Forex Rates
function initForexRates() {
    fetch('https://www.nrb.org.np/api/forex/v1/')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data && data.data && data.data.payload) {
                const forexData = data.data.payload;
                
                // Find USD and EUR rates
                const usd = forexData.find(currency => currency.currency.iso3 === 'USD');
                const eur = forexData.find(currency => currency.currency.iso3 === 'EUR');
                
                // Update UI
                if (usd) {
                    usdRate.textContent = `Rs. ${usd.buy}`;
                }
                if (eur) {
                    eurRate.textContent = `Rs. ${eur.buy}`;
                }
                
                // Update timestamp if available
                if (data.data.meta) {
                    const updateTime = new Date(data.data.meta.published_at).toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit'
                    });
                    document.querySelector('.forex-update').textContent = `Updated: ${updateTime}`;
                }
            } else {
                throw new Error('Invalid data format from NRB API');
            }
        })
        .catch(error => {
            console.error('Error fetching forex data:', error);
            usdRate.textContent = 'N/A';
            eurRate.textContent = 'N/A';
            document.querySelector('.forex-update').textContent = 'Data unavailable';
        });
}

// Initialize Weather
function initWeather() {
    const apiKey = '55714597e97df7446072b3eddd3b93e0';
    const city = 'Kathmandu';
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const weatherTemp = document.querySelector('.weather-temp');
            const weatherDesc = document.querySelector('.weather-desc');
            const weatherIcon = document.querySelector('.weather-icon');
            
            // Convert temperature to Celsius (already in metric units)
            const temp = Math.round(data.main.temp);
            
            // Get weather description and capitalize first letter
            const description = data.weather[0].description;
            const capitalizedDesc = description.charAt(0).toUpperCase() + description.slice(1);
            
            // Set weather icon
            const iconCode = data.weather[0].icon;
            weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}.png`;
            weatherIcon.alt = description;
            
            // Update DOM
            weatherTemp.innerHTML = `${temp}°C`;
            weatherDesc.textContent = capitalizedDesc;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.querySelector('.weather-temp').textContent = 'N/A';
            document.querySelector('.weather-desc').textContent = 'Weather data unavailable';
        });
}

// Form Submissions
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formMessage = document.getElementById('form-message');
        
        // Simulate form submission
        setTimeout(() => {
            formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
            formMessage.className = 'form-message success';
            contactForm.reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }, 1000);
    });
}

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newsletterMessage = document.getElementById('newsletter-message');
        
        // Simulate form submission
        setTimeout(() => {
            newsletterMessage.textContent = 'Thank you for subscribing to our newsletter!';
            newsletterMessage.className = 'form-message success';
            newsletterForm.reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                newsletterMessage.style.display = 'none';
            }, 5000);
        }, 1000);
    });
}

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initDateConverter();
    initGoldPriceTracker();
    initForexRates();
    initWeather();
    
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
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
