import express from 'express';
import {pinoHttp, logger} from './utils/logging.js';

const app = express();

app.use(pinoHttp);

app.get('/', async (req, res) => {
  logger.info({logField: 'custom-entry', arbitraryField: 'custom-entry'});
  req.log.info('Child logger with trace Id.');

  // Define the HTML content to be returned
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>Portail DPI Portal</title>
    <script src="https://cloud.google.com/ai/gen-app-builder/client?hl=en_US"></script>
    <gen-search-widget
      configId="e9a146aa-2908-4896-a424-d21837c24d46"
      location="us"
      triggerId="searchWidgetTrigger">
    </gen-search-widget>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>`;

  // Use res.send() to return the HTML content
  res.send(htmlContent);
});

export default app;
