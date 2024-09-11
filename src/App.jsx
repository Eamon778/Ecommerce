import {QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./Home";
import React, {useState} from "react";

function App(){
  const [isVisible, setIsVisile] = useState(true);
  const queryClient = new QueryClient();

  return(
    <QueryClientProvider client={queryClient}>
      {
        isVisible && (
          <section className="bg-black">
            <div className="container mx-auto flex justify-between items-center">
                <p className="text-white mx-auto text-sm py-2">Sign up and get 20% off to your first order. <a href="" className="underline underline-offset-4">Sign Up Now</a></p>
                <button className="text-white mr-0 font-semibold text-md hidden md:block" onClick={()=> setIsVisile(false)}>X</button>
            </div>
          </section>
        )
      }
      <Home />
    </QueryClientProvider>
  )
}

export default App;