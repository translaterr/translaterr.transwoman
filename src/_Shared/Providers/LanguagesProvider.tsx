import React, {useContext, useEffect, useState} from 'react';

import LanguagesContext from "../Contexts/LanguagesContext";
import HttpClientContext from "../Contexts/HttpClientContext";

import LanguageModel from "../Models/LanguageModel";

const LanguagesProvider: React.FC = ({children}) => {
  const [languages, setLanguages] = useState<LanguageModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasFailed, setHasFailed] = useState<boolean>(false);

  const {transman} = useContext(HttpClientContext);

  useEffect(() => {
    setIsLoading(true);

    transman.get<LanguageModel[]>("/api/languages")
        .then(result => setLanguages(result.data))
        .catch(() => setHasFailed(true))
        .finally(() => setIsLoading(false));
  }, [transman]);

  return (
      <LanguagesContext.Provider value={{
        languages, isLoading, hasFailed
      }}>
        {children}
      </LanguagesContext.Provider>
  )
}

LanguagesProvider.displayName = "LanguagesProvider";
export default LanguagesProvider;