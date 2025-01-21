import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddEquipment from './pages/AddEquipment';
import EditEquipment from './pages/EditEquipment';
import { Equipment } from './types';
import Navbar from './components/Navbar';
import mockEquipments from './mocks/equipments';
import EquipmentDetails from './pages/EquipmentDetails';
import ScheduleMaintenance from './pages/ScheduleMaintenance';

const App: React.FC = () => {
  const [equipments, setEquipments] = useState<Equipment[]>(mockEquipments);

  const handleAdd = (equipment: Omit<Equipment, 'id'>) => {
    setEquipments([...equipments, { id: Date.now(), ...equipment }]);
  };

  const handleUpdate = (updatedEquipment: Equipment) => {
    setEquipments(
      equipments.map((equip) =>
        equip.id === updatedEquipment.id ? updatedEquipment : equip
      )
    );
  };

  const handleDelete = (id: number) => {
    setEquipments(equipments.filter((equip) => equip.id !== id));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home equipments={equipments} onDelete={handleDelete} />}
        />
        <Route path="/add" element={<AddEquipment onAdd={handleAdd} />} />
        <Route
          path="/edit/:id"
          element={<EditEquipment equipments={equipments} onUpdate={handleUpdate} />}
        />
        <Route
          path="/equipment/:id"
          element={<EquipmentDetails equipments={equipments} onUpdate={handleUpdate} />}
        />

        <Route
          path="/schedule-maintenance/:id"
          element={<ScheduleMaintenance equipments={equipments} onUpdate={handleUpdate} />}
        />

      </Routes>
    </Router>
  );
};

export default App;
