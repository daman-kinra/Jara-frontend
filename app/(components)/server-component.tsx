const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};
async function ServerComponent() {
  console.log("server component");
  const posts = await getPosts();
  return (
    <div>
      {/* @ts-ignore */}
      {posts.map((p) => (
        <h2 key={p.id}>{p.id}</h2>
      ))}
    </div>
  );
}

export default ServerComponent;
