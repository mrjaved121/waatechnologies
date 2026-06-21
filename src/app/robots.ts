import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      // AI search engine crawlers — explicitly allowed so content appears in AI-generated answers
      { userAgent: 'GPTBot', allow: '/' },            // OpenAI / ChatGPT
      { userAgent: 'ChatGPT-User', allow: '/' },      // ChatGPT browsing plugin
      { userAgent: 'OAI-SearchBot', allow: '/' },     // OpenAI SearchGPT
      { userAgent: 'Google-Extended', allow: '/' },   // Google Gemini / AI Overviews
      { userAgent: 'PerplexityBot', allow: '/' },     // Perplexity AI
      { userAgent: 'anthropic-ai', allow: '/' },      // Anthropic / Claude
      { userAgent: 'Claude-Web', allow: '/' },        // Claude web-browsing
      { userAgent: 'cohere-ai', allow: '/' },         // Cohere AI
      { userAgent: 'Applebot-Extended', allow: '/' }, // Apple Intelligence
      { userAgent: 'FacebookBot', allow: '/' },       // Meta AI
      { userAgent: 'Amazonbot', allow: '/' },         // Amazon Alexa AI
      { userAgent: 'Bytespider', allow: '/' },        // ByteDance / TikTok AI
      { userAgent: 'YouBot', allow: '/' },            // You.com AI search
      { userAgent: 'ia_archiver', allow: '/' },       // Wayback Machine / Internet Archive
    ],
    sitemap: 'https://waatechnologies.com/sitemap.xml',
  };
}
