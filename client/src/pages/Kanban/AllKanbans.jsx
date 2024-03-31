/* eslint-disable no-unused-vars */
import { KanbansContainer, SearchKanbanContainer, } from '../../components';
import customFetch from '../../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';
import { useQuery } from '@tanstack/react-query';

const AllKanbansContext = createContext();

const allKanbansQuery = (params) => {
    const { search, sort, page } = params;

    return {
        queryKey: [
            'kanbans',
            search ?? '',
            sort ?? 'newest',
            page ?? 1,
        ],
        queryFn: async () => {
            const { data } = await customFetch.get('/kanbans', {
                params,
            });
            return data;
        },
    };
};

export const loader = (queryClient) => async ({ request }) => {

    const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
    ]);

    await queryClient.ensureQueryData(allKanbansQuery(params));
    return { searchValues: { ...params } };
};


const AllKanbans = () => {

    const { searchValues } = useLoaderData();
    const { data } = useQuery(allKanbansQuery(searchValues));

    return (
        <AllKanbansContext.Provider value={{ data, searchValues }}>
            <SearchKanbanContainer />
            <KanbansContainer />
        </AllKanbansContext.Provider>
    );

};

export default AllKanbans;

export const useAllKanbansContext = () => useContext(AllKanbansContext);