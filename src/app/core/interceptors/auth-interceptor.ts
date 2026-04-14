import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('INTERCEPTOR IS BEIGING USED');
  const authToken = localStorage.getItem('token');
  console.log('INTERCEPTOR-AUTHTOKEN = ', authToken)
  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return next(clonedRequest);
};
