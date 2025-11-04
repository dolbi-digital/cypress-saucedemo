class LoginPage {
  visit() {
    cy.visit('/')
    cy.get('#login_button_container').should('be.visible')
    cy.get('.login_logo').should('contain', 'Swag Labs')
  }
  login(username: string, password: string) {
    cy.get('[data-test="username"]').clear().type(username)
    cy.get('[data-test="password"]').clear().type(password, { log: false })
    cy.get('[data-test="login-button"]').click()
  }
  expectErrorContains(text: string) {
    cy.get('[data-test="error"]').should('be.visible').and('contain', text)
  }
}
export default new LoginPage()
