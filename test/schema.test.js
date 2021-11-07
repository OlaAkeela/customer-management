const { describe, it } = require('mocha');
const chai  = require('chai');
const schema  = require('../db/schema');

chai.should()
describe('Test Static Schema Snapshot', () => {

  it('schema should contain types', () => {
    chai.assert.isNotNull(schema.getType("Customer"))
    chai.assert.isDefined(schema.getType("Customer"))
  })

  it('scheme should not contain unregistered types', () => {
    chai.assert.isUndefined(schema.getType("NotADefinedType", "Type should not be defined"))
  })
})