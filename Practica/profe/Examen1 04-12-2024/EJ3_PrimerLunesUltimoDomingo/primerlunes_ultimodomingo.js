const ERROR_MES = "Mes incorrecto";

function primerLunesUltimoDomingo(año,mes){
	if (mes < 1 || mes > 12) {
		throw new Error(ERROR_MES);
	} else {
		let dia = 1;
		let lunes = "";
		let domingo = "";
		let mesAux = mes;
		let fecha = new Date(año, mes, dia);

		do {
			if (fecha.getDay() == 0 || fecha.getDay() == 1) {
				if (fecha.getDay() == 0) {
					domingo = fecha.getDay();
				} else if (fecha.getDay() == 1 && lunes == "") {
					lunes = fecha.getDay();
				}
			}
			fecha.setDate(fecha.getDate() + 1);
		} while(mes != mesAux);

		return {primerLunes: lunes, ultimoDomingo: domingo}; 
	}
}