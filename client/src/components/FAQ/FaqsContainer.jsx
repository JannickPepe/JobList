
import Faq from './Faq';
import Wrapper from '../../assets/wrappers/JobsContainer';
import PageBtnContainerFaq from './PageBtnContainerFaq';
import { useAllFaqsContext } from '../../pages/FAQ/AllFaqs';

const FaqsContainer = () => {

    const { data } = useAllFaqsContext();
    const { faqs, totalFaqs, numOfPages } = data;

    if (faqs.length === 0) {
        return (
            <Wrapper>
                <h2>No faqs to display...</h2>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <h5>
                {totalFaqs} faq{faqs.length > 1 && 's'} found
            </h5>
            <div className='jobs'>
                {faqs.map((faq) => {
                return <Faq key={faq._id} {...faq} />;
                })}
            </div>
            {numOfPages > 1 && <PageBtnContainerFaq />}
        </Wrapper>
    );

};

export default FaqsContainer;