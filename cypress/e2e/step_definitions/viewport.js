import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

// cypress/integration/mobile_element_test.js

Given('I am on the main page', () => {
	cy.visit('/')
})

When('I switch to mobile view', () => {
	cy.viewport('iphone-6')
})

Then('I should see the hamburger icon', () => {
	cy.get('img[alt="hamburguer icon"]').should('exist')
})
