import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix for __filename and __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve static files (CSS, JS, Images)
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/static', express.static(path.join(__dirname, 'static')));

// Return index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/static/', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
