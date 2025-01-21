import { Equipment } from '../types';

const mockEquipments: Equipment[] = [
  {
    id: 1,
    name: 'Compresor Industrial',
    type: 'Industrial',
    image: 'https://america.sullair.com/sites/default/files/2021-04/ZE1_1461_1349x900x75.jpg',
    customFields: [
      { name: 'Número de Serie', value: 'C-12345' },
      { name: 'Ubicación', value: 'Planta 1' },
    ],
    maintenances: [
      {
        description: 'Cambio de filtro de aire',
        criteria: {
          name: 'Horas de operación',
          type: 'number',
          currentValue: 1500,
          minValue: 1000,
          maxValue: 2000,
        },
      },
      {
        description: 'Inspección general',
        criteria: {
          name: 'Fecha',
          type: 'date',
          currentValue: '2025-02-15',
        },
      },
    ],
  },
  {
    id: 2,
    name: 'Caldera de Vapor',
    type: 'Industrial',
    image: 'https://tse4.mm.bing.net/th?id=OIP.2vpgoaEpVmSbxEiUQ-6BgwHaE8&pid=Api&P=0&h=180',
    customFields: [
      { name: 'Capacidad', value: '2000L' },
      { name: 'Presión Máxima', value: '15 bar' },
    ],
    maintenances: [
      {
        description: 'Revisión de válvulas',
        criteria: {
          name: 'Ciclos de operación',
          type: 'number',
          currentValue: 3000,
          minValue: 2500,
          maxValue: 5000,
        },
      },
    ],
  },
  {
    id: 3,
    name: 'Motor Eléctrico',
    type: 'Eléctrico',
    image: 'https://hvhindustrial.com/images/frontend_images/blogs/1592499808Electric-Motor.jpg',
    customFields: [
      { name: 'Potencia', value: '50 HP' },
      { name: 'RPM', value: '1500' },
    ],
    maintenances: [
      {
        description: 'Cambio de aceite',
        criteria: {
          name: 'Kilómetros recorridos',
          type: 'number',
          currentValue: 12000,
          minValue: 10000,
          maxValue: 15000,
        },
      },
    ],
  },
  {
    id: 4,
    name: 'Vehículo de Empresa',
    type: 'Automóvil',
    image: 'https://img.remediosdigitales.com/1cffdc/vehiculo-comercial/450_1000.jpg',
    customFields: [
      { name: 'Placas', value: 'ABC-123' },
      { name: 'Marca', value: 'Toyota' },
    ],
    maintenances: [
      {
        description: 'Cambio de llantas',
        criteria: {
          name: 'Kilómetros recorridos',
          type: 'number',
          currentValue: 25000,
          minValue: 20000,
          maxValue: 30000,
        },
      },
      {
        description: 'Próximo servicio',
        criteria: {
          name: 'Fecha',
          type: 'date',
          currentValue: '2025-03-01',
        },
      },
    ],
  },
];

export default mockEquipments;
