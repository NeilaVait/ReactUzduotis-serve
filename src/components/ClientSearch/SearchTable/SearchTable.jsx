function SearchTable() {
  const columns = [
    'Vardas',
    'Pavardė',
    'Miestas',
    'Kortelės NR',
    'Kliento ID',
    'Asmens kodas',
    'Gimęs',
    'Telefono Nr1',
    'Telefono Nr.2',
  ];

  const clients = [
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
  ];

  return (
    <div>
      <input type="search" placeholder="Kliento paieška" />
      <table>
        <tr>
          {columns.map((c) => (
            <th>{c}</th>
          ))}
        </tr>
        {clients.map((c) => (
          <tr>
            <td>{c.name}</td>
            <td>{c.surname}</td>
            <td>{c.city}</td>
            <td>{c.cardNo}</td>
            <td>{c.id}</td>
            <td>{c.code}</td>
            <td>{c.birthYear}</td>
            <td>{c.phone1}</td>
            <td>{c.phone2}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default SearchTable;
