
/************************************************************ 
    obtenerlista()
    -Hace petitición AJAX al servidor
    -cuando recogemos los datos llamamos la mètodo pintarTable()
*************************************************************/

function obtenerLista() {

    var region = document.getElementById("idSelectorContinente").value;
    var URL = "https://restcountries.eu/rest/v2/region/" + region;
    var peticionPaises = new XMLHttpRequest();              // Programamos una petición AJAX

    peticionPaises.onreadystatechange = function () {         //Programamos qué hacer cuando lleguen los datos

        if (peticionPaises.readyState === 4) {             //Cuando el estado es 4 significa que ya tenemos los datos
            var listadoPaises = JSON.parse(peticionPaises.responseText); //Metemos los datos en la variable listadoPaises
            pintarTabla(listadoPaises);                     //invocamos a la función pintarTabla y le pasamos esa lista
        }
    };

    peticionPaises.open("GET", URL, true);
    peticionPaises.send(null);
};


/************************************************************ 
    obtenerlista()
    -Hace petitición AJAX al servidor
    -cuando recogemos los datos llamamos a pintarEstaditicas()
*************************************************************/


function obtenerEstadisticas() {

    console.log("ENTRAMOS");
    var URL = "https://restcountries.eu/rest/v2/all"
    var peticionPaises = new XMLHttpRequest();

    peticionPaises.onreadystatechange = function () {

        if (peticionPaises.readyState === 4) {             //Cuando el estado es 4 significa que ya tenemos los datos
            var listadoPaises = JSON.parse(peticionPaises.responseText); //Metemos los datos en la variable listadoPaises
            pintarEstadisticas(listadoPaises);
        }
    };

    peticionPaises.open("GET", URL, true);
    peticionPaises.send(null);
};

    /*************************************************************************************
       pintarEstatiscas todos los datos(listadoPaises) 
       Esta funciòn recibe un JSON con TODOS los paises del mundo
    
       1. calculamos todos los datos estadisticos 
       2. pintamos la tabla del totol de poblascion por contiente
       3. pintamos la tabla del numero de pasies por continente
       4. pintamos la tabla del la población por continente                        
    *****************************************************************************************/

    function pintarEstadisticas(listadoPaises) {

        console.log("eNTRAMOS EN PINTAR");

        var numeroHabitantesAsia = 0;
        var numeroHabitantesEuropa = 0;
        var numeroHabitantesAfrica = 0;
        var numeroHabitantesAmerica = 0;

        var numeroPaisesAmerica = 0;
        var numeroPaisesAfrica = 0;
        var numeroPaisesAsia = 0;
        var numeroPaisesEuropa = 0;

        for (let pais of listadoPaises) {

            switch (pais.region) {
                case "Asia": numeroHabitantesAsia += pais.population;
                    numeroPaisesAsia++;
                    break;
                case "Europe": numeroHabitantesEuropa += pais.population;
                    numeroPaisesEuropa++;
                    break;
                case "Africa": numeroHabitantesAfrica += pais.population;
                    numeroPaisesAfrica++;
                    break;
                case "Americas": numeroHabitantesAmerica += pais.population;
                    numeroPaisesAmerica++;
                    break;
            }
        };

        var mediaEuropa = Math.round(numeroHabitantesEuropa / numeroPaisesEuropa);
        var mediaAsia = Math.round(numeroHabitantesAsia / numeroPaisesAsia);
        var mediaAmerica = Math.round(numeroHabitantesAmerica / numeroPaisesAmerica);
        var mediaAfrica = Math.round(numeroHabitantesAfrica / numeroPaisesAfrica);
    
        //************************************************************** */

        // 1-- pintamos la tabla del total polación por continete

        //************************************************************** */

        var tablaTotalPoblacion = document.getElementById("idTablaTotalPoblacion");
        tablaTotalPoblacion.innerHTML = '';

        var fila0 = document.createElement("TR");

        var cabecera1 = document.createElement("TH");
        var cabecera2 = document.createElement("TH");
        var cabecera3 = document.createElement("TH");
        var cabecera4 = document.createElement("TH");
        
        cabecera1.appendChild(document.createTextNode("Europa"));
        cabecera2.appendChild(document.createTextNode("Africa"));
        cabecera3.appendChild(document.createTextNode("Asia"));
        cabecera4.appendChild(document.createTextNode("America"));

        fila0.appendChild(cabecera1);
        fila0.appendChild(cabecera2);
        fila0.appendChild(cabecera3);
        fila0.appendChild(cabecera4);
      
        tablaTotalPoblacion.appendChild(fila0);


        var fila = document.createElement("TR");            // Fabrica un nodo tipo <tr>
        var columna1 = document.createElement("TD");
        var columna2 = document.createElement("TD");
        var columna3 = document.createElement("TD");
        var columna4 = document.createElement("TD");

        var texto = document.createTextNode(numeroHabitantesEuropa);     // Create a text node
        var texto2 = document.createTextNode(numeroHabitantesAfrica);
        var texto3 = document.createTextNode(numeroHabitantesAsia);
        var texto4 = document.createTextNode(numeroHabitantesAmerica);
        
        columna1.appendChild(texto);
        columna2.appendChild(texto2);
        columna3.appendChild(texto3);
        columna4.appendChild(texto4);
        
        
        fila.appendChild(columna1);
        fila.appendChild(columna2);
        fila.appendChild(columna3);
        fila.appendChild(columna4);
    
        tablaTotalPoblacion.appendChild(fila);

        //************************************************************** */

        //2.-- pintamos la tabla del numero de pasises por cotinente

        //************************************************************** */
                                                         
        var tablaNumeroPaises = document.getElementById("idTablaNumeroPaises");
        tablaNumeroPaises.innerHTML = '';               // borramos el contenido de la tabla

        var fila0 = document.createElement("TR");       // creamos una fila
        
        var cabecera1 = document.createElement("TH");   // creamos la columna 1
        var cabecera2 = document.createElement("TH");   // creamos la columna 2
        var cabecera3 = document.createElement("TH");   // creamos la columna 3
        var cabecera4 = document.createElement("TH");   // creamos la columna 4
        
        cabecera1.appendChild(document.createTextNode("Europa"));   // colocamos texto dentro de la columna
        cabecera2.appendChild(document.createTextNode("Africa"));   // colocamos texto dentro de la columna
        cabecera3.appendChild(document.createTextNode("Asia"));     // colocamos texto dentro de la columna
        cabecera4.appendChild(document.createTextNode("America"));  // colocamos texto dentro de la columna
        
        fila0.appendChild(cabecera1); //añadimos columna en la fila
        fila0.appendChild(cabecera2); //añadimos columna en la fila
        fila0.appendChild(cabecera3); //añadimos columna en la fila
        fila0.appendChild(cabecera4); //añadimos columna en la fila

        tablaNumeroPaises.appendChild(fila0); // Añadimos la fila a la tabla


        var fila0 = document.createElement("TR");            // Fabrica un nodo tipo 55555555<tr>
        
        var columna1 = document.createElement("TD");
        var columna2 = document.createElement("TD");
        var columna3 = document.createElement("TD");
        var columna4 = document.createElement("TD");

        columna1.appendChild(document.createTextNode(numeroPaisesEuropa));
        columna2.appendChild(document.createTextNode(numeroPaisesAfrica));
        columna3.appendChild(document.createTextNode(numeroPaisesAsia));
        columna4.appendChild(document.createTextNode(numeroPaisesAmerica));
        
        fila0.appendChild(columna1);
        fila0.appendChild(columna2);
        fila0.appendChild(columna3);
        fila0.appendChild(columna4);
        
        tablaNumeroPaises.appendChild(fila0);


        //************************************************************** */

        //3.-- pintamos la tabla del la polacion media por cotinente

        //************************************************************** */


        var tablaMediaPoblacion = document.getElementById("idTablaMediaPoblacion");
        tablaMediaPoblacion.innerHTML = '';

        var fila0 = document.createElement("TR");
        
        var cabecera1 = document.createElement("TH");
        var cabecera2 = document.createElement("TH");
        var cabecera3 = document.createElement("TH");
        var cabecera4 = document.createElement("TH");
        
        cabecera1.appendChild(document.createTextNode("Europa"));
        cabecera2.appendChild(document.createTextNode("Africa"));
        cabecera3.appendChild(document.createTextNode("Asia"));
        cabecera4.appendChild(document.createTextNode("America"));
        
        fila0.appendChild(cabecera1);
        fila0.appendChild(cabecera2);
        fila0.appendChild(cabecera3);
        fila0.appendChild(cabecera4);

        tablaMediaPoblacion.appendChild(fila0);

        var fila0 = document.createElement("TR");
        var columna1 = document.createElement("TD");
        var columna2 = document.createElement("TD");
        var columna3 = document.createElement("TD");
        var columna4 = document.createElement("TD");

        columna1.appendChild(document.createTextNode(mediaEuropa)); 
        columna2.appendChild(document.createTextNode(mediaAfrica));
        columna3.appendChild(document.createTextNode(mediaAsia));
        columna4.appendChild(document.createTextNode(mediaAmerica));
        
        fila0.appendChild(columna1);
        fila0.appendChild(columna2);
        fila0.appendChild(columna3);
        fila0.appendChild(columna4);


        tablaMediaPoblacion.appendChild(fila0);
    };

    /* pintarTabla(filla);
    Recibe un objecto JSON con TODO los pasies de un poblacionContinente
    En la tabla de sólo pintamos

    -nombre del pais
    -capital
    -nombre de la modeda offical */


    function pintarTabla(listadoPaises) {

        var tabla = document.getElementById("idLista");
        tabla.innerHTML = '';

        var fila0 = document.createElement("TR");
        var cabecera1 = document.createElement("TH");
        var cabecera2 = document.createElement("TH");
        var cabecera3 = document.createElement("TH");
        var cabecera4 = document.createElement("TH");
        
        var textoCabecera1 = document.createTextNode("Nompre del país");
        var textoCabecera2 = document.createTextNode("Capital");
        var textoCabecera3 = document.createTextNode("Poblacion");
        var textoCabecera4 = document.createTextNode("Moneda oficial");
        
        cabecera1.appendChild(textoCabecera1);
        cabecera2.appendChild(textoCabecera2);
        cabecera3.appendChild(textoCabecera3);
        cabecera4.appendChild(textoCabecera4);
        
        fila0.appendChild(cabecera1);
        fila0.appendChild(cabecera2);
        fila0.appendChild(cabecera3);
        fila0.appendChild(cabecera4);


        tabla.appendChild(fila0);


        for (pais of listadoPaises) {                            // esto es un bucle que da vuelta
            var listadoFronteras = pais.borders;
            var fila = document.createElement("TR");            // Fabrica un nodo tipo <tr>
            var columna1 = document.createElement("TD");
            var columna2 = document.createElement("TD");
            var columna3 = document.createElement("TD");
            var columna4 = document.createElement("TD");
            
            columna1.appendChild(document.createTextNode(pais.name));
            columna2.appendChild(document.createTextNode(pais.capital));
            columna3.appendChild(document.createTextNode(pais.population));
            columna4.appendChild(document.createTextNode(pais.currencies[0].name));
            
            fila.appendChild(columna1);
            fila.appendChild(columna2);
            fila.appendChild(columna3);
            fila.appendChild(columna4);

            tabla.appendChild(fila);
        };
    };
