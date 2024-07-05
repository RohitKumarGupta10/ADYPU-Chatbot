const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    const intentName = req.body.queryResult.intent.displayName;

    let responseText = '';

    if (intentName === 'Default Welcome Intent') {
        responseText = 'Hello! How can I help you today?';
    } else if (intentName === 'Your Intent Name') {
        // Add custom logic for other intents here
        responseText = 'Your custom response for this intent.';
    } else {
        responseText = 'I did not understand that. Can you please repeat?';
    }

    res.json({
        fulfillmentText: responseText
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
