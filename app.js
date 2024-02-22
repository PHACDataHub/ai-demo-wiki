import express from 'express';
import {pinoHttp, logger} from './utils/logging.js';
import React, { useState, useEffect, useCallback} from 'react';
import { css, jsx } from '@emotion/react'
import {
  Button,
  Input,
  Row,
  Col
} from "reactstrap";

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
    <meta name="description" content="Web site created using create-react-app" />
    <title>Portail DPI Portal</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        h1 {
            color: black; /* Fixed property name from text-color to color */
            padding-top: 250px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        input {
            height: 45px;
            border-radius: 28px;
            border: 1px solid #ccc;
            width: 700px;
            font-size: 16px; /* Changed from 'font' to 'font-size' */
            outline: none;
            padding-left: 10px; /* Adjusted placeholder padding */
        }
        .info-text {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 30px;
        }
    </style>
</head>
<body>
    <div>
        <h1>Wiki DPI | DPI Wiki</h1>
        <script src="https://cloud.google.com/ai/gen-app-builder/client?hl=en_US"></script>
<gen-search-widget
  configId="913abd49-263c-42b7-809f-0609014c60c7"
  triggerId="searchWidgetTrigger">
</gen-search-widget>
        <div class="info-text">
        <input placeholder="Poser une question | Ask a question" id="searchWidgetTrigger" />
        </div>
        <div class="info-text">
            <small><i>*Ceci est une mise en œuvre expérimentale et en cours de développement de la composante de recherche Vertex AI de Google. Les réponses fournies peuvent contenir des erreurs. Vérifiez toujours les informations importantes à l'aide de plusieurs sources pour en assurer l'exactitude.</i></small>
        </div>
        <div class="info-text">
            <small><i>*This is a work-in-progress experimental implementation of Google's Vertex AI Search. The answers given may contain errors. Always verify important information using multiple sources for accuracy.</i></small>
        </div>
        <div class="info-text">
            <a href="https://cloud.google.com/vertex-ai-search-and-conversation?hl=en" target="_blank"><span>À propos de Vertex AI || About Vertex AI</span></a>
            <span style="padding-left: 30px;"><a href="mailto:chris.melnick-macdonald@phac-aspc.gc.ca">Contactez-nous | Contact Us</a></span>
        </div>
    </div>
</body>
</html>`;

  // Use res.send() to return the HTML content
  res.send(htmlContent);
});

export default app;
