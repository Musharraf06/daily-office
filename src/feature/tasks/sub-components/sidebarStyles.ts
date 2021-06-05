import styled from 'styled-components';

export const AddTaskContainer = styled.div`
  padding: 4px;
  display: grid;
  place-items: center;
`;

export const Input = styled.input<{ fieldValue?: string }>`
  display: block;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 0.5;
  color: #212529;
  background-color: #fff;
  outline: none;
  background-clip: padding-box;
  border: ${(p) =>
    p.fieldValue === '' || p.fieldValue === '00:00'
      ? '1px solid red'
      : '1px solid #ced4da'};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const Button = styled.button<{ fieldValue: any }>`
  pointer-events: ${(p) =>
    p.fieldValue.title === '' ||
    p.fieldValue.startTime === '00:00' ||
    p.fieldValue.startTime === ''
      ? 'none'
      : 'all'};
`;

export const Label = styled.label`
  display: grid;
  grid-template-columns: 5.4rem 8rem;
  margin: 0.4rem;
`;

export const LabelText = styled.span`
  background-color: yellowgreen;
  color: #fff;
  display: flex;
  align-items: center;
  padding-left: 9px;
`;
