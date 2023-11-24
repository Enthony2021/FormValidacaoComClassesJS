"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ValidaCPF_1 = __importDefault(require("./modulos/ValidaCPF"));
let formulario = document.querySelector(".formulario");
class ValidaFormulario {
    constructor(formulario) {
        this.formulario = formulario;
        this.eventos();
    }
    eventos() {
        if (this.formulario) {
            this.formulario.addEventListener("submit", (e) => {
                this.handleSubmit(e);
            });
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();
        if (camposValidos && senhasValidas) {
            if (this.formulario) {
                this.formulario.submit();
                alert("Formulário Enviado");
            }
        }
    }
    senhasSaoValidas() {
        let valid = true;
        if (this.formulario) {
            const senha = this.formulario.querySelector(".senha");
            const repetirSenha = this.formulario.querySelector(".repetir-senha");
            if (senha && repetirSenha && senha.value !== repetirSenha.value) {
                valid = false;
                this.criaErro(senha, "senha e repetir senha precisam ser iguais!");
                this.criaErro(repetirSenha, "senha e repetir senha precisam ser iguais!");
            }
            if (senha && repetirSenha && (senha.value.length < 3 || senha.value.length > 12)) {
                valid = false;
                this.criaErro(senha, "A senha precisa ter entre 3 e 12 caracteres!");
            }
        }
        return valid;
    }
    camposSaoValidos() {
        let valid = true;
        if (this.formulario) {
            // Remove os elementos textos de erros 
            for (let erroText of this.formulario.querySelectorAll(".erro-text")) {
                erroText.remove();
            }
            for (let campo of this.formulario.querySelectorAll(".validar")) {
                const label = campo.parentNode;
                const labelName = label.innerText;
                if (campo instanceof HTMLInputElement) {
                    if (!campo.value) {
                        this.criaErro(campo, `O campo ${labelName} não pode estar vazio!`);
                        valid = false;
                    }
                    if (campo.classList.contains("cpf")) {
                        if (!this.validaCPF(campo))
                            valid = false;
                    }
                    if (campo.classList.contains("usuario")) {
                        if (!this.validaUsuario(campo))
                            valid = false;
                    }
                }
            }
        }
        return valid;
    }
    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;
        if (usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, "Usuário precisa ter entre 3 e 12 caracteres!");
            valid = false;
        }
        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, "Usuário precisa conter apenas letras e/ou números!");
            valid = false;
        }
        return valid;
    }
    validaCPF(campo) {
        const cpf = new ValidaCPF_1.default(campo.value);
        if (!cpf.valida()) {
            this.criaErro(campo, "CPF Inválido!");
            return false;
        }
        return true;
    }
    criaErro(campo, msg) {
        const div = document.createElement("div");
        div.innerHTML = msg;
        div.classList.add("erro-text");
        campo.insertAdjacentElement("afterend", div);
    }
}
const valida = new ValidaFormulario(formulario);
