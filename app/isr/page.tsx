interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function ISRPage() {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', { next: { revalidate: 5 } });
  const data: Post = await res.json();

  return (
    <div>
      <h1>Incremental Static Regeneration (ISR)</h1>
      <p>Title: {data.title}</p>
      <p>Body: {data.body}</p>
    </div>
  );
}
