import React from 'react';
import PageRoutes from '../../Pages/routes';
import UserRoutes from '../../Users/routes';
import AuthenticationRoutes from '../../Authentication/routes';
import ProductRoutes from '../../Products/routes';

const Routes = () => {
  return (
    <>
      <PageRoutes/>
      <UserRoutes/>
      <AuthenticationRoutes/>
      <ProductRoutes/>
    </>
  );
}
 
export default Routes;