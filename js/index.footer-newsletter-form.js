const form = document.getElementById("newsletter-subscription");
form.addEventListener("submit", handleSubmit)

async function handleSubmit(event) {
    event.preventDefault();
    const status = document.getElementById("newsletter-subscription");
    const data = new FormData(event.target);
    // FormData(event.target);
    const response = await fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            Accept: 'application/json'
        }
    })
    if (response.ok) {
        status.innerHTML = "Thanks for your subscription!";
        form.reset()
    } else {
        status.innerHTML = "Error"
    }
}

