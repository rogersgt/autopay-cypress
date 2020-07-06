describe('Pay Water Bill', () => {
  it('Should login and pay bill', () => {
    cy.visit(Cypress.config('baseUrl'));
    cy.get('#epayUserName').type(Cypress.env('username'));
    cy.get('#epayPassword').type(Cypress.env('password'));
    cy.get('.btn-primary').click();

    cy.visit('/Payment/PayWithBank');
    cy.get('.btn-primary').first().click();
  });
});