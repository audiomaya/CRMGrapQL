const mongoose = require('mongoose')

const ServiciosSchema = mongoose.Schema({
	nombre: {
		type: String,
		required: true,
		trim: true
	},
	fecha: {
		type: Date,
		required: true,
	},
	horario: {
		type: String,
		required: true,
		trim: true
	},
	dias: {
		type: String,
		required: true,
		trim: true
	},
	documentacion: {
		type: String,
		required: true,
		trim: true
	},
	requisitosEquipo: {
		type: String,
		required: true,
		trim:true
	},
	epp: {
		type: String,
		required: true,
		trim: true
	},
	fechaUltimoServ:{
		type: String,
		required: true,
		trim: true
	},
	observaciones:{
		type: String,
		required: true,
		trim: true
	},
	creado: {
		type: Date,
		default: Date.now()
	}
})

module.exports = mongoose.model('Servicio', ServiciosSchema)
