// TODO: AJAX = Peticiones Asincronas
// TODO: Objeto XMLHttpRequest
(()=>{
    // 1. Instancia del objeto XMLHttpRequest()
    const xhr = new XMLHttpRequest(),
        //Estas 2 variables son para manipular en el DOM
        $xhr = document.getElementById("xhr"),
        $fragment = document.createDocumentFragment();

    //  2. Asignar el o los eventos que vamos a manipular de la petici贸n
    xhr.addEventListener("readystatechange", e => { // El evento que usamos = onreadystatechange | Este evento se lanza cuando detecta algun cambio de estado
        // En esta callback se realiza la l贸gica
        if(xhr.readyState !== 4) return;
        console.log(xhr);
        
        if(xhr.status >= 200 && xhr.status < 300){
            console.log("脡xito");
            console.log(xhr.responseText);
            // $xhr.innerHTML = xhr.responseText;
            let json = JSON.parse(xhr.responseText); //Devuelve el JSON convertido en arreglo ( parse )
            console.log(json);

            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone} `;
                $fragment.appendChild($li);
            });

            $xhr.appendChild($fragment);

        }else{
            console.log("Error");
            let message = xhr.statusText || "Ocurri贸 un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        } ;

        //En esta parte se puede poner un 馃Loader - con el DOM
        console.log("Este mensaje cargar谩 de cualquier forma");
    });

    // 3. Instrucci贸n que va a abrir la petici贸n
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users"); // Recibe 2 parametros, el m茅todo de respuesta y la URL

    // 4. Enviar la petici贸n
    xhr.send();
})();
//Esto es una funci贸n anonima autoejecutable

/*
* * Notas:
?  las variables con $ hacen referencia a un elemento del DOM
!  Console.log comentados limpiando la consola para los otros metodos de AJAX 
*/

/* ------------------------------------------------------------------------------------------------------------------------------------------ */
// TODO: API Fetch



/*
* * Notas:
?  
!  
*/