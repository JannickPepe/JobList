
import { FormRow, FormRowSelect } from '..';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { Form, useSubmit, Link } from 'react-router-dom';
import { FAQ_SORT_BY, } from '../../../../utils/constants';
import { useAllFaqsContext } from '../../pages/FAQ/AllFaqs';


const SearchFaqContainer = () => {

    const { searchValues } = useAllFaqsContext();
    const { search, sort } = searchValues;

    const submit = useSubmit();

    const debounce = (onChange) => {
        let timeout;
        return (e) => {
            const form = e.currentTarget.form;
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                onChange(form);
            }, 2000);
        };
    };

    return (
        <Wrapper>
            <Form className='form'>
                <h5 className='form-title'>search form</h5>
                <div className='form-center'>
                    {/* search position */}

                    <FormRow
                        type='search'
                        name='search'
                        defaultValue={search}
                        onChange={debounce((form) => {
                            submit(form);
                        })}
                    />
                    <FormRowSelect
                        name='sort'
                        defaultValue={sort}
                        list={[...Object.values(FAQ_SORT_BY)]}
                        onChange={(e) => {
                        submit(e.currentTarget.form);
                        }}
                    />
                    <Link to='/dashboard/all-faqs' className='btn form-btn delete-btn'>
                        Reset Search Results
                    </Link>
                </div>
            </Form>
        </Wrapper>
    );

};

export default SearchFaqContainer;