import React, {useMemo} from 'react';

import HttpClientContext from "../Contexts/HttpClientContext";
import axios from "axios";

const HttpClientProvider: React.FC = ({children}) => {

  const transmanInstance = useMemo(() => axios.create({
    baseURL: process.env.REACT_APP_TRANSMAN_URL,
    timeout: 3000,
  }), []);

  return (
      <HttpClientContext.Provider value={{
        transman: transmanInstance
      }}>
        {children}
      </HttpClientContext.Provider>
  );
}

export default HttpClientProvider;