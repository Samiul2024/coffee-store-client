import React from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees, handleView, handleEdit }) => {
    const { _id, photo, name, chef, price } = coffee;

    const handleDelete = () => {
        // console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed);
            if (result.isConfirmed) {

                // start deleting the coffee
                fetch(`https://v1-coffee-store-server-liard.vercel.app/coffees/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });

                            // remove the coffee from the state
                            const remainingCoffees = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remainingCoffees);
                        }
                        // console.log('after delete ', data);
                    })

                // calling backend api to delete


                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
            }
        });
    }


    return (
        <div className="md:mx-4 flex items-center justify-between bg-base-200 rounded-lg p-4 shadow-lg mb-4 border">
            {/* Coffee Image */}
            <div className="w-32 flex-shrink-0 ">
                <img src={photo} alt={name} className="w-full h-auto rounded-lg" />
            </div>

            {/* Coffee Details */}
            <div className="flex-1 ml-6">
                <h3 className="text-xl font-bold"><span className="font-semibold">Name:</span> {name}</h3>
                <p className="text-lg"><span className="font-semibold">Chef:</span> {chef}</p>
                <p className="text-lg"><span className="font-semibold">Price:</span> {price} Taka</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2">
                <Link to={`/coffee/${_id}`}>
                    <button onClick={() => handleView(coffee)} className="btn btn-square bg-[#D2B48C] hover:bg-[#c3a77c]">
                        <FaEye className="text-white" />
                    </button>
                </Link>
                <Link to={`/updateCoffee/${_id}`}>
                    <button onClick={() => handleEdit(coffee)} className="btn btn-square bg-[#403F3F] hover:bg-gray-700">
                        <FaEdit className="text-white" />
                    </button>
                </Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-square bg-red-500 hover:bg-red-600">
                    <FaTrash className="text-white" />
                </button>
            </div>
        </div>
    );
};

export default CoffeeCard;
