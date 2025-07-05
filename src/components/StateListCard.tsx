// src/components/StateListCard.tsx
import React from 'react';
import type { StateMarketStatusData } from '../types';

interface StateListCardProps {
  data: StateMarketStatusData;
}

const StateListCard: React.FC<StateListCardProps> = ({ data }) => {
  return (
    <div className="state-list-card">
      <h3 className="text-xl font-bold text-gray-700 mb-3" dangerouslySetInnerHTML={{ __html: `${data.status} ${data.icon}` }}></h3>
      <ul className="list-disc list-inside text-gray-600 text-sm">
        {data.states.map((state, index) => (
          <li key={index}>{state}</li>
        ))}
      </ul>
    </div>
  );
};

export default StateListCard;