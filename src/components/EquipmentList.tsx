import React from 'react';
import { Equipment } from '../types';
import EquipmentCard from './EquipmentCard';

interface EquipmentListProps {
  equipments: Equipment[];
  onDelete: (id: number) => void;
}

const EquipmentList: React.FC<EquipmentListProps> = ({ equipments, onDelete }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {equipments.map((equipment) => (
      <EquipmentCard
        key={equipment.id}
        equipment={equipment}
        onDelete={onDelete}
      />
    ))}
  </div>
);

export default EquipmentList;
