describe("Test Diet Planner App", () => {
  before(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should have heading", () => {
    cy.contains("Select Food Items").click();
  });

  it("should have three multiple select", () => {
    cy.get("[name='select-item1']").parent().should("have.length", 1);
    cy.get("[name='select-item2']").parent().should("have.length", 1);
    cy.get("[name='select-item3']").parent().should("have.length", 1);
  });

  it("should load a submit button", () => {
    cy.contains("Submit");
  });

  it("submit button should be disabled by default", () => {
    cy.get("button").contains("Submit").should("be.disabled");
  });

  it("must select atleast 10 items of each type", () => {
    cy.get("[name='select-item1']").parent().click();
    for (var i = 1; i < 12; i++) {
      cy.get(`#menu-item1${i}`).click();
    }
    cy.get(`#menu-item11`).type("{esc}");

    cy.get("[name='select-item2']").parent().click();
    for (var i = 1; i < 12; i++) {
      cy.get(`#menu-item2${i}`).click();
    }
    cy.get(`#menu-item21`).type("{esc}");

    cy.get("[name='select-item3']").parent().click();
    for (var i = 1; i < 12; i++) {
      cy.get(`#menu-item3${i}`).click();
    }
    cy.get(`#menu-item31`).type("{esc}");
  });

  it("submit button should enabled after selection", () => {
    cy.get("button").contains("Submit").should("be.enabled");
  });

  it("click submit button", () => {
    cy.get("button").contains("Submit").click();
  });
  it("should have meal item headings", () => {
    cy.contains("Breakfast").should("exist");
    cy.contains("Lunch").should("exist");
    cy.contains("Dinner").should("exist");
  });

  it("should have swap button on each item", () => {
    cy.get("[id='swap-btn']").should("have.length", 21);
  });
});
