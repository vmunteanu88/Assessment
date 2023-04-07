describe("API tests", () => {
    it("Check if user Samantha is found", ()=> {
        cy.request({
            method: 'GET',
            url: '/users',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).is.eq(200);
            console.log(response.body);
            let userFound = response.body.find(user => {
                return user.username === "Samantha"
            })
            expect(userFound).to.exist;
        })
    })

    it("Post something", ()=> {
        cy.request({
            method: 'POST',
            url: '/posts',
            headers: {
                'Content-Type': 'application/json'
            },
            body:{
                "userId": "2",
                "title": "My title",
                "body": "This is the text of my post."
            },
        }).then((response) =>{
            expect(response.status).is.eq(201); 
            expect(response.body.userId).to.eq("2");
            expect(response.body.title).to.eql("My title");
            expect(response.body.body).to.eql("This is the text of my post.");
        })
    })

    it("Measure response time to be under 1 second", ()=> {
        cy.request({
            method: 'GET',
            url: '/posts/9/comments',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((response) => {
            expect(response.duration).to.not.be.greaterThan(1000);
        })
    })

})