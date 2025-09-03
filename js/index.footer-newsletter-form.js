const form = document.getElementById("newsletter-subscription");
const status = document.getElementById("status");
const emailInput = document.getElementById("emailInput");
const button = document.getElementById("subscribeBtn");
const modal = document.getElementById("successModal");
const closeModalBtn = modal.querySelector(".modal-close");
const okBtn = modal.querySelector(".ok-btn");
const closeBtn = modal.querySelector(".modal-close");

// Handle form submit
form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();

    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    status.textContent = "";
    status.style.color = "";

    if (!emailValue) {
        status.style.color = "red";
        status.textContent = "Email is required.";
        emailInput.focus();
        return;
    }
    if (!emailPattern.test(emailValue)) {
        status.style.color = "red";
        status.textContent = "Please enter a valid email address.";
        emailInput.focus();
        return;
    }

    button.disabled = true;

    try {
        const data = new FormData(form);
        // modal.classList.add("show");

        const response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: {Accept: "application/json"}
        });

        if (response.ok) {
            status.style.color = "green";
            // status.textContent = "Thanks for your subscription!";
            form.reset();
            modal.classList.add("show");
        } else {
            status.style.color = "red";
            status.textContent = "Error submitting the form.";
        }
    } catch (error) {
        status.style.color = "red";
        status.textContent = "Network error. Please try again.";
    } finally {
        button.disabled = false;
    }
}

function closeModal() {
    modal.classList.remove("show");
}

// Close on X button
closeBtn.addEventListener("click", closeModal);

// Close on OK button
okBtn.addEventListener("click", closeModal);

// Close when clicking outside modal content
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});