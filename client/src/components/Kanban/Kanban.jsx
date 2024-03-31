/* eslint-disable react/prop-types */
import { FaCalendarAlt } from 'react-icons/fa';
import { Link, Form } from 'react-router-dom';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import JobInfo from '../Job/JobInfo';
day.extend(advancedFormat);


const Kanban = ({_id, backlog, todo, doing, complete, createdAt,  }) => {

    const date = day(createdAt).format('MMM Do, YYYY');

    return (
        <>
            <header>
                <div className='info'>
                    <h5>{backlog}</h5>
                    <h5>{todo}</h5>
                    <h5>{doing}</h5>
                    <h5>{complete}</h5>
                </div>
            </header>

            <div className='content'>
                <div className='content-center'>
                    <JobInfo icon={<FaCalendarAlt />} text={date} />
                </div>

                <footer className='actions'>
                    <Link to={`../edit-kanban/${_id}`} className='btn edit-btn'>
                        Edit
                    </Link>
                    <Form method='post' action={`../delete-kanban/${_id}`}>
                        <button type='submit' className='btn delete-btn'>
                            Delete
                        </button>
                    </Form>
                </footer>
            </div>
        </>
    );
};

export default Kanban;