import React from 'react';

interface RoomCardProps {
  room: {
    number: number;
    patientName: string;
    age: number;
    visitors: number;
    sex: string;
    treatment: string;
  };
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 m-2">
      <h2 className="text-2xl font-bold text-center text-sky-500">{`Habitación ${room.number}`}</h2>
      <p><span>Paciente:</span>{`${room.patientName}`}</p>
      <p>Edad: <span>{`${room.age}`}</span></p>
      <p>Visitas: <span>{`${room.visitors}`}</span></p>
      <p>Sexo: <span>{`${room.sex}`}</span></p>
      <p>Tratamiento: <span>{`${room.treatment}`}</span></p>
    </div>
  );
};

export default RoomCard;
