import FetchData from '../FetchData.jsx';

function NewArrivals() {
  const { data, isLoading, isError, error } = FetchData();
  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto">
      <h3 className='my-14 text-center font-bold text-5xl text-black'>NEW ARRIVALS</h3>
      <div className='flex gap-8 justify-center items-center'>
        {data && data.length > 0 ? (
          data.map((d) => (
            <div key={d.id} className=' flex flex-col justify-center rounded-xl'>
              <div className='w-[295px] h-[298px] flex justify-center items-center rounded-xl bg-[#f0eeed]'>
                <img src={d.image} className='h-[250px] w-auto' alt={d.title} />
              </div>
              <p className='text-black text-[20px] py-3'>{d.title}</p>
              <p className='text-black text-[14px] pb-3'>{d.rating.rate}/<span className='text-[#00000099]'>5</span></p>
              <p className='text-black text-[24px]'>${d.price}</p>
            </div>
          ))
        ) : (
          <div>No products available</div>
        )}
      </div>
      <div>
        <button>View All</button>
      </div>
    </div>
  );
}

export default NewArrivals;
