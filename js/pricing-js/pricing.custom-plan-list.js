const response = await fetch("api/pricing-api/custom-plan-list.json");
const costumPlansArr = await response.json();

async function createCostumPlan(plans) {
  const plansList = [];
  for (const plan of plans) {
    plansList.push(`
            <div class="custom__column custom__column${plan.position}}">
    <article class="offer offer--custom">
        <h3 class="offer__title">${plan.title}</h3>
        <p class="offer__price">${plan.price}</p>

        <ul class="offer__features">
            ${plan.features
              .map(
                (feature) => `
                <li class="offer__feature">
                    <img class="offer__feature-icon icon-clipart" src="img/pricing-img/clipart1488163.png" alt="" width="20" height="20" />
                    <img class="offer__feature-icon icon-success" src="img/pricing-img/success.svg" alt="" width="20" height="20" style="display:none;" />
                    ${feature}
                </li>`
              )
              .join("")}
        </ul>
    </article>
</div>
`);
  }
  const costumePlan = document.querySelector(".custom");
  costumePlan.innerHTML = plansList.join("");

  const features = document.querySelectorAll(".offer__feature");
  features.forEach((feature) => {
    feature.addEventListener("click", () => {
      const iconClipart = feature.querySelector(".icon-clipart");
      const iconSuccess = feature.querySelector(".icon-success");
      if (iconClipart.style.display === "none") {
        iconClipart.style.display = "inline";
        iconSuccess.style.display = "none";
      } else {
        iconClipart.style.display = "none";
        iconSuccess.style.display = "inline";
      }
    });
  });
}

createCostumPlan(costumPlansArr);
