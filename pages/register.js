import { useState, React } from "react";
import redirect from "nextjs-redirect";
import Router from "next/router";
import axios from "axios";
function register() {
  const [resp, setresp] = useState();
  const statuscode = 0;
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    const user = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
    };
    //console.log(user)
    if (user) {
      console.log("user");
      const info = JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password,
      });
      //console.log(info)
      try {
        const response = await fetch("/api/register", {
          method: "POST",
          body: info,
          headers: {
            "Content-Type": "application/json",
          },
        });
        const ress = await response.json();
        console.log(ress.message);
        console.log(response.status);
        if (response.status >= 400) {
          
          statuscode = 1;
        }
        console.log(statuscode);
        if (statuscode == 1) {
          alert(ress.message);
        } else {
            statuscode=0
          Router.push("/login");
        }
      } catch (err) {
        console.log("catcherr");
      }
    }
  };

  return (
    <section class="min-h-screen flex flex-col bg-loginpage bg-cover  bg-no-repeat">
      <div class="flex flex-1 items-center justify-center  ">
        <div class="rounded-lg sm:border-3 border-gray-400 px-4 lg:px-20 py-16 bg-white  shadow-inner  lg:max-w-xl  w-full text-center">
          <form class="text-center" onSubmit={handleSubmit}>
            <h1 class="font-bold tracking-wider text-3xl mb-8 w-full  h-full text-black-600">
              Register
            </h1>
            <div class="py-2 text-left">
              <input
                type="text"
                class="bg-gray-200 border-3 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg  "
                placeholder="Full Name"
                name="name"
              />
            </div>
            <div class="py-2 text-left">
              <input
                type="email"
                name="email"
                class="bg-gray-200 border-3 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg  "
                placeholder="Email"
              />
            </div>
            <div class="py-2 text-left">
              <input
                type="password"
                name="password"
                class="bg-gray-100 border-3 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg  "
                placeholder="Password"
              />
            </div>
            <div class="py-2 text-left">
              <input
                type="password"
                class="bg-gray-100 border-3 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg  "
                placeholder="Confirm Password"
              />
            </div>
            <div class="py-2">
              <button
                type="submit"
                class="border-2 border-gray-100 focus:outline-none bg-green-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg "
              >
                Register
              </button>
            </div>
          </form>

          <div class="text-center mt-12">
            <span></span>
            <span>Already have an account?</span>
          </div>
          <div class="text-center">
            <a
              href="login"
              class="font-light text-md text-red-600 underline font-semibold "
            >
              Sign in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default register;
