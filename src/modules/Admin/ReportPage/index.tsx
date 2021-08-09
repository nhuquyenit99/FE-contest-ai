import { Col, Row } from 'antd';
import CardCount from './components/CardCount';
import { useEffect, useState } from 'react';
import { fetchReport } from 'services/report';
let cardItems = [
    {
        label: 'Contest',
        backgroundColor: '#f6f8fd'
    },
    {
        label: 'Language',
        backgroundColor: '#f6f8fd'
    },
    {
        label: 'Problem',
        backgroundColor: '#f6f8fd'
    },
    {
        label: 'Result',
        backgroundColor: '#f6f8fd'
    },
    {
        label: 'User',
        backgroundColor: '#f6f8fd'
    },
];
export function ReportPage() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [data, setData] = useState({});
    useEffect(() => {
        fetchReport()
            .then((res) => {
                setData(res);
                Object.keys(res).map((key, idx) => {
                    cardItems[idx]['count'] = res[key];
                    return cardItems;
                });
            });
    });
    return <div className='__report-page__'>
        <Row style={{width: '100%'}} gutter={[16, 16]}>
            {
                cardItems.map((it) => {
                    return <Col span={6}>
                        <CardCount {...it}></CardCount>
                    </Col>;
                })
            }
        </Row>
        
    </div>;
}