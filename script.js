// script.js
function calculateBreakdown() {
    const amount = parseFloat(document.getElementById("amount").value);
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // Clear previous results
  
    if (isNaN(amount) || amount < 0) {
      resultDiv.innerHTML = "<p>Please enter a valid positive number.</p>";
      return;
    }
  
    const currency = [
        { name: "$100 bill", value: 100.0, image: "100.jpg" },
        { name: "$50 bill", value: 50.0, image: "50.jpg" },
        { name: "$20 bill", value: 20.0, image: "20.jpg" },
        { name: "$10 bill", value: 10.0, image: "10.jpg" },
        { name: "$5 bill", value: 5.0, image: "5.jpg" },
        { name: "$1 bill", value: 1.0, image: "1.jpg" },
        { name: "Quarter", value: 0.25, image: "quater.jpg" },
        { name: "Dime", value: 0.1, image: "dime.jpg" },
        { name: "Nickel", value: 0.05, image: "nickle.jpg" },
        { name: "Penny", value: 0.01, image: "penny.jpg" },
      ];
  
    let remainingAmount = amount;
  
    currency.forEach((unit) => {
      const count = Math.floor(remainingAmount / unit.value);
      if (count > 0) {
        const container = document.createElement("div");
        container.className = "currency-item";
  
        for (let i = 0; i < count; i++) {
          const img = document.createElement("img");
          img.src = unit.image;
          img.alt = unit.name;
  
          // Set size based on type
          if (unit.type === "bill") {
            img.style.width = "50px";
            img.style.height = "auto";
          } else if (unit.type === "coin") {
            img.style.width = "50px";
            img.style.height = "auto";
          }
  
          img.style.margin = "5px";
          container.appendChild(img);
        }
  
        resultDiv.appendChild(container);
        remainingAmount = (remainingAmount % unit.value).toFixed(2); // Avoid floating-point issues
      }
    });
  }
  