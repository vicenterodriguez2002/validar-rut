"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarRut = validarRut;
exports.validarRutSinPuntos = validarRutSinPuntos;
exports.validarRutConGuion = validarRutConGuion;
// EL RUT DEBE SER FORMATO: 11.111.111-1
function validarRut(rut) {
    // Eliminar puntos y guiones
    const cleanedRut = rut.replace(/[\.\-]/g, '');
    // Validar formato
    const rutPattern = /^\d{1,8}[Kk\d]$/;
    if (!rutPattern.test(cleanedRut)) {
        return false;
    }
    // Extraer cuerpo y dígito verificador
    const cuerpo = cleanedRut.slice(0, -1);
    const dv = cleanedRut.slice(-1).toUpperCase();
    // Calcular dígito verificador
    let suma = 0;
    let multiplicador = 2;
    for (let i = cuerpo.length - 1; i >= 0; i--) {
        suma += parseInt(cuerpo[i]) * multiplicador;
        multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
    }
    const resto = suma % 11;
    const dvCalculado = resto === 0 ? '0' : resto === 1 ? 'K' : (11 - resto).toString();
    return dv === dvCalculado;
}
// EL RUT DEBE SER FORMATO: 123456789
function validarRutSinPuntos(rut) {
    // Validar formato
    const rutPattern = /^\d{1,8}[Kk\d]$/;
    if (!rutPattern.test(rut)) {
        return false;
    }
    // Extraer cuerpo y dígito verificador
    const cuerpo = rut.slice(0, -1);
    const dv = rut.slice(-1).toUpperCase();
    // Calcular dígito verificador
    let suma = 0;
    let multiplicador = 2;
    for (let i = cuerpo.length - 1; i >= 0; i--) {
        suma += parseInt(cuerpo[i]) * multiplicador;
        multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
    }
    const resto = suma % 11;
    const dvCalculado = resto === 0 ? '0' : resto === 1 ? 'K' : (11 - resto).toString();
    return dv === dvCalculado;
}
// El rut debe ser validado con ejemplo 12345678-9
function validarRutConGuion(rut) {
    // Validar formato
    const rutPattern = /^\d{1,8}-[Kk\d]$/;
    if (!rutPattern.test(rut)) {
        return false;
    }
    // Extraer cuerpo y dígito verificador
    const [cuerpo, dv] = rut.split('-');
    const dvUpper = dv.toUpperCase();
    // Calcular dígito verificador
    let suma = 0;
    let multiplicador = 2;
    for (let i = cuerpo.length - 1; i >= 0; i--) {
        suma += parseInt(cuerpo[i]) * multiplicador;
        multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
    }
    const resto = suma % 11;
    const dvCalculado = resto === 0 ? '0' : resto === 1 ? 'K' : (11 - resto).toString();
    return dvUpper === dvCalculado;
}
