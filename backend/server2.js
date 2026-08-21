const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/connect', (req, res) => {
    res.json({ success: true, message: 'VPN Connected' });
});

app.post('/api/disconnect', (req, res) => {
    res.json({ success: true, message: 'VPN Disconnected' });
});

app.get('/api/status', (req, res) => {
    res.json({ status: 'connected' });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
