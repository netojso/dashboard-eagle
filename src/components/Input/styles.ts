import styled from 'styled-components';

interface InputProps {
  width: number;
}
export const Container = styled.div<InputProps>`
  position: relative;
  width: ${(props) => props.width}px;

  label {
    position: absolute;
    bottom: 28px;
    left: 0;

    color: #475766;
    font-size: 12px;
    font-weight: bold;
  }

  input {
    flex: 1;
    width: 100%;
    border-radius: 4px;
    height: 35px;
    padding-left: 12px;
    border: 1px solid rgba(71, 87, 102, 0.3);

    color: #475766;
    font-size: 15px;
    font-weight: 300;
  }

  input::placeholder {
    font-size: 14px;
    color: #bbb;
  }
`;
