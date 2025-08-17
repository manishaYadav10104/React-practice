function Header() {
    return (
        <div className="heading">
            <img className="images" src="https://images.indianexpress.com/2021/01/myntra.png?w=640" height="80px" width="80px" />
            <div className="option">
                <button className="but">MEN</button>
                <button className="but">WOMEN</button>
                <button className="but">KIDS</button>
                <button className="but">HOME AND LIVING</button>
                <button className="but">BEAUTY</button>
                <button className="but">STUDIO</button>

            </div>
            <input className="searchbar" placeholder=" Search for product bar and more"></input>

            <div className="profile">
                <div className="logo">
                    <i className="fa-regular fa-user"></i>
                    <button className="pro">Profile</button>
                </div>
                <div className="logo">
                    <i className="fa-regular fa-heart"></i>
                    <button className="pro">Wishing</button>
                </div>
                <div className="logo">

                    <i className="fa-solid fa-bag-shopping"></i>
                    <button className="pro">Bag</button>
                </div>
            </div>

        </div>


    )

}

export default Header;