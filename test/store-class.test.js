const assert = require('assert');
const Store = require('../lib/Store');

describe('tests methods on Store class', () => {
    
    let store;
    let obj = { name: 'test' };
    let obj2 = { name: 'another' };

    beforeEach(() => {
        store = new Store();        
    });

    it('save method saves object to store', () => {
        const savedObj = store.save(obj);
        assert.ok(savedObj._id);
        assert.equal(savedObj.name, 'test');
    });

    it('get returns object that has given _id', () => {
        const savedObj = store.save(obj);
        const retrievedObj = store.get(savedObj._id);
        assert.deepEqual(savedObj, retrievedObj);
    });

    it('get returns null if _id not found', () => {
        store.save(obj);
        const retrieved = store.get(3);
        assert.deepEqual(retrieved, null);
    });

    it('getAll returns all objects in store', () => {
        const savedobj = store.save(obj);
        const savedobj2 = store.save(obj2);
        const result = store.getAll();
        assert.deepEqual(result, [savedobj, savedobj2]);
    });

    it('remove returns object with value true if obj removed', () => {
        const savedobj = store.save(obj);
        store.save(obj2); 
        const removed = store.remove(savedobj._id);
        assert.deepEqual(removed, { removed: true });
    });

    it('remove returns object with value false if no match', () => {
        store.save(obj);
        store.save(obj2);
        const removedFalse = store.remove(2);
        assert.deepEqual(removedFalse, { removed: false });
    });

    it('tests that remove only removes one item', () => {
        const savedobj = store.save(obj);
        store.save(obj2); 
        store.remove(savedobj._id);
        const db = store.getAll();
        assert.deepEqual(db, [obj2]);
    });
});