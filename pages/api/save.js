// BW_FrontEnd/pages/api/save.js

import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ success: false, message: 'URL is required' });
  }

  const filePath = path.join(process.cwd(), 'public', 'exportedUrl.txt');

  fs.writeFile(filePath, url, 'utf8', (err) => {
    if (err) {
      console.error('Failed to save the URL:', err);
      return res.status(500).json({ success: false, message: 'Failed to save the URL' });
    }

    res.status(200).json({ success: true, message: 'URL saved successfully' });
  });
}
