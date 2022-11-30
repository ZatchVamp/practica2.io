fetch("variables.json")
    .then(function(response){
        return response.json();
    })

.then(function(variables){
    let placerholder = document.querySelector("#data-output");
    let out="";
    for(let vari of variables){
        out+= `
            <tr>
                <td>${vari.id}</td>
                <td>${vari.nombre}</td>
                <td>${vari.apellido}</td>
            </tr>
        `
    }
    placerholder.innerHTML = out;
})