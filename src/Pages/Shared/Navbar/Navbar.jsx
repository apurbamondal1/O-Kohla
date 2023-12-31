import { useContext } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import useCart from "../../../Hooks/useCart";


const Navbar = () => {
        const { user, logOut } = useContext(AuthContext);
        const [cart] = useCart();
    
        const handleLogOut = () => {
            logOut()
                .then(() => { })
                .catch(error => console.log(error));
        }



  const navOptions = <>
  <button className="btn btn-ghost"><li><Link to="/">Home</Link></li></button>
  <button className="btn btn-ghost"><li><Link to="/menu">Our Menu</Link></li></button>
  <button className="btn btn-ghost" ><li><Link to="/order/salad">Order Food</Link></li></button>
   <li><Link to="/secret">Secret</Link></li>
   <li>
            <Link to="/dashboard/mycart">
                <button className="btn gap-2">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                </button>
            </Link>
        </li>
        
   {
            user ? <>
               
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }
</>

    return (
      <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-orange-500 bg-opacity-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">O - Kohla</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
            </div>
        </>  
    );
};

export default Navbar;