class CartPage {
  assertHasItem(name: string) {
    cy.contains('.inventory_item_name', name).should('be.visible')
  }
  checkout() {
    cy.get('[data-test="checkout"]').should('be.enabled').click()
    cy.url().should('include', '/checkout-step-one.html')
  }
}
export default new CartPage()
