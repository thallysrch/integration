/// <reference types="cypress" />

describe('Esperas.....', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
})

    beforeEach(() => {
        cy.reloud
})

    it('Deve aguardar o elemento estar disponivel', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    })  

    it('Deve fazer retrys', () => {
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('exist')
        .should('exist')
        .type('funciona')
        //.should('not.exist')
        
    })     

    it('Uso do find', () =>{
        cy.get('#buttonList').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
        //cy.get('#lista li')
        //.find('span')
        //.should('contain', 'item 2')
        cy.get('#lista li span')
            .should('contain', 'Item 2')

    })

    it('Uso do timeout', () => {
        //cy.get('#buttonDelay').click()
       // cy.get('#novoCampo', {timeout: 1000}).should('exist')

       cy.get('#buttonListDOM').click()
       //cy.wait(5000)
        cy.get('#Lista li span')
            .should('have.length', 1)
            cy.get('#Lista li span')    
                .should('have.length', 2)
    })

    it('Click retry', () => {
        cy.get('#buttonCount')
        .click()
        .should('have.value', '1')
    })

    it.only('Should vs Then', () => {
        cy.get('#buttonListDOM').then($el => { //novas buscas utilizar o then, should entra em loop
            //.should ('have.length' , 1)
           // console.log($el)
           expect($el).to.have.length(1)
           cy.get('#buttonList')
        })//.and('eq', 2)
        //.and('not.have.id', 'buttonListDOM')
        
    })
})

