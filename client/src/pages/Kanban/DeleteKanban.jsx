
import { redirect } from 'react-router-dom';
import customFetch from '../../utils/customFetch';
import { toast } from 'react-toastify';

export const action = (queryClient) => async ({ params }) => {

    try {
        await customFetch.delete(`/kanbans/${params.id}`);
        queryClient.invalidateQueries(['kanbans']);
        toast.success('Kanban deleted successfully');
    } catch (error) {
        toast.error(error?.response?.data?.msg);
    }
    return redirect('/dashboard/all-kanbans');
};
