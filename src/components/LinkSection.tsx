// src/components/LinkSection.tsx
import React from 'react';
// Import both LinksSection and Link types. Using 'as' aliases for clarity.
import type { LinksSection as LinksSectionType, Link as LinkType } from '../types';

interface LinkSectionProps {
  // Changed from 'section' to 'sections' and type to an ARRAY,
  // because GridEntityCard passes an array of LinksSectionType
  sections: LinksSectionType[];
}

const LinkSection: React.FC<LinkSectionProps> = ({ sections }) => {
  return (
    <div className="links-section">
      {/* Map over the array of LinkSectionType objects */}
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-4"> {/* Added a div to wrap each link group for spacing */}
          <h4 className="font-semibold text-gray-700 text-sm mb-2">{section.title}</h4> {/* Correct: use section.title */}
          <ul>
            {/* Map over the 'urls' array of each section */}
            {section.urls.map((link: LinkType, linkIndex) => ( 
              <li key={linkIndex}> {/* <--- The 'key' prop is where the 'linkIndex' is used */}


                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {link.text} {/* Correct: use link.text for the display text */}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default LinkSection;