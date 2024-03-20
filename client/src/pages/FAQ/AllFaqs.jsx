/* eslint-disable no-unused-vars */

import { FaqsContainer, SearchFaqContainer } from '../../components';
import customFetch from '../../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';
import { useQuery } from '@tanstack/react-query';

const AllFaqsContext = createContext();

const allFaqsQuery = (params) => {
    const { search, sort, page } = params;

    return {
        queryKey: [
            'faqs',
            search ?? '',
            sort ?? 'newest',
            page ?? 1,
        ],
        queryFn: async () => {
            const { data } = await customFetch.get('/faqs', {
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

    await queryClient.ensureQueryData(allFaqsQuery(params));
    return { searchValues: { ...params } };
};


const AllFaqs = () => {

    const { searchValues } = useLoaderData();
    const { data } = useQuery(allFaqsQuery(searchValues));

    return (
        <AllFaqsContext.Provider value={{ data, searchValues }}>
            <SearchFaqContainer />
            <FaqsContainer />
        </AllFaqsContext.Provider>
    );

};

export default AllFaqs;

export const useAllFaqsContext = () => useContext(AllFaqsContext);