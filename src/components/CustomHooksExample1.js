import useFetch from '../hooks/useFetch';

const CustomHooksExample1 = () => {
  const { loading, data } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {}
  );

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      {data.map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
  );
};

export default CustomHooksExample1;
