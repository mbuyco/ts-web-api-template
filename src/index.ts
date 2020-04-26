import errorHandler from 'errorhandler';

import app from './app';

app.use(errorHandler());

export const server = app.listen(app.get('port'), () => {
  const environment = app.get('env') || 'DEVELOPMENT';
  console.log(`[${environment.toUpperCase()}] App is running http://localhost:${app.get('port')}`);
});
