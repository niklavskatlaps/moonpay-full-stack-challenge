import styled from 'styled-components';
import Switch from './Switch.styled';

export default styled.input`
  display: none;

  &:checked + ${Switch} {
    background: green;

    &:before {
      transform: translate(32px, -50%);
    }
  }
`;
