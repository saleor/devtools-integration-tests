
describe('Check if command appCreate creates app', () => {
    /**
     * Cleanup before every test, ensure each run is clean and stuff like "my-saleor-app-0-0" is not breaking tests
     */
    beforeEach(() => {
        cy.task('deleteFolder', 'testapp')
    })

    it('Clones app template', () => {
        cy.exec('saleor app create')
            .its('stdout')
            .should('contain', 'start your application')

        cy.task('deleteFolder', 'my-saleor-app')
    })

    it('Clones app template under specified name', () => {
        cy.exec('saleor app create testapp')
            .its('stdout')
            .should('contain', 'testapp')
        cy.task('deleteFolder', 'testapp')
    })

    it('Clones and builds app template', () => {
        cy.exec('saleor app create testapp')
        cy.exec('cd testapp && pnpm install')

        cy.exec('cd testapp && pnpm run build')
            .its('code').should('equal', 0)

        cy.readFile('testapp/.next/BUILD_ID').should('be.a', 'string')
    })
})
