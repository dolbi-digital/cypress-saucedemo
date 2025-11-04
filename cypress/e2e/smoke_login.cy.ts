/// <reference types="cypress" />
import LoginPage from '@pages/login.page'
import InventoryPage from '@pages/inventory.page'
import Header from '@pages/header.page'

describe('SMOKE #1 - Login gateway (standard_user)', () => {
  it('logs in and lands on inventory with core UI visible', () => {
    cy.allure().parentSuite('SMOKE').suite('Auth').severity('critical').tag('smoke','auth')

    LoginPage.visit()
    LoginPage.login('standard_user', 'secret_sauce')

    InventoryPage.assertOnPage()

    cy.get('.inventory_item').its('length').should('be.greaterThan', 0)
  })
})
