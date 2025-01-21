import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Equipment, CustomField, Maintenance } from '../types';

interface EquipmentDetailsProps {
  equipments: Equipment[];
  onUpdate: (updatedEquipment: Equipment) => void;
}

const EquipmentDetails: React.FC<EquipmentDetailsProps> = ({ equipments, onUpdate }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const equipment = equipments.find((equip) => equip.id === Number(id));

  if (!equipment) {
    return <div className="p-8 text-center">Equipo no encontrado.</div>;
  }

  const [customFields, setCustomFields] = useState<CustomField[]>(equipment.customFields || []);
  const [maintenances, setMaintenances] = useState<Maintenance[]>(equipment.maintenances || []);

  const handleAddField = () => {
    setCustomFields([...customFields, { name: '', value: '' }]);
  };

  const handleFieldChange = (index: number, field: keyof CustomField, value: string) => {
    const updatedFields = [...customFields];
    updatedFields[index][field] = value;
    setCustomFields(updatedFields);
  };

  const handleDeleteField = (index: number) => {
    const updatedFields = [...customFields];
    updatedFields.splice(index, 1);
    setCustomFields(updatedFields);
  };

  const handleSaveFields = () => {
    const updatedEquipment: Equipment = { ...equipment, customFields };
    onUpdate(updatedEquipment);
    navigate(`/equipment/${equipment.id}`);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow rounded">
      <h1 className="text-3xl font-bold mb-4">{equipment.name}</h1>
      <p className="text-gray-700 text-lg mb-4">Tipo: {equipment.type}</p>
      {equipment.image && (
        <img
          src={equipment.image}
          alt={equipment.name}
          className="w-full h-64 object-cover rounded mb-4"
        />
      )}
      <h2 className="text-2xl font-bold mt-6">Campos Personalizados</h2>
      <ul className="divide-y divide-gray-200 mt-4">
        {customFields.map((field, index) => (
          <li key={index} className="py-4 flex justify-between items-center">
            <div className="flex-1">
              <input
                type="text"
                value={field.name}
                placeholder="Nombre del Campo"
                onChange={(e) => handleFieldChange(index, 'name', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={field.value}
                placeholder="Valor"
                onChange={(e) => handleFieldChange(index, 'value', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={() => handleDeleteField(index)}
              className="ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={handleAddField}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Agregar Campo
      </button>
      <button
        onClick={handleSaveFields}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 w-full"
      >
        Guardar Cambios
      </button>

      <h2 className="text-2xl font-bold mt-6">Mantenimientos</h2>
      {maintenances.length > 0 ? (
        <ul className="divide-y divide-gray-200 mt-4">
          {maintenances.map((maintenance, index) => (
            <li key={index} className="py-4">
              <p className="text-gray-700">
                <span className="font-semibold">Descripción:</span> {maintenance.description}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Criterio:</span>{' '}
                {maintenance.criteria?.name || 'No definido'}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Estado:</span>{' '}
                {maintenance.criteria?.type === 'number'
                  ? `Actual: ${maintenance.criteria.currentValue}, Min: ${maintenance.criteria.minValue}, Max: ${maintenance.criteria.maxValue}`
                  : maintenance.criteria?.currentValue || 'No definido'}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 mt-4">No hay mantenimientos registrados para este equipo.</p>
      )}
    </div>
  );
};

export default EquipmentDetails;
