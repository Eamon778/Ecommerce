import { useQuery } from "@tanstack/react-query";

function FetchData() {
  const url = 'https://fakestoreapi.com/products?limit=4';
  
  const fetchApi = async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['products',],
    queryFn: fetchApi,
  });

  return { data, isLoading, isError, error };
}

export default FetchData;
