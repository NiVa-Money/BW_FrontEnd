"use server"
import axios from 'axios';
import fs from 'fs';
import path from 'path';

/**
 * 
 * @param url 
 * @returns 
 */
export const downloadAndSaveFile = async (url: string): Promise<{ success: boolean; error?: string }> => {
  try {
    // Extract the file name and directory from the URL
    const urlParts = new URL(url).pathname.split('/');
    const fileName = urlParts.pop(); 
    const directoryName = urlParts.join('/'); 

    if (!fileName) {
      throw new Error('Invalid URL: Unable to extract file name');
    }

    // Construct the file path
    const filePath = path.join(process.cwd(), 'public', directoryName, fileName);

    // Ensure the directory exists
    const directoryPath = path.dirname(filePath);
    if (!fs.existsSync(directoryPath)) {
      fs.mkdirSync(directoryPath, { recursive: true });
    }

    // Download the file from the URL
    const response = await axios.get(url, { responseType: 'arraybuffer' });

    // Save the file to the server
    fs.writeFileSync(filePath, response.data);

    return { success: true };
  } catch (error: any) {
    console.error('Error downloading or saving file:', error);
    return { success: false, error: error.message };
  }
};
