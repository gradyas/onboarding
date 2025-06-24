// src/data.ts
import type { GridComponentData, GridEntityData, MarketTypeData, StateMarketStatusData } from './types';

export const GRID_COMPONENTS_DATA: GridComponentData[] = [
  {
    icon: '💡',
    title: 'Generation',
    description: 'Electricity is <strong>produced at power plants</strong> using energy sources such as fossil fuels, nuclear, hydro, wind, or solar. This is where the power originates.',
  },
  {
    icon: '🔗',
    title: 'Transmission',
    description: 'Electricity is <strong>transmitted over long distances at high voltages</strong> (e.g., 110–765 kV) to reduce energy loss due to resistance in the wires. Higher voltage allows more efficient transport of electricity with less heat loss.',
  },
  {
    icon: '🏘️',
    title: 'Distribution',
    description: 'Near the point of use, the high voltage is <strong>stepped down using transformers</strong> to lower, safer voltages (e.g., 4–25 kV for local distribution, and 120/240V for homes and small businesses). Lower voltage is safer for consumers and compatible with end-use equipment.',
  },
];

export const KEY_ENTITIES_DATA: GridEntityData[] = [
  {
    icon: '🏭',
    title: 'Power Generators',
    description: 'Companies or public utilities that operate <strong>power plants</strong> and produce electricity from various sources (e.g., gas, coal, nuclear, hydro, wind, solar). They are the <strong>origin point</strong> of electricity.',
    links: [
      {
        heading: 'New England Resources:',
        links: [{ title: 'ISO-NE Generation Mix', url: 'https://www.iso-ne.com/about/what-we-do/what-we-operate/the-grid/generation-mix/' }],
      },
    ],
  },
  {
    icon: '🗼',
    title: 'Transmission & Distribution Utilities',
    description: 'These companies own and operate the <strong>physical infrastructure</strong> (lines, substations) that move electricity from generators to consumers. They are the <strong>backbone</strong> of power delivery.',
    links: [
      {
        heading: 'New England Resources:',
        links: [
          { title: 'Eversource Energy (CT, MA, NH)', url: 'https://www.eversource.com/' },
          { title: 'National Grid (MA, RI, NH)', url: 'https://www.nationalgridus.com/' },
          { title: 'Central Maine Power (ME)', url: 'https://www.cmpco.com/' },
          { title: 'Green Mountain Power (VT)', url: 'https://greenmountainpower.com/' },
        ],
      },
    ],
  },
  {
    icon: '📊',
    title: 'Independent System Operators (ISOs) / RTOs',
    description: "Nonprofit entities that <strong>operate the grid</strong> and manage <strong>wholesale electricity markets</strong> across large regions. They ensure reliability, balance supply/demand, and coordinate market access. Think of them as the <strong>grid's air traffic controllers</strong>.",
    links: [
      {
        heading: 'New England Resource:',
        links: [{ title: 'ISO New England (ISO-NE)', url: 'https://www.iso-ne.com/' }],
      },
    ],
  },
  {
    icon: '🏢',
    title: 'Retail Electricity Providers / Utilities',
    description: 'Companies that <strong>sell electricity directly to end users</strong>, manage billing, metering, and provide customer service. In some markets, they are separate from the delivery utilities. They are the <strong>direct link</strong> to the consumer.',
    links: [
      {
        heading: 'New England Resources:',
        links: [
          { title: 'MA DPU Electric Supply', url: 'https://www.mass.gov/info-details/electric-supply-resources' },
          { title: 'CT PURA Electric Supplier', url: 'https://portal.ct.gov/PURA/Electric/Electric-Customer-Choice/Choose-an-Electric-Supplier' },
          { title: 'Search your state\'s PUC for more.', url: '#' },
        ],
      },
    ],
  },
  {
    icon: '⚖️',
    title: 'Regulators',
    description: 'Government bodies like <strong>FERC</strong> (federal) and state <strong>PUCs</strong> (public utility commissions) that oversee market rules, grid reliability, utility performance, and <strong>consumer protection</strong>. They provide <strong>oversight</strong>.',
    links: [
      {
        heading: 'New England Resources:',
        links: [
          { title: 'FERC (Federal)', url: 'https://www.ferc.gov/' },
          { title: 'CT PURA', url: 'https://portal.ct.gov/PURA' },
          { title: 'ME MPUC', url: 'https://www.maine.gov/mpuc/' },
          { title: 'MA DPU', url: 'https://www.mass.gov/orgs/department-of-public-utilities' },
          { title: 'NH PUC', url: 'https://www.puc.nh.gov/' },
          { title: 'RI PUC', url: 'http://www.ripuc.ri.gov/' },
          { title: 'VT PUC', url: 'https://puc.vermont.gov/' },
        ],
      },
    ],
  },
  {
    icon: '🏠',
    title: 'Consumers (End Users) / Prosumers',
    description: '<strong>Residential, commercial, and industrial</strong> users of electricity. Some are now "prosumers" – producing electricity (e.g., via solar panels) and feeding it back into the grid. They are the <strong>ultimate demand</strong> for power.',
    links: [
      {
        heading: 'New England Prosumer Resources:',
        links: [
          { title: 'DSIRE (State Incentives)', url: 'https://programs.dsireusa.org/' },
          { title: 'Eversource Solar Info (CT example)', url: 'https://www.eversource.com/content/ct-c/residential/save-money-energy/explore-solar' },
          { title: 'Check your local utility for interconnection policies.', url: '#' },
        ],
      },
    ],
  },
];

export const MARKET_TYPES_DATA: MarketTypeData[] = [
  {
    icon: '🏛️',
    title: 'Regulated Market',
    description: 'In a <strong>regulated electricity market</strong>, a <strong>single utility company</strong> controls all aspects of electricity service—<strong>generation, transmission, distribution, and retail</strong>. Prices are set by <strong>government regulators</strong> (like PUCs) to ensure fairness and reliability. This model prioritizes stability and consumer protection through oversight.',
  },
  {
    icon: '⚖️',
    title: 'Deregulated Market',
    description: 'In contrast, a <strong>deregulated market</strong> separates generation and retail from transmission and distribution. This allows <strong>multiple competing electricity providers</strong> to sell power to consumers, who can <strong>choose their supplier</strong>. Prices are determined by <strong>supply and demand</strong>, which can drive innovation and lower costs but may also expose consumers to greater price volatility.',
  },
];

export const STATE_MARKET_STATUSES_DATA: StateMarketStatusData[] = [
  {
    status: 'Fully Deregulated',
    icon: '⚡',
    states: [
      'Texas (ERCOT)', 'Illinois', 'Ohio', 'Pennsylvania', 'New York', 'New Jersey', 'Maryland',
      'Massachusetts', 'Connecticut', 'Delaware', 'Maine', 'New Hampshire', 'Rhode Island',
    ],
  },
  {
    status: 'Partially Deregulated',
    icon: '🌓',
    states: [
      'California (limited retail choice and community choice aggregation)', 'Michigan (limited to ~10% load)',
      'Virginia (limited commercial choice)', 'Arizona (partial)', 'Nevada (partial)',
    ],
  },
  {
    status: 'Fully Regulated',
    icon: '🔒',
    states: [
      'Alabama', 'Alaska', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Indiana', 'Iowa', 'Kansas',
      'Kentucky', 'Louisiana', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'New Mexico',
      'North Carolina', 'North Dakota', 'Oklahoma', 'Oregon', 'South Carolina', 'South Dakota',
      'Tennessee', 'Utah', 'Vermont', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
    ],
  },
];