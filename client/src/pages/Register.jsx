
import { Logo, FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Link } from 'react-router-dom';



const Register = () => {

    return (
        <Wrapper>
            <form className='form'>
                <Logo />
                <h4>Register</h4>
                <FormRow type='text' name='name' defaultValue='John' />
                <FormRow type='text' name='lastName' labelText='last name' />
                <FormRow type='text' name='location' />
                <FormRow type='email' name='email' defaultValue='John@hotmail.com'/>
                <FormRow type='password' name='password' defaultValue='*****'/>

                <button type='submit' className='btn btn-block'>
                submit
                </button>
                <p>
                Already a member?
                <Link to='/login' className='member-btn'>
                    Login
                </Link>
                </p>
            </form>
        </Wrapper>
    );

};


export default Register;