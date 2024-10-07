import {Animal} from "./Animal.mjs";

// LEÓN
class Leon extends  Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }
    
    Rugir(){
        return this.sonido
    }    
};

// LOBO
class Lobo extends  Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }
    
    Aullar(){
        return this.sonido
    }    
};

// OSO
class Oso extends  Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }
    
    Grunir(){
        return this.sonido
    }    
};

// SERPIENTE
class Serpiente extends  Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }
    
    Sisear(){
        return this.sonido
    }
};

// ÁGUILA
class Aguila extends  Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }
    
   Chillar(){
        return this.sonido
    }
};

export { Leon, Lobo, Oso, Serpiente, Aguila };
