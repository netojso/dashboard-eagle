import React from 'react';

interface IProps {
  cellData: {
    id: number;
    avatar: string,
    name: string,
    apelido: string,
    contato: string,
    tipo: string,
    cpf: string,
    data: number,
  };
  setSelectedPage: any;
}

// Componente para renderizar na tabela

// Recebe os dados do cliente e invoca a função passando os dados

const ButtonUser: React.FC<IProps> = ({ cellData, setSelectedPage }: IProps) => (
  <button
    type="button"
    style={{
      width: 250,
      display: 'flex',
      alignItems: 'center',
      border: 0,
      outline: 0,
      margin: 0,
      background: 'transparent',
    }}
    onClick={() => {setSelectedPage(['Editar', cellData])}}
  >
    <img
      style={{
        width: 32, height: 32, borderRadius: 16, marginRight: 20,
      }}
      src={cellData.avatar}
      alt={cellData.name}
    />
    <p style={{ color: '#475766', margin: 0, fontSize: 16}}>{cellData.name}</p>
  </button>
);

export default ButtonUser;
