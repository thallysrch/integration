/// <reference types="cypress" />

describe('Cypress basics', () => {
    it('Should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        //const title = cy.title();
        //console.log(title)

        cy.pause()

        cy.title().should('be.eq', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')


        cy.title()
        .should('be.eq', 'Campo de Treinamento')
        .and('contain', 'Campo')


        //Imprimir o log no console
        //Escrever o title em um campo de texto
    })

    it('Should find and interact with an element', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple')
        .click()
        .should('have.value', 'Obrigado!')
    })
})