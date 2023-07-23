// Clase de objetos para los nombres de un solo nombre
class CombiUni {
	constructor(nombre) {
		this.nombre = nombre;
		this.activo = true;
	}
	mostrar() {
		console.log(this.nombre + apellido);
	}
}
// Clase de objetos para las combinaciones de dos nombres
class CombiDuo {
	constructor(pNombre, sNombre) {
		this.pNombre = pNombre;
		this.sNombre = sNombre;
		this.primerOrdenActivo = true;
		this.segundoOrdenActivo = true;
	}
	mostrar() {
		console.log(this.pNombre + " " + this.sNombre + apellido);
	}
	mostrar_inversion() {
		console.log(this.sNombre + " " + this.pNombre + apellido);
	}
	rechazar_primer_orden() {
		console.log("Rechazado");
	}
}

export {CombiUni, CombiDuo};