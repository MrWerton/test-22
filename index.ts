import express from 'express';

const app = express();
app.use(express.json());

app.get('/test', (req, res) => {
   return res.json('Hello World');
});

const PORT =  5444;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
