/// <reference types="cypress" />

it('A external test...', () => {

})

describe('Shold group test', () => {
    describe('Shold group more specific tests', () => {
        it('A especific test', () => {

        })
    })


    describe('Should group more specific tests 2', () => {
        it.only('A specific test 2', () => {

        })
    })


    it('A external test...', () => {
 

    })
})
