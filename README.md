## LOGIN DEL SISTEMA
```ts
const url = http://localhost:8080/api/v1/authentication/singin
{
  "email": "user@user.com",
  "password": "user"
}
```

## CREAR NUEVO CIUDADANO
```ts
const url = http://localhost:8080/api/v1/user/create/ciudadano
{
  "dni": "72451278",
  "nombre": "Daniel",
  "apellido": "Carrasco",
  "correoElectronico": "daniel@gmail.com",
  "telefono": "987654321",
}
```

## CREAR CODIGO DE PAGO
```ts
const url = http://localhost:8080/api/v1/authentication/create/pago/
{
  "codigoPago": "A3123123",
  "estado": "PENDIENTE",
  "ciudadanoId": 3
}
```

## CREAR CODIGO DE ZONIFICACION
```ts
const url = http://localhost:8080/api/v1/user/save/codzonifcacion
{
  "estado": "DISPONIBLE",
  "numeroCodigo": "COD-2025-001",
  "ciudadanoDto": {
    "dni": "72451278"
  }
}
```

## CARGAR DATOS DE LA TABLA PARA VER EL ESTADO DEL FORMULARIO
