// Open https://the-internet.herokuapp.com/login

// Please automate next test cases:
// 1. Login with valid creds (tomsmith/SuperSecretPassword!) and assert you successfully logged in
// 2. Login with invalid creds and check validation error
// 3. Logout from app and assert you successfully logged out

/// <reference types="cypress" />

describe('Papilota Dmytro Homework', () => {
    beforeEach(function () {
        cy.visit('https://the-internet.herokuapp.com/login');
    });

    it ('LogInInvalidUsername', () => {
        cy.get('#username').type('tomsmith1')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.fa').click()

        cy.get('#flash').should('contain','Your username is invalid!')
    })
    
    it ('LogInInvalidPassword', () => {
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!1')
        cy.get('.fa').click()

        cy.get('#flash').should('contain', ' Your password is invalid!')
    })
    
    
    it ('LogIn',() => {
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.fa').click()
        
        cy.get('#flash').should('contain','You logged into a secure area!')
    })

    it ('LogOut',() => {
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.fa').click()
        
        cy.get('.icon-2x').click()
        
        cy.get('#username').should('exist')
    })

}); 




