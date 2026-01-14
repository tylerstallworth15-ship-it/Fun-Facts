const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

// GET /api/fun-fact
app.get("/api/fun-fact", async (req, res) => {
    try {
        const response = await axios.get("https://catfact.ninja/fact");

        const factText = response.data.fact;

        res.json({ fact: factText });
    } catch (error) {
        console.error("Error fetching fun fact:", error);
        res.status(500).json({ error: "Could not fetch fun fact" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});