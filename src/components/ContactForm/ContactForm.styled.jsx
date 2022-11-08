import styled from 'styled-components';
import { Form } from 'formik';

export const FormContainer = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  color: midnightblue;

  & > label {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 16px;
    gap: 5px;
  }

  & > button {
    align-self: center;
    padding: 10px;
    background-color: inherit;
    color: white;
    background-color: #0a49f5;
    border-color: inherit;
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 20px;
    border-radius: 6px;
  }

`;
