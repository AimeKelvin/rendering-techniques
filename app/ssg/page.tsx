interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function SSGPage() {
  // default fetch = cached = SSG
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', { next: { revalidate: false } });
  const data: Post = await res.json();

  return (
    <div>
      <h1>Static Site Generation (SSG)</h1>
      <p>Title: {data.title}</p>
      <p>Body: {data.body}</p>
    </div>
  );
}
