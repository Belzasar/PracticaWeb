/**
 * @param {Object} `obj` - receives to then return it
 * @return `obj` - return a formatted data
 */
function dataToAlert( obj ) {
	return obj.nombre +"\n"+ obj.apellido +"\n"+ obj.correo +"\n"+ obj.ciudad +"\n"+ obj.telefono;
}

/**
 * @return data on alert box	 
 */
function Datos() {
	var data, dataAlert;

	// data from inputs
	data = {
		nombre: document.querySelector("#nombre").value,
		apellido: document.querySelector("#apellido").value,
		correo: document.querySelector("#correo").value,
		ciudad: document.querySelector("#ciudad").value,
		telefono: document.querySelector("#telefono").value
	}

	// invoke dataToAlert() to get format
	dataAlert = dataToAlert( data );

	// reset input values
	document.querySelector('form').reset();

	// alert the data
	return alert(dataAlert);
}