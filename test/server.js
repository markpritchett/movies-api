const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()
const server = require('../server')

chai.use(chaiHttp)

describe('Films', () => {
    it('should get all the films', (done) => {
        chai.request(server)
            .get('/films')
            .end((err, res) => {
                const expected = [
                    {
                        id: 1,
                        title: 'The Shawshank Redemption',
                        year: 1994
                    },
                    {
                        id: 2,
                        title: 'The Godfather',
                        year: 1972
                    }
                ]

                res.body.should.eql(expected)
                done()
            })
    })
})