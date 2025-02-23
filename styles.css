/* Reset and Basic Styles */
body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--bg-color);
    color: var(--text-color);
    transition: background-color 0.3s, color 0.3s;
}

:root {
    --bg-color: #f4f4f9;
    --text-color: #333;
    --card-bg: #fff;
    --card-shadow: rgba(0, 0, 0, 0.1);
    --primary-color: #6c63ff;
    --primary-hover: #574fdb;
    --accent-color: #ff6b6b;
    --soft-blue: #a8d8ea;
    --soft-pink: #ff9a9e;
}

.dark-theme {
    --bg-color: #1a1a1a;
    --text-color: #f4f4f9;
    --card-bg: #2a2a2a;
    --card-shadow: rgba(255, 255, 255, 0.1);
    --primary-color: #8a85ff;
    --primary-hover: #6c63ff;
    --accent-color: #ff6b6b;
    --soft-blue: #4a90e2;
    --soft-pink: #ff6b6b;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}

/* Loader Section */
.loader-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.loader svg {
    width: 100px;
    height: 100px;
    margin: 20px;
    display: inline-block;
}

.loader circle, .loader rect, .loader polygon {
    fill: none;
    stroke: var(--primary-color);
    stroke-width: 5;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 150;
    stroke-dashoffset: 150;
    animation: draw 2s infinite ease-in-out;
}

@keyframes draw {
    to {
        stroke-dashoffset: 0;
    }
}

/* Navbar */
nav {
    position: sticky;
    top: 0;
    z-index: 1000;
    background-color: var(--card-bg);
    color: var(--text-color);
    padding: 1rem 0;
    transition: background-color 0.3s, box-shadow 0.3s;
}

nav.scrolled {
    background-color: var(--card-bg);
    box-shadow: 0 2px 10px var(--card-shadow);
}

nav .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav .logo {
    font-size: 1.5rem;
    font-weight: 600;
    text-decoration: none;
    color: var(--text-color);
}

nav .nav-links {
    list-style: none;
    display: flex;
    gap: 1rem;
    align-items: center;
}

nav .nav-links a {
    color: var(--text-color);
    text-decoration: none;
    font-weight: 400;
    transition: color 0.3s;
}

nav .nav-links a:hover {
    color: var(--primary-color);
}

/* Dropdown Menu */
.dropdown {
    position: relative;
}

.dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: var(--card-bg);
    box-shadow: 0 4px 8px var(--card-shadow);
    border-radius: 5px;
    padding: 0.5rem 0;
    z-index: 10;
}

.dropdown-menu li {
    padding: 0.5rem 1rem;
}

.dropdown-menu a {
    color: var(--text-color);
    text-decoration: none;
    display: block;
}

.dropdown-menu a:hover {
    color: var(--primary-color);
}

.dropdown:hover .dropdown-menu {
    display: block;
}

/* Theme Toggle */
.theme-toggle-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.theme-toggle {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
}

.theme-toggle input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 20px;
}

.slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
}

input:checked + .slider {
    background-color: var(--primary-color);
}

input:checked + .slider:before {
    transform: translateX(20px);
}

.mode-text {
    font-size: 0.8rem;
    color: var(--text-color);
}

/* Clock and Date */
.clock-date {
    position: absolute;
    top: 20px;
    left: 20px;
    color: #fff;
    font-size: 1.2rem;
    z-index: 2;
}

#clock {
    font-weight: 600;
}

#date {
    font-size: 1rem;
    opacity: 0.8;
}

/* Greeting Message */
#greeting {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

/* Hero Section */
.hero {
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    overflow: hidden;
    background: linear-gradient(135deg, #6e45e2, #88d3ce);
}

/* Bubble Animation */
@keyframes bubble {
    0% {
        transform: translateY(0) scale(0);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: translateY(-1000px) scale(2);
        opacity: 0;
    }
}

.bubbles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.bubbles li {
    position: absolute;
    list-style: none;
    display: block;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    animation: bubble 15s linear infinite;
    bottom: -150px;
}

.bubbles li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 2s;
    background: rgba(147, 112, 219, 0.4);
}

.bubbles li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 1s;
    animation-duration: 12s;
    background: rgba(147, 112, 219, 0.3);
}

.bubbles li:nth-child(3) {
    left: 70%;
    width: 60px;
    height: 60px;
    animation-delay: 4s;
    background: rgba(106, 90, 205, 0.5);
}

.bubbles li:nth-child(4) {
    left: 40%;
    width: 40px;
    height: 40px;
    animation-delay: 0s;
    animation-duration: 18s;
    background: rgba(123, 104, 238, 0.4);
}

.bubbles li:nth-child(5) {
    left: 65%;
    width: 30px;
    height: 30px;
    animation-delay: 0s;
    background: rgba(147, 112, 219, 0.3);
}

.bubbles li:nth-child(6) {
    left: 75%;
    width: 100px;
    height: 100px;
    animation-delay: 3s;
    background: rgba(106, 90, 205, 0.5);
}

.bubbles li:nth-child(7) {
    left: 35%;
    width: 50px;
    height: 50px;
    animation-delay: 7s;
    background: rgba(123, 104, 238, 0.4);
}

.bubbles li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
    background: rgba(147, 112, 219, 0.3);
}

.bubbles li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
    background: rgba(106, 90, 205, 0.5);
}

.bubbles li:nth-child(10) {
    left: 85%;
    width: 90px;
    height: 90px;
    animation-delay: 0s;
    animation-duration: 11s;
    background: rgba(123, 104, 238, 0.4);
}

.hero-text h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    animation: fadeInDown 1s ease-in-out;
}

.hero-text p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    animation: fadeInUp 1s ease-in-out;
}

.hero-text button {
    padding: 0.8rem 2rem;
    background-color: #fff;
    color: var(--primary-color);
    border: none;
    cursor: pointer;
    font-size: 1rem;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
    animation: fadeInUp 1.5s ease-in-out;
}

.hero-text button:hover {
    background-color: var(--primary-hover);
    color: #fff;
}

@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Services Section */
.services {
    padding: 4rem 0;
}

.services h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    animation: fadeIn 1s ease-in-out;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.product-card {
    position: relative;
    background: var(--card-bg);
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
}

.product-card::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #6e45e2, #88d3ce);
    z-index: -1;
    border-radius: 12px;
    transition: opacity 0.3s;
    opacity: 0;
}

.product-card:hover::before {
    opacity: 1;
}

.product-image-wrapper {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
}

.product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
}

.product-card:hover .product-image {
    transform: scale(1.1);
}

.qr-code {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 1rem;
    border-radius: 10px;
    z-index: 10;
}

.qr-code img {
    width: 150px;
    height: 150px;
}

.screenshot-message {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 1rem;
    border-radius: 10px;
    z-index: 10;
    animation: fadeIn 0.5s ease-in-out;
}

.screenshot-message p {
    margin: 0;
    font-size: 1rem;
    cursor: pointer;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.product-info {
    padding: 1.5rem;
    text-align: center;
}

.product-info h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.product-info p {
    font-size: 1rem;
    margin-bottom: 1rem;
}

.mode-select {
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    background-color: var(--card-bg);
    color: var(--text-color);
}

.price {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--primary-color);
}

.purchase-btn {
    padding: 0.8rem 2rem;
    background-color: var(--primary-color);
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.purchase-btn:hover {
    background-color: var(--primary-hover);
}

.purchase-btn:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

/* Contact Section */
.contact {
    background-color: var(--card-bg);
    color: var(--text-color);
    padding: 4rem 0;
}

.contact h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    animation: fadeIn 1s ease-in-out;
}

.contact-content {
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
}

.contact-info {
    flex: 1;
}

.contact-info ul {
    list-style: none;
    padding: 0;
}

.contact-info ul li {
    margin-bottom: 1rem;
    font-size: 1.2rem;
}

.contact-info ul li a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color 0.3s;
}

.contact-info ul li a:hover {
    color: var(--accent-color);
}

.contact-info ul li i {
    margin-right: 0.5rem;
}

.contact-form {
    flex: 1;
    background-color: var(--card-bg);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px var(--card-shadow);
}

.contact-form input, .contact-form textarea {
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
}

.contact-form textarea {
    resize: vertical;
}

.contact-form button {
    padding: 0.8rem 2rem;
    background-color: var(--primary-color);
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.contact-form button:hover {
    background-color: var(--primary-hover);
}

/* Footer */
footer {
    background-color: var(--card-bg);
    color: var(--text-color);
    text-align: center;
    padding: 1rem 0;
    margin-top: 2rem;
    box-shadow: 0 -2px 10px var(--card-shadow);
}

footer p {
    margin: 0;
    font-size: 1rem;
}

.social-media {
    margin-top: 1rem;
}

.social-media a {
    color: var(--text-color);
    margin: 0 0.5rem;
    font-size: 1.5rem;
    transition: color 0.3s;
}

.social-media a:hover {
    color: var(--primary-color);
}

/* Back to Top Button */
.back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: var(--primary-color);
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 24px;
    cursor: pointer;
    display: none;
    transition: background-color 0.3s;
}

.back-to-top:hover {
    background-color: var(--primary-hover);
}

/* Screenshot Button */
.screenshot-btn {
    display: none;
    width: 100%;
    padding: 0.8rem;
    margin-top: 1rem;
    background-color: var(--accent-color);
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 0.9rem;
    border-radius: 5px;
    transition: background-color 0.3s;
    z-index: 5;
    text-align: center;
}

.screenshot-btn:hover {
    background-color: #ff4b4b;
}

/* Thanks Message */
.thanks-message {
    display: none;
    text-align: center;
    color: var(--primary-color);
    font-size: 1rem;
    margin-top: 0.5rem;
    animation: fadeIn 0.5s ease-in-out;
}

/* Paper Plane Animation */
.paper-plane {
    position: fixed;
    bottom: 20px;
    right: 20px;
    font-size: 2rem;
    color: var(--primary-color);
    animation: fly 2s ease-in-out forwards;
    display: none;
}

@keyframes fly {
    0% {
        transform: translateY(0) translateX(0);
        opacity: 1;
    }
    100% {
        transform: translateY(-100vh) translateX(100vw);
        opacity: 0;
    }
}

/* Fade Out Animation */
@keyframes fadeOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

.fade-out {
    animation: fadeOut 0.5s ease-in-out forwards;
}

/* Reviews Section */
.reviews {
    padding: 4rem 0;
    background-color: var(--card-bg);
    color: var(--text-color);
}

.reviews h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    animation: fadeIn 1s ease-in-out;
}

.review-form {
    background-color: var(--card-bg);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px var(--card-shadow);
    margin-bottom: 2rem;
}

.review-form h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.review-form input, .review-form textarea {
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    background-color: var(--card-bg);
    color: var(--text-color);
}

.review-form textarea {
    resize: vertical;
}

.review-form button {
    padding: 0.8rem 2rem;
    background-color: var(--primary-color);
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.review-form button:hover {
    background-color: var(--primary-hover);
}

.reviews-list {
    background-color: var(--card-bg);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px var(--card-shadow);
    max-height: 500px;
    overflow-y: auto;
}

.reviews-list h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.review-card {
    background-color: var(--card-bg);
    padding: 1rem;
    border-radius: 5px;
    margin-bottom: 1rem;
    box-shadow: 0 2px 4px var(--card-shadow);
    border: 1px solid #ddd;
}

.review-card h4 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: var(--primary-color);
}

.review-card p {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: var(--text-color);
}

.review-card .emoji-reactions {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
}

.review-card .emoji-reactions span {
    font-size: 1.2rem;
    cursor: pointer;
    transition: transform 0.2s;
}

.review-card .emoji-reactions span:hover {
    transform: scale(1.2);
}

.review-card .review-actions {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.review-card .review-actions button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    transition: transform 0.2s;
}

.review-card .review-actions button:hover {
    transform: scale(1.2);
}

.review-card .review-actions .like-count {
    font-size: 0.9rem;
    color: var(--text-color);
}

.review-card .review-reply {
    margin-top: 1rem;
    padding-left: 1rem;
    border-left: 2px solid var(--primary-color);
}

.review-card .review-reply p {
    font-size: 0.9rem;
    color: var(--text-color);
}
