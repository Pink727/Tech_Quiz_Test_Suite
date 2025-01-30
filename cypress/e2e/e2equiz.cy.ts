describe('Tech Quiz', () => {
    it('should start the quiz and complete it', () => {
      cy.visit('/');
      cy.get('button').contains('Start Quiz').click();
      cy.get('h2').should('be.visible');
  
      for (let i = 0; i < 10; i++) {
        // Check that there are 4 answer buttons
        cy.get('button.btn.btn-primary').should('have.length', 4);
        // Click the first answer button
        cy.get('button.btn.btn-primary').first().click();
      }
  
      cy.get('h2').contains('Quiz Completed').should('be.visible');
      cy.get('div.alert-success').should('be.visible');
    });
  });