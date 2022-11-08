//Function Scope

function greeting(){
    let userName = "Ana";
    console.log(userName);

    if (userName === 'Ana'){
        console.log(`Hello ${userName}!`);
    }
}

greeting();

console.log(userName); // No se puede acceder a la variable fuera de la función