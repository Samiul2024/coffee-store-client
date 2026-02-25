import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {


    const handleAddCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        // Form Data() constructor
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries());
        console.log(newCoffee);

        // send coffee data to the db
        fetch('https://v1-coffee-store-server-liard.vercel.app/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('added successfully!');
                    Swal.fire({
                        title: "Coffee Added Successfully!",
                        icon: "success",
                        draggable: true
                    });
                }
                console.log('after adding coffee to db', data);
            })



        // Dynamically get form data using name attributes
        // const newCoffee = {
        //     name: form.name.value,
        //     chef: form.chef.value,
        //     supplier: form.supplier.value,
        //     taste: form.taste.value,
        //     category: form.category.value,
        //     details: form.details.value,
        //     photo: form.photo.value,
        // };

        // console.log(newCoffee);
        // You can now send `newCoffee` to your backend or use it elsewhere
        form.reset();
    };

    return (
        <div className='p-24'>
            {/* <div className='p-12 text-center space-y-4'>

                <h1 className="text-6xl">Add New Coffee</h1>
                
            </div> */}
            {/* Form starts here */}

            <div className="max-w-4xl mx-auto p-6 bg-base-200 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center">Add New Coffee</h2>
                <p className='text-center my-8'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                <form onSubmit={handleAddCoffee} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Name */}
                    <div>
                        <label className="label font-semibold text-lg">Name</label>
                        <input type="text" name="name" placeholder="Enter coffee name" className="input input-bordered w-full" />
                    </div>

                    {/* Chef */}
                    <div>
                        <label className="label font-semibold text-lg">Chef</label>
                        <input type="text" name="chef" placeholder="Enter coffee chef" className="input input-bordered w-full" />
                    </div>

                    {/* Supplier */}
                    <div>
                        <label className="label font-semibold text-lg">Supplier</label>
                        <input type="text" name="supplier" placeholder="Enter coffee supplier" className="input input-bordered w-full" />
                    </div>

                    {/* Taste */}
                    <div>
                        <label className="label font-semibold text-lg">Taste</label>
                        <input type="text" name="taste" placeholder="Enter coffee taste" className="input input-bordered w-full" />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="label font-semibold text-lg">Price</label>
                        <input type="text" name="price" placeholder="Enter coffee price" className="input input-bordered w-full" />
                    </div>

                    {/* Details */}
                    <div>
                        <label className="label font-semibold text-lg">Details</label>
                        <input type="text" name="details" placeholder="Enter coffee details" className="input input-bordered w-full" />
                    </div>

                    {/* Photo URL - Full width */}
                    <div className="md:col-span-2">
                        <label className="label font-semibold text-lg">Photo</label>
                        <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered w-full" />
                    </div>

                    {/* Submit Button - Full width */}
                    <div className="md:col-span-2">
                        <button type="submit" className="btn w-full bg-[#D2B48C] text-lg text-black hover:bg-[#c3a77c]">
                            Add Coffee
                        </button>
                    </div>

                </form>
            </div>


            {/* Form Ends here */}

        </div>
    );
};

export default AddCoffee;