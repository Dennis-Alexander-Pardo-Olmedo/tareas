import { CONNECTES } from "./personalinformation ";

export class Task{
    name=' ';
    lastname='';
    email='';
    connected= true
    contacto=CONNECTES.CONECTADO
    constructor(name,lastname,email,connected,contacto){
        this.name=name;
        this.lastname=lastname;
        this.email=email;
        this.connected=connected;
        this.contacto=contacto;
    }
}