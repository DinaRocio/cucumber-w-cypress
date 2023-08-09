class LandingPage {
	elements = {
		// Selectores por Atributo : data-* o aria-*
		aboutAnchor: () => cy.get('a[href="#about"]'),
		servicesAnchor: () => cy.get('a[href="#services"]'),
		projectsAnchor: () => cy.get('a[href="#projects"]'),

		// Selectores de ID y clase
		aboutSection: () => cy.get('#about'),
		servicesSection: () => cy.get('#services'),
		projectsSection: () => cy.get('#projects'),

		// Selectores de texto
		aboutSectionText: () => cy.contains('NOSOTROS CREAMOS IDEAS'),
		servicesSectionText: () => cy.contains('Transforma tu marca'),
		projectsSectionText: () => cy.contains('TESTIMONIOS DE CLIENTES'),

		// Selectores por jerarquía
		paragraph: () => cy.get('.firstText p').as('servicesParagraph'),

		loginBtn: () => cy.get('#login-button'),
		errorMessage: () => cy.get('h3[data-test="error"]'),
	}

	clickAbout() {
		this.elements.aboutAnchor().click()
	}
	clickServices() {
		this.elements.servicesAnchor().click()
	}
	clickProjects() {
		this.elements.projectsAnchor().click()
	}

	findAboutSection() {
		this.elements.aboutSectionText().should('be.visible')
		cy.url().should('include', '#about')
	}
	findServicesSection() {
		this.elements.servicesSectionText().should('be.visible')
		this.elements.paragraph().should('be.visible')
		cy.url().should('include', '#services')
	}
	findProjectsSection() {
		this.elements.projectsSectionText().should('be.visible')
		cy.url().should('include', '#projects')
	}
}

export const landingPage = new LandingPage()
