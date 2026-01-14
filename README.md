# Fun Facts API

This project creates a simple Express server that fetches a random fun fact from the Useless Facts API and returns it in a clean JSON format.

## How It Works
- The server exposes one endpoint: `/api/fun-fact`
- When visited, it makes a request to:
  https://uselessfacts.jsph.pl/api/v2/facts/random
- It extracts only the `text` field and returns:
  {
    "fact": "Some random fact..."
  }

## Setup Instructions
1. Clone the repository
2. Run `npm install`
3. Start the server with `node server.js`
4. Visit `http://localhost:3000/api/fun-fact`

## Technologies Used
- Node.js
- Express
- Axios

Reflection Questions

1. Why reformat the data before sending it to the client?

Reformatting keeps the API response clean and minimal. It hides unnecessary fields from the external API and ensures the client only receives the information it actually needs. This makes your API easier to use and prevents breaking changes if the external API structure changes.

2. Why send a generic error message instead of the actual axios error?

Actual axios errors may contain sensitive internal details, stack traces, or URLs. A generic message protects the server, avoids confusing the client, and keeps the API secure.

3. How could you modify the app to request a different language?

If the external API supports it, you could add a query parameter such as:
`?language=de`
Example:
`https://uselessfacts.jsph.pl/api/v2/facts/random?language=de`
You could also let the client choose a language using `req.query.lang`.