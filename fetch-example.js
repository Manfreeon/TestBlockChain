function handleResponse(resp){
    console.log(resp.status);

    if (!resp.ok)
        throw new Error('Errore Generico!!!');
    
    return resp;
}


function getAllPosts(){

    const URL_BASE = "https://jsonplaceholder.typicode.com/posts";

    let div = document.getElementById("all-container");
    let parag = "";
    let line = "";
    let header = new Headers();

    header.append("Accept","application/json")
    header.append("Content-Type","application/json");

    let request = new Request(URL_BASE,{
        method : "GET",
        headers : header
    });

    fetch(request)
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp);
            resp.forEach(elem => {
                line = `
                        Id :  ${elem.id} 
                        User ID : ${elem.userId} 
                        Title : ${elem.title}
                        `;
                parag += `<p>${line}</p>`;
            });
        })
        .catch(err => {
            console.log(err.message);
            parag += `<p>${err.message}</p>`;
        })
        .finally( () => div.innerHTML = parag);
}