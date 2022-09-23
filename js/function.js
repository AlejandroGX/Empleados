class Calculos{
	constructor(){
		this.emp = new Empleado;
	}

	darEmpleado(){
		return this.emp;
	}

	modSalario(sal){
		this.emp.csalario(sal);
	}

	calcularEdad(anoN,mesN,diaN,anoA,mesA,diaA){
		this.emp.cedad(anoN,mesN,diaN,anoA,mesA,diaA);
	}

	calcularAntiguedad(anoI,mesI,diaI,anoA,mesA,diaA){
		this.emp.cantiguedad(anoI,mesI,diaI,anoA,mesA,diaA);
	}

	calcularPrestaciones(presS,presA){
		this.emp.cprestaciones(presS,presA);
	}

	calcularSAnual(sasal){
		this.emp.csanual(sasal);
	}

	calcularPrima(pri){
		this.emp.cprimaconst(pri);
	}

	calcularPrim(prim,pris){
		this.emp.cprimavar(prim,pris);
	}

}

class Empleado{
	constructor(nomre,apellido,sexo){
		this.nombre = nombre;
		this.apellido = apellido;
		this.sexo = sexo;
		this.nacimiento = 0;
		this.ingreso = 0;
		this.sala = 0;
		this.calculoEdad = 0;
		this.calculoAntiguedad = 0;
		this.calculoPrestaciones = 0;
		this.calculoSAnual = 0;
		this.calculoPrima = 0;
		this.calculoPrimav = 0;


	}

	darNombre(){
		return this.nombre;
	}

	darApellido(){
		return this.apellido;
	}

	darSexo(){
		return this.sexo;
	}

	darNacimiento(){
		return this.nacimiento;
	}

	darIngreso(){
		return this.ingreso;
	}

	darSalario(){
		return this.salario;
	}

	darCalculoEdad(){
		return this.calculoEdad;
	}

	darCalculoAntiguedad(){
		return this.calculoAntiguedad;
	}

	darCalculoPrestaciones(){
		return this.calculoPrestaciones;
	}

	darCalculoSAnual(){
		return this.calculoSAnual;
	}

	darCalculoPrima(){
		return this.calculoPrima;
	}

	darCalculoPrimav(){
		return this.calculoPrimav;
	}

	csalario(sal){
		this.salario = sal;
	}

	cedad(anoN,mesN,diaN,anoA,mesA,diaA){
		let eda = anoA - anoN;
		if (mesA > mesN) {
			eda--;
	        this.calculoEdad = eda+1;
	    } else if (mesA < mesN) {
	        	eda--;
	            this.calculoEdad = eda;
	        }else if(mesA == mesN){
	        		if (diaA < diaN) {
	        			eda--;
	            		this.calculoEdad = eda;
	    			} else{
	    				eda--;
	            		this.calculoEdad = eda+1;
	    			}
	    	}
	}

	cantiguedad(anoI,mesI,diaI,anoA,mesA,diaA){
		let anti = anoA - anoI;
		if (mesA > mesI) {
			anti--;
	        this.calculoAntiguedad = anti+1;
	    } else if (mesA < mesI) {
	        	anti--;
	            this.calculoAntiguedad = anti;
	        }else if(mesA == mesI){
	        		if (diaA < diaI) {
	        			anti--;
	            		this.calculoAntiguedad = anti;
	    			} else{
	    				anti--;
	            		this.calculoAntiguedad = anti+1;
	    			}
	    	}
	}

	cprestaciones(presS,presA){
		this.calculoPrestaciones = (presS*presA)/12;
	}

	csanual(sasal){
		this.calculoSAnual = sasal*12;
	}

	cprimaconst(pri){
		this.calculoPrima = (pri*180)/360;
	}

	cprimavar(prim,pris){
		if(pris!=0){	
			if(pris>0 && pris<180){
				this.calculoPrimav = (prim*pris)/360;
			}else {
				alert("Datos incorrectos, debe ser menos de 180 dias");
			}
		} else{
			alert("Debe llenar todos los campos");
		}
	}

}

let cal = new Calculos();

function salarioM(){
	let sala = document.getElementById('salario').value;
	cal.modSalario(parseInt(sala));
	const s = cal.darEmpleado().darSalario();
	alert('Nuevo salario $'+sala);
}

function calEdad(){
	let fechaNacimiento = document.getElementById("nacimiento").value;
    const anoNacimiento = parseInt(String(fechaNacimiento).substring(0, 4));
    const mesNacimiento = parseInt(String(fechaNacimiento).substring(5, 7));
    const diaNacimiento = parseInt(String(fechaNacimiento).substring(8, 10));

    const fechaActual = new Date();
    const anoActual = parseInt(fechaActual.getFullYear());
    const mesActual = parseInt(fechaActual.getMonth()) + 1;
    const diaActual = parseInt(fechaActual.getDate());

    cal.calcularEdad(anoNacimiento, mesNacimiento, diaNacimiento, anoActual, mesActual, diaActual);
    let e = cal.darEmpleado().darCalculoEdad();
    document.getElementById('cal_edad').value = e;   
}

function calAntiguedad(){
	let fechaIngreso = document.getElementById("ingreso").value;
    const anoIngreso = parseInt(String(fechaIngreso).substring(0, 4));
    const mesIngreso = parseInt(String(fechaIngreso).substring(5, 7));
    const diaIngreso = parseInt(String(fechaIngreso).substring(8, 10));

    const fechaActual = new Date();
    const anoActual = parseInt(fechaActual.getFullYear());
    const mesActual = parseInt(fechaActual.getMonth()) + 1;
    const diaActual = parseInt(fechaActual.getDate());

    cal.calcularAntiguedad(anoIngreso, mesIngreso, diaIngreso, anoActual, mesActual, diaActual);
    let a = cal.darEmpleado().darCalculoAntiguedad();
    document.getElementById('cal_anti').value = a;
}

function calPrestaciones(){
	let psal = document.getElementById("salario").value;
	let pant = document.getElementById("cal_anti").value;
	cal.calcularPrestaciones(psal, pant);
	const p = cal.darEmpleado().darCalculoPrestaciones();
	document.getElementById('cal_pres').value = p;
}

function calSalAnual(){
	let sanualsal = document.getElementById("salario").value;
	cal.calcularSAnual(sanualsal);
	const sa = cal.darEmpleado().darCalculoSAnual();
	document.getElementById('cal_sanual').value = sa;
}

function calPrima(){
	if(document.getElementById('todosD').checked){
		let prima = document.getElementById("salario").value;
		cal.calcularPrima(prima);
		const pr = cal.darEmpleado().darCalculoPrima();
		document.getElementById('cal_prima').value = pr;
	}

	if(document.getElementById('porD').checked){
		let prima2 = document.getElementById("salario").value;
		let prisal = 0;
		prisal = document.getElementById('diasTra').value;
		cal.calcularPrim(prima2, prisal);
		const pr2 = cal.darEmpleado().darCalculoPrimav();
		document.getElementById('cal_prima').value = pr2;
	}
}


