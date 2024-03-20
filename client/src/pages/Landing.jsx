
// import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';
import Hero from '../components/Landing/Hero';


/*
const Wrapper = styled.div`
    background-color: red;
    h1 {
        color: white;
    }
    .content {
        background-color: blue;
        color: yellow;
    }
`;
*/


const Landing = () => {

    return (

        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className='container page'>
                {/* info */}
                <div className='info'>
                    <h1>
                        job <span>tracking</span> app
                    </h1>
                    <p>
                        Im baby wayfarers hoodie next level taiyaki brooklyn cliche blue
                        bottle single-origin coffee chia. Aesthetic post-ironic venmo,
                        quinoa lo-fi tote bag adaptogen everyday carry meggings + 1 brunch
                        narwhal.
                    </p>
                    <Link to='/register' className='btn register-link'>
                        Register
                    </Link>
                    <Link to='/login' className='btn'>
                        Login / Demo User
                    </Link>
                </div>
                <img src={main} alt='job hunt' className='img main-img' />
            </div>
            <Hero />
        </Wrapper>

    );

};

export default Landing;