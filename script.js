// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle input');
const body = document.body;
const modeText = document.querySelector('.mode-text');

themeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-theme');
    const isDarkTheme = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    modeText.textContent = isDarkTheme ? 'Dark Mode' : 'Light Mode';
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.checked = true;
    modeText.textContent = 'Dark Mode';
} else {
    body.classList.remove('dark-theme');
    themeToggle.checked = false;
    modeText.textContent = 'Light Mode';
}

// Toggle QR Code and Show Screenshot Button
function toggleQR(qrId) {
    const qrCode = document.getElementById(qrId);
    const productId = qrId.split('-')[1];
    const screenshotBtn = document.getElementById(`screenshot-btn-${productId}`);

    if (qrCode.style.display === 'none' || qrCode.style.display === '') {
        qrCode.style.display = 'flex';
        screenshotBtn.style.display = 'block';
    } else {
        qrCode.style.display = 'none';
        screenshotBtn.style.display = 'none';
    }
}

// Send Screenshot and Show Thanks Message
function sendScreenshot(productId) {
    const screenshotBtn = document.getElementById(`screenshot-btn-${productId}`);
    const thanksMessage = document.getElementById(`thanks-${productId}`);

    screenshotBtn.style.display = 'none';
    thanksMessage.style.display = 'block';

    setTimeout(() => {
        thanksMessage.classList.add('fade-out');
        setTimeout(() => {
            thanksMessage.style.display = 'none';
            thanksMessage.classList.remove('fade-out');
        }, 500);
    }, 5000);

    window.open(`https://wa.me/9803282511?text=Here%20is%20the%20screenshot%20of%20the%20payment%20for%20${productId}.%20My%20AnyDesk%20ID%20is%20[Your%20AnyDesk%20ID].%20Please%20proceed%20with%20the%20installation.`, '_blank');
}

// Update Price for Busy21 Software
function updatePrice(productId) {
    const modeSelect = document.getElementById(`${productId}-mode`);
    const priceElement = document.getElementById(`${productId}-price`);
    const selectedPrice = modeSelect.value;
    priceElement.textContent = `Price: Rs ${selectedPrice}`;
}

// Back to Top Button
window.addEventListener('scroll', () => {
    const backToTop = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Clock and Date
function updateClock() {
    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayName = days[now.getDay()];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const dateString = `${dayName}, ${day} ${month} ${year}`;

    clockElement.textContent = timeString;
    dateElement.textContent = dateString;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call

// Greeting Message
function updateGreeting() {
    const greetingElement = document.getElementById('greeting');
    const now = new Date();
    const hour = now.getHours();
    let greeting = '';
    let icon = '';

    if (hour >= 5 && hour < 12) {
        greeting = 'Good Morning';
        icon = '🌅';
    } else if (hour >= 12 && hour < 18) {
        greeting = 'Good Afternoon';
        icon = '🌞';
    } else if (hour >= 18 && hour < 22) {
        greeting = 'Good Evening';
        icon = '🌙';
    } else {
        greeting = 'Good Night';
        icon = '🌌';
    }

    greetingElement.innerHTML = `${icon} ${greeting}`;
}

setInterval(updateGreeting, 60000);
updateGreeting(); // Initial call

// Hide Loader
window.onload = function () {
    document.querySelector('.loader-container').style.display = 'none';
};

// Contact Form Submission
const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "Please wait...";

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";
                result.style.color = "green";
                const paperPlane = document.getElementById('paper-plane');
                paperPlane.style.display = 'block';
                setTimeout(() => {
                    paperPlane.style.display = 'none';
                }, 3000);
                setTimeout(() => {
                    result.classList.add('fade-out');
                    setTimeout(() => {
                        result.style.display = "none";
                        result.classList.remove('fade-out');
                    }, 500);
                }, 5000);
            } else {
                console.log(response);
                result.innerHTML = json.message;
                result.style.color = "red";
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
            result.style.color = "red";
        })
        .then(function () {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});

// Smooth Scroll to Contact Section
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}