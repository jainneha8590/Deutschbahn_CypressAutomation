describe("Deutsche Bahn - Search Results", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.handleCookieBanner();
  });

  it("should display results for a valid route", () => {
    cy.fixture("route").then((route) => {
      cy.get('[name="quickFinderBasic-von"]').type(route.from);
      cy.get('[name="quickFinderBasic-nach"]').type(route.to);
      cy.contains("Suchen").click();
      cy.contains("Verbindungen").should("be.visible");
    });
  });
});
