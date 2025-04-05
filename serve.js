// Simple static file server for the built application
import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = 3000;
const DIST_DIR = join(__dirname, 'dist');

// MIME types for different file extensions
const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

const server = createServer(async (req, res) => {
  console.log(`${req.method} ${req.url}`);
  
  try {
    // Get the path from the URL
    let path = req.url;
    
    // Default to index.html for root path or if path ends with /
    if (path === '/' || path.endsWith('/')) {
      path = '/index.html';
    }
    
    // Construct the file path
    const filePath = join(DIST_DIR, path);
    
    // Read the file
    const data = await readFile(filePath);
    
    // Determine content type based on file extension
    const ext = path.substring(path.lastIndexOf('.'));
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    
    // Send the response
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
    
  } catch (err) {
    // If the file doesn't exist or there's an error, try serving index.html
    // This is for SPA routing
    if (err.code === 'ENOENT' && !req.url.includes('.')) {
      try {
        const data = await readFile(join(DIST_DIR, 'index.html'));
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      } catch (indexErr) {
        res.writeHead(404);
        res.end('Not found');
      }
    } else {
      console.error(err);
      res.writeHead(err.code === 'ENOENT' ? 404 : 500);
      res.end(err.code === 'ENOENT' ? 'Not found' : 'Internal server error');
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Serving files from ${DIST_DIR}`);
});