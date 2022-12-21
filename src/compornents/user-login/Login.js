import React from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import auth from '../../firebase.init';



const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (gLoading || loading) {
        return <p>Loading...</p>
    };

    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password);
        navigate('/');
    };


    return (
        <div className='flex h-screen justify-center items-center'>
            <div>
                <img src='https://i.postimg.cc/cH3kCCbJ/blue-user-icon-symbol-website-admin-social-login-element-concept-white-background-3d-rendering-remov.png' />
            </div>
            <div className="card w-96 bg-base-200 shadow-xl">

                <div className="card-body">
                    <h2 className="card-title justify-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* email for  */}
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
                            <div className='flex items-center justify-between'>
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <Link
                                    to={"/reset"}
                                    className="text-sm text-[#A25BF7] hover:underline focus:text-blue-800"
                                >
                                    Forgot Password?
                                </Link>
                            </div>
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
                                        message: 'validate your password!'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}

                            </label>
                        </div>

                        <input className='w-full btn bg-orange-500 text-white mt-2' value='login' type="submit" />
                    </form>

                    <div className="divider">OR</div>
                    <p className='font-bold'>New to Doctors Portal? <Link className='text-secondary font-bold' to='/registation'>Create New Account</Link></p>

                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">CONTINUE WITH GOOGLE</button>


                </div>
            </div>
        </div>
    );
};

export default Login;
