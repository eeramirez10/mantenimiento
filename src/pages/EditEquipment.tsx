import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Equipment, Maintenance } from '../types';

interface EditEquipmentProps {
  equipments: Equipment[];
  onUpdate: (updatedEquipment: Equipment) => void;
}

const EditEquipment: React.FC<EditEquipmentProps> = ({ equipments, onUpdate }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const equipment = equipments.find((equip) => equip.id === Number(id));

  if (!equipment) {
    return <div className="p-8 text-center">Equipo no encontrado.</div>;
  }

  const [name, setName] = useState(equipment.name);
  const [type, setType] = useState(equipment.type);
  const [image, setImage] = useState<string | null>(equipment.image || null);
  const [maintenances, setMaintenances] = useState<Maintenance[]>(equipment.maintenances || []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const addMaintenance = () => {
    setMaintenances([...maintenances, { date: '', description: '' }]);
  };

  const handleMaintenanceChange = (index: number, field: keyof Maintenance, value: string) => {
    const updatedMaintenances = [...maintenances];
    updatedMaintenances[index][field] = value;
    setMaintenances(updatedMaintenances);
  };

  const removeMaintenance = (index: number) => {
    const updatedMaintenances = [...maintenances];
    updatedMaintenances.splice(index, 1);
    setMaintenances(updatedMaintenances);
  };

  const handleSave = () => {
    const updatedEquipment: Equipment = {
      ...equipment,
      name,
      type,
      image,
      maintenances,
    };
    onUpdate(updatedEquipment);
    navigate('/');
  };

  return (
    <div className="p-8 max-w-lg mx-auto bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Editar Equipo</h1>
      <input
        type="text"
        placeholder="Nombre del Equipo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Tipo de Equipo"
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="w-full text-sm text-gray-500 mb-4"
      />
      {image && <img src={image} alt="Preview" className="w-full h-40 object-cover rounded mb-4" />}
      <div>
        <h4 className="text-lg font-bold mt-4">Mantenimientos</h4>
        <button
          type="button"
          onClick={addMaintenance}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-2"
        >
          Agregar Mantenimiento
        </button>
        {maintenances.map((maintenance, index) => (
          <div key={index} className="space-y-2 mt-4">
            <input
              type="date"
              value={maintenance.date}
              onChange={(e) => handleMaintenanceChange(index, 'date', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Descripción"
              value={maintenance.description}
              onChange={(e) => handleMaintenanceChange(index, 'description', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => removeMaintenance(index)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Eliminar Mantenimiento
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={handleSave}
        className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mt-6"
      >
        Guardar Cambios
      </button>
    </div>
  );
};

export default EditEquipment;
