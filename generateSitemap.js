import { generateSitemap } from './pages/sitemap.xml.tsx';
import fs from 'fs';

// Execute the sitemap generation function to get the sitemap content
const sitemapContent = generateSitemap();

// Define the file path where you want to save the sitemap.xml
const filePath = 'public/sitemap.xml'; // Save it in the "public" directory

// Write the sitemap content to the file
fs.writeFileSync(filePath, sitemapContent, 'utf-8');

console.log('Sitemap.xml has been generated and saved.');
