const assert = require('assert');
const Store = require('../lib/Store');

describe('tests methods on Store class', () => {
    
    it('save method saves object to store', () => {
        const obj = { name: 'test' };
        const store = new Store();
        const savedObj = store.save(obj);
        assert.ok(savedObj._id);
    });
});