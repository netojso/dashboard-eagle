import React, { useEffect, useState } from 'react';
import Cards from '../../components/Cards';
import columns from './utils/columns';
import { Painel } from './styles';
import api from '../../services/api';
import Table from '../../components/Table';

const Collabs: React.FC = () => {
  const [collabs, setCollabs] = useState([]);
  useEffect(() => {
    async function loadCollabs() {
   const response = await api.get('collabs');

   setCollabs(response.data)
    }

    loadCollabs()
  }, [])

  return (

  <Painel>
    <Cards />
    <Table
      data={collabs}
      width={900}
      columns={columns}
      maxHeight={300}
      headerHeight={40}
      rowHeight={50}
    />
  </Painel>
)};

export default Collabs;
