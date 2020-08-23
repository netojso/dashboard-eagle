import React from 'react';

import { Container } from './styles';

interface IProps {
  name: string;
  id: string;
  type: string;
  width: number;
  placeholder?: string;
  label?: boolean;
  value?: string | number;
}

const Input: React.FC<IProps> = ({
  id,
  name,
  type,
  width,
  placeholder,
  label,
  value,
}) => (label ? (
  <Container width={width}>
    <label htmlFor={id}>{name}</label>
    <input type={type} name={name} id={id} placeholder={placeholder} value={value} />
  </Container>
) : (
  <Container width={width}>
    <input type={type} name={name} id={id} placeholder={placeholder} value={value} />
  </Container>
));

export default Input;
