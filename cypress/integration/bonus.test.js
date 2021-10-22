describe("bonus", () => {
  beforeEach(() => {
    const { PORT = 3000 } = process.env;
    cy.visit(`http://localhost:${PORT}`);
    cy.waitForReact();
  });

  it("clears the inputs if given valid input", () => {
    cy.get("input").type("1,2,3");
    cy.get("select").select("sum");
    cy.get("button").click();

    cy.contains("6");
    cy.get("input").should("have.value", "");
    cy.get("select").should("have.value", "");
  });

  it("does not clear the inputs if given an invalid input", () => {
    cy.get("input").type("1,2,3");
    cy.get("select").select("sum");
    cy.get("button").click();

    cy.contains("6");
    cy.get("input").should("have.value", "");
    cy.get("select").should("have.value", "");

    cy.get("input").clear().type("a,b,c");
    cy.get("select").select("sum");
    cy.get("button").click();

    cy.get("input").should("have.value", "a,b,c");
    cy.get("select").should("have.value", "sum");
  });

  it("adds a class of `error` to both the `input` and `select` element if there is an error", () => {
    cy.get("input").type("a,b,c");
    cy.get("select").select("sum");
    cy.get("button").click();

    cy.contains("Invalid input.");
    cy.get("input").should("have.class", "error");
    cy.get("select").should("have.class", "error");
  });

  it("removes the `error` classes if the input is later changed to be correct", () => {
    cy.get("input").type("a,b,c");
    cy.get("select").select("sum");
    cy.get("button").click();

    cy.contains("Invalid input.");
    cy.get("input").should("have.class", "error");
    cy.get("select").should("have.class", "error");

    cy.get("input").clear().type("1,3,5");
    cy.get("select").select("sum");
    cy.get("button").click();
    cy.contains("9");
    cy.get("input").should("not.have.class", "error");
    cy.get("select").should("not.have.class", "error");
  });
});
