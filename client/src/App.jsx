import React, { lazy, Suspense, useEffect, useState } from 'react';
import { accessToken } from './auth-provider';
import { FullPageSpinner } from './styles/lib';

const AuthenticatedApp = lazy(() => import('./Authenticated'));
const UnauthenticatedApp = lazy(() => import('./Unauthenticated'));

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(accessToken);
  }, []);

  return (
    <div className='font-body'>
      <Suspense fallback={<FullPageSpinner />}>
        {token ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </Suspense>
    </div>
  );
}

export default App;
