import styled, { css } from 'styled-components';

interface LiProps {
  active: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const RadioGroup = styled.div`
  padding-left: 60px;
  /* padding-bottom: 10px; */
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  .control {
    display: block;
    position: relative;
    padding-left: 30px;
    padding-right: 5px;
    margin-right: 50px;
    margin-bottom: 8px;
    padding-top: 1px;

    color: #475766;
    font-size: 20px;
    font-weight: 400;
}

    .control input {
        position: absolute;
        width: 25px;
        height: 25px;
        top: 1px;
        left: 3px;
        opacity: 0;
    }

.control_indicator {

    outline: none;
    color: transparent;
    position: absolute;
    top: 3px;
    left: 0;
    height: 25px;
    width: 25px;
    background: #e6e6e6;
    border: 2px solid #475766;
    border-radius: undefinedpx;
}
.control:hover input ~ .control_indicator,
.control input:focus ~ .control_indicator {
    background: #cccccc;

}

.control input:checked ~ .control_indicator {
    background: #e6e6e6;
}
.control:hover input:not([disabled]):checked ~ .control_indicator,
.control input:checked:focus ~ .control_indicator {
    background: #0e6647d;
}
.control input:disabled ~ .control_indicator {
    background: #e6e6e6;
    opacity: 0.6;
    pointer-events: none;
}
.control_indicator:after {
    box-sizing: unset;
    content: '';
    position: absolute;
    display: none;
}
.control input:checked ~ .control_indicator:after{
  display: block;
}

.control-radio .control_indicator {
    border-radius: 50%;
}

.control-radio .control_indicator:after {
    left: 3px;
    top: 3px;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: #475766;
    transition: background 250ms;
}
.control-radio input:disabled ~ .control_indicator:after {
    background: #7b7b7b;
}
`;

export const Painel = styled.div`
  border-top: 35px solid #0487d1;
  margin-top: -100px;
  width: 950px;
  border-radius: 16px;
  padding: 25px 0px;
  background: #fafafa;

  /* border: 1px solid rgba(0, 0, 0, 0.2); */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0px 60px;
`;
export const Title = styled.strong`
  font-size: 22px;
  font-weight: bold;
  color: #475766;
  margin-top: 18px;
  margin-bottom: 6px;
`;
export const Detail = styled.p`
  font-size: 10px;
  color: #475766;
`;
export const Row = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InfoAdicionais = styled.ul`
  margin-top: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  border-bottom: 1px solid rgba(71, 87, 102, 0.3);
`;

export const InfoItem = styled.li<LiProps>`
  ${props => props.active
    && css`
      border-bottom: 1px solid #475766;
    `}

  padding: 2px 40px;
  list-style: none;

  button {
    text-decoration: none;
    outline: none;
    border: 0;
    background: #fafafa;
    color: #475766;
    font-size: 20px;
    font-weight: 600;
  }
`;

export const AddAddressButton = styled.button`
  margin-top: 10px;
  margin-bottom: 18px;
  width: 130px;
  border: 2px solid #0487d1;
  border-radius: 4px;
  padding: 6px 0;
  outline: none;
  background: #fff;

  font-size: 9px;
  font-weight: 600;
  color: #0487d1;
`;
