import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { landingPage } from '@pages/LandingPage'
import { loginPage } from '@pages/LoginPage'

Given('A web browser is at the sunnyside landing page', () => {
	cy.visit('/')
})

When('A user clicks on the about button', () => {
	landingPage.clickAbout()
})

Then('The about section is displayed', () => {
	landingPage.findAboutSection()
})

When('A user clicks on the services button', () => {
	landingPage.clickServices()
})

Then('The services section is displayed', () => {
	landingPage.findServicesSection()
})

When('A user clicks on the projects button', () => {
	landingPage.clickProjects()
})

Then('The projects section is displayed', () => {
	landingPage.findProjectsSection()
})
