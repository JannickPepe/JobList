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
        await customFetch.post('/faqs', data);
        queryClient.invalidateQueries(['faqs']);
        toast.success('Faq added successfully');
        return redirect('/dashboard/all-faqs');
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return error;
    }
};


const AddFaq = () => {
    

    return (
        <Wrapper>
            <Form method='post' className='form'>
                <h4 className='form-title'>add faq</h4>
                <div className='form-center'>
                    <FormRow type='text' name='title' />
                    <FormRow type='text' name='text' />

                    <SubmitBtn formBtn />
                </div>
            </Form>
        </Wrapper>
    );

};

export default AddFaq;