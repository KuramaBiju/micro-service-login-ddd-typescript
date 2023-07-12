
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import bodyParser from 'body-parser';


const app = express()
dotenv.config();

app.use(bodyParser.json({limit: '25mb'}));
app.use(cors({
  origin: '*',
  methods: ['POST','GET'],
  allowedHeaders: ['Content-Type', 'Accept', 'auth-token', 'application']
}));


app.use(helmet.contentSecurityPolicy());
app.use(helmet.crossOriginEmbedderPolicy());
app.use(helmet.crossOriginOpenerPolicy());
app.use(helmet.crossOriginResourcePolicy());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.originAgentCluster());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());

app.get('/', (req, res) => {
    res.send('Hello World!');
});



  const start = async (): Promise<void> => {
    try {
     // await connection.sync();
      app.listen(process.env.PORT, () => {
        console.log(`Server started on port ${process.env.PORT}`);
      });
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };

  void start();
