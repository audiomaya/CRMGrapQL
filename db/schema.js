const { gql } = require('apollo-server')

//Schema
const typeDefs = gql`
	scalar Date

	type Usuario {
		id: ID
		nombre: String
		apellido: String
		email: String
		typeUser: String
		creado: String
	}


	type Token {
		token: String
	}

	type Producto {
		id: ID
		nombre: String
		existencia: Int
		precio: Float
		creado: String
	}

	type Cliente {
		id: ID
		nombre: String
		apellido: String
		sucursal: String
		email: String
		telefono: String
		cisternasP: String
		m3P: String
		cisternasT: String
		m3T: String
		vendedor: ID
		direccion: String
		jefeMantto: String
		telJefe: String
		emailJefe: String
		corporativo: String
		costoInmueble: Float
		ventaAnual: Float
		noServAnual: String
	}
	
	type Pedido {
		id: ID
		pedido: [PedidoGrupo]
		total: Float
		cliente: Cliente
		vendedor: ID
		fecha: Date!
		estado: EstadoPedido
	}

	type PedidoGrupo {
		id: ID
		cantidad: Int
		nombre: String
		precio: Float
	}

	type Cita {
		id: ID
		estado: String
		fechaCita: Date
		horaCita: String
		empresa: String
		telefono: String
		contacto: String
		correo: String
		cargo: String
		numCisternas: String
		tipoAgua: String
		capacidad: Int
		materialCist: String
		observaciones: String
	}

	type Servicio {
		id: ID
		nombre: String
		prueba: String
		fecha: Date
		horario: String
		dias: Int
		documentacion: String
		requisitosEquipo: String
		epp: String
		fechaUltimoServ: String
		observaciones: String
	}

	type Reporte {
		id:ID
		nombreservicio: String
		sedimento: String
		objetos: String
		piso: String
		paredes: String
		techo: String
		succiones: String
		numerosucciones: Int
		escaleras: String
		numeroescaleras: Int
	}

	type TopCliente {
		total: Float
		cliente: [Cliente]
	}

	type TopVendedor {
		total: Float
		vendedor: [Usuario]
	}

	input UsuarioInput {
		nombre: String!
		apellido: String!
		email: String!
		typeUser: String!
		password: String!
	}

	input AutenticarInput{
		email: String!
		password: String!
	}

	input ProductoInput {
		nombre: String!
		existencia: Int!
		precio: Float!
	}

	input ClienteInput {
		nombre: String!
		apellido: String!
		sucursal: String!
		email: String!
		telefono: String
		cisternasP: String
		m3P: String
		cisternasT: String
		m3T: String
		direccion: String
		jefeMantto: String
		telJefe: String
		emailJefe: String
		corporativo: String
	}
	input PedidoProductoInput {
		id: ID
		cantidad: Int
		nombre: String
		precio: Float
	}

	input PedidoInput {
		pedido: [PedidoProductoInput]
		total: Float
		cliente: ID
		estado: EstadoPedido
	}

	enum EstadoPedido {
		PROGRAMADO
		PENDIENTE
		COMPLETADO
		REAJENDADO
		CANCELADO
	}

	input CitaInput {
		estado: String
		fechaCita: String
		horaCita: String
		empresa: String
		telefono: String
		contacto: String
		correo: String
		cargo: String
		numCisternas: String
		tipoAgua: String
		capacidad: Int
		materialCist: String
		observaciones: String
	}

	enum StatusCliente {
		NUEVO
		REAJENDADO 
	}

	enum EstadoCita{
		AJENDADO
		CONCRETADO
		PENDIDENTE
		CANCELADA
	}

	enum Agua {
		POTABLE
		TRATADA
	}
	input ServicioInput {
		nombre: String
		prueba: String
		fecha: String
		horario: String
		dias: Int
		documentacion: String
		requisitosEquipo: String
		epp: String
		fechaUltimoServ: String
		observaciones: String
	}

	enum EstadoServicio {
		PROGRAMADO
		PENDIENTE
		COMPLETADO
		CANCELADO
	}

	input ReporteInput {
		nombreservicio: String!
		sedimento: String!
		objetos: String!
		piso: String!
		paredes: String!
		techo: String!
		succiones: String!
		numerosucciones: Int!
		escaleras: String!
		numeroescaleras: Int!
	}

	type Query {
		#Usuarios
		obtenerUsuario : Usuario

		#Productos
		obtenerProductos : [Producto] obtenerProducto(id: ID!) : Producto 

		#Clientes 
		obtenerClientes: [Cliente] obtenerClientesVendedor: [Cliente] 
		obtenerCliente(id: ID!): Cliente

		#Pedidos
		obtenerPedidos: [Pedido]
		obtenerPedidosVendedor: [Pedido]
		obtenerPedido(id: ID!) : Pedido
		obtenerPedidosEstado(estado: String!): [Pedido]

		#Servicios
		obtenerServicios: [Servicio]
		obtenerServicio(id: ID!) : Servicio

		#Citas
		obtenerCitas: [Cita]
		obtenerCita(id: ID!) : Cita

		# Busquedas Avanzadas
		mejoresClientes: [TopCliente]
		mejoresVendedores: [TopVendedor]
		buscarProducto(texto: String!) : [Producto]

		# Reportes
		obtenerReportes: [Reporte]
		obtenerReporte(id: ID!) : Reporte

	}

	type Mutation {
		# Usuarios
		nuevoUsuario(input: UsuarioInput): Usuario
		autenticarUsuario(input: AutenticarInput) : Token

		#Productos
		nuevoProducto(input: ProductoInput) : Producto
		actualizarProducto( id: ID!, input : ProductoInput ) : Producto
		eliminarProducto(id: ID!) : String

		# Clientes
		nuevoCliente( input: ClienteInput ) : Cliente
		actualizarCliente(id: ID!, input: ClienteInput): Cliente
		eliminarCliente(id: ID!) : String

		#Pedidos
		nuevoPedido(input: PedidoInput): Pedido
		actualizarPedido(id: ID!, input: PedidoInput): Pedido
		eliminarPedido(id: ID!) : String

		#Servicios
		nuevoServicio(input: ServicioInput) : Servicio
		actualizarServicio(id: ID!, input: ServicioInput) : Servicio
		eliminarServicio(id: ID!) : String

		#Citas
		nuevaCita(input: CitaInput) : Cita
		actualizarCita(id: ID!, input: CitaInput) : Cita
		eliminarCita(id: ID!) : String

		#Reportes
		nuevoReporte(input: ReporteInput) : Reporte
		actualizarReporte(id: ID!, input: ReporteInput) :Reporte
		eliminarReporte(id: ID!) : String
		
	}
`
module.exports = typeDefs
