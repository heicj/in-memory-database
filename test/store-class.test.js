const assert = require('assert');
const Store = require('../lib/Store');

describe('tests methods on Store class', () => {
    
    let store; 
    beforeEach(() => {
        store = new Store();
    });

    it('save method saves object to store', () => {
        const obj = { name: 'test' };
        const savedObj = store.save(obj);
        assert.ok(savedObj._id);
    });

    it('get returns object that has given _id', () => {
        const obj = { name: 'test' };
        const savedObj = store.save(obj);
        const retrievedObj = store.get(savedObj._id);
        assert.deepEqual(savedObj, retrievedObj);
    });

    it('getAll returns all objects in store', () => {
        const obj = { name: 'test' };
        const obj2 = { name: 'another' };
        const savedobj = store.save(obj);
        const savedobj2 = store.save(obj2);
        const result = store.getAll();
        assert.deepEqual(result, [savedobj, savedobj2]);
    });
});