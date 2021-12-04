import React, { createContext, useState } from 'react';

export const ClientContext = createContext();

function ClientContextProvider({ children }) {
  const [clientOpen, setClientOpen] = useState(false);

  const handleOpenClient = (name) => {
    setClientOpen(!clientOpen);
  };

  const ctx = {
    clientOpen,
    handleOpenClient,
  };

  return <ClientContext.Provider value={ctx}>{children}</ClientContext.Provider>;
}

export default ClientContextProvider;
