"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidaCPF {
    constructor(cpfEnviado) {
        this.cpfLimpo = cpfEnviado.replace(/\D+/g, "");
    }
    éSequência() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = this.geraDigito(cpfSemDigitos);
        const digito2 = this.geraDigito(cpfSemDigitos + digito1);
        const novoCPF = cpfSemDigitos + digito1 + digito2;
        return novoCPF;
    }
    geraDigito(cpfSemDigito) {
        let total = 0;
        let reverso = cpfSemDigito.length + 1;
        for (let stringNumerica of cpfSemDigito) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : "0";
    }
    valida() {
        if (!this.cpfLimpo)
            return false;
        if (typeof this.cpfLimpo !== "string")
            return false;
        if (this.cpfLimpo.length !== 11)
            return false;
        if (this.éSequência())
            return false;
        this.geraNovoCpf();
        return this.geraNovoCpf() === this.cpfLimpo;
    }
}
exports.default = ValidaCPF;
