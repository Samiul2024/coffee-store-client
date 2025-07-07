import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import Swal from 'sweetalert2';

const SignUp = () => {

    const { createUser } = use(AuthContext);
    // console.log(createUser);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const { email, password, ...restFormData } = Object.fromEntries(formData.entries());

        // const userProfile = {
        //     email,
        //     ...rest,
        // }

        // console.log(email, password, userProfile);

        // const email = formData.get('email');
        // const password = formData.get('password');
        console.log('from sign up  line 20', email, password);

        // create user in thee firebase
        createUser(email, password)
            .then(result => {
                console.log(result.user);

                const userProfile = {
                    email,
                    ...restFormData,
                    creationTime: result.user?.metadata?.creationTime,
                    lastSignInTime: result.user?.metadata?.lastSignInTime,
                }

                // save profile info in the db
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your profile has been created",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            console.log('alert successful', data.insertedId);
                        }
                        else {
                            console.log('didnt get insertedId', data.insertedId);
                        }
                    })


            })
            .catch(error => {
                console.log(error);
            })

    }


    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl mx-auto font-bold">Sign Up now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSignUp} className="fieldset">
                                <label className="label" >Name</label>
                                <input type="text"
                                    name="name"
                                    className="input" placeholder="Name" />
                                <label className="label" >Address</label>
                                <input type="text"
                                    name="Address"
                                    className="input" placeholder="Address" />
                                <label className="label" >Phone</label>
                                <input type="text"
                                    name="Phone"
                                    className="input" placeholder="Phone" />
                                <label className="label" >Photo</label>
                                <input type="text"
                                    name="photo"
                                    className="input" placeholder="Photo URL" />
                                <label className="label" >Email</label>
                                <input type="email"
                                    name="email"
                                    className="input" placeholder="Email" />
                                <label className="label" >Password</label>
                                <input type="password"
                                    name="password"
                                    className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;