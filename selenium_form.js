// Open https://the-internet.herokuapp.com/login

// Please automate next test cases:
// 1. Login with valid creds (tomsmith/SuperSecretPassword!) and assert you successfully logged in
// 2. Login with invalid creds and check validation error
// 3. Logout from app and assert you successfully logged out

/// <reference types="cypress" />

it ('LogIn',() => {

    cy.visit('https://the-internet.herokuapp.com/login')
    cy.pause()

    cy.get(':nth-child(1) > .form-control').type('MyName3')
    cy.get(':nth-child(2) > .form-control').type('Pap3@gmail.com')
    cy.get(':nth-child(3) > .form-control').type('123454321')
    cy.get('.btn').click()

    cy.get(':nth-child(4) > .nav-link').should('exist')
})