/// <reference types='cypress'/>

context('Home page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it("should find our welcome page and message", () => {
        cy.get("h1").contains("Welcome")
    })

    it("should contains 10 elements", () => {
        cy.get(".cy-list").then(items => {
            expect(items.length === 10).to.be.true
        })
    })

    it("should contains Luke in first", () => {
        cy.get(".cy-list").eq(0).contains("Luke")
    })

    it("should contains more than 10 elements", () => {
        cy.get(".cy-load-more").click()
        cy.wait(1000)
        cy.get(".cy-list").then(items => {
            expect(items.length > 10).to.be.true
        })
    })

    it("should load Luke Skywalker character", () => {
        cy.get(".cy-character").eq(0).click()
        cy.get(".cy-character").contains("Luke")
    })
})