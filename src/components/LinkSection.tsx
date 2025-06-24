// src/components/LinkSection.tsx
import React from 'react';
import type { LinksSection as LinksSectionType } from '../types'; // Renamed to avoid conflict

interface LinkSectionProps {
  section: LinksSectionType;
}

const LinkSection: React.FC<LinkSectionProps> = ({ section }) => {
  return (
    <div className="links-section">
      <h4>{section.heading}</h4>
      <ul>
        {section.links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkSection;