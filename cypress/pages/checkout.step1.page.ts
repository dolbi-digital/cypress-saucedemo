export interface Buyer { firstName: string; lastName: string; postalCode: string }

class CheckoutStepOnePage {
  fillInfo({ firstName, lastName, postalCode }: Buyer) {
    cy.get('[data-test="firstName"]').clear().type(firstName)
    cy.get('[data-test="lastName"]').clear().type(lastName)
    cy.get('[data-test="postalCode"]').clear().type(postalCode)
  }
  continue() {
    cy.get('[data-test="continue"]').should('be.enabled').click()
    cy.url().should('include', '/checkout-step-two.html')
  }
}
export default new CheckoutStepOnePage()
