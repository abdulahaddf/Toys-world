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
    <div className="  items-center text-center ">
      <div className="navbar bg-gradient-to-r from-[#DDE9FD]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <div>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-900 "
                      : "text-blue-600 link link-hover"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </div>
              <div>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-blue-900" : "text-blue-600 link link-hover"
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
                    isActive ? "text-blue-900" : "text-blue-600 link link-hover"
                  }
                  to="/all"
                >
                  {" "}
                  All toys
                </NavLink>
              </div>
              <div>
                {user ? (
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-900"
                        : "text-blue-600 link link-hover"
                    }
                    to="/my"
                  >
                    {" "}
                    My toys
                  </NavLink>
                ) : (
                  ""
                )}
              </div>
              <div>
                {user ? (
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-900"
                        : "text-blue-600 link link-hover"
                    }
                    to="/add"
                  >
                    {" "}
                    Add a toy
                  </NavLink>
                ) : (
                  ""
                )}
              </div>
            </ul>
          </div>
          <div className="flex">
            <img className="w-16" src="https://i.ibb.co/n3W03RF/pp.png" alt="" />
            <Link
              to="/"
              className="text-blue-600 hover:text-blue-700  font-extrabold normal-case text-xl md:text-4xl"
            >
              Toys World
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-xl space-x-6">
            <div>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-900" : "text-blue-600 link link-hover"
                }
                to="/"
              >
                Home
              </NavLink>
            </div>
            <div>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-900" : "text-blue-600 link link-hover"
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
                  isActive ? "text-blue-900" : "text-blue-600 link link-hover"
                }
                to="/all"
              >
                {" "}
                All toys
              </NavLink>
            </div>
            <div>
              {user ? (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-blue-900" : "text-blue-600 link link-hover"
                  }
                  to="/my"
                >
                  {" "}
                  My toys
                </NavLink>
              ) : (
                ""
              )}
            </div>
            <div>
              {user ? (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-blue-900" : "text-blue-600 link link-hover"
                  }
                  to="/add"
                >
                  {" "}
                  Add a toy
                </NavLink>
              ) : (
                ""
              )}
            </div>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="md:flex-none">
            {user ? (
              <div className="flex items-center">
                <div
                  className="relative mr-3 w-10 rounded-full tooltip tooltip-left "
                  data-tip={user?.displayName}
                >
                  <img className="rounded-full" src={user?.photoURL} />
                </div>
                <button
                  onClick={handleLogOut}
                  className="btn btn-outline btn-sm mr-5"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn btn-outline btn-sm mr-5">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
