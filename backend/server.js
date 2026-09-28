import express from 'express';

const app = express();

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
  });
});
app.get('/', (req, res) => {
  res.send('DocuAI backend is running');
});
