const CrudRepository = require("./crud-repository");

const {Booking} = require('../models')

class BookingRepositry extends CrudRepository {
    constructor(){
        super(Booking);
    }
}

module.exports=BookingRepositry;