const { v4: uuidv4 } = require('uuid');


class Tarea {

    id = uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed';
    desc = '';
    compleatdoEn = null;

    constructor( desc ) {
        this.desc = desc;
    }
}



module.exports = Tarea;