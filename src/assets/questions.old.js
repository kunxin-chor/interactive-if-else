const questions = [
  {
    id: 1,
    description: "Given the age, write the condition to determine if a person can vote.",
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
    description: "Given the temperature in Celsius, write the conditions to categorize it as cold, warm, or hot.",
    variables: {
      temperature: 25
    },
    expectedOutcomes: `Expected outcomes:
- If the temperature is below 10°C, it's considered cold.
- If the temperature is between 10°C and 20°C (inclusive), it's considered warm.
- If the temperature is above 20°C, it's considered hot.`,
    codeTemplate: [
      "function solution({ temperature }) {",
      "  if (",
      "|",
      "  ) {",
      '    console.log("It\'s cold.");',
      "  } else if (",
      "|",
      "  ) {",
      '    console.log("It\'s warm.");',
      "  } else {",
      '    console.log("It\'s hot.");',
      "  }",
      "}"
    ]
  },
  {
    id: 3,
    description: "Given the year, write the condition to determine if it's a leap year.",
    variables: {
      year: 2024
    },
    expectedOutcomes: `Expected outcomes:
- If the year is divisible by 4 but not by 100, it's a leap year.
- If the year is divisible by 100 but not by 400, it's not a leap year.
- If the year is divisible by 400, it's a leap year.
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
  }
];
export default questions;