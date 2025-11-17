'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface RenderingTechnique {
  name: string;
  description: string;
  detailed: string;
  didYouKnow: string;
  imageSrc: string;
  href: string;
}

const techniques: RenderingTechnique[] = [
  {
    name: 'Client-Side Rendering (CSR)',
    description:
      'CSR renders pages mostly in the browser after fetching data. Ideal for interactive UIs.',
    detailed:
      'In CSR, HTML is minimal initially, and JavaScript fetches and renders the content dynamically. Great for dashboards, SPAs, and interactive pages.',
    didYouKnow:
      'Did you know? CSR allows faster development since no server is needed for each request!',
    imageSrc: '/csr.png',
    href: '/csr',
  },
  {
    name: 'Server-Side Rendering (SSR)',
    description:
      'SSR generates HTML on every request. Good for dynamic and SEO-friendly content.',
    detailed:
      'SSR builds the page on the server for every user request. The full HTML is sent to the browser, improving SEO and ensuring fresh content.',
    didYouKnow:
      'Did you know? SSR guarantees search engines see your page fully rendered!',
    imageSrc: '/ssr.png',
    href: '/ssr',
  },
  {
    name: 'Static Site Generation (SSG)',
    description:
      'SSG generates HTML at build time. Pages are extremely fast and CDN-ready.',
    detailed:
      'SSG pre-renders pages when the site is built. Perfect for blogs, documentation, or landing pages. Updating content requires a rebuild.',
    didYouKnow:
      'Did you know? SSG pages are cached globally via CDN for lightning-fast delivery!',
    imageSrc: '/ssg.png',
    href: '/ssg',
  },
  {
    name: 'Incremental Static Regeneration (ISR)',
    description:
      'ISR regenerates static pages at runtime after a set interval.',
    detailed:
      'ISR combines SSG speed with fresh content. Pages are pre-rendered but automatically updated in the background based on a revalidation interval.',
    didYouKnow:
      'Did you know? ISR can update pages in the background without rebuilding the entire site!',
    imageSrc: '/isr.png',
    href: '/isr',
  },
  {
    name: 'Static HTML Export',
    description:
      'Fully static pages that can be hosted anywhere. No server required.',
    detailed:
      'Static export produces plain HTML, CSS, and JS files. Works great for fully static sites like portfolios or marketing pages.',
    didYouKnow:
      'Did you know? Static HTML exports can be hosted on GitHub Pages, Netlify, or Vercel without a backend!',
    imageSrc: '/static-export.png',
    href: '/static-export',
  },
];

export default function HomePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-12 font-sans">
      <header className="text-center space-y-3">
        <h1 className="text-4xl font-bold">Next.js Rendering Techniques</h1>
        <p className="text-gray-600 text-lg">
          Understand the key rendering methods in Next.js. Click “Read more” for full details, examples, and images.
        </p>
      </header>

      <div className="flex flex-col gap-8">
        {techniques.map((technique, index) => (
          <div
            key={technique.name}
            className="border rounded-lg p-5 shadow-sm hover:shadow-md transition bg-white"
          >
            <div className="flex flex-col md:flex-row md:justify-between items-start gap-4">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold">{technique.name}</h2>
                <p className="text-gray-700 mt-1">{technique.description}</p>
                <p className="text-gray-500 italic mt-1">{technique.didYouKnow}</p>
              </div>

              <button
                onClick={() => toggleOpen(index)}
                className="mt-3 md:mt-0 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                {openIndex === index ? 'Hide Details' : 'Read More'}
              </button>
            </div>

            {openIndex === index && (
              <div className="mt-4 border-t pt-4 space-y-3 md:flex md:gap-6 md:items-start">
                <div className="md:flex-1">
                  <p className="text-gray-700">{technique.detailed}</p>
                  <Link
                    href={technique.href}
                    className="inline-block mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                  >
                    See Example →
                  </Link>
                </div>
                <div className="md:flex-1">
                  <Image
                    src={technique.imageSrc}
                    alt={technique.name}
                    width={400}
                    height={250}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
