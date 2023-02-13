
export class TestUtils{
    public clear(){
        cy.wait(1000)
        cy.get('.todo').should(() => {}).then($todos => {
            if(!$todos.length){
                return
            }
            cy.wrap($todos).find('[data-cy="delete"]').click({force: true, multiple: true})
        })
        cy.get('.todo').should('have.length', 0)
    }

    public todoSample(string: string){
        cy.wait(1000)
        cy.get('[data-cy="+"]').click()
        cy.get('[data-cy="text-input"]').type(string)
        cy.get('[data-cy="create-task"]').click()
    }
}