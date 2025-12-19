describe("Login Page Tests", () => {
  it("should load Deutsche Bahn homepage", () => {
    cy.visit("/");
    cy.handleCookieBanner();
    cy.contains("Verbindung suchen").should("be.visible");
  });
});
