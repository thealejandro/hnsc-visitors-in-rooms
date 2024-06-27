import React, { useState } from 'react';

interface Room {
  number: number;
  patientName: string;
  age: number;
  visitors: number;
  sex: string;
  treatment: string;
}

interface EditRoomFormProps {
  room: Room | null;
  onSave: (room: Room) => void;
  onCancel: () => void;
}

const EditRoomForm: React.FC<EditRoomFormProps> = ({ room, onSave, onCancel }) => {
  const [formData, setFormData] = useState(room || {
    number: 0,
    patientName: '',
    age: 0,
    visitors: 0,
    sex: '',
    treatment: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4 m-2">
      <label>
        Room Number:
        <input type="number" name="number" value={formData.number} onChange={handleChange} className="border p-2 rounded w-full" required />
      </label>
      <label>
        Patient Name:
        <input type="text" name="patientName" value={formData.patientName} onChange={handleChange} className="border p-2 rounded w-full" required />
      </label>
      <label>
        Age:
        <input type="number" name="age" value={formData.age} onChange={handleChange} className="border p-2 rounded w-full" required />
      </label>
      <label>
        Visitors:
        <input type="number" name="visitors" value={formData.visitors} onChange={handleChange} className="border p-2 rounded w-full" required />
      </label>
      <label>
        Sex:
        <select name="sex" value={formData.sex} onChange={handleChange} className="border p-2 rounded w-full" required>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <label>
        Treatment:
        <select name="treatment" value={formData.treatment} onChange={handleChange} className="border p-2 rounded w-full" required>
          <option value="Surgery">Surgery</option>
          <option value="Medicine">Medicine</option>
          <option value="Pediatrics">Pediatrics</option>
          <option value="Gynecology">Gynecology</option>
        </select>
      </label>
      <button type="submit" className="bg-green-500 text-white p-2 mt-2 rounded">Save</button>
      <button type="button" onClick={onCancel} className="bg-red-500 text-white p-2 mt-2 rounded">Cancel</button>
    </form>
  );
};

export default EditRoomForm;
