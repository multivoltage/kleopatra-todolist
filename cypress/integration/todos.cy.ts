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

    it("Aggiunta di un nuovo todo (stato “pending”)", () => {
        cy.get('[data-cy="list-row"]')
            .its("length")
            .then((size) => {
                console.log("size is", size);
                const description = "Complete this exercise";
                cy.get('[data-cy="input-new-task"]').clear().type(description);
                cy.get('[data-cy="btn-add"]').click();

                cy.get('[data-cy="list-row"]')
                    .its("length")
                    .should("eq", size + 1);
                cy.get('[data-cy="list-row"]').last().contains("pending");
            });
    });

    it("Check di un todo come completato (stato “completed”)", () => {
        cy.get('[data-cy="list-row-state-completed"]').should("not.exist");

        cy.get('[data-cy="list-row--action"]').eq(0).click();
        cy.get('[data-cy="list-row-state-completed"]').its("length").should("eq", 1);
        cy.get('[data-cy="list-row--action"]').eq(1).click();
        cy.get('[data-cy="list-row-state-completed"]').its("length").should("eq", 2);
    });
});
