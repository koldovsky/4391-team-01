const response = await fetch("api/pricing-api/pricing-plan-list.json");
const planListArr = await response.json();

async function createPricingPlans(plans) {
  const plansList = [];
  for (const plan of plans) {
    plansList.push(`
    <section class="pricing__plan">
      <p><span class="pricing__price${plan.priceColor}">${
      plan.price
    }</span><span class="pricing__price-muted">/ per month</span></p>
      <h2 class="pricing__name">${plan.planName}</h2>
      <p class="pricing__description">${plan.description}</p>
      <ul class="pricing__features">
        ${plan.features
          .map((feature) => `<li class="pricing__feature">${feature}</li>`)
          .join("")}
      </ul>
      <a class="pricing__btn" href="#">${plan.button}</a>
    </section>`);
  }
  const pricingPlanList = document.querySelector(".pricing__list");
  pricingPlanList.innerHTML = plansList.join("");
}
createPricingPlans(planListArr);
