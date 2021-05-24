import { Card, Divider } from 'antd';
import Title from 'antd/lib/typography/Title';
type CardCountProps = {
    label: string,
    count?: number,
    backgroundColor?: string
}
export default function CardCount(props: CardCountProps) {
    let cardProps = {
        backgroundColor: props.backgroundColor,
        borderRadius: '16px',
        color: '#afb2c8',
        fontFamily: '"Roboto", sans-serif'
    };
    return <Card style={{minHeight: '200px', ...cardProps}}>
        <Divider plain>
            <Title level={4}>
                {props.label.toUpperCase()}
            </Title> 
        </Divider>
        <Title level={1} style={{textAlign:'center', color: '#2c16e7'}}>
            {props.count}
        </Title>
    </Card>;
}