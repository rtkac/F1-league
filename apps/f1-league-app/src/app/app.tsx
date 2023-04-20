import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import styled from 'styled-components';

import { getStore } from '@shared/redux';

import AppRouter from './routing/AppRouter';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <HelmetProvider>
        <Provider store={getStore()}>
          <AppRouter />
        </Provider>
      </HelmetProvider>
    </StyledApp>
  );
}

export default App;
