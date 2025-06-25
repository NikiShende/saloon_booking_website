document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) => {
        const container = document.getElementById("services-container");
  
        data.services.forEach((service) => {
          const card = document.createElement("div");
          card.className = "service-card";
  
          card.innerHTML = `
            <div class="upper">
              <img src="${service.service_icon}" alt="${service.service_name}" />
            </div>
            <div class="lower">
              <h2>${service.service_name}</h2>
              <p>${service.description}</p>
              <p>Price: ₹${service.price}</p>
            </div>
          `;
  
          container.appendChild(card);
        });
      })
      .catch((err) => console.error("Error loading services:", err));
  });
  