import './banner.css'

import banner from "../../assets/images/banner.png";

const Banner = () => {
    return (
        <header className='banner'>
            <img src={banner} alt="Banner principal da página." />
        </header>
    )
}

export default Banner;