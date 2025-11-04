/// <reference types="cypress" />
import LoginPage from '@pages/login.page'
import InventoryPage from '@pages/inventory.page'
import Header from '@pages/header.page'
import CartPage from '@pages/cart.page'
import CheckoutStepOnePage, { Buyer } from '@pages/checkout.step1.page'
import CheckoutStepTwoPage from '@pages/checkout.step2.page'
import CheckoutCompletePage from '@pages/checkout.complete.page'

describe('SMOKE #2 - Minimal purchase flow (1 item)', () => {
  let buyer: Buyer
  let itemName: string

  before(() => {
    cy.fixture('buyer').then(b => {
      buyer = { firstName: b.firstName, lastName: b.lastName, postalCode: b.postalCode }
      itemName = b.item
    })
  })

  it('adds one item, checks out to completion', () => {
    cy.allure().parentSuite('SMOKE').suite('Checkout').severity('blocker').tag('smoke','checkout')

    // Login
    LoginPage.visit()
    LoginPage.login('standard_user', 'secret_sauce')
    InventoryPage.assertOnPage()

    // Add single item
    InventoryPage.addToCartByName(itemName)
    Header.cartBadgeShouldEqual(1)

    // Cart & checkout
    Header.openCart()
    CartPage.assertHasItem(itemName)
    CartPage.checkout()

    // Customer info -> continue
    CheckoutStepOnePage.fillInfo(buyer)
    CheckoutStepOnePage.continue()

    // Finish and assert
    CheckoutStepTwoPage.finish()
    CheckoutCompletePage.assertCompleted()
  })
})
