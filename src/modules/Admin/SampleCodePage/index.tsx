import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button, notification } from 'antd';
import { useState, useEffect } from 'react';
import { fetchSampleCodeHelp, fetchUpdateSampleCodeHelp } from 'services/html_document';


export default function SampleCodePage() {
    const [data, setData] = useState('');
    useEffect(() => {
        fetchSampleCodeHelp()
            .then(resp => {
                console.log(resp);
                setData(resp.html_content);
            });
    }, []);
    
    const handleSaveBtn = () => {
        // let myData = data;
        console.log(data);
        fetchUpdateSampleCodeHelp(data).then(
            resp => {
                notification.success({
                    message: 'Update sample code help successfully',
                    style: {
                        width: 600,
                    },
                });
            }
        );
    };

    return <div className='__sample-code-page-container__'>
        <h2>Sample Code</h2>
        <Button id='save' type='primary' onClick={handleSaveBtn}> Save </Button>
        <CKEditor
            editor={ClassicEditor}
            data={data}
            onReady={editor => {
                // You can store the "editor" and use when it is needed.
                // console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
                const data = editor.getData();
                setData(data);
            }}
            onBlur={(event, editor) => {
                // console.log('Blur.', editor);
                // console.log(editor.getData());
            }}
            onFocus={(event, editor) => {
                // console.log('Focus.', editor);
            }}
        />
    </div>;
}