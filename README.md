# hao-backprop-test

A minimal Node.js HTTP server project that demonstrates basic HTTP server functionality. This server responds to any HTTP request with a "Hello, World!" message, making it an ideal starting point for learning Node.js server development and backend testing integration.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Testing](#testing)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [License](#license)

## Prerequisites

Before running this project, ensure you have the following installed:

| Requirement | Minimum Version | Recommended Version |
|-------------|-----------------|---------------------|
| Node.js | v12.0.0 | v20.x (LTS) |
| npm | v6.0.0 | v10.x |

To verify your Node.js installation:

```bash
node --version
npm --version
```

## Installation

1. **Clone the repository:**

```bash
git clone <repository-url>
cd hao-backprop-test
```

2. **Install dependencies:**

```bash
npm install
```

> **Note:** This project has no external dependencies. The `npm install` step is included for consistency with standard Node.js workflows and will simply generate the `package-lock.json` file if not present.

## Quick Start

Start the server with a single command:

```bash
node server.js
```

You should see the following output:

```
Server running at http://127.0.0.1:3000/
```

Test the server by opening a new terminal and running:

```bash
curl http://127.0.0.1:3000/
```

Expected response:

```
Hello, World!
```

## Usage

### Starting the Server

Run the server using Node.js:

```bash
node server.js
```

The server will start and display the startup message indicating it's ready to accept requests.

### Accessing the Server

**Using curl:**

```bash
# GET request
curl http://127.0.0.1:3000/

# Any path works
curl http://127.0.0.1:3000/hello
curl http://127.0.0.1:3000/any/path/here
```

**Using a web browser:**

Open your browser and navigate to:

```
http://127.0.0.1:3000/
```

You will see "Hello, World!" displayed in the browser window.

### Stopping the Server

Press `Ctrl+C` in the terminal where the server is running to stop it.

## API Reference

This server exposes a simple HTTP endpoint that responds to all requests uniformly.

| Endpoint | Method | Response Code | Content-Type | Response Body |
|----------|--------|---------------|--------------|---------------|
| `/*` (any path) | ANY | 200 | text/plain | `Hello, World!\n` |

### Example Request

```bash
curl -i http://127.0.0.1:3000/
```

### Example Response

```http
HTTP/1.1 200 OK
Content-Type: text/plain
Date: [timestamp]
Connection: keep-alive
Keep-Alive: timeout=5

Hello, World!
```

For complete API documentation including detailed request/response specifications, see [docs/API.md](docs/API.md).

## Testing

### Manual Testing

You can manually test the server using curl:

```bash
# Start the server in one terminal
node server.js

# In another terminal, test the endpoint
curl http://127.0.0.1:3000/
```

### Automated Testing

The project currently has a placeholder test script. For comprehensive testing documentation including:

- Test strategy and methodology
- Recommended test frameworks (Jest, Supertest)
- Test case specifications
- Coverage targets

See the [Testing Guide](docs/TESTING.md).

## Configuration

The server uses the following configuration constants defined in `server.js`:

| Option | Value | Line Reference | Description |
|--------|-------|----------------|-------------|
| `hostname` | `127.0.0.1` | server.js:3 | The IP address the server binds to (localhost) |
| `port` | `3000` | server.js:4 | The port number the server listens on |
| `Content-Type` | `text/plain` | server.js:8 | The MIME type of the response |

### Modifying Configuration

To change the server configuration, edit the constants in `server.js`:

```javascript
// server.js lines 3-4
const hostname = '127.0.0.1';  // Change to '0.0.0.0' to accept external connections
const port = 3000;             // Change to any available port
```

> **Security Note:** Setting `hostname` to `'0.0.0.0'` will make the server accessible from external networks. Use with caution in production environments.

## Project Structure

```
hao-backprop-test/
├── README.md              # This file - project overview and quick start
├── server.js              # Main HTTP server implementation
├── package.json           # Node.js package manifest
├── package-lock.json      # Dependency lock file
└── docs/                  # Detailed documentation
    ├── SERVER.md          # Server implementation documentation
    ├── API.md             # HTTP endpoint reference
    └── TESTING.md         # Testing guide and strategy
```

### Key Files

| File | Description |
|------|-------------|
| `server.js` | The main Node.js HTTP server file (15 lines). Creates an HTTP server using the core `http` module that responds with "Hello, World!" to all requests. See [docs/SERVER.md](docs/SERVER.md) for detailed documentation. |
| `package.json` | Project manifest containing name, version, author, and license information. |

## License

This project is licensed under the MIT License. See the `package.json` file for details.

```
MIT License

Copyright (c) hxu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files.
```

---

## Additional Resources

- [Server Documentation](docs/SERVER.md) - Detailed technical documentation for server.js
- [API Reference](docs/API.md) - Complete HTTP endpoint specification
- [Testing Guide](docs/TESTING.md) - Test strategy and execution procedures
- [Node.js Documentation](https://nodejs.org/docs/) - Official Node.js documentation
