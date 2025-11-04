class CheckoutCompletePage {
  assertCompleted() {
    cy.get('.complete-header').should('have.text', 'Thank you for your order!')
    cy.get('.complete-text').should('contain', 'dispatched')
    cy.get('[data-test="back-to-products"]').should('be.visible')
  }
}
export default new CheckoutCompletePage()
