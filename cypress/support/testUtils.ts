

export class TestUtils{
    public clear(){
        cy.wait(1000)
        cy.get('[data-cy="todo"]').should('have.length.gte', 0).then(todos=> {
            if(!todos.length){
                cy.log("nothing to delete")
                return
            }
            cy.wrap(todos).find('[data-cy="delete"]').should(() => {}).click({force: true, multiple: true})
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