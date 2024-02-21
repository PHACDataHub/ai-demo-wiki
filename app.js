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
      
      <Row>
      <Col>
      <div >
      <h1 style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '250px'
      }}>Portail DPI Portal</h1>
      <script src="https://cloud.google.com/ai/gen-app-builder/client?hl=en_US"></script>
  <gen-search-widget
    configId="e9a146aa-2908-4896-a424-d21837c24d46"
    location="us"
    triggerId="searchWidgetTrigger">
  </gen-search-widget>
  <input style={{
    height:'45px',
    borderRadius: '28px',
    border: '1px solid #ccc',
    width:'700px',
    font:'16px',
    outline: 'none'}}
    placeholder="       Poser une question | Ask a question" 
    id="searchWidgetTrigger" />
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '30px'
      }}>
      <small><i>*Ceci est une mise en œuvre expérimentale et en cours de développement de la composante de recherche Vertex AI de Google. Les réponses fournies peuvent contenir des erreurs. Vérifiez toujours les informations importantes à l'aide de plusieurs sources pour en assurer l'exactitude.</i></small>
    </div>
    <div>
      <small><i>*This is a work-in-progress experimental implementation of Google's Vertex AI Search. The answers given may contain errors. Always verify important information using multiple sources for accuracy.</i></small>
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '30px'}}><a href="https://cloud.google.com/vertex-ai-search-and-conversation?hl=en" target="_blank"><span>À propos de Vertex AI || About Vertex AI</span></a>
        <span style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: '30px'}}><a href="mailto:chris.melnick-macdonald@phac-aspc.gc.ca">Contactez-nous | Contact Us</a></span></div>
      </div>
      </Col>
    </Row>
    </body>
  </html>`;

  // Use res.send() to return the HTML content
  res.send(htmlContent);
});

export default app;
