import styled from 'styled-components';
import { device } from '../../../utils/device';

export default styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  ${device.mobile} {
    flex-direction: column-reverse;
  }
`;
