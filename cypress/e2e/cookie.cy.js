describe("Deutsche Bahn - Cookie Banner", () => {
  it("should accept cookies", () => {
    cy.visit("/");
    cy.handleCookieBanner();
    cy.get("button").contains("Alle akzeptieren").should("not.exist");
  });
});
