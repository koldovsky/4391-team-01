const plansArr = [
    {
        "price": 200,
        // priceColor: ,
        "planName": "Basic Plan",
        "description": "Perfect for getting started with the cloud.",
        "features": [
            "10 GB of cloud storage",
            "Basic cloud functions access",
            "24 / 7 email support",
            "Up to 20 users",
            "Collaboration features"
        ],
        "button": "Select Plan"
    },
    {
        "price": 500,
        "planName": "Premium Plan",
        "description": "For those who need more capacities.",
        "features": [
            "50 GB of cloud storage",
            "Pro cloud functions access",
            "24 / 7 email support",
            "Up to 50 users",
            "Daily Backups"
        ],
        "button": "Select Plan"
    },
    {
        "price": 800,
        "planName": "Enterprise Plan",
        "description": "For big corporations and high loads.",
        "features": [
            "150 GB of cloud storage",
            "Basic cloud functions access",
            "Premium support",
            "Up to 200 users",
            "Daily Backups"
        ],
        "button": "Select Plan"
    }
]
function createPricingPlans(plans) {
    const plansList = [];
    for (const plan of plans) {
        plansList.push(`
    <section class="pricing__plan">
      <p><span class="pricing__price">${plan.price}</span><span class="pricing__price-muted">/ per month</span></p>
      <h2 class="pricing__name">${plan.planName}</h2>
      <p class="pricing__description">${plan.description}</p>
      <ul class="pricing__features">
        ${plan.features.map(feature => `<li class="pricing__feature">${feature}</li>`).join('')}
      </ul>
      <a class="pricing__btn" href="#">${plan.button}</a>
    </section>`);
    }
    const pricingPlanList = document.querySelector('.pricing__list');
    pricingPlanList.innerHTML = plansList.join('');
}
createPricingPlans(plansArr);
