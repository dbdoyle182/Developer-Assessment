const Nightmare = require("nightmare");
const expect = require("chai").expect;


describe("Integration Testing UI Functions", function() {
    this.timeout(45000);
    it("Should load page and sign up a user", function(done) {
        Nightmare({ show: true })
        .goto("http://localhost:3000")
        .wait("button#sign_up")
        .click("button#sign_up")
        .wait("button[type='submit']")
        .type("input[name='givenName']", "Test")
        .type("input[name='familyName']", "Test")
        .type("input[name='email']", "test@gmail.com")
        .type("input[name='gender']", "male")
        .type("input[name='phoneNumber1']", "7047710382")
        .type("input[name='userName']", "test123")
        .click("button[type='submit']")
        .wait("input[name='password']")
        .type("input[name='password']", "password")
        .end()
        .evaluate(function() {
            return ("input[name='password']")
        })
        .then(function(response) {
            console.log(response)
            expect(response).to.not.equal(undefined)
            done()
        })
    })
    
        

})