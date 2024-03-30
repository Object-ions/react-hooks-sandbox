import useFetch from '../hooks/useFetch';

const CustomHooksExample1 = () => {
  const res = useFetch('https://jsonplaceholder.typicode.com/posts', {});

  if (res.loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      {res.data.map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
  );
};

export default CustomHooksExample1;
