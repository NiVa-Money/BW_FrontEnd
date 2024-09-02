

import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;

  if (!url || typeof url !== 'string') {
    return res.status(400).json({ success: false, error: 'Invalid URL' });
  }

  try { 
    // Fetch the file content from the URL
    const response = await axios.get(url, { responseType: 'text' });
    
    // Extract the file name from the URL
    const fileName = path.basename(new URL(url).pathname);
    
    // Define the file path in the public/widgetContent directory
    const filePath = path.join(process.cwd(), 'public', 'widgetContent', fileName);
    
    // Ensure the directory exists
    fs.mkdirSync(path.join(process.cwd(), 'public', 'widgetContent'), { recursive: true });
    
    // Write the file to the specified location
    fs.writeFileSync(filePath, response.data, 'utf-8');

    console.log('File saved successfully:', fileName);
    return res.status(200).json({ success: true, fileName });
  } catch (error) {
    console.error('Error saving the file:', error);
    return res.status(500).json({ success: false, error: 'Failed to save the file' });
  }
}
