// Campo personalizado asociado a un equipo
export interface CustomField {
  name: string; // Nombre del campo (e.g., "Número de serie")
  value: string; // Valor del campo (e.g., "12345ABC")
}

export interface Maintenance {
  date?: string; // Fecha del próximo mantenimiento (opcional)
  description: string; // Descripción del mantenimiento
  criteria?: {
    name: string; // Nombre del criterio (ejemplo: "Kilómetros recorridos")
    type: 'number' | 'date'; // Tipo de criterio (número o fecha)
    currentValue: number | string; // Valor actual (puede ser un número o una fecha)
    minValue?: number; // Valor mínimo (aplicable para números)
    maxValue?: number; // Valor máximo (aplicable para números)
  };
}

export interface Equipment {
  id: number; // Identificador único del equipo
  name: string; // Nombre del equipo
  type: string; // Tipo de equipo
  customFields: CustomField[]; // Lista de campos personalizados
  image?: string; // URL o base64 de la imagen del equipo (opcional)
  maintenances?: Maintenance[]; // Lista de mantenimientos asociados (opcional)
}
