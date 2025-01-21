import React from 'react';
import EquipmentForm from '../components/EquipmentForm';
import { Equipment } from '../types';

interface AddEquipmentProps {
  onAdd: (equipment: Omit<Equipment, 'id'>) => void;
}

const AddEquipment: React.FC<AddEquipmentProps> = ({ onAdd }) => (
  <div className="p-8 max-w-lg mx-auto">
    <h1 className="text-2xl font-bold mb-4">Agregar Nuevo Equipo</h1>
    <EquipmentForm onSave={onAdd} />
  </div>
);

export default AddEquipment;
