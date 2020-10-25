import {createContext} from 'react';

import LanguageModel from "../Models/LanguageModel";

export interface LanguagesContextValues {
  languages: LanguageModel[],
  isLoading: boolean,
  hasFailed: boolean
}

const LanguagesContext = createContext<LanguagesContextValues>({
  languages: [],
  isLoading: true,
  hasFailed: false,
});

export default LanguagesContext;