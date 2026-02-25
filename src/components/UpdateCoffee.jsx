import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const { _id, name, price, chef, taste, photo, details, supplier } = useLoaderData();
    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedCoffee = Object.fromEntries(formData.entries());
        console.log(updatedCoffee);

        // send updated coffee data to the db
        fetch(`https://v1-coffee-store-server-liard.vercel.app/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "YoCoffee updated Successfully!!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    console.log(data);
                }
            })

    }

    return (
        <div className='p-24'>
            {/* <div className='p-12 text-center space-y-4'>

                <h1 className="text-6xl">Add New Coffee</h1>
                
            </div> */}
            {/* Form starts here */}

            <div className="max-w-4xl mx-auto p-6 bg-base-200 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center">Update Coffee</h2>

                <form onSubmit={handleUpdateCoffee} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Name */}
                    <div>
                        <label className="label font-semibold text-lg">Name</label>
                        <input type="text" name="name" defaultValue={name} placeholder="Enter coffee name" className="input input-bordered w-full" />
                    </div>

                    {/* Chef */}
                    <div>
                        <label className="label font-semibold text-lg">Chef</label>
                        <input type="text" name="chef" defaultValue={chef} placeholder="Enter coffee chef" className="input input-bordered w-full" />
                    </div>

                    {/* Supplier */}
                    <div>
                        <label className="label font-semibold text-lg">Supplier</label>
                        <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter coffee supplier" className="input input-bordered w-full" />
                    </div>

                    {/* Taste */}
                    <div>
                        <label className="label font-semibold text-lg">Taste</label>
                        <input type="text" name="taste"
                            defaultValue={taste} placeholder="Enter coffee taste" className="input input-bordered w-full" />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="label font-semibold text-lg">Price</label>
                        <input type="text" name="price" defaultValue={price} placeholder="Enter coffee Price" className="input input-bordered w-full" />
                    </div>

                    {/* Details */}
                    <div>
                        <label className="label font-semibold text-lg">Details</label>
                        <input type="text" name="details" defaultValue={details} placeholder="Enter coffee details" className="input input-bordered w-full" />
                    </div>

                    {/* Photo URL - Full width */}
                    <div className="md:col-span-2">
                        <label className="label font-semibold text-lg">Photo</label>
                        <input type="text" name="photo" defaultValue={photo} placeholder="Enter photo URL" className="input input-bordered w-full" />
                    </div>

                    {/* Submit Button - Full width */}
                    <div className="md:col-span-2">
                        <button type="submit" className="btn w-full bg-[#D2B48C] text-lg text-black hover:bg-[#c3a77c]">
                            Update Coffee
                        </button>
                    </div>

                </form>
            </div>


            {/* Form Ends here */}

        </div>
    );
};

export default UpdateCoffee;