import React from 'react';
import { Link } from 'react-router-dom';

import './ToolFooter.css';

export const ToolFooter = ({ companyName }) => {

  return <footer className="ToolFooter">
    <div>
      &copy; 2018 {companyName}
    </div>
    <nav>
      <ul>
        <li><Link to='/privacy'>Privacy</Link></li>
        <li><Link to='/terms-of-use'>Terms of Use</Link></li>
      </ul>
    </nav>
  </footer>;
  
};