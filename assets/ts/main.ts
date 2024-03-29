import ValidaCPF from "./modulos/ValidaCPF";

let formulario: HTMLFormElement | null = document.querySelector(".formulario");

class ValidaFormulario {
  formulario: HTMLFormElement | null;

  constructor(formulario: HTMLFormElement | null) {
    this.formulario = formulario;
    this.eventos();
  }

  eventos(): void {
    if (this.formulario) {
      this.formulario.addEventListener("submit", (e) => {
        this.handleSubmit(e);
      });
    }
  }

  handleSubmit(e: SubmitEvent): void {
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

  senhasSaoValidas(): boolean {
    let valid = true;

    if (this.formulario) {
      const senha: HTMLInputElement | null =
        this.formulario.querySelector(".senha");

      const repetirSenha: HTMLInputElement | null =
        this.formulario.querySelector(".repetir-senha");

      if (senha && repetirSenha && senha.value !== repetirSenha.value) {
        valid = false;
        this.criaErro(senha, "senha e repetir senha precisam ser iguais!");
        this.criaErro(
          repetirSenha,
          "senha e repetir senha precisam ser iguais!"
        );
      }

      if (senha && repetirSenha && (senha.value.length < 3 || senha.value.length > 12)) {
        valid = false;
        this.criaErro(senha, "A senha precisa ter entre 3 e 12 caracteres!");
      }
    }

    return valid;
  }

  camposSaoValidos(): boolean {
    let valid = true;

    if (this.formulario) {
      // Remove os elementos textos de erros 
      for (let erroText of this.formulario.querySelectorAll(".erro-text")) {
        erroText.remove();
      }
  
      for (let campo of this.formulario.querySelectorAll(".validar")) {

        const label: HTMLLabelElement | null = campo.parentNode as HTMLLabelElement;
        const labelName = label.innerText; 
  
        if (campo instanceof HTMLInputElement) {
          if (!campo.value) {
            this.criaErro(campo, `O campo ${labelName} não pode estar vazio!`);
            valid = false;
          }

          if (campo.classList.contains("cpf")) {
            if (!this.validaCPF(campo)) valid = false;
          }

          if (campo.classList.contains("usuario")) {
            if (!this.validaUsuario(campo)) valid = false;
          }
        }
      }
    }

    return valid;
  }

  validaUsuario(campo: HTMLInputElement): boolean {
    const usuario = campo.value;
    let valid = true;
    if (usuario.length < 3 || usuario.length > 12) {
      this.criaErro(campo, "Usuário precisa ter entre 3 e 12 caracteres!");
      valid = false;
    }

    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(
        campo,
        "Usuário precisa conter apenas letras e/ou números!"
      );
      valid = false;
    }

    return valid;
  }

  validaCPF(campo: HTMLInputElement): boolean {
    const cpf: ValidaCPF = new ValidaCPF(campo.value);
    if (!cpf.valida()) {
      this.criaErro(campo, "CPF Inválido!");
      return false;
    }

    return true;
  }

  criaErro(campo: HTMLElement, msg: string): void {
    const div: HTMLDivElement = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("erro-text");
    campo.insertAdjacentElement("afterend", div);
  }
}

const valida = new ValidaFormulario(formulario);
