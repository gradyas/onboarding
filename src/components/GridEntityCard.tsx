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
      <p className="text-gray-600 text-sm mb-4"
        dangerouslySetInnerHTML={{ __html: data.description }} />
       
      {/* Display Grid Entity properties if they exist */}

      {data.generatorTypes && (
        <div className="mb-2">
          <h4 className="font-semibold text-gray-700 text-sm">Common Types:</h4>
          <p className="text-gray-600 text-sm">{data.generatorTypes.join(', ')}</p>
        </div>
      )}
      {data.fuelSources && (
        <div className="mb-2">
          <h4 className="font-semibold text-gray-700 text-sm">Primary Fuel Sources:</h4>
          <p className="text-gray-600 text-sm">{data.fuelSources.join(', ')}</p>
        </div>
      )}
      {data.dispatchability && (
        <div className="mb-2">
          <h4 className="font-semibold text-gray-700 text-sm">Dispatchability:</h4>
          <p className="text-gray-600 text-sm">{data.dispatchability}</p>
        </div>
      )}
      {data.typicalCapacity && (
        <div className="mb-2">
          <h4 className="font-semibold text-gray-700 text-sm">Typical Capacity:</h4>
          <p className="text-gray-600 text-sm">{data.typicalCapacity}</p>
        </div>
      )}
      {data.environmentalNote && (
        <div className="mb-2">
          <h4 className="font-semibold text-gray-700 text-sm">Environmental Note:</h4>
          <p className="text-gray-600 text-sm">{data.environmentalNote}</p>
        </div>
      )}

      {/* CORRECTED SYNTAX FOR THE LINKS SECTION BELOW */}
      {data.links && data.links.length > 0 && (
        <div className="mt-auto w-full"> {/* This div is opened */}
          <LinkSection sections={data.links || []} />
        </div> 
      )}
    </div>
  );
};

export default GridEntityCard;