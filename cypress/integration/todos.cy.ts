/// <reference types="Cypress" />

describe("Todo list", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Visualizzazione della lista dei todo", () => {
        cy.get('[data-cy="list"]')
            .should("be.visible")
            .within(() => {
                cy.get('[data-cy="list-row"]').should("be.visible");
            });
    });
});
