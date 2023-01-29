import { Link } from "react-router-dom";

    
const Navbar = () => {


    return (
        <div class="bg-purple-500 py-3">
            <div className="container mx-auto px-10 flex justify-between items-center">
                <div>
                    <span>Logo</span>
                </div>
                <div className="flex justify-start items-center gap-5">
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/booking">Booking</Link>
                    <Link to="/hotels">Hotels</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/admin">Admin</Link>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;