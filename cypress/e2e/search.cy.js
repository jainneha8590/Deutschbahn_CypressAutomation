describe("Deutsche Bahn - Search Validation", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.handleCookieBanner();
  });

  it("should show validation when search fields are empty", () => {
    cy.contains("Suchen").click();
    cy.contains("Eingabe erforderlich").should("be.visible");
  });
});
