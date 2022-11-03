//link
import {Link} from 'react-router-dom'

//styling
import './Header.css'

const Header = () => {

    return (
        <header className='header-container'>
            <Link to = '/home'> Home </Link>
            <Link to = '/my-patients'> My Patients </Link>
            <Link to = '/add-patient'> Add Patient </Link>
            <Link to = '/calendar'> Calendar </Link>
            <Link to = '/about'> About </Link>
            <Link to = '/'> Logout </Link>
        </header>
    )
}

export default Header