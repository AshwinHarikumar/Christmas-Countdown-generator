document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');
    const greetingElement = document.getElementById('greeting');

    function updateCountdown() {
        const now = new Date();
        const christmas = new Date(now.getFullYear(), 11, 25); // December 25th
        if (now.getMonth() === 11 && now.getDate() > 25) {
            christmas.setFullYear(christmas.getFullYear() + 1);
        }
        const diff = christmas - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    function getRandomGreeting() {
        const greetings = [
            "Merry Christmas!",
            "Happy Holidays!",
            "Season's Greetings!",
            "Joy to the World!",
            "Ho Ho Ho! Merry Christmas!"
        ];
        return greetings[Math.floor(Math.random() * greetings.length)];
    }

    const messageForm = document.getElementById('messageForm');
    const personalMessage = document.getElementById('personalMessage');
    const savedMessage = document.getElementById('savedMessage');

    function saveMessage(event) {
        event.preventDefault();
        const message = personalMessage.value;
        localStorage.setItem('christmasMessage', message);
        displayMessage();
    }

    function displayMessage() {
        const message = localStorage.getItem('christmasMessage');
        if (message) {
            savedMessage.innerHTML = `Your Message: ${message}`;
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
    greetingElement.innerHTML = getRandomGreeting();
    messageForm.addEventListener('submit', saveMessage);
    displayMessage();
});
