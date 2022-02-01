/**
 *  _listado:
 *      {'1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed': { id: 12, desc: 'Tarea 12', completadoEn: 01-01-2022}}
 */
const Tarea = require('./tarea');

class Tareas {

    _listado = {};

    get listadoArr() {
        const listado = [];

        Object.keys( this._listado ).forEach( key => {
            listado.push(this._listado[key]);
        });

        return listado;
    }

    constructor() {
        this._listado = {};
    }

    cargarTareasFromArray ( tareas = [] ) {

        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea( desc = '' ) {

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {

        this.listadoArr.forEach( (tarea, i) => {
            const idx = `${i + 1}`.green;
            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn )
                                    ? 'Completada'.green
                                    : 'Pendiente'.red;
            console.log(`${ idx } ${ desc } :: ${ estado }`);

        });
    }

    listarPendientesCompletadas ( completadas = true ) {
        let contador = 0;
        this.listadoArr.forEach( (tarea, i) => {
            const idx = `${i + 1}`.green;
            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn )
                                    ? 'Completada'.green
                                    : 'Pendiente'.red;
            if ( completadas ) {
                // mostrar completadas
                if ( completadoEn ) {
                    contador += 1;
                    console.log(`${ (contador + '.').green } ${ desc } :: ${ completadoEn.green }`);
                }
            } else {
                // mostrar pendientes
                if ( !completadoEn ) {
                    contador += 1;
                    console.log(`${ (contador + '.').green } ${ desc } :: ${ estado }`);
                }
            }
            

        });
    }
}

module.exports = Tareas;