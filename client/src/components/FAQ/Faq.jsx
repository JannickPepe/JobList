/* eslint-disable react/prop-types */
import { FaCalendarAlt } from 'react-icons/fa';
import { Link, Form } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/Job';
import JobInfo from '../Job/JobInfo';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);


const Faq = ({_id, title, text,  createdAt, }) => {

    const date = day(createdAt).format('MMM Do, YYYY');

    return (
        <Wrapper>
            <header>
                <div className='main-icon'>{title.charAt(0)}</div>
                <div className='info'>
                <h5>{title}</h5>
                <p>{text}</p>
                </div>
            </header>
            <div className='content'>
                <div className='content-center'>
                    <JobInfo icon={<FaCalendarAlt />} text={date} />
                </div>

                <footer className='actions'>
                    <Link to={`../edit-faq/${_id}`} className='btn edit-btn'>
                        Edit
                    </Link>
                    <Form method='post' action={`../delete-faq/${_id}`}>
                        <button type='submit' className='btn delete-btn'>
                            Delete
                        </button>
                    </Form>
                </footer>
            </div>
        </Wrapper>
    );
};

export default Faq;