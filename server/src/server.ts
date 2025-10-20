import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import * as dotenv from 'dotenv';
import pkg from 'pg';
const { Pool } = pkg;


dotenv.config();

const app = express();
app.use(helmet());
app.use(cors({ origin: ['http://localhost:4200'], credentials: true }));
app.use(express.json());

app.get('/healthz', (_req, res) => res.json({ status: 'ok' }));

const port = Number(process.env.PORT) || 8080;
const host = '0.0.0.0';
app.listen(port, host, () => {
  console.log(`API listening on http://${host}:${port}`);
});

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

app.get('/api/assays', async (_req, res) => {
  try {
    const result = await pool.query('SELECT * FROM assays ORDER BY id ASC;');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database query failed' });
  }
});
