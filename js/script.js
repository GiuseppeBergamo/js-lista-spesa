const listaSpesa = ["Uova", "Pane", "Latte", "Biscotti", "Pasta", "Affettati", "Formaggio", "Verdura", "Frutta"];

const containerLista = document.getElementById("lista");


let i = 0;

list = '';

while (i < listaSpesa.length) {
    list += `<li>${listaSpesa[i]}</li>`
    i++;
}


containerLista.innerHTML = list;

