// src/components/GridComponentCard.tsx
import React from 'react';
import type { GridComponentData } from '../types';

interface GridComponentCardProps {
  data: GridComponentData;
}

const GridComponentCard: React.FC<GridComponentCardProps> = ({ data }) => {
  return (
    <div className="component-card flex flex-col items-center text-center">
      <div className="entity-icon text-yellow-600">{data.icon}</div>
      <h3 className="text-2xl font-bold text-gray-700 mb-3">{data.title}</h3>
      <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: data.description }}></p>
    </div>
  );
};

export default GridComponentCard;