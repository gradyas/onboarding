// src/components/InterconnectionCard.tsx
import React from 'react';
import type { GridInterconnectionData } from '../types';

interface InterconnectionCardProps {
  data: GridInterconnectionData;
}

const InterconnectionCard: React.FC<InterconnectionCardProps> = ({ data }) => {
  return (
    <div className={`p-6 rounded-lg shadow-md border border-gray-200 ${data.colorClass}`}>
      <div className="flex items-center mb-3">
        <span className="text-3xl mr-3">{data.icon}</span>
        <h3 className="text-xl font-bold text-gray-800">{data.title}</h3>
      </div>
      <p className="text-gray-700">{data.description}</p>
    </div>
  );
};

export default InterconnectionCard;