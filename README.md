# Deutsche Bahn Cypress Automation Project 🚆

This project demonstrates end-to-end test automation using **Cypress** for a real-world German web application (Deutsche Bahn).  
It is designed to showcase best practices in UI automation, API testing, and test structure.

## 🔧 Tech Stack
- Cypress
- JavaScript
- Node.js
- GitHub
- REST API testing (Postman concepts)

## 📂 Project Structure
cypress/
├── e2e/
│ ├── bahn.cy.js
│ ├── search.cy.js
│ ├── searchresult.cy.js
│ └── cookie.cy.js
├── fixtures/
│ └── route.json
└── support/
├── commands.js
└── e2e.js



## ✅ Test Coverage
- Cookie consent handling (conditional execution)
- Train search flow
- Search result validation
- Reusable test commands
- Clean test separation

👩‍💻 Author

Neha Jain
Test Automation Engineer

📍 Viernheim, Germany

🔗 LinkedIn: https://www.linkedin.com/in/nehajain859

📌 Note

This project is created for learning, demonstration, and portfolio purposes.
It is intended to reflect real-world QA automation practices used in agile software development teams.

🧠 Key Testing Concepts Applied

1. End-to-End UI Testing

2. Agile-friendly test design

3. Stable selectors & reusable commands

4. Defensive test logic (e.g., conditional cookie handling)

5. Readable and maintainable test cases



## ▶️ How to Run Tests

1️⃣ Install dependencies :
npm install

2️⃣ Open Cypress Test Runner:
npx cypress open

3️⃣ Run tests in headless mode:
npx cypress run





