/* Se tiene una cola en la cual se han repartido tickets con el orden de atención. Sin embargo, llegada la hora de inicio hay muchos “colados”, es por esto que se le ordena al vigilante que retire a todos aquellos que no tienen ticket. Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final.
Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira.
Cola: [
{ user:‘User1’, ticket:true },
{ user:‘User2’, ticket:true },
{ user:‘User3’, ticket:false },
{ user:‘User4’, ticket:true },
{ user:‘User5’, ticket:false },
{ user:‘User6’, ticket:false },
{ user:‘User7’, ticket:true },
{ user:‘User8’, ticket:true },
{ user:‘User9’, ticket:true },
{ user:‘User10’, ticket:false },
{ user:‘User11’, ticket:true },
];*/

class Cola {
    constructor() {
        this.cola = []
    }
    // Métodos
    enqueue(element) {
        this.cola.push(element)
    }
    dequeue() {
        return this.cola.shift()
    }
    isEmpty() {
        return this.cola.length === 0
    }
    peek() {
        return this.cola[0]
    }
    print() {
        console.log(this.cola)
    }
    front() {
        return this.cola[0]
    }
    back() {
        return this.cola[this.cola.length - 1]
    }
    size() {
        return this.cola.length
    }
}

function verificarBoleto(colaOriginal) {
    var ColaDeElementosRetirados = new Cola()
    var ColaDeElementosNoRetirados = new Cola()
 
    //Ciclo para verificar si el boleto es true o false
    for (var i = 0; i < colaOriginal.size(); i++) {
        var elemento = colaOriginal.cola[i]
        var valorTicket = elemento.ticket
        if (valorTicket === true) {
            ColaDeElementosNoRetirados.enqueue(elemento);
        } else {
            ColaDeElementosRetirados.enqueue(elemento);
        }
    }
    return[ColaDeElementosNoRetirados, ColaDeElementosRetirados]
}

//Generar cola
var colaOriginal = new Cola()
colaOriginal.enqueue({ user: 'User1', ticket: true });
colaOriginal.enqueue({ user: 'User2', ticket: true });
colaOriginal.enqueue({ user: 'User3', ticket: false });
colaOriginal.enqueue({ user: 'User4', ticket: true });
colaOriginal.enqueue({ user: 'User5', ticket: false });
colaOriginal.enqueue({ user: 'User6', ticket: false });
colaOriginal.enqueue({ user: 'User7', ticket: true });
colaOriginal.enqueue({ user: 'User8', ticket: true });
colaOriginal.enqueue({ user: 'User9', ticket: true });
colaOriginal.enqueue({ user: 'User10', ticket: false });
colaOriginal.enqueue({ user: 'User11', ticket: true });

//Genera la variable de las colas con y sin ticket
var [ColaDeElementosNoRetirados, ColaDeElementosRetirados] = verificarBoleto(colaOriginal)


//Muestra valores con Ticket
console.log("Cola de Usuarios con Ticket")
ColaDeElementosNoRetirados.print()

//Muestra valores sin Ticket
console.log("Cola de Usuarios sin Ticket")
ColaDeElementosRetirados.print()