import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  margin-bottom: 50px;
  width: 100%;
  justify-content: space-between;
`;

export const Button = styled.button`
  display: inline-block;
  margin-left: 20px;
  width: 80px;
  height: 44px;

  border-radius: 30px;
  border: 1px solid #575756;

  background-color: transparent;
  padding: 12px 24px;

  opacity: 0.7;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus {
    opacity: 1;
    background-color: rgb(239, 187, 64, 0.7);
    border: 1px solid transparent;
  }
`;

export const Input = styled.input`
  width: 1030px;
  padding: 12px 24px;

  background-color: transparent;
  transition: transform 250ms ease-in-out;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 1.5px;

  color: #575756;
  background-color: transparent;

  border-radius: 30px;
  border: 1px solid #575756;
  outline: none;

  opacity: 0.7;
  transition: all 250ms ease-in-out;
  backface-visibility: hidden;
  transform-style: preserve-3d;

  &::placeholder {
    color: color(#575756 a(0.8));
    // text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const SectionSearch = styled.section`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 16px 0 40px;
}
  }
`;
