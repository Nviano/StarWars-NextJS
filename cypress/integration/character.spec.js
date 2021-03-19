/// <reference types='cypress'/>

context('Character page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/character/1')
    })

    it("back button should go back home page", () => {
        cy.get(".cy-back-home").click()
        cy.url().should('eq', 'http://localhost:3000/')
    })

    it("Luke Skywalker should have 4 films", () => {
        cy.get('.cy-li').should('have.length', 4)
    })

    //This test will fail because 175 is not the Luke height
    it("should fail Luke Skywalker height", () => {
        cy.get(".cy-character").eq(0).click()
        cy.get(".cy-character-height").contains("175")
    })
})