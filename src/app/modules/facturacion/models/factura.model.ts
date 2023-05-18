export interface Factura {
  id: number;
  establecimiento: string; // 001 - Codigo Establecimiento
  puntoEmision: string; // 001 - Numero de Caja
  numero: string; // 0000000001
  fecha: Date; // Fecha de Emision
  cliente?: Cliente
}

export interface Cliente {
  id: number;
  identificacion: string;
  nombre: string;
  email: string;
  telefono: string;
  direccion: string;
  estado_registro: boolean;
  estado: string;
}
/*
{ "Factura": {
  "IdFactura": "long",
  "Establecimiento": "string", // 001 - Codigo Establecimiento
  "PuntoEmision": "string", // 001 - Numero de Caja
  "NumeroFactura": "string", // 0000000001
  "Fecha": "date", // Fecha de Emision
  "Cliente": {
  "IdCliente": "long",
  "Identificacion": "string", // Cedula o RUC del Cliente
  "Nombre": "string", // Nombre del Cliente
  "Direccion": "string", // Direccion del Cliente
  "Telefono": "string", // Telefono del Cliente
  "Correo": "string" // Correo del Cliente
  },
  "Detalles": {
  "IdDetalle": "long",
  "Producto": {
  "IdProducto": "long",
  "Codigo": "string", // Codigo del Producto
  "Descripcion": "string",
  "Categoria": "string"
  },
  "Cantidad": "decimal", // Cantidad del Producto
  "UnidadMedida": "string", // Unidad de Medida
  "Precio": "decimal", // Precio del Producto
  "IVA": "decimal", // IVA autocalculado al producto
  "Subtotal": "decimal" // Subtotal del Producto
  },
  "Subtotal": "decimal", // Subtotal de la Factura
  "TotalIVA": "decimal", // Total IVA de la Factura
  "Total": "decimal" // Total de la Factura
}
}
*/
