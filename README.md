# Validar RUT Chileno 🇨🇱

Validador de RUT chileno compatible con JavaScript y TypeScript con soporte para diferentes formatos.

[![npm version](https://img.shields.io/npm/v/validar-rut-vicho.svg)](https://www.npmjs.com/package/validar-rut-vicho)
[![license](https://img.shields.io/npm/l/validar-rut-vicho)](LICENSE)

---

## 📦 Instalación

```bash
npm install validar-rut-vicho
```

## 🚀 Uso

### JavaScript (CommonJS)

```javascript
const { validarRut, validarRutSinPuntos, validarRutConGuion } = require('validar-rut-vicho');

// Formato con puntos y guión: 11.111.111-1
console.log(validarRut('12.345.678-9')); // true
console.log(validarRut('12.345.678-0')); // false

// Formato sin puntos: 123456789
console.log(validarRutSinPuntos('123456789')); // true
console.log(validarRutSinPuntos('123456780')); // false

// Formato con guión: 12345678-9
console.log(validarRutConGuion('12345678-9')); // true
console.log(validarRutConGuion('12345678-0')); // false
```

### JavaScript (ES Modules)

```javascript
import { validarRut, validarRutSinPuntos, validarRutConGuion } from 'validar-rut-vicho';

// Formato con puntos y guión: 11.111.111-1
console.log(validarRut('12.345.678-9')); // true

// Formato sin puntos: 123456789
console.log(validarRutSinPuntos('123456789')); // true

// Formato con guión: 12345678-9
console.log(validarRutConGuion('12345678-9')); // true
```

### TypeScript

```typescript
import { validarRut, validarRutSinPuntos, validarRutConGuion } from 'validar-rut-vicho';

const rut: string = '12.345.678-9';
const esValido: boolean = validarRut(rut);

console.log(`El RUT ${rut} es ${esValido ? 'válido' : 'inválido'}`);
```

## 📋 Funciones Disponibles

### `validarRut(rut: string): boolean`
Valida RUT en formato con puntos y guión.
- **Formato esperado**: `11.111.111-1`
- **Ejemplo**: `validarRut('12.345.678-9')` → `true`

### `validarRutSinPuntos(rut: string): boolean`
Valida RUT sin puntos ni guión.
- **Formato esperado**: `123456789`
- **Ejemplo**: `validarRutSinPuntos('123456789')` → `true`

### `validarRutConGuion(rut: string): boolean`
Valida RUT con guión pero sin puntos.
- **Formato esperado**: `12345678-9`
- **Ejemplo**: `validarRutConGuion('12345678-9')` → `true`

## ✅ Ejemplos de RUTs válidos

```javascript
// Con puntos y guión
validarRut('12.345.678-9');     // ✓ true
validarRut('9.876.543-2');      // ✓ true
validarRut('11.111.111-1');     // ✓ true

// Sin puntos
validarRutSinPuntos('123456789'); // ✓ true
validarRutSinPuntos('98765432');  // ✓ true
validarRutSinPuntos('111111111'); // ✓ true

// Con guión
validarRutConGuion('12345678-9'); // ✓ true
validarRutConGuion('9876543-2');  // ✓ true
validarRutConGuion('11111111-1'); // ✓ true
```

## 📝 Licencia

MIT © Vicente Rodríguez
