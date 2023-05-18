import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex bg-slate-100 md:h-20 items-center p-3 text-center ">
      <div className="flex-none">
        <Link
          to="/"
          className="text-slate-600 hover:text-slate-700  font-extrabold normal-case text-xl md:text-4xl"
        >
          Toys World
        </Link>
      </div>

      <div className="flex font-bold text-xl grow justify-center space-x-7 ">
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-slate-900" : "text-slate-600 link link-hover"
            }
            to="/"
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-slate-900" : "text-slate-600 link link-hover"
            }
            to="/blog"
          >
            {" "}
            Blog
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-slate-900" : "text-slate-600 link link-hover"
            }
            to="/all"
          >
            {" "}
            All toys
          </NavLink>
        </div>
        <div>
         {
          user ?  <NavLink
          className={({ isActive }) =>
            isActive ? "text-slate-900" : "text-slate-600 link link-hover"
          }
          to="/my"
        >
          {" "}
          My toys
        </NavLink> : ""
         }
        </div>
        <div>
        {
          user ?  <NavLink
          className={({ isActive }) =>
            isActive ? "text-slate-900" : "text-slate-600 link link-hover"
          }
          to="/add"
        >
          {" "}
          Add a toy
        </NavLink> : ""
         }
        </div>
      </div>

      <div className="md:flex-none">
        {user ? (
          <div className="flex items-center">
            <button
              onClick={handleLogOut}
              className="btn btn-outline btn-sm mr-5"
            >
              Log Out
            </button>
            <div className="relative w-10 rounded-full">
              <img className="rounded-full" src={user?.photoURL} />
              <div className="absolute top-0 hover:top-8 right-0 hover:right-12 opacity-0 hover:opacity-100">
                <p className="text-slate-700 text-md font-medium w-24">
                  {user?.displayName}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <Link to="/login" className="btn btn-outline btn-sm mr-5">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
