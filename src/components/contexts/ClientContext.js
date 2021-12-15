import React, { createContext, useState } from 'react';

export const ClientContext = createContext();

function ClientContextProvider({ children }) {
  const clientList = [
    {
      name: 'Vardenis',
      surname: 'Pavardenis',
      city: 'Kaunas',
      cardNo: '21 V0001',
      id: '00000',
      code: '00000',
      birthYear: '1974',
      phone1: '+370 000 00000',
      phone2: '+370 000 00000',
    },
    {
      name: 'Bardenis',
      surname: 'Pavardenis',
      city: 'Kaunas',
      cardNo: '21 V0001',
      id: '00000',
      code: '00000',
      birthYear: '1974',
      phone1: '+370 000 00000',
      phone2: '+370 000 00000',
    },
    {
      name: 'Kardenis',
      surname: 'Pavardenis',
      city: 'Kaunas',
      cardNo: '21 V0001',
      id: '00000',
      code: '00000',
      birthYear: '1974',
      phone1: '+370 000 00000',
      phone2: '+370 000 00000',
    },
  ];

  const [clients, setClients] = useState(clientList);
  const [openClient, setOpenClient] = useState({});

  const handleOpenClient = (name) => {
    const client = clients.filter((c) => c.name === name);
    setOpenClient(client);
  };

  const ctx = {
    handleOpenClient,
    clients,
    openClient,
  };

  return <ClientContext.Provider value={ctx}>{children}</ClientContext.Provider>;
}

export default ClientContextProvider;
