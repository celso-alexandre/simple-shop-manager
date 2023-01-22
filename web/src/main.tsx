import { ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { onError } from '@apollo/client/link/error';
import { notification } from 'antd';
import { AiFillWarning, AiOutlineClose } from 'react-icons/ai';
import { createUseStyles } from 'react-jss';
import { App } from './App';

const useStyles = createUseStyles({
  errorToast: {
    borderRadius: '5px 2px 5px 5px',
    position: 'relative',
    backgroundColor: '#da6969',
    '& .ant-notification-notice-message': {
      fontSize: '1rem',
      color: '#f2f2f2',
    },
    '& .ant-notification-notice-close': {
      position: 'absolute',
      top: 0,
      right: 0,
      backgroundColor: '#f2f2f2',
      padding: '2px',
      borderRadius: '0 0 0 3px',
      width: '20px',
      height: '20px',
      '&:hover': {
        backgroundColor: '#ffffff',
      },
      transition: 'background-color 0.3s',
    },
  },
});

function Main() {
  const { errorToast } = useStyles();

  const httpLink = new HttpLink({
    uri: import.meta.env.VITE_API_URI,
  });
  const errorLink = onError(({ graphQLErrors, networkError, forward, operation }) => {
    let clipboard = '';
    if (graphQLErrors) {
      clipboard += graphQLErrors.map(
        ({ message, locations, path }) =>
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}\n\n`
      );
    }
    if (networkError) {
      clipboard += `[Network error]: ${networkError}`;
    }

    graphQLErrors?.forEach(e => {
      const [_domain, errorKey, _params] = (e.message || '').split('|');
      const httpStatus = parseInt((e as any).extensions?.response?.statusCode, 10) || undefined;

      // let parsedParams = {};
      // try {
      //   parsedParams = JSON.parse(params || '{}');
      // } catch (err) {
      //   console.error('error parsing api error params', (err as any)?.stack);
      // }

      if (!errorKey && httpStatus === 404) return; // history.push('/404');

      // if (errorKey && [400, 409, 404].includes(httpStatus)) {
      //   notification.error({
      //     message: t(`error.${errorKey}` as any, { ...parsedParams, ns: domain }),
      //     duration: 10,
      //     description: mode === 'development' ? errorKey : '',
      //     key: 'graphql_error_key',
      //     icon: <AiFillWarning color="#f2f2f2" />,
      //     className: errorToast,
      //     closeIcon: <AiOutlineClose color="#da6969" style={{ width: '100%', height: '100%', margin: 0, padding: 0 }} />,
      //     ...(mode === 'development' && { onClose: () => navigator.clipboard.writeText(errorKey) }),
      //   });
      //   return;
      // }

      notification.error({
        // message: t('home.error'),
        message: 'Server Error',
        duration: 10,
        key: 'graphql_error_key',
        icon: <AiFillWarning color="#f2f2f2" />,
        className: errorToast,
        closeIcon: <AiOutlineClose color="#da6969" style={{ width: '100%', height: '100%', margin: 0, padding: 0 }} />,
        onClose: () => navigator.clipboard.writeText(clipboard),
      });
    });

    return forward(operation);
  });

  const client = new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
    defaultOptions: {
      query: {
        errorPolicy: 'all',
        notifyOnNetworkStatusChange: true,
      },
    },
  });

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
