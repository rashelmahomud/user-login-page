import React from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Registation = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate();


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [sendEmailVerification, sending] = useSendEmailVerification(auth);

    if (gLoading || loading) {
        return <p>Loading...</p>
    };

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        // await updateProfile({ displayName: data.name });
        navigate('/');
        console.log('update done');

    };

    return (
        <div className='flex h-screen justify-center items-center mx-10'>
            <div>
                <img src='https://i.postimg.cc/ncSW3yBp/3d-illustration-computer-monitor-login-screen-removebg-preview.png' />
            </div>
            <div className="card w-96 bg-base-200 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center text-2xl font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* name fild this down  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Requird Name',
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Number</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Number"
                                className="input input-bordered w-full max-w-xs"
                                {...register("Number", {
                                    required: {
                                        value: true,
                                        message: 'Requird Number',
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.Number?.type === 'required' && <span className="label-text-alt text-red-600">{errors.Number.message}</span>}
                            </label>
                        </div>


                        {/* name fild this up */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Requird Email',
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'validate your Emai!',
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                {errors.email?.type === 'pettern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}

                            </label>
                        </div>
                        {/* passworld for  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Requird password'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be Needs 6 Currecter!'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}

                            </label>
                        </div>
                        {/* //passworld for */}

                        {/* {loginError} */}
                        <input className='w-full bg-orange-500 btn text-white' value='Sign Up' type="submit" />
                    </form>

                    <div className="divider">OR</div>
                    <p className='font-bold'>New User Account Here <Link className='text-secondary font-bold' to='/login'>Already Have a Account</Link></p>

                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">CONTINUE WITH GOOGLE</button>


                </div>
            </div>
        </div>
    );
};

export default Registation;