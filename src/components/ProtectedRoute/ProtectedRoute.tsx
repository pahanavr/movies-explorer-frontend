import { Navigate } from 'react-router-dom';

type Props = {
  isLoggedIn?: boolean;
  children?: JSX.Element | string | JSX.Element[];
}

function ProtectedRoute({
  isLoggedIn,
  children
}: Props) {
  const token = localStorage.getItem('jwt');

  if (!token && !isLoggedIn) {
    return (<Navigate to='/' replace />);
  } else if (token && isLoggedIn) {
    return (<Navigate to='/' replace />);
  } else {
    return (<>{children}</>);
  }
}

export default ProtectedRoute;
