import {QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import queryClient from './src/api/queryClient';
import RootNavigation from './src/navigations/RootNavigation';

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <RootNavigation />
    </QueryClientProvider>
  );
}

export default App;
