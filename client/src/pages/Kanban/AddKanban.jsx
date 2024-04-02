/* eslint-disable react-refresh/only-export-components */
import { FormRow , SubmitBtn } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../../utils/customFetch';


export const action = (queryClient) => async ({ request }) => {

    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
        await customFetch.post('/kanbans', data);
        queryClient.invalidateQueries(['kanbans']);
        toast.success('Kanban added successfully');
        return redirect('/dashboard/all-kanbans');
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return error;
    }
};


const AddJob = () => {
    

    return (
        <Wrapper>
            <Form method='post' className='form'>
                <h4 className='form-title'>add kanban</h4>
                <div className='form-center'>
                <FormRow type='text' name='name' />
                    <FormRow type='text' name='backlog' />
                    <FormRow type='text' name='todo' />
                    <FormRow type='text' name='doing' />
                    <FormRow type='text' name='complete' />
                    <SubmitBtn formBtn />
                </div>
            </Form>
        </Wrapper>
    );

};

export default AddJob;