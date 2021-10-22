describe("index", () => {
  beforeEach(() => {
    const { PORT = 3000 } = process.env;
    cy.visit(`http://localhost:${PORT}`);
    cy.waitForReact();
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
    cy.get("select").select("sum");
    cy.get("button").click();
    cy.contains("35");
  });

  it("says the average when that is the selected option", () => {
    cy.get("input").type("3,5,15,7,5");
    cy.get("select").select("average");
    cy.get("button").click();
    cy.contains("7");
  });

  it("says the mode when that is the selected option", () => {
    cy.get("input").type("3,5,15,7,5");
    cy.get("select").select("mode");
    cy.get("button").click();
    cy.contains("5");
  });
});
