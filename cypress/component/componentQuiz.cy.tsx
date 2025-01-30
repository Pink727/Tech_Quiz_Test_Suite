import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  it('should render the Quiz component', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').should('be.visible');
  });

  it('should start the quiz and display the first question', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.get('h2').should('be.visible');
    cy.get('button.btn.btn-primary').should('have.length', 4);
  });

  it('should complete the quiz and display the score', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();

    for (let i = 0; i < 10; i++) {
      cy.get('button.btn.btn-primary').first().click();
    }

    cy.get('h2').contains('Quiz Completed').should('be.visible');
    cy.get('div.alert-success').should('be.visible');
  });
});