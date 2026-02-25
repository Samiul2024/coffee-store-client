import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './Coffee';

const Home = () => {
    const initialCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(initialCoffees);



    return (
        <div>
            <div className=' p-3 flex flex-col items-center  justify-center m-3'>
                <h3 className='text-2xl '>Welcome to </h3>
                <h1 className='font-bold text-5xl '>
                    samCafe
                </h1>
            </div>
            <h1 className='text-center p-4  font-bold text-5xl '>
                Coffees
            </h1>
            <div className='grid grid-cols-1  md:grid-cols-2 gap-6'>
                {
                    coffees.map(coffee => <CoffeeCard
                        key={coffee._id}
                        coffees={coffees}
                        setCoffees={setCoffees}
                        coffee={coffee}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;