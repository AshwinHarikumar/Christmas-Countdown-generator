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
            "Ho Ho Ho! Merry Christmas!",
            "Wishing you a Merry Christmas and a Happy New Year!",
            "Warm holiday wishes to you and your loved ones!",
            "May your season be merry and bright!",
            "Spreading holiday cheer to everyone near!",
            "Have yourself a holly jolly Christmas!",
            "Peace, love, and joy this holiday season!",
            "Tidings of comfort and joy!",
            "Wishing you a season filled with magic and wonder!",
            "May the spirit of the season fill your heart with happiness!",
            "Cheers to love, laughter, and festive fun!",
            "May your holidays sparkle with joy and laughter!",
            "Sending love and warm wishes for a magical Christmas!",
            "Let the spirit of Christmas fill your home with peace and joy!",
            "Wishing you a holiday season as wonderful as you are!",
            "Celebrate the season with love, laughter, and good cheer!"

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
            savedMessage.innerHTML = ` ${message}`;
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
    greetingElement.innerHTML = getRandomGreeting();
    messageForm.addEventListener('submit', saveMessage);
    displayMessage();
});
