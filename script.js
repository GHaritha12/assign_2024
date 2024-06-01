document.addEventListener('DOMContentLoaded', function () {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        // Hero Section
        document.querySelector('.headline').textContent = data.hero.headline;
        document.querySelector('.subheadline').textContent = data.hero.subheadline;
        const ctaButtons = document.getElementById('cta-buttons');
        data.hero.ctaButtons.forEach(button => {
          const a = document.createElement('a');
          a.classList.add('cta-button');
          a.href = button.link;
          a.textContent = button.text;
          ctaButtons.appendChild(a);
        });
  
        // Features Section
        const featuresSection = document.getElementById('features-section');
        data.features.forEach(feature => {
          const featureDiv = document.createElement('div');
          featureDiv.classList.add('feature');
          featureDiv.innerHTML = `
            <img src="${feature.icon}" alt="${feature.title}">
            <div class="feature-content">
              <h3 class="feature-title">${feature.title}</h3>
              <p class="feature-description">${feature.description}</p>
            </div>
          `;
          featuresSection.appendChild(featureDiv);
        });
  
        // Testimonials Section
        const testimonialsSection = document.getElementById('testimonials-section');
        data.testimonials.forEach(testimonial => {
          const testimonialDiv = document.createElement('div');
          testimonialDiv.classList.add('testimonial');
          testimonialDiv.innerHTML = `
            <img src="${testimonial.avatar}" alt="${testimonial.name}">
            <div class="testimonial-content">
              <p>"${testimonial.feedback}"</p>
            </div>
          `;
          testimonialsSection.appendChild(testimonialDiv);
        });
  
        // Pricing Section
        const pricingSection = document.getElementById('pricing-section');
        data.pricing.forEach(plan => {
          const planDiv = document.createElement('div');
          planDiv.classList.add('pricing-plan');
          planDiv.innerHTML = `
            <h3 class="pricing-plan-title">${plan.plan}</h3>
            <p class="pricing-plan-price">${plan.price}</p>
            <ul class="pricing-plan-features">
              ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
          `;
          pricingSection.appendChild(planDiv);
        });
      });
  });
  