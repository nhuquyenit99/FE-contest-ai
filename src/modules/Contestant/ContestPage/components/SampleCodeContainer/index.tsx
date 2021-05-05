import { Card } from 'antd';
import { useState, useEffect } from 'react';
import { fetchSampleCodeHelp } from 'services/html_document';

export default function SampleCodeContainer() {
    const [content, setContent] = useState('');
    useEffect(() => {
        fetchSampleCodeHelp()
            .then(resp => {
                console.log(resp);
                setContent(resp?.html_content);
            });
    }, []);

    return <Card className='__sample-code-container__'>
        <div dangerouslySetInnerHTML={ { __html: content } }></div>
    </Card>;
}