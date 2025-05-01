### 👨‍💻 Exercise: Chat Server

1. Clone the <a href="https://github.com/jonnygoespro/nodejs-webserver-example" target="_blank">Repository</a> with the frontend code for a chat server.
2. Add a **nodemon** dev script to your `package.json` that runs your server in development mode and a start script that runs the server in a production mode.
3. Create a simple **Node.js HTTP server** that serves the static file index.html
4. Serve the **custom 404 Page** if no file was found in the public folder.
5. Use the **Socket.IO library** to handle real-time communication between connected clients.
6. When a client sends a message, **broadcast** it to all connected clients and include a timestamp and unique ID for each message.
7. On the frontend, listen for **incoming messages** and render them dynamically in the chat window using JavaScript.
