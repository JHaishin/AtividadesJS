class Dispositivo {
    constructor(modelo, categoria, serial) {
        this.modelo = modelo;
        this.categoria = categoria;
        this.serial = serial;
        this.disponivel = true; // Inicialmente definimos como disponível
    }

    emprestar() {
        if (this.disponivel) {
            this.disponivel = false;
            return true;
        } else {
            return false;
        }
    }

    devolver() {
        this.disponivel = true;
    }
}


class CentroDeEmprestimos {
    constructor() {
        this.inventario = []; // Inicialmente está vazio
    }

    adicionarDispositivo(dispositivo) {
        this.inventario.push(dispositivo);
    }

    verificarDispositivo(serial) {
        for (let dispositivo of this.inventario) {
            if (dispositivo.serial === serial) {
                return dispositivo;
            }
        }
        return null;
    }

    emprestarDispositivo(serial) {
        let dispositivo = this.verificarDispositivo(serial);
        if (dispositivo && dispositivo.emprestar()) {
            return true; 
            console.log("Empréstimo bem-sucedido");
        } else {
            return false;
            console.log("Emprestimo falhou");
        }
    }

    devolverDispositivo(serial) {
        let dispositivo = this.verificarDispositivo(serial);
        if (dispositivo) {
            dispositivo.devolver();
            return true; 
            console.log("Devolução bem-sucedida");
        } else {
            return false;
            console.log("Dispositivo não encontrado para devolução");
        }
    }
}

imprimirInventario() ;{
    console.log("Inventário:");
    for (let dispositivo of this.inventario) {
        console.log("Modelo: ${dispositivo.modelo}, Categoria: ${dispositivo.categoria}, Serial: ${dispositivo.serial}, Disponível: ${dispositivo.disponivel}");
    }
}

let centroEmprestimos = new CentroDeEmprestimos();


let dispositivo1 = new Dispositivo("Iphone 12", "smartphone", "ABC123");
let dispositivo2 = new Dispositivo("AMD Ryzen 5500", "pc", "XYZ098");
let dispositivo3 = new Dispositivo("Tecpix", "câmera", "TVD345");

centroEmprestimos.adicionarDispositivo(dispositivo1);
centroEmprestimos.adicionarDispositivo(dispositivo2);
centroEmprestimos.adicionarDispositivo(dispositivo3);