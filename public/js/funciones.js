$(()=>{
	var formulario = $("form");
	var input = $('input[type="text"]');
	var lista = $("ul");

	const item = ({rojo,verde,azul}) => {
		return $("<li>")
		.append($("<span>").addClass("muestra").css("background-color", `rgb(${rojo},${verde},${azul})`)).append($("<span>").html(`${rojo},${verde},${azul}`));
	}
	//lista.append(item(0,0,255));prueba
//carga inicial de colores 
	$.ajax({
		method : "GET",
		url : "/colores",
		success : datos => {
			for(var i = 0; i < datos.length; i++){
				lista.append(item(datos[i]));
			}
		}
	});
	//envio del formulario 
	formulario.submit(evento => {
		evento.preventDefault();

		if(/^(\d{1,3},){2}\d{1,3}$/.test(input.val())){
			var datos = {
				rojo : Number(input.val().split(",")[0]),
				verde : Number(input.val().split(",")[1]),
				azul : Number(input.val().split(",")[2])
			}
			if(datos.rojo >= 0 && datos.rojo <= 255 && datos.verde >= 0 && datos.verde <= 255 && datos.azul >= 0 && datos.azul <= 255){
				$.ajax({
					method : "POST",
					url : "colores",
					data : JSON.stringify(datos),
					contentType : "application/json",
					success : res => {
						//console.log(res);
						if(res.resultado == "ok"){
							lista.append(item(datos));
						}
					}
				});
			}else{
				console.log("....mensaje de error...")

			}
		}else{
			console.log("....mensaje de error...")
		}
	});
});