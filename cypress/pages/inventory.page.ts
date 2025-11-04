class InventoryPage {
  assertOnPage() {
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('have.text', 'Products')
    cy.get('.inventory_list').should('be.visible')
    cy.get('.shopping_cart_link').should('be.visible')
  }
  addToCartByName(name: string) {
    cy.contains('.inventory_item', name).within(() => {
      cy.get('button').contains(/add to cart/i).click()
      cy.get('button').should('contain', 'Remove')
    })
  }
}
export default new InventoryPage()
