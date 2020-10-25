import React from 'react';
import {BrowserRouter} from "react-router-dom";

import HttpClientProvider from "./_Shared/Providers/HttpClientProvider";

import Main from './_Shared/Containers/Main';
import FullPageLoader from './_Shared/Components/Loader/FullPageLoader';
import LanguagesProvider from "./_Shared/Providers/LanguagesProvider";
import TenantsProvider from "./_Shared/Providers/TenantsProvider";
import ApplicationsProvider from "./_Shared/Providers/ApplicationsProvider";


const App: React.FC = () => {
  return (
    <React.Suspense fallback={<FullPageLoader />}>
      <HttpClientProvider>
        <TenantsProvider>
          <ApplicationsProvider>
            <LanguagesProvider>
              <BrowserRouter>
                <Main />
              </BrowserRouter>
            </LanguagesProvider>
          </ApplicationsProvider>
        </TenantsProvider>
      </HttpClientProvider>
    </React.Suspense>
  );
};

App.displayName = 'App';
export default App;
