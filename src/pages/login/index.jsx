import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

const Auth = () => {
  const [mode, setMode] = useState("login");

  const toggleMode = () => {
    const value = mode === "login" ? "register" : "login";
    setMode(value);
  };
  return (
    <main className="w-full h-[calc(100vh-100px)] overflow-hidden">
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-2/4 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-gray-600 text-lg font-bold">
                    {mode === "login" ? "Sign in with" : "Sign Up"}
                  </h6>
                </div>
                {mode === "login" && (
                  <div className="btn-wrapper text-center">
                    <button
                      className="bg-white active:bg-gray-100 text-gray-800 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                    >
                      <FcGoogle className="w-5 mr-1" />
                      Google
                    </button>
                  </div>
                )}
                <hr className="mt-6 border-b-1 border-gray-400" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-gray-500 text-center mb-3 font-bold">
                  <small>
                    {mode === "login" ? "Or sign in with credentials" : "Sign up with credentials"}
                  </small>
                </div>
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Email"
                      style={{ transition: "all .15s ease" }}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Password"
                      style={{ transition: "all .15s ease" }}
                    />
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                    >
                      {mode === "login" ? "Sign In" : "Sign Up"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-full text-center mt-6">
              <button
                type="button"
                onClick={toggleMode}
                className="text-gray-800 font-bold text-lg underline"
              >
                {mode === "login"
                  ? "Don't have account ? Sign Up here"
                  : "Alread have account ? Sign In here"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Auth;
