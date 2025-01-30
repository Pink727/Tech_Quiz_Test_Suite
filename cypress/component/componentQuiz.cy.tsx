// This file contains component tests for the Quiz component using Cypress and React.

import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
    // This test case verifies that the Quiz component renders correctly.
    it('should render the Quiz component', () => {
        mount(<Quiz />);
        cy.get('button').contains('Start Quiz').should('be.visible');
    });

    // This test case verifies that the quiz can be started and the first question is displayed.
    it('should start the quiz and display the first question', () => {
        mount(<Quiz />);
        cy.get('button').contains('Start Quiz').click();
        cy.get('h2').should('be.visible');
        cy.get('button.btn.btn-primary').should('have.length', 4);
    });

    // This test case verifies that the quiz can be completed and the score is displayed.
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