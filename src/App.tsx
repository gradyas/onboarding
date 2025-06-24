// src/App.tsx
import React from 'react';
import GridComponentCard from './components/GridComponentCard';
import GridEntityCard from './components/GridEntityCard';
import MarketTypeCard from './components/MarketTypeCard';
import StateListCard from './components/StateListCard';
import {
  GRID_COMPONENTS_DATA,
  KEY_ENTITIES_DATA,
  MARKET_TYPES_DATA,
  STATE_MARKET_STATUSES_DATA,
} from './data';

function App() {
  return (
    <div className="infographic-container p-6 bg-white shadow-xl rounded-xl">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-10 leading-tight">
        ⚡ The Electrical Grid: A Network of Power ⚡
      </h1>

      {/* Grid Components Section */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-8 mt-12 leading-tight">
        The Grid's Major Components
      </h2>
      <div className="mb-12 flex justify-center">
        <img
          src="/electricity_transmission_generation.jpg" // Image path relative to public/
          alt="Diagram showing electricity generation, transmission, and distribution"
          className="w-full max-w-2xl rounded-lg shadow-md"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            e.currentTarget.onerror = null; // Prevents infinite loop if placeholder also fails
            e.currentTarget.src = 'https://placehold.co/800x400/FFF/000?text=Image+Loading+Error';
          }}
          loading="lazy"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {GRID_COMPONENTS_DATA.map((component, index) => (
          <GridComponentCard key={index} data={component} />
        ))}
      </div>

      {/* Key Entities Section */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-8 mt-12 leading-tight">
        Key Entities Operating and Using the Grid
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {KEY_ENTITIES_DATA.map((entity, index) => (
          <GridEntityCard key={index} data={entity} />
        ))}
      </div>

      {/* Market Structures Section */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-8 mt-12 leading-tight">
        Market Structures: Regulated vs. Deregulated
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {MARKET_TYPES_DATA.map((marketType, index) => (
          <MarketTypeCard key={index} data={marketType} />
        ))}
      </div>

      {/* U.S. Electricity Market Status by State Section */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-8 mt-12 leading-tight">
        U.S. Electricity Market Status by State
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {STATE_MARKET_STATUSES_DATA.map((status, index) => (
          <StateListCard key={index} data={status} />
        ))}
      </div>

      <p className="text-center text-gray-500 text-sm mt-10">
        This infographic provides a simplified overview. The actual interactions within the electrical grid are highly dynamic and complex.
      </p>
    </div>
  );
}

export default App;