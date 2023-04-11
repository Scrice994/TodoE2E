export class TestUtils{

    clearTodos(){
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

    createUserAndLogin(){
        cy.request('POST', 'http://localhost:3005/user/signup', {username: 'testUser123', password: 'testPassword123', confirmPassword: 'testPassword123'})
        .then((res) => {
          window.localStorage.setItem('user', JSON.stringify(res.body.token))
        })
    }

    todoSample(string: string){
        cy.wait(1000)
        cy.get('[data-cy="+"]').click()
        cy.get('[data-cy="text-input"]').type(string)
        cy.get('[data-cy="create-task"]').click()
    }
}