const expect = require("chai").expect;
const axios = require('axios');


// Unit testing

describe("Unit Testing API Calls", function() {
    this.timeout(45000);

    it("Should sign up a user successfully", function(done) {
        let newUser = {
            givenName: "Test",
            familyName: "Test",
            email: "testemail@gmail.com",
            gender: "male",
            phoneNumber1: "+17047710382",
            userName: "test123"
        };
        axios.post('https://rkprv2kx5b.execute-api.us-east-1.amazonaws.com/dev/admins/signup',
        newUser ,
        {
            headers: {
                "x-api-key":"RfgackFzlO2IKAhmukniT25ZYIGbSyIH788tvf32",
            }
        })
        .then(res => {
            let user = JSON.parse(res.data.body);
            expect(user.User.Username).to.equal(newUser.userName);
            done();
        }).catch(err => {
            console.log(err)
        })
    
    })

    it("Should login the user", function(done) {
        let currentUser = {
            userName: "test123",
            password: "wrong"
        }
        axios.post('https://rkprv2kx5b.execute-api.us-east-1.amazonaws.com/dev/admins/auth', currentUser, {
                headers: {
                    "x-api-key":"RfgackFzlO2IKAhmukniT25ZYIGbSyIH788tvf32",
                }
            }).then(res => {
                console.log(res)
                expect(res.data.statusCode).to.equal(204);
                done();
            }).catch(err => {
                console.log(err);
                done();
            })
    })

    it("Should grab user data", function(done) {
        axios.get("https://rkprv2kx5b.execute-api.us-east-1.amazonaws.com/dev/admins/test123", {
        headers: {
            "x-api-key": "RfgackFzlO2IKAhmukniT25ZYIGbSyIH788tvf32"
        }
        }).then(res => {
            const user = JSON.parse(res.data.body);
            expect(user.Username).to.equal("test123");
            done();
        }).catch(err => {
            console.log(err)
        })
    })

    it("Should log the user out", function(done) {
        let user = "test123"
        axios.put(`https://rkprv2kx5b.execute-api.us-east-1.amazonaws.com/dev/admins/logout/${user}`,
        {userName: user},
        {
        headers: {
            "x-api-key": "RfgackFzlO2IKAhmukniT25ZYIGbSyIH788tvf32"
        }
        }).then(res => {
            expect(res.data.statusCode).to.equal(204);
            done();
        }).catch(err => {
            console.log(err);
            done();
        })
    })

    it("Should delete the user", function(done) {
        let currentUser = {
            "userName": "test123"
        }
        axios.delete('https://rkprv2kx5b.execute-api.us-east-1.amazonaws.com/dev/admins/' + currentUser.userName, {
                headers: {
                    "x-api-key":"RfgackFzlO2IKAhmukniT25ZYIGbSyIH788tvf32",
                    "Content-Type":"application/json"
                }
            }).then(res => {
                expect(res.data.statusCode).to.equal(204);
                done();
            }).catch(err => {
                console.log(err);
            })
    })

})

