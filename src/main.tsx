import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './api/queryClient'
import 'nprogress/nprogress.css';
import theme from './configs/chakaUI'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
)
