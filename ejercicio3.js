{
	document.addEventListener("DOMContentLoaded", init);
    let months=["enero","febrero","marzo","abril","mayo","junio","julio","agosto",
		"septiembre","octubre","noviembre","diciembre"];

    function init(){
        meses();
    }

	function meses() {
		document.getElementById('mostrar').innerHTML =  months;
		console.log(months);
	}
}