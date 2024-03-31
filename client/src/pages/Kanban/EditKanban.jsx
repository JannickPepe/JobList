import { FormRow, SubmitBtn } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useLoaderData } from 'react-router-dom';
import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../../utils/customFetch';
import { useQuery } from '@tanstack/react-query';

//
const singleKanbanQuery = (id) => {
    return {
        queryKey: ['kanban', id],
        queryFn: async () => {
        const { data } = await customFetch.get(`/kanbans/${id}`);
        return data;
        },
    };
};

//
export const loader = (queryClient) => async ({ params }) => {

    try {
        await queryClient.ensureQueryData(singleKanbanQuery(params.id));
        return params.id;
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return redirect('/dashboard/all-kanbans');
    }
};

//
export const action = (queryClient) => async ({ request, params }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
        await customFetch.patch(`/kanbans/${params.id}`, data);
        queryClient.invalidateQueries(['kanbans']);

        toast.success('Kanban edited successfully');
        return redirect('/dashboard/all-kanbans');
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return error;
    }
};

const EditKanban = () => {

    const id = useLoaderData();

    const { data: { kanban }, } = useQuery(singleKanbanQuery(id));

    return (
        <Wrapper>
            <Form method='post' className='form'>
                <h4 className='form-title'>edit kanban</h4>
                <div className='form-center'>
                    <FormRow type='text' name='backlog' defaultValue={kanban.backlog} />
                    <FormRow type='text' name='todo' defaultValue={kanban.todo} />
                    <FormRow type='text' name='doing' defaultValue={kanban.doing} />
                    <FormRow type='text' name='complete' defaultValue={kanban.complete} />
                    <SubmitBtn formBtn />
                </div>
            </Form>
        </Wrapper>
    );

};

export default EditKanban;