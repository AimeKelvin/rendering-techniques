'use client';

import { useEffect, useState } from 'react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function CSRPage() {
  const [data, setData] = useState<Post | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then((post: Post) => setData(post));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>Client-Side Rendering (CSR)</h1>
      <p>Title: {data.title}</p>
      <p>Body: {data.body}</p>
    </div>
  );
}
