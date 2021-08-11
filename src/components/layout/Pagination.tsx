import { Pagination } from 'antd';

type CustomPaginationProps = {
    total: number,
    onPageChange: (page: number) => void,
    onShowSizeChanger?: (current: number, size: number) => void
};

export default function CustomPagination({total, onPageChange, onShowSizeChanger}: CustomPaginationProps) {
    const showSizeChanger = onShowSizeChanger?true:false;
    const handleChange = (page: number, pageSize?: number) => {
        onPageChange(page);
    };

    return <Pagination 
        defaultCurrent={1} 
        total={total} 
        onChange={handleChange} 
        showSizeChanger={showSizeChanger}
        onShowSizeChange={onShowSizeChanger}
    />;
}