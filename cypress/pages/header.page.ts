class Header {
  cartBadgeShouldEqual(n: number) {
    if (n > 0) cy.get('.shopping_cart_badge').should('have.text', String(n))
    else cy.get('.shopping_cart_badge').should('not.exist')
  }
  openCart() {
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart.html')
  }
  openMenu() {
    cy.get('#react-burger-menu-btn').should('be.visible').click()
    cy.get('.bm-menu-wrap').should('be.visible')
  }
  logout() {
    this.openMenu()
    cy.get('#logout_sidebar_link').should('be.visible').click()
    cy.url().should('match', /\/$/)
  }
}
export default new Header()
