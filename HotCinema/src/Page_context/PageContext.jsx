// src/contexts/MyContext.js
import React, { createContext, useState } from 'react';

const PageContext = createContext();

export const MyProvider = ({ children }) => {
  const [page, setPage] = useState(1);

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageContext;
