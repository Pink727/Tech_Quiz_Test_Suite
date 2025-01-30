describe('Tech Quiz', () => {
  it('should start the quiz and complete it', () => {
    cy.visit('/');
    cy.get('button').contains('Start Quiz').click();
    cy.get('h2').should('be.visible');

    for (let i = 0; i < 10; i++) {
      cy.get('button').contains((i + 1).toString()).click();
    }

    cy.get('h2').contains('Quiz Completed').should('be.visible');
    cy.get('div.alert-success').should('be.visible');
  });
});