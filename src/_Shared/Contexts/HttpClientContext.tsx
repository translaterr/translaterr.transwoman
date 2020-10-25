import {createContext} from 'react';
import axios, {AxiosInstance} from 'axios';

interface IHttpClientContextValues {
    transman: AxiosInstance
}

const HttpClientContext = createContext<IHttpClientContextValues>({
   transman: axios.create()
});

export default HttpClientContext;