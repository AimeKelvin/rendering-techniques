interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function SSRPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', { cache: 'no-store' });
  const data: Post = await res.json();

  return (
    <div>
      <h1>Server-Side Rendering (SSR)</h1>
      <p>Title: {data.title}</p>
      <p>Body: {data.body}</p>
    </div>
  );
}
