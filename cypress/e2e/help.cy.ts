describe('Check all commands', () => {

    it.only('ask for help', () => {
      cy.exec('saleor help')
        .its('stdout')
        .should('contain', 'saleor info                    Hello from Saleor')
        .should('contain', 'saleor logout                  Log out from the Saleor Cloud')
        .should('contain', 'saleor configure [token]       Configure Saleor CLI')
        .should('contain', 'saleor register                Create Saleor account')
        .should('contain', 'saleor trigger [event]         This triggers a Saleor event')
        .should('contain', 'saleor organization [command]                                   [aliases: org]')
        .should('contain', 'saleor environment [command]                                    [aliases: env]')
        .should('contain', 'saleor backup [command]')
        .should('contain', 'saleor job [command]')
        .should('contain', 'saleor project [command]')
        .should('contain', 'saleor storefront [command]')
        .should('contain', 'saleor telemetry [command]')
        .should('contain', 'saleor webhook [command]')
        .should('contain', 'saleor app [command]')
        .should('contain', 'saleor vercel [command]')
        .should('contain', 'saleor github [command]')
        .should('contain', 'saleor checkout [command]')
   })

   it.only('checks version', () => {
    cy.exec('saleor info')
      .its('stdout')
      .should('contain', ' Saleor Commerce CLI v1.14.0-rc.5')
   })
  })
  