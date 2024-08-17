import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
   const [signIn, setSignIn] = useState(true);

   const handleClick = () => {
    setSignIn(!signIn);
   }

    return (
        <>
        <Header />
        <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_small.jpg"
        alt="background"
        />
        </div>
        <form className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">{signIn ? 'Sign In' : 'Sign Up'}</h1>
            { !signIn &&
                <input type="text" placeholder="full name" className="p-4 my-4 w-full bg-gray-700" />

            }
            <input type="text" placeholder="email id" className="p-4 my-4 w-full bg-gray-700" />
            <input type="password" placeholder="password" className="p-4 my-4 w-full bg-gray-700" />
            <button className="p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer">{signIn ? 'Sign In' : 'Sign Up'}</button>
            <h4 className="cursor-pointer" onClick={handleClick}>{signIn ? 'New to netflix?' : 'Already a user?' }<strong>{signIn ? 'Sign Up now.' : 'Sign In now.'}</strong></h4>
        </form>
        </>
    )
}

export default Login;