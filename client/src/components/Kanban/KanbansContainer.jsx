import Kanban from './Kanban';
import PageBtnContainerKanban from './PageBtnContainerKanban';
import { useAllKanbansContext } from '../../pages/Kanban/AllKanbans';

const KanbansContainer = () => {

    const { data } = useAllKanbansContext();
    const { kanbans, totalKanbans, numOfPages } = data;

    if (kanbans.length === 0) {
        return (
            <>
                <h2>No kanbans to display...</h2>
            </>
        );
    }

    return (
        <>
            <h5 className='pt-10 lg:pt-14'>
                {totalKanbans} kanban-board{kanbans.length > 1 && 's'} found:
            </h5>
            <hr className='mt-1 pb-2'/>
            <div className='kanbans'>
                {kanbans.map((kanban) => {
                return <Kanban key={kanban._id} {...kanban} />;
                })}
            </div>
            {numOfPages > 1 && <PageBtnContainerKanban />}
        </>
    );

};

export default KanbansContainer;