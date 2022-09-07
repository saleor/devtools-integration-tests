describe('Check if command appCreate creates app', () => {

  it.only('starts app', () => {
    cy.exec('saleor app create')
      .its('stdout')
      .should('contain', 'start your application')
  })

  afterEach(() => {
    cy.task('deleteFolder', 'my-saleor-app')
  })
})
