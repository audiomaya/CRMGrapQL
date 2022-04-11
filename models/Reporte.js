const mongoose = require('mongoose')

const ReporteSchema = mongoose.Schema({
	nombreservicio: {
		type: String,
		required: true
	},
	sedimento: {
		type: String,
		required: true
	},
	objetos: {
		type: String,
		required: true
	},
	piso: {
		type: String,
		required: true
	},
	paredes: {
		type: String,
		required: true
	},
	techo: {
		type: String,
		required: true
	},
	succiones: {
		type: String,
		required: true
	},
	numerosucciones: {
		type: String,
		required: true
	},
	escaleras: {
		type: String,
		required: true
	},
	numeroescaleras: {
		type: String,
		required: true
	},
	//cliente: {
		//type: mongoose.Schema.Types.ObjectId,
		//required: true,
		//ref: 'Cliente'
	//},
	//estado: {
		//type: String,
		//default: "REALIZADO"
	//},
	creado: {
		type: Date,
		default: Date.now()
	}
})

module.exports = mongoose.model('Reporte', ReporteSchema)
