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
        // Show QR Code
        qrCode.style.display = 'flex';
        screenshotBtn.style.display = 'block';
    } else {
        // Hide QR Code
        qrCode.style.display = 'none';
        screenshotBtn.style.display = 'none';
    }
}

// Send Screenshot and Show Thanks Message
function sendScreenshot(productId) {
    const screenshotBtn = document.getElementById(`screenshot-btn-${productId}`);
    const thanksMessage = document.getElementById(`thanks-${productId}`);

    // Hide Screenshot Button and Show Thanks Message
    screenshotBtn.style.display = 'none';
    thanksMessage.style.display = 'block';

    // Hide Thanks Message after 5 seconds with fade-out animation
    setTimeout(() => {
        thanksMessage.classList.add('fade-out');
        setTimeout(() => {
            thanksMessage.style.display = 'none';
            thanksMessage.classList.remove('fade-out');
        }, 500); // Fade-out duration
    }, 5000); // Display duration

    // Redirect to WhatsApp
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

    // Format time (HH:MM:SS)
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Format date (Day, DD Month YYYY)
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayName = days[now.getDay()];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const dateString = `${dayName}, ${day} ${month} ${year}`;

    // Update elements
    clockElement.textContent = timeString;
    dateElement.textContent = dateString;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call

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
                // Show paper plane animation
                const paperPlane = document.getElementById('paper-plane');
                paperPlane.style.display = 'block';
                setTimeout(() => {
                    paperPlane.style.display = 'none';
                }, 3000); // Hide after 3 seconds
                // Fade out success message after 5 seconds
                setTimeout(() => {
                    result.classList.add('fade-out');
                    setTimeout(() => {
                        result.style.display = "none";
                        result.classList.remove('fade-out');
                    }, 500); // Fade-out duration
                }, 5000); // Display duration
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

// Greeting Message
function updateGreeting() {
    const greetingElement = document.getElementById('greeting');
    const now = new Date();
    const hour = now.getHours();
    let greeting = '';
    let icon = '';
    let color = '';

    if (hour >= 5 && hour < 12) {
        greeting = 'Good Morning';
        icon = '☀️';
        color = '#FFD700'; // Gold
    } else if (hour >= 12 && hour < 18) {
        greeting = 'Good Afternoon';
        icon = '🌤️';
        color = '#FFA500'; // Orange
    } else if (hour >= 18 && hour < 22) {
        greeting = 'Good Evening';
        icon = '🌙';
        color = '#FF6347'; // Tomato
    } else {
        greeting = 'Good Night';
        icon = '🌌';
        color = '#1E90FF'; // Dodger Blue
    }

    greetingElement.innerHTML = `${icon} ${greeting}`;
    greetingElement.style.color = color;
}

// Update greeting every minute
setInterval(updateGreeting, 60000);
updateGreeting(); // Initial call

// PDF to Image Converter
document.getElementById('convertPdfToImage').addEventListener('click', function () {
    const pdfInput = document.getElementById('pdfInput');
    const resultDiv = document.getElementById('pdfToImageResult');
    const downloadBtn = document.getElementById('downloadPdfToImage');
    const downloadMessage = document.getElementById('pdfToImageDownloadMessage');

    if (pdfInput.files.length === 0) {
        alert('Please select a PDF file.');
        return;
    }

    const file = pdfInput.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const pdfData = e.target.result;

        // Load the PDF using pdf.js
        pdfjsLib.getDocument({ data: pdfData }).promise.then(function (pdfDoc) {
            // Get the first page
            pdfDoc.getPage(1).then(function (page) {
                const viewport = page.getViewport({ scale: 1.5 });
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                // Render the page on the canvas
                const renderContext = {
                    canvasContext: context,
                    viewport: viewport,
                };
                page.render(renderContext).promise.then(function () {
                    // Show result and download button
                    resultDiv.innerHTML = `<p>PDF is ready to be converted to an image!</p>`;
                    downloadBtn.style.display = 'block';

                    // Download button click event
                    downloadBtn.addEventListener('click', function () {
                        downloadMessage.textContent = 'Downloading...';
                        downloadMessage.style.display = 'block';

                        // Convert canvas to image and download
                        canvas.toBlob(function (blob) {
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = 'converted-image.png';
                            a.click();
                            URL.revokeObjectURL(url);

                            // Show thank you message
                            downloadMessage.textContent = 'Download complete!';
                            setTimeout(() => {
                                downloadMessage.style.display = 'none';

                                const thankYouMessage = document.getElementById('thankYouMessage');
                                thankYouMessage.style.display = 'block';
                                setTimeout(() => {
                                    thankYouMessage.style.display = 'none';
                                }, 5000); // Hide thank you message after 5 seconds
                            }, 1000); // Simulate download completion
                        }, 'image/png');
                    });
                });
            });
        });
    };

    reader.readAsArrayBuffer(file);
});

// Image to PDF Converter
document.getElementById('convertImageToPdf').addEventListener('click', async function () {
    const imageInput = document.getElementById('imageInput');
    const resultDiv = document.getElementById('imageToPdfResult');
    const downloadBtn = document.getElementById('downloadImageToPdf');
    const downloadMessage = document.getElementById('imageToPdfDownloadMessage');

    if (imageInput.files.length === 0) {
        alert('Please select one or more images.');
        return;
    }

    const files = imageInput.files;
    const pdfDoc = await PDFLib.PDFDocument.create();

    for (const file of files) {
        const reader = new FileReader();
        reader.onload = async function (e) {
            const img = new Image();
            img.src = e.target.result;

            img.onload = async function () {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const context = canvas.getContext('2d');
                context.drawImage(img, 0, 0);

                const imageData = canvas.toDataURL('image/jpeg');
                const image = await pdfDoc.embedJpg(imageData);
                const page = pdfDoc.addPage([image.width, image.height]);
                page.drawImage(image, {
                    x: 0,
                    y: 0,
                    width: image.width,
                    height: image.height,
                });
            };
        };
        reader.readAsDataURL(file);
    }

    // Show result and download button
    resultDiv.innerHTML = `<p>Images are ready to be converted to a PDF!</p>`;
    downloadBtn.style.display = 'block';

    // Download button click event
    downloadBtn.addEventListener('click', async function () {
        downloadMessage.textContent = 'Downloading...';
        downloadMessage.style.display = 'block';

        // Save the PDF
        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'converted-pdf.pdf';
        a.click();
        URL.revokeObjectURL(url);

        // Show thank you message
        downloadMessage.textContent = 'Download complete!';
        setTimeout(() => {
            downloadMessage.style.display = 'none';

            const thankYouMessage = document.getElementById('thankYouMessage');
            thankYouMessage.style.display = 'block';
            setTimeout(() => {
                thankYouMessage.style.display = 'none';
            }, 5000); // Hide thank you message after 5 seconds
        }, 1000); // Simulate download completion
    });
});

// VAT Calculator Logic
const vatRate = 0.13; // Nepal VAT rate is 13%

function calculateVat(amount, type) {
    let resultText = '';

    if (type === 'addVat') {
        // Calculate VAT from amount without VAT
        const vat = amount * vatRate;
        const totalAmount = amount + vat;
        resultText = `
            <p>Amount Without VAT: Rs ${amount.toFixed(2)}</p>
            <p>VAT (13%): Rs ${vat.toFixed(2)}</p>
            <p>Total Amount With VAT: Rs ${totalAmount.toFixed(2)}</p>
        `;
    } else if (type === 'subtractVat') {
        // Calculate VAT from amount with VAT included
        const amountWithoutVat = amount / (1 + vatRate);
        const vat = amount - amountWithoutVat;
        resultText = `
            <p>Amount With VAT: Rs ${amount.toFixed(2)}</p>
            <p>VAT (13%): Rs ${vat.toFixed(2)}</p>
            <p>Amount Without VAT: Rs ${amountWithoutVat.toFixed(2)}</p>
        `;
    }

    // Display the result
    document.getElementById('vatResult').innerHTML = resultText;
}

// Event Listeners for VAT Buttons
document.getElementById('addVat').addEventListener('click', function () {
    const amount = parseFloat(document.getElementById('vatAmount').value);
    if (isNaN(amount)) {
        alert('Please enter a valid amount.');
        return;
    }
    calculateVat(amount, 'addVat');
});

document.getElementById('subtractVat').addEventListener('click', function () {
    const amount = parseFloat(document.getElementById('vatAmount').value);
    if (isNaN(amount)) {
        alert('Please enter a valid amount.');
        return;
    }
    calculateVat(amount, 'subtractVat');
});