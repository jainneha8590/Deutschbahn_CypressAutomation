
Cypress.Commands.add('handleCookieBanner', () => {
  cy.get('body').then(($body) => {
    if ($body.find('[data-testid="cookie-accept"]').length) {
      cy.get('[data-testid="cookie-accept"]').click({ force: true });
    }
  });
});