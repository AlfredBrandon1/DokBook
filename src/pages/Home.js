import { useNavigate } from 'react-router-dom'

//styling
import './Home.css'

//components
import AppName from '../components/AppName'

const Home = () => {
    const navigate = useNavigate()

    const StartButtonOnClick = ()=>{
        navigate('/my-patients')
    }
    const OutButtonOnClick = ()=>{
        navigate('/')
    }

    return(
        <div className="home">
            <AppName/>
            <h3>Welcome,  Doctor Strange! </h3>
            <button onClick={StartButtonOnClick}> 
                Get Started
            </button>
            <button onClick={OutButtonOnClick}> 
                Logout
            </button>
        </div>
    ) 
}

export default Home