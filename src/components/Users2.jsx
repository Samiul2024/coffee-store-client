import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const Users2 = () => {

    const { isPending, isError, error, data: users } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://v1-coffee-store-server-liard.vercel.app/coffees/users');
            return res.json();
        }
    })
    // const [users, setUsers] = useState([]);
    // useEffect(() => {
    // fetch('https://v1-coffee-store-server-liard.vercel.app/coffees/users')
    //         .then(res => res.json())
    //         .then(data => {
    //             setUsers(data)
    //         })
    // }, [])


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // console.log('result confirmed');
                fetch(`https://v1-coffee-store-server-liard.vercel.app/coffees/users/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {

                            // const remainingUsers = users.filter(user => user._id !== id);
                            // setUsers(remainingUsers);

                            // To Do : Delete User from firebase

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }
    if (isPending) {
        return <>
            <span className="loading loading-spinner text-primary"></span>
            <span className="loading loading-spinner text-secondary"></span>
            <span className="loading loading-spinner text-accent"></span>
            <span className="loading loading-spinner text-neutral"></span>
            <span className="loading loading-spinner text-info"></span>
            <span className="loading loading-spinner text-success"></span>
            <span className="loading loading-spinner text-warning"></span>
            <span className="loading loading-spinner text-error"></span>
        </>
    }
    if (isError) {
        return <p>{error.message}</p>
    }
    return (
        <div>
            {/* <h2 className='text-3xl'>
                Users:{users.length}
            </h2> */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                No
                            </th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users?.map((user, index) => <tr key={user._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={user.photo}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                            <div className="text-sm opacity-50">{user.Address}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.Phone}
                                    {/* console.log(users); */}
                                    <br />
                                    {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                                </td>
                                <td>{user.email}</td>
                                <th>
                                    <button className="btn  btn-xs">VW</button>

                                    <button className="btn  btn-xs">Ed</button>

                                    <button
                                        onClick={() => handleDelete(user._id)}
                                        className="btn  btn-xs">DE</button>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Users2;