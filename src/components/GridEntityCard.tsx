// src/components/GridEntityCard.tsx
import React from 'react';
import type { GridEntityData } from '../types';
import LinkSection from './LinkSection';

interface GridEntityCardProps {
  data: GridEntityData;
}

const GridEntityCard: React.FC<GridEntityCardProps> = ({ data }) => {
  return (
    <div className="entity-card flex flex-col items-center text-center">
      <div className="entity-icon">{data.icon}</div>
      <h2 className="text-2xl font-bold text-gray-700 mb-3">{data.title}</h2>
      <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: data.description }}></p>
      {data.links && data.links.length > 0 && (
        <div className="mt-auto w-full"> {/* Push links to bottom */}
          {data.links.map((section, index) => (
            <LinkSection key={index} section={section} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GridEntityCard;