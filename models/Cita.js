const mongoose = require('mongoose')

const CitasSchema = mongoose.Schema({
	estado: {
		type: String,
		require: true,
		trim: true
	},
	fechaCita: {
		type: String,
		require: true,
		trim: true
	},
	horaCita: {
		type: String,
		require: true,
		trim: true
	},
	empresa: {
		type: String,
		require: true,
		trim: true
	},
	telefono: {
		type: String,
		require: true,
		trim: true
	},
	contacto: {
		type: String,
		require: true,
		trim: true
	},
	correo: {
		type: String,
		require: true,
		trim: true
	},
	cargo: {
		type: String,
		require: true,
		trim: true
	},
	numCisternas: {
		type: String,
		require: true,
		trim: true
	},
	tipoAgua: {
		type: String,
		require: true,
		trim: true
	},
	capacidad: {
		type: String,
		require: true,
		trim: true
	},
	materialCist: {
		type: String,
		require: true,
		trim: true
	},
	observaciones: {
		type: String,
		require: true,
		trim: true
	},
	creado: {
		type: Date,
		default: Date.now()
	},
	//vendedor: {
		//type: mongoose.Schema.Types.ObjectId,
		//required: true,
		//ref: 'Usuario'
	//}
})

module.exports = mongoose.model('Cita', CitasSchema)
