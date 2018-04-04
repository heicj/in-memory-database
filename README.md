# class Store with methods to save and retrieve data

## Author: Charlie Heiner

### Technologies
    class uses third party shortid from npm.
    run `npm i` to install dependencies

###
    Store class that has methods to save and retrieve data

    1. save
        calling save method 
            store.save(obj)
        will save that obj to Store.
    1. get by id
        to use get id call method and pass an id
            store.get(id)
        will find item in Store with matching id and return it
    1. get all
        call method
            store.getall() 
        returns all items in the Store as an array
    1. remove
        call method
            store.remove(id)
        finds item in Store and removes it. Will return `{ removed: true }` if the object was removed, else return `{ removed: false }` if the object did not exist
