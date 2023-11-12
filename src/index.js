import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// const errorHandler = (error) => {
//   if (error.status > 400) {
//     alert(error.message)
//   }
// }

const queryClient = new QueryClient(
  // {
  //   queryCache: new QueryClient({
  //     onError: errorHandler
  //   })
  // },

  // {  
  //   defaultOptions: {
  //     queries: {
  //       staleTime: Infinity,
  //       refetchOnMount: false,
  //       refetchOnReconnect: false,
  //       refetchOnWindowFocus: false,
  //     },
  //   },
  // }
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
