const form = document.getElementById("newsletter-subscription");
form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();

    const status = document.getElementById("status"); // Use a dedicated status div
    const emailInput = document.getElementById("emailInput");
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex

    // Email validation
    if (!emailValue) {
        status.textContent = "Email is required.";
        emailInput.focus();
        return;
    }

    if (!emailPattern.test(emailValue)) {
        status.textContent = "Please enter a valid email address.";
        emailInput.focus();
        return;
    }

    status.textContent = ""; // Clear previous error

    const data = new FormData(event.target);

    try {
        const response = await fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                Accept: "application/json"
            }
        });

        if (response.ok) {
            status.style.color = "green";
            status.innerHTML = "Thanks for your subscription!";
            form.reset();
        } else {
            status.style.color = "red";
            status.innerHTML = "Error submitting the form.";
        }
    } catch (error) {
        status.style.color = "red";
        status.innerHTML = "Network error. Please try again.";
    }
}

