import FetchData from '../FetchData.jsx';

function NewArrivals() {
  const { data, isLoading, isError, error } = FetchData();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="container flex gap-5 justify-around mx-auto">
      {data && data.length > 0 ? (
        data.map((d) => (
          <div key={d.id} className='w-[300px] p-10 bg-[#f0eeed]'>
            <img src={d.image} className='h-[220px] w-auto' alt={d.title} />
            <p>{d.title}</p>
          </div>
        ))
      ) : (
        <div>No products available</div>
      )}
    </div>
  );
}

export default NewArrivals;
