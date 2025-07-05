// src/components/MarketTypeCard.tsx
import React from 'react';
import type { MarketTypeData } from '../types';

interface MarketTypeCardProps {
  data: MarketTypeData;
}

const MarketTypeCard: React.FC<MarketTypeCardProps> = ({ data }) => {
  return (
    <div className="market-type-card">
      <h3 className="text-2xl font-bold text-gray-700 mb-3 text-center" dangerouslySetInnerHTML={{ __html: `${data.title} ${data.icon}` }}></h3>
      <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: data.description }}></p>
    </div>
  );
};

export default MarketTypeCard;