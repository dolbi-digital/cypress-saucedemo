class CheckoutStepTwoPage {
  finish() {
    cy.get('[data-test="finish"]').should('be.enabled').click()
    cy.url().should('include', '/checkout-complete.html')
  }
}
export default new CheckoutStepTwoPage()
