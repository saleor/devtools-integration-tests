describe('Check if command appCreate creates app', () => {

  it.only('starts app with defoult name', () => {
    cy.exec('saleor app create')
      .its('stdout')
      .should('contain', 'start your application')
      cy.task('deleteFolder', 'my-saleor-app')
  })

  it.only('starts app with dedicated name', () => {
    cy.exec('saleor app create testapp')
      .its('stdout')
      .should('contain', 'testapp')
      cy.task('deleteFolder', 'testapp')

  })
})
