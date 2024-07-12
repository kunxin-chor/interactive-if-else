const questions = [
  {
    id: 1,
    description: "Determine if a person can vote given their age.",
    variables: {
      age: 20
    },
    expectedOutcomes: `Expected outcomes:
- If the person is 18 or older, they can vote.
- If the person is under 18, they cannot vote.`,
    codeTemplate: [
      "function solution({ age }) {",
      "  if (",
      "|",
      "  ) {",
      '    console.log("You can vote!");',
      "  } else {",
      '    console.log("You cannot vote yet.");',
      "  }",
      "}"
    ]
  },
  {
    id: 2,
    description: "Check if a number is positive, negative, or zero.",
    variables: {
      number: -5
    },
    expectedOutcomes: `Expected outcomes:
- If the number is greater than 0, it's positive.
- If the number is less than 0, it's negative.
- If the number is 0, it's zero.`,
    codeTemplate: [
      "function solution({ number }) {",
      "  if (",
      "|",
      "  ) {",
      '    console.log("The number is positive.");',
      "  } else if (",
      "|",
      "  ) {",
      '    console.log("The number is negative.");',
      "  } else {",
      '    console.log("The number is zero.");',
      "  }",
      "}"
    ]
  },
  {
    id: 3,
    description: "Determine if a year is a leap year.",
    variables: {
      year: 2024
    },
    expectedOutcomes: `Expected outcomes:
- If the year is divisible by 4 but not by 100, it's a leap year.
- If the year is divisible by 100 and also by 400, it's a leap year.
- Otherwise, it's not a leap year.`,
    codeTemplate: [
      "function solution({ year }) {",
      "  if (",
      "|",
      "  ) {",
      '    console.log("It\'s a leap year.");',
      "  } else {",
      '    console.log("It\'s not a leap year.");',
      "  }",
      "}"
    ]
  },
  {
    id: 4,
    description: "Categorize a person's BMI (Body Mass Index) given their weight in kg and height in meters.",
    variables: {
      weight: 70,
      height: 1.75
    },
    expectedOutcomes: `Expected outcomes:
- If BMI < 18.5, it's "Underweight"
- If 18.5 <= BMI < 25, it's "Normal weight"
- If 25 <= BMI < 30, it's "Overweight"
- If BMI >= 30, it's "Obese"
Note: BMI = weight / (height * height)`,
    codeTemplate: [
      "function solution({ weight, height }) {",
      "  const bmi = weight / (height * height);",
      "  if (",
      "|",
      "  ) {",
      '    console.log("Underweight");',
      "  } else if (",
      "|",
      "  ) {",
      '    console.log("Normal weight");',
      "  } else if (",
      "|",
      "  ) {",
      '    console.log("Overweight");',
      "  } else {",
      '    console.log("Obese");',
      "  }",
      "}"
    ]
  },
  {
    id: 5,
    description: "Determine the type of triangle based on the lengths of its sides.",
    variables: {
      side1: 3,
      side2: 4,
      side3: 5
    },
    expectedOutcomes: `Expected outcomes:
- If all sides are equal, it's an "Equilateral triangle"
- If two sides are equal, it's an "Isosceles triangle"
- If no sides are equal, it's a "Scalene triangle"
- If the sum of any two sides is not greater than the third side, it's "Not a triangle"`,
    codeTemplate: [
      "function solution({ side1, side2, side3 }) {",
      "  if (",
      "|",
      "  ) {",
      '    console.log("Not a triangle");',
      "  } else if (",
      "|",
      "  ) {",
      '    console.log("Equilateral triangle");',
      "  } else if (",
      "|",
      "  ) {",
      '    console.log("Isosceles triangle");',
      "  } else {",
      '    console.log("Scalene triangle");',
      "  }",
      "}"
    ]
  },
  {
    id: 6,
    description: "Determine if a student passes or fails based on their grades in three subjects.",
    variables: {
      math: 75,
      science: 68,
      english: 80
    },
    expectedOutcomes: `Expected outcomes:
- If the average of all subjects is 60 or above, and no subject is below 50, the student passes.
- Otherwise, the student fails.`,
    codeTemplate: [
      "function solution({ math, science, english }) {",
      "  const average = (math + science + english) / 3;",
      "  if (",
      "|",
      "  ) {",
      '    console.log("Student passes");',
      "  } else {",
      '    console.log("Student fails");',
      "  }",
      "}"
    ]
  },
  {
    id: 7,
    description: "Determine the shipping cost based on the order total and destination.",
    variables: {
      orderTotal: 120,
      destination: "USA"
    },
    expectedOutcomes: `Expected outcomes:
- If the destination is "USA":
  - Free shipping for orders $100 or more
  - $10 shipping for orders less than $100
- If the destination is "Canada":
  - Free shipping for orders $150 or more
  - $15 shipping for orders less than $150
- For all other destinations:
  - $25 flat rate shipping`,
    codeTemplate: [
      "function solution({ orderTotal, destination }) {",
      "  let shippingCost;",
      "  if (",
      "|",
      "  ) {",
      "    // USA shipping logic",
      "  } else if (",
      "|",
      "  ) {",
      "    // Canada shipping logic",
      "  } else {",
      "    // Other destinations",
      "  }",
      '  console.log(`Shipping cost: $${shippingCost}`);',
      "}"
    ]
  },
  {
    id: 8,
    description: "Determine if a person can buy a HDB flat in Singapore based on their citizenship status, marital status, and age.",
    variables: {
      isCitizenOrPR: true,
      isMarried: false,
      age: 32
    },
    expectedOutcomes: `Expected outcomes:
- A person can buy a HDB flat if they are:
  - A citizen or permanent resident (PR) of Singapore, AND
  - Either married OR above the age of 35
- Otherwise, they cannot buy a HDB flat.`,
    codeTemplate: [
      "function solution({ isCitizenOrPR, isMarried, age }) {",
      "  if (",
      "|",
      "  ) {",
      '    console.log("You can buy a HDB flat");',
      "  } else {",
      '    console.log("You cannot buy a HDB flat");',
      "  }",
      "}"
    ]
  },
  {
    id: 9,
    description: "Determine the tax bracket and calculate the tax amount based on a person's income.",
    variables: {
      income: 75000
    },
    expectedOutcomes: `Expected outcomes:
- Income up to $50,000: 10% tax
- Income $50,001 to $100,000: 20% tax on the amount over $50,000
- Income over $100,000: $10,000 + 30% tax on the amount over $100,000`,
    codeTemplate: [
      "function solution({ income }) {",
      "  let taxAmount;",
      "  if (",
      "|",
      "  ) {",
      "    // Calculate tax for income up to $50,000",
      "  } else if (",
      "|",
      "  ) {",
      "    // Calculate tax for income $50,001 to $100,000",
      "  } else {",
      "    // Calculate tax for income over $100,000",
      "  }",
      '  console.log(`Tax amount: $${taxAmount.toFixed(2)}`);',
      "}"
    ]
  },
  {
    id: 10,
    description: "Determine the grade of a student based on their score and attendance.",
    variables: {
      score: 85,
      attendancePercentage: 92
    },
    expectedOutcomes: `Expected outcomes:
- Grade A: Score 90-100 and attendance >= 90%
- Grade B: Score 80-89 and attendance >= 80%
- Grade C: Score 70-79 and attendance >= 70%
- Grade D: Score 60-69 and attendance >= 60%
- Grade F: Score below 60 or attendance below required percentage for their score range`,
    codeTemplate: [
      "function solution({ score, attendancePercentage }) {",
      "  let grade;",
      "  if (",
      "|",
      "  ) {",
      "    grade = 'A';",
      "  } else if (",
      "|",
      "  ) {",
      "    grade = 'B';",
      "  } else if (",
      "|",
      "  ) {",
      "    grade = 'C';",
      "  } else if (",
      "|",
      "  ) {",
      "    grade = 'D';",
      "  } else {",
      "    grade = 'F';",
      "  }",
      '  console.log(`Student\'s grade: ${grade}`);',
      "}"
    ]
  },
  {
    id: 11,
    description: "Determine the type of credit card a customer is eligible for based on their credit score and annual income.",
    variables: {
      creditScore: 720,
      annualIncome: 60000
    },
    expectedOutcomes: `Expected outcomes:
- Platinum Card: Credit score 750+ and annual income $100,000+
- Gold Card: Credit score 700-749 and annual income $50,000-$99,999
- Silver Card: Credit score 650-699 and annual income $30,000-$49,999
- Basic Card: Credit score 600-649 and annual income $20,000-$29,999
- Not Eligible: Credit score below 600 or annual income below $20,000`,
    codeTemplate: [
      "function solution({ creditScore, annualIncome }) {",
      "  let cardType;",
      "  if (",
      "|",
      "  ) {",
      "    cardType = 'Platinum Card';",
      "  } else if (",
      "|",
      "  ) {",
      "    cardType = 'Gold Card';",
      "  } else if (",
      "|",
      "  ) {",
      "    cardType = 'Silver Card';",
      "  } else if (",
      "|",
      "  ) {",
      "    cardType = 'Basic Card';",
      "  } else {",
      "    cardType = 'Not Eligible';",
      "  }",
      '  console.log(`Customer is eligible for: ${cardType}`);',
      "}"
    ]
  },
  {
    id: 12,
    description: "Determine the appropriate vehicle for a delivery based on the package weight, dimensions, and delivery distance.",
    variables: {
      weight: 500,
      length: 100,
      width: 50,
      height: 30,
      distance: 150
    },
    expectedOutcomes: `Expected outcomes:
- Motorcycle: Weight <= 50kg, max dimension <= 60cm, distance <= 30km
- Car: Weight <= 200kg, max dimension <= 120cm, distance <= 100km
- Van: Weight <= 1000kg, max dimension <= 300cm, distance <= 300km
- Truck: For all other cases`,
    codeTemplate: [
      "function solution({ weight, length, width, height, distance }) {",
      "  const maxDimension = Math.max(length, width, height);",
      "  let vehicle;",
      "  if (",
      "|",
      "  ) {",
      "    vehicle = 'Motorcycle';",
      "  } else if (",
      "|",
      "  ) {",
      "    vehicle = 'Car';",
      "  } else if (",
      "|",
      "  ) {",
      "    vehicle = 'Van';",
      "  } else {",
      "    vehicle = 'Truck';",
      "  }",
      '  console.log(`Appropriate vehicle for delivery: ${vehicle}`);',
      "}"
    ]
  },
  {
    id: 13,
    description: "Determine the risk level of an investment based on the investor's age, investment amount, and chosen stock volatility.",
    variables: {
      age: 35,
      investmentAmount: 50000,
      stockVolatility: "medium"
    },
    expectedOutcomes: `Expected outcomes:
- Low Risk: Age 60+, or investment < $10,000 and low volatility
- Medium Risk: Age 40-59 and investment $10,000-$50,000 and medium volatility
- High Risk: Age < 40 and investment > $50,000, or high volatility
- Very High Risk: Age < 30 and investment > $100,000 and high volatility`,
    codeTemplate: [
      "function solution({ age, investmentAmount, stockVolatility }) {",
      "  let riskLevel;",
      "  if (",
      "|",
      "  ) {",
      "    riskLevel = 'Low Risk';",
      "  } else if (",
      "|",
      "  ) {",
      "    riskLevel = 'Medium Risk';",
      "  } else if (",
      "|",
      "  ) {",
      "    riskLevel = 'High Risk';",
      "  } else if (",
      "|",
      "  ) {",
      "    riskLevel = 'Very High Risk';",
      "  } else {",
      "    riskLevel = 'Medium Risk';",
      "  }",
      '  console.log(`Investment risk level: ${riskLevel}`);',
      "}"
    ]
  },
  {
    id: 14,
    description: "Determine the appropriate medical treatment for a patient based on their symptoms, temperature, and pre-existing conditions.",
    variables: {
      hasHeadache: true,
      hasFever: true,
      temperature: 38.5,
      hasAllergies: false,
      isPregnant: false
    },
    expectedOutcomes: `Expected outcomes:
- Emergency Care: Temperature > 40°C
- Urgent Care: Temperature 38-40°C and (headache or fever)
- Allergy Medication: Has allergies and no fever
- Acetaminophen: Headache or fever, not pregnant, no allergies
- Rest and Fluids: All other cases`,
    codeTemplate: [
      "function solution({ hasHeadache, hasFever, temperature, hasAllergies, isPregnant }) {",
      "  let treatment;",
      "  if (",
      "|",
      "  ) {",
      "    treatment = 'Emergency Care';",
      "  } else if (",
      "|",
      "  ) {",
      "    treatment = 'Urgent Care';",
      "  } else if (",
      "|",
      "  ) {",
      "    treatment = 'Allergy Medication';",
      "  } else if (",
      "|",
      "  ) {",
      "    treatment = 'Acetaminophen';",
      "  } else {",
      "    treatment = 'Rest and Fluids';",
      "  }",
      '  console.log(`Recommended treatment: ${treatment}`);',
      "}"
    ]
  },
  {
    id: 15,
    description: "Determine the appropriate action for a smart home system based on time of day, temperature, occupancy, and security status.",
    variables: {
      timeOfDay: 20, // 24-hour format
      temperature: 22, // in Celsius
      isOccupied: true,
      isSecurityArmed: false
    },
    expectedOutcomes: `Expected outcomes:
- Night Mode: Time between 22:00 and 06:00, lower temperature, turn off lights if unoccupied
- Day Mode: Time between 06:00 and 22:00, adjust temperature based on occupancy
- Away Mode: Unoccupied and security armed, lower temperature and turn off all devices
- Energy Saving: Temperature > 25°C, turn on fans or AC
- Security Alert: Security armed and occupied (potential intrusion)`,
    codeTemplate: [
      "function solution({ timeOfDay, temperature, isOccupied, isSecurityArmed }) {",
      "  let action;",
      "  if (",
      "|",
      "  ) {",
      "    action = 'Night Mode';",
      "  } else if (",
      "|",
      "  ) {",
      "    action = 'Day Mode';",
      "  } else if (",
      "|",
      "  ) {",
      "    action = 'Away Mode';",
      "  } else if (",
      "|",
      "  ) {",
      "    action = 'Energy Saving';",
      "  } else if (",
      "|",
      "  ) {",
      "    action = 'Security Alert';",
      "  } else {",
      "    action = 'Normal Operation';",
      "  }",
      '  console.log(`Smart home system action: ${action}`);',
      "}"
    ]
  }
];

export default questions;