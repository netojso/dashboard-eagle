import React from 'react';

interface IProps {
  cellData: {
    avatar: string;
    name: string;
  }
}
const ButtonUser: React.FC<IProps> = ({ cellData }: IProps) => (
  <div
    style={{
      width: 250,
      display: 'flex',
      alignItems: 'center',
      border: 0,
      outline: 0,
      background: 'transparent',
    }}
  >
    <img
      style={{
        width: 32, height: 32, borderRadius: 16, marginRight: 30,
      }}
      src={cellData.avatar}
      alt={cellData.name}
    />
    <p style={{ color: '#475766', margin: 0 }}>{cellData.name}</p>
  </div>
);

export default ButtonUser;
