function TablaMultiplicar(){
    const n = document.getElementById("ValorMultiplicador").value;

    for (i = 1;i <= 10; i++){
        let multiplicacion = n * i;
         document.getElementById("ListaMultiplicacion").innerHTML += "<p>" + n + " * " + i + " = " + multiplicacion + "</p>";
    }
}