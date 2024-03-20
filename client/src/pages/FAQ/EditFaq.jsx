import { FormRow, SubmitBtn } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useLoaderData } from 'react-router-dom';
import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../../utils/customFetch';
import { useQuery } from '@tanstack/react-query';

//
const singleFaqQuery = (id) => {
    return {
        queryKey: ['faq', id],
        queryFn: async () => {
        const { data } = await customFetch.get(`/faqs/${id}`);
        return data;
        },
    };
};

//
export const loader = (queryClient) => async ({ params }) => {

    try {
        await queryClient.ensureQueryData(singleFaqQuery(params.id));
        return params.id;
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return redirect('/dashboard/all-faqs');
    }
};

//
export const action = (queryClient) => async ({ request, params }) => {

    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
        await customFetch.patch(`/faqs/${params.id}`, data);
        queryClient.invalidateQueries(['faqs']);

        toast.success('Faq edited successfully');
        return redirect('/dashboard/all-faqs');
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return error;
    }
};

const EditFaq = () => {

    const id = useLoaderData();

    const { data: { faq }, } = useQuery(singleFaqQuery(id));

    return (
        <Wrapper>
            <Form method='post' className='form'>
                <h4 className='form-title'>edit faq</h4>
                <div className='form-center'>
                    <FormRow type='text' name='title' defaultValue={faq.title} />
                    <FormRow type='text' name='text' defaultValue={faq.text} />

                    <SubmitBtn formBtn />
                </div>
            </Form>
        </Wrapper>
    );

};

export default EditFaq;