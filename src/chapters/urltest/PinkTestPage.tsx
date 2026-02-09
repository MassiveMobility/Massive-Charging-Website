/* src/chapters/urltest/PinkTestPage.tsx */

import React from 'react';
import './PinkTestTheme.css'; // <--- Importing the Pink Styles
import { MousePointer2, Ban } from 'lucide-react'; // Icons

export default function PinkTestPage() {
  return (
    <div className="pink-wrapper">
      
      {/* 1. THE BANNER (Click Me) */}
      <div className="pink-box pink-banner" onClick={() => alert("Pink Power!")}>
        <MousePointer2 className="pink-icon" />
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', textTransform: 'uppercase' }}>
          This is a Banner
        </h1>
        <p style={{ fontSize: '16px', fontWeight: 'bold' }}>
          Click Me
        </p>
      </div>

      {/* 2. THE NON-BANNER (Don't Click Me) */}
      <div className="pink-box pink-non-banner">
        <Ban className="pink-icon" />
        <h2 style={{ fontSize: '24px' }}>
          This is not a banner
        </h2>
        <p>
          don't click me
        </p>
      </div>

    </div>
  );
}