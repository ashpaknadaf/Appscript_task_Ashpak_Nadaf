
import { RiSearch2Line } from "react-icons/ri";
import { GoHeart } from "react-icons/go";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import './index.css'

const Header = () => (
    <div className="header-container">
        <div className="logo-icon-container">
            <img 
              src ="https://res.cloudinary.com/dgzuznaxk/image/upload/v1723300457/Logo_cq9xxb.png"
              alt='logo'
              className="logo"
            />

            <div>
                <h1 className="logo-heading">LOGO</h1>
            </div>

            <div className="icons-container">
                <RiSearch2Line className="icons" />
                <GoHeart className="icons" />
                <HiOutlineShoppingBag className="icons" />
                <CgProfile className="icons" />

                <div className="language-select-container">
                    <p className="language-name">ENG</p>
                    <MdOutlineKeyboardArrowDown className="icons"/>
                </div>
            </div>
        </div>

        <div className="header-routers-section">
            <p className="route-item">SHOP</p>
            <p className="route-item">SKILLS</p>
            <p className="route-item">STORIES</p>
            <p className="route-item">ABOUT</p>
            <p className="route-item">CONTACT US</p>
        </div>
    </div>
)

export default Header