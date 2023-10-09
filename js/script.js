const NUMERO_SEDES = 5;
const NUMERO_PARTIDOS = 4;

var resultados=new Array(NUMERO_PARTIDOS+1);

function generaAleatorioMinMax(min,max){
    return Math.round(Math.random()*(max-min+1))+min;
}

function iniciaDatos(){
    
    resultados[0]=["","Ayuntamiento","Polideportivo","Instituto","Mercado","Colegio"];
    
    for(var i=1;i<resultados.length;i++){
         resultados[i]=new Array(NUMERO_SEDES+1);
     }
     resultados[1][0]="PV";
     resultados[2][0]="OV";
     resultados[3][0]="VpSI";
     resultados[4][0]="UPV"; 
     
     for(var i=1;i<resultados.length;i++){
         for(var j=1;j<resultados[i].length;j++)
             resultados[i][j]=generaAleatorioMinMax(5,10);
     }   
     console.table(resultados);
     mostrarVotosPorPartido();
     mostrarVotosPorSede();
     mostrarOrdenados();
}

 
function mostrarVotosPorPartido(){
 document.write("Numero de votos por partido:"+"<br>");
 for(var i=1;i<resultados.length;i++){
     var total=0;
     for(var j=1;j<resultados[i].length;j++)
         total+=resultados[i][j];
     document.write("  "+resultados[i][0]+" --> "+total+"<br>");
}
}
function mostrarVotosPorSede(){
document.write("<br>Numero de votos por sede:"+"<br>");
 for(var j=1;j<resultados[0].length;j++){
     var total=0;
     for(var i=1;i<resultados.length;i++)
         total+=resultados[i][j];
    document.write("  "+resultados[0][j]+" --> "+total+"<br>");
}
}
var resultadosPartidos=[];
function mostrarOrdenados(){

 for(var i=1;i<resultados.length;i++){
     var total=0;
     for(var j=1;j<resultados[i].length;j++)
         total+=resultados[i][j];
     resultadosPartidos.push(new Array(resultados[i][0],total));
}

document.write("<br>Resultados ordenados (descendentemente):<br>");
resultadosPartidos.sort(ordenaPartidos);
for(var i=0;i<resultadosPartidos.length;i++){
    document.write(resultadosPartidos[i][0]+"-->"+resultadosPartidos[i][1]+"<br>");
}

}
function ordenaPartidos(a,b){
    return b[1]-a[1];
        
}

window.onload=iniciaDatos;