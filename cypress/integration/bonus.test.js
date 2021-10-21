describe("bonus", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("says 'Invalid input.' if pressed with no input", () => {
    cy.get("button").click();
    cy.contains("Invalid input.");
  });

  it("says 'Invalid input.' if pressed with invalid input", () => {
    cy.get("input").type("a,b,c");
    cy.get("button").click();
    cy.contains("Invalid input.");
  });

  it("says the sum when that is the selected option", () => {
    cy.get("input").type("3,5,15,7,5");
    cy.get("select").select(["sum"]);
    cy.get("button").click();
    cy.contains("Sum: 35");
  });

  it("says the average when that is the selected option", () => {
    cy.get("input").type("3,5,15,7,5");
    cy.get("select").select(["average"]);
    cy.get("button").click();
    cy.contains("Average: 7");
  });

  it("says the mode when that is the selected option", () => {
    cy.get("input").type("3,5,15,7,5");
    cy.get("select").select(["mode"]);
    cy.get("button").click();
    cy.contains("Mode: 5");
  });

  it("says the sum and average when those are the selected options", () => {
    cy.get("input").type("3,5,15,7,5");
    cy.get("select").select(["sum", "average"]);
    cy.get("button").click();
    cy.contains("Sum: 35");
    cy.contains("Average: 7");
  });

  it("says all three when they are all selected", () => {
    cy.get("input").type("3,5,15,7,5");
    cy.get("select").select(["sum", "average", "mode"]);
    cy.get("button").click();
    cy.contains("Sum: 35");
    cy.contains("Average: 7");
    cy.contains("Mode: 5");
  });
});
