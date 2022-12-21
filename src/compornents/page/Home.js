import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Home = () => {
    const [user] = useAuthState(auth);
    const [signOut, loading, error] = useSignOut(auth);

    if(loading){
        return <p>Loading...</p>
    }
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    return (
        <div>
            <div className='bg-red-50 h-screen' >
                
                {
                    user ? "Login Sucessfully Account your." : "You can Join With Us"
                }
                <div>
                    {user ? (<button onClick={logout} className="btn btn-active btn-ghost">Sign Out</button>
                    ) : (<button className="btn btn-outline btn-accent"><Link to="/login">login</Link></button>)}
                </div>

                <div className="divider">OR</div>
                <p className='font-bold'>New User Account? <Link className='text-secondary font-bold' to='/registation'>Create New Account</Link></p>
            </div>
        </div>
    );
};

export default Home;