//document.getElementById("pe").innerHTML = "Estás viendo CE, CEE, y la regla de diagonales ";
var tf1 = false;

var ce = ["1s2","2s2","2p6","3s2","3p6","4s2","3d10","4p6","5s2","4d10","5p6","6s2","4f14","5d10","6p6","7s2","5f14","6d10","7p6","6f14","7d10","7f14"];
var cex = ["1s","2s","2p","3s","3p","4s","3d","4p","5s","4d","5p","6s","4f","5d","6p","7s","5f","6d","7p","6f","7d","7f"];
var nv1 = ["1s1"];
var nv2 = ["2s2","2p6"];
var nv3 = ["3s2","3p6","3d10"];
var nv4 = ["4s2","4p6","4d10","4f14"];
var nv5 = ["4s2","4p6","4d10","4f14"];
var nv6 = ["4s2","4p6","4d10","4f14"];
var nv7 = ["4s2","4p6","4d10","4f14"];



function deCeAElectron(lugarElectro) {
    return (lugarElectro.substr(2,lugarElectro.length));
}
function descubrirBloque(starr) {
    return (starr.substr(1,1));
}

function descubriNivel(cstarr) {
    return (cstarr.substr(0,1));
}
function restarAUnLugar(lugar, restación) {
    return (lugar.substr(0,2) + (parseInt(lugar.substr(2,lugar.length)-restación)))
}
function ListaCeToElectron(sttr){
    var sumar = 0;
    for(var p = 0; p <ce.length;p++){
        sumar = sumar + parseInt(deCeAElectron((ce[p])));
        if (sttr == ce[p]){

            break;
        }



    }
    return sumar;
}
function deCeAElectronFor(electronMax){

    var aux = 0;
    for(var e = 0; e<electronMax;e++){
        if(electronMax < ListaCeToElectron(ce[e])){

            if(electronMax == ListaCeToElectron(ce[e-1])){
                return ce[e-1] ;
            }else {
                aux = ListaCeToElectron(ce[e])-electronMax;

                return restarAUnLugar(ce[e],aux);
            }
        }

    }
}



function redondationing(strr){
    if(descubrirBloque(strr) == "s"){
        return strr.substr(0,2) + "2";
    }
    if(descubrirBloque(strr) == "p"){
        return strr.substr(0,2) + "6";
    }
    if (descubrirBloque(strr) == "d"){
        return strr.substr(0,2) + "10";
    }
    if(descubrirBloque(strr) == "f"){
        return strr.substr(0,2) + "14";
    }
}

function showAListString(strr){

    var list = "";
    for (var e = 0; e < ce.length ; e++) {
        if (ce[e] == redondationing(strr)){
            list = list + strr +" - " ;
            break;
        }
        list = list + ce[e]+" - " ;

    }
    return list;
}

function diagonar() {
    if(tf1==false){
        document.querySelector(".button").innerHTML = "Desaparecer Diagonales";
        for(var m = 0; m<22; m++){
            document.getElementById(String(m)).innerHTML = "<img src=\"a.png\" style=\"height: 40px; width: 40px\" alt=\"\">";
        }
        tf1 = true;

    }else{
        document.querySelector(".button").innerHTML = "Mostrar Diagonales";
        for(var m = 0; m<22; m++){
            document.getElementById(String(m)).innerHTML = "";
        }
        tf1 = false;
    }

}

function graficarCee(electronMax) {

    for (var m = 0; m < 22; m++) {
        document.getElementById(String(m)).innerHTML = "";
    }
    for (var v = 0; v < ce.length; v++) {
        document.getElementById(String(v)).innerHTML = "<img src=\"a.png\" style=\"height: 40px; width: 40px\" alt=\"\">";
        if (redondationing(deCeAElectronFor(electronMax)) === ce[v]) {//se rompeElCicloCuandoElLugarEsSoportadoPorElElectron{
            break;

        }


    }

}

function showAListArray(strr) {
    var list = [];
    for (var e = 0; e < ce.length ; e++) {
        if (ce[e] == redondationing(strr)){
            list.push(strr);
            break;
        }
        list.push(ce[e]);

    }
    return list;
}


function ceeSiD(electronMAX) {

    var list = showAListArray(redondationing(deCeAElectronFor(electronMAX)));
    var levelMax;
    //buscar el nivel más alto :v
    var aux1;
    var aux =0;
    var aux2 =0;
    var ultNvSub =[];
    for(var l = 0; l < list.length; l++){


        aux1 = parseInt(list[l].substr(0,1))
        if(aux1 > aux){
            aux = aux1;

        }
    }


    levelMax = aux;
var acount = 0;
    for(var n = 0; n < list.length; n++){
        acount++;
        aux2 = parseInt(list[n].substr(0,1))
        if(aux2 == levelMax){
            acount = 0;
            ultNvSub.push(list[n]) ;
        }


    }
    if(ultNvSub.length <2){
        if(acount < 1){
            return deCeAElectronFor(electronMAX);
        }else{
            return ultNvSub[0] + " - " + deCeAElectronFor(electronMAX);
        }
    }else{
        return "el nivel max es " + levelMax + " ver: "  + ultNvSub[0] +" - " + deCeAElectronFor(electronMAX) ;
    }
    //buscar repiticiones y guardar posion
    //si se repite utilizar los dos últimos





}

function ceeSiP(electronMAX) {

    var list = showAListArray(redondationing(deCeAElectronFor(electronMAX)));

    if(list.length < 3){
        return deCeAElectronFor(electronMAX);

    }else {
        var aux1 =  list[list.length-2] ;
        var aux2 =  deCeAElectronFor(electronMAX);
        if(aux1.substr(0,1)==aux2.substr(0,1) ){
            return String(list[list.length-2] +" - " +deCeAElectronFor(electronMAX));

        }else{
            return String(deCeAElectronFor(electronMAX));
        }

    }

}
function ceExterna(electronMax) {


    if(electronMax <= 20){
        return ceeSiP(electronMax);
    }else{
        return ceeSiD(electronMax);

    }



}


    var test = showAListArray("2s1");

function encontrarCe() {
   var pedir = prompt("Introduzca el número de electrones");

    var CEE = ceExterna(pedir);
   document.getElementById("result").innerText = "EL CE DE "+ pedir + " electrones es: "+showAListString(deCeAElectronFor(pedir)) + "\n y su CEE ES " + CEE;
    graficarCee(pedir);


}
 //alert("Pusiste"+aa); https://coolors.co/db2b39-29335c-f3a712-f0cea0-534d41