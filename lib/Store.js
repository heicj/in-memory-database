var shortid = require('shortid');

module.exports = class Store {
    constructor(){
        this.db = [];
    }

    save(obj){
        const id = shortid();
        obj._id = id;
        this.db.push(obj);
        return obj;
    }
};