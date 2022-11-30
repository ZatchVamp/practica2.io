fetch("variables.json")
    .then(function(response){
        return response.json();
    })

.then(function(variables){
    let placerholder = document.querySelector("#data-output");
    let out="";
    for(let var of variables){
        out+= `
            <tr>
                <td>${var.id}</td>
                <td>${var.nombre}</td>
                <td>${var.apellido}</td>
            </tr>
        `
    }
    placerholder.innerHTML = out;
})