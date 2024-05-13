import { Helmet } from 'react-helmet';

function NotFound({ errorMessage }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <div style={{ color: 'white', fontSize: '20px' }}>{errorMessage}</div>
    </div>
  );
}

export default NotFound;
