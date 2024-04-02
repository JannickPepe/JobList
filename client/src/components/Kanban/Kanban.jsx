/* eslint-disable react/prop-types */
import { FaCalendarAlt } from 'react-icons/fa';
import { Link, Form } from 'react-router-dom';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import JobInfo from '../Job/JobInfo';
day.extend(advancedFormat);
import Draggable, {} from 'react-draggable'; // Both at the same time


const Kanban = ({_id, name, backlog, todo, doing, complete, createdAt,  }) => {

    const date = day(createdAt).format('MMM Do, YYYY');

    return (
        <>
            <h3 className='text-center mt-6'>{name}</h3>
            <div className='flex justify-center py-2'>
                <JobInfo icon={<FaCalendarAlt />} text={date} />
            </div>
            <div className='flex justify-center gap-4 pt-2 pb-2'>
                <Link to={`../edit-kanban/${_id}`} className='btn edit-btn'>
                    Edit
                </Link>
                <Form method='post' action={`../delete-kanban/${_id}`}>
                    <button type='submit' className='btn delete-btn'>
                        Delete
                    </button>
                </Form>
            </div>
            <div className='grid lg:grid-cols-4 lg:grid-rows-1 mt-4 mb-10 py-4 bg-gray-700 overflow-auto'>
                <div className='mx-auto text-center'>
                    <h4 className='py-2'>Backlog</h4>
                    <Draggable
                        defaultPosition={{x: 0, y: 0}}
                        position={null}
                        grid={[25, 25]}
                        scale={1}
                    >
                        <div className='bg-slate-300 w-full mt-2 p-4 rounded-md hover:cursor-grab'>
                            <p className='text-lg font-normal'>{backlog}</p>
                            <div className='flex justify-center gap-2 mt-2'>
                                <Link to={`../edit-kanban/${_id}`} className='btn edit-btn'>
                                    Edit
                                </Link>
                                <Form method='post' action={`../delete-kanban/${_id}`}>
                                    <button type='submit' className='btn delete-btn'>
                                        Delete
                                    </button>
                                </Form>
                            </div>
                        </div>
                    </Draggable>
                    <button className='mt-2 text-white'>Add +</button>
                </div>
                <div className='mx-auto text-center'>
                    <h4 className='py-2 text-slate-500'>TODO</h4>
                    <Draggable
                        defaultPosition={{x: 0, y: 0}}
                        position={null}
                        grid={[25, 25]}
                        scale={1}
                    >
                        <div className='bg-slate-300 w-full mt-2 p-4 rounded-md hover:cursor-grab'>
                            <p className='text-lg font-normal'>{todo}</p>
                            <div className='flex justify-center gap-2 mt-2'>
                                <Link to={`../edit-kanban/${_id}`} className='btn edit-btn'>
                                    Edit
                                </Link>
                                <Form method='post' action={`../delete-kanban/${_id}`}>
                                    <button type='submit' className='btn delete-btn'>
                                        Delete
                                    </button>
                                </Form>
                            </div>
                        </div>
                    </Draggable>
                    <button className='mt-2 text-white'>Add +</button>
                </div>
                <div className='mx-auto text-center'>
                    <h4 className='py-2 text-blue-500'>Doing</h4>
                    <Draggable
                        defaultPosition={{x: 0, y: 0}}
                        position={null}
                        grid={[25, 25]}
                        scale={1}
                    >
                        <div className='bg-slate-300 w-full mt-2 p-4 rounded-md hover:cursor-grab'>
                            <p className='text-lg font-normal'>{doing}</p>
                            <div className='flex justify-center gap-2 mt-2'>
                                <Link to={`../edit-kanban/${_id}`} className='btn edit-btn'>
                                    Edit
                                </Link>
                                <Form method='post' action={`../delete-kanban/${_id}`}>
                                    <button type='submit' className='btn delete-btn'>
                                        Delete
                                    </button>
                                </Form>
                            </div>
                        </div>
                    </Draggable>
                    <button className='mt-2 text-white'>Add +</button>
                </div>
                <div className='mx-auto text-center'>
                    <h4 className='py-2 text-green-500'>Completed</h4>
                    <Draggable
                        defaultPosition={{x: 0, y: 0}}
                        position={null}
                        grid={[25, 25]}
                        scale={1}
                    >
                        <div className='bg-slate-300 w-full mt-2 p-4 rounded-md hover:cursor-grab'>
                            <p className='text-lg font-normal'>{complete}</p>
                            <div className='flex justify-center gap-2 mt-2'>
                                <Link to={`../edit-kanban/${_id}`} className='btn edit-btn'>
                                    Edit
                                </Link>
                                <Form method='post' action={`../delete-kanban/${_id}`}>
                                    <button type='submit' className='btn delete-btn'>
                                        Delete
                                    </button>
                                </Form>
                            </div>
                        </div>
                    </Draggable>
                </div>
            </div>

        </>
    );
};

export default Kanban;