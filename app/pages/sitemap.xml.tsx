import { SitemapStream, streamToPromise } from "sitemap";
import { createGzip } from "zlib";
import { Readable } from "stream";
import { NextApiRequest, NextApiResponse } from "next";

const generateSitemap = async (req: NextApiRequest, res: NextApiResponse) => {
  const sitemap = new SitemapStream({
    hostname: "https://www.ayceetees.com",
  });

  // Define SEO-friendly URLs for the primary pages and additional pages
  const primaryPages = [
    { url: "/", changefreq: "daily", priority: 1.0 }, // Landing Page
    { url: "/about", changefreq: "daily", priority: 0.9 },
    { url: "/shop", changefreq: "daily", priority: 0.9 },
    { url: "/faq", changefreq: "weekly", priority: 0.8 },
    { url: "/workshop", changefreq: "weekly", priority: 0.8 },
    { url: "/deliveries", changefreq: "daily", priority: 0.9 },
    { url: "/recipes", changefreq: "monthly", priority: 0.7 },
    { url: "/investor", changefreq: "monthly", priority: 0.7 },
  ];

  // Generate the sitemap with primary and additional pages
  primaryPages.forEach((url) => {
    sitemap.write(url);
  });

  // End the sitemap
  sitemap.end();

  // Set response headers for gzip-compressed XML
  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Content-Encoding", "gzip");

  const pipeline = sitemap.pipe(createGzip());

  // Ensure the sitemap stream is fully processed before ending the response
  await streamToPromise(Readable.from(pipeline)).then((data: any) => {
    // Implement any post-processing or logging if needed
    // For example, you can log sitemap generation details
    console.log("Sitemap generated successfully.");

    // Send a notification, if needed
    sendNotification(
      "Sitemap generated",
      "The sitemap has been successfully generated."
    );

    // End the response
    pipeline.pipe(res);
  });
};

// Example function to send a notification (you can replace this with your own notification method)
function sendNotification(subject: string, message: string) {
  // Implement your notification method here
  // This could be sending an email, using a messaging service, or logging to a dedicated channel.
}

export default generateSitemap;
