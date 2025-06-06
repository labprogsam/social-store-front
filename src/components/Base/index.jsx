import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import SideBar from '../Sidebar';
import './Base.css';

function Base({ children }) {
  const history = useHistory();

  return (
    <div className='base-main-content'>
      <SideBar />
      <div className='base-container'>
        <div className='base-childrens'>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Base;