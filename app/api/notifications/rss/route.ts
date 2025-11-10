import { NextResponse } from 'next/server';

export async function GET() {
  // Get changelog entries from localStorage equivalent (in real app, would be from database)
  const changelog = [
    {
      id: '1',
      modelName: 'GPT-4 Turbo',
      provider: 'OpenAI',
      changeDate: new Date().toISOString(),
      changeType: 'price',
      summary: 'Price reduction: Input costs decreased by 33%, output costs decreased by 33%'
    }
  ];

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>LLM DB - Model Updates</title>
    <link>https://llmdb.com</link>
    <description>Latest updates and changes to LLM models</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://llmdb.com/api/notifications/rss" rel="self" type="application/rss+xml"/>
    ${changelog.map(entry => `
    <item>
      <title>${entry.changeType.toUpperCase()}: ${entry.modelName}</title>
      <description>${entry.summary}</description>
      <pubDate>${new Date(entry.changeDate).toUTCString()}</pubDate>
      <guid>https://llmdb.com/changelog#${entry.id}</guid>
      <category>${entry.provider}</category>
    </item>
    `).join('')}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
