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
      <title>Portail DPI Portal</title>
    </head>
    <body>
      
      <div id="root">
      <!-- Widget JavaScript bundle -->
      <script src="https://cloud.google.com/ai/gen-app-builder/client?hl=en_US"></script>

      <!-- Search widget element is not visible by default -->
      <gen-search-widget
        configId="e9a146aa-2908-4896-a424-d21837c24d46"
        location="us"
        triggerId="searchWidgetTrigger">
      </gen-search-widget>

      <!-- Element that opens the widget on click. It does not have to be an input -->
      <input placeholder="Search here" id="searchWidgetTrigger" />
      </div>
    </body>
  </html>`;

  // Use res.send() to return the HTML content
  res.send(htmlContent);
});

export default app;
