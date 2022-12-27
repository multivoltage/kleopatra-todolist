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
        cy.get('[data-cy="list-row--action"]').eq(0).click();
        cy.get('[data-cy="list-row-state-completed"]').its("length").should("eq", 2);
    });

    it("Uncheck dei todo completati (tornano quindi in stato “pending”)", () => {
        // create a scenario with 2 completed
        cy.get('[data-cy="list-row--action"]').eq(0).click();
        cy.get('[data-cy="list-row--action"]').eq(0).click();
        cy.get('[data-cy="list-row-state-completed"]').its("length").should("eq", 2);

        cy.get('[data-cy="list-row--action"]').eq(1).click();
        cy.get('[data-cy="list-row-state-completed"]').its("length").should("eq", 1);

        cy.get('[data-cy="list-row--action"]').eq(1).click();
        cy.get('[data-cy="list-row-state-completed"]').should("not.exist");
    });

    it("Ordinamento automatico dei todo: pending, in ordine di creazione dal più recente al più vecchio. Poi i completed", () => {
        /*
        diventare ricco         pending     current
        compare un areoporto    pending     current +1 
        333                     pending     current +2
        444                     completed   current +3   current +3
        555                     pending     current +4 
        666                     completed   current +5   current +5
        777                     pending     current +6 
        -----------------------------------------
        777 555 333 comprare diventare 666 444
        */

        cy.get('[data-cy="input-new-task"]').type("333");
        cy.get('[data-cy="btn-add"]').click();

        cy.get('[data-cy="input-new-task"]').type("444");
        cy.get('[data-cy="btn-add"]').click();
        cy.get('[data-cy="list-row--action"]').eq(0).click();

        cy.get('[data-cy="input-new-task"]').type("555");
        cy.get('[data-cy="btn-add"]').click();

        cy.get('[data-cy="input-new-task"]').type("666");
        cy.get('[data-cy="btn-add"]').click();
        cy.get('[data-cy="list-row--action"]').eq(0).click();

        cy.get('[data-cy="input-new-task"]').type("777");
        cy.get('[data-cy="btn-add"]').click();

        // after insert and edit
        cy.get('[data-cy="list-row"]')
            .eq(0)
            .within(() => {
                cy.get('[data-cy="list-row-task"]').contains("777");
                cy.get('[data-cy="list-row-state-pending"]');
            });

        cy.get('[data-cy="list-row"]')
            .eq(1)
            .within(() => {
                cy.get('[data-cy="list-row-task"]').contains("555");
                cy.get('[data-cy="list-row-state-pending"]');
            });

        cy.get('[data-cy="list-row"]')
            .eq(2)
            .within(() => {
                cy.get('[data-cy="list-row-task"]').contains("333");
                cy.get('[data-cy="list-row-state-pending"]');
            });

        cy.get('[data-cy="list-row"]')
            .eq(3)
            .within(() => {
                cy.get('[data-cy="list-row-task"]').contains("comprare");
                cy.get('[data-cy="list-row-state-pending"]');
            });

        cy.get('[data-cy="list-row"]')
            .eq(4)
            .within(() => {
                cy.get('[data-cy="list-row-task"]').contains("diventare");
                cy.get('[data-cy="list-row-state-pending"]');
            });

        cy.get('[data-cy="list-row"]')
            .eq(5)
            .within(() => {
                cy.get('[data-cy="list-row-task"]').contains("666");
                cy.get('[data-cy="list-row-state-completed"]');
            });

        cy.get('[data-cy="list-row"]')
            .eq(6)
            .within(() => {
                cy.get('[data-cy="list-row-task"]').contains("444");
                cy.get('[data-cy="list-row-state-completed"]');
            });
    });
});
