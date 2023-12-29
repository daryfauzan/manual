// Get the target date from the meta tag in the HTML head
const targetDateMeta = document.querySelector('meta[name="target-date"]');
const targetDateString = targetDateMeta.getAttribute('content');
const targetDate = new Date(targetDateString).getTime();

// Get the countdown element
const daysElement = document.querySelector("#days-countdown")
const hoursElement = document.querySelector("#hours-countdown")
const minutesElement = document.querySelector("#minutes-countdown")
const secondsElement = document.querySelector("#seconds-countdown")


const interval = setInterval(function() {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the remaining time
    const distance = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown in the HTML element with id "timer"
    // document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    daysElement.textContent = days
    hoursElement.textContent = hours
    minutesElement.textContent = minutes
    secondsElement.textContent = seconds

    // If the countdown is over, display a message and clear the interval
    if (distance < 0) {
        clearInterval(interval);
        daysElement.textContent = 0
        hoursElement.textContent = 0
        minutesElement.textContent = 0
        secondsElement.textContent = 0
    }
}, 1000); // Update every second