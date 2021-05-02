import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button, Card, notification, Tabs } from 'antd';
import { useState, useEffect } from 'react';
import { fetchSampleCodeHelp, fetchUpdateSampleCodeHelp } from 'services/html_document';

const { TabPane } = Tabs;


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
    const saveButtonItem = <Button id='save' type='primary' onClick={handleSaveBtn}> Save </Button>;
    
    return <div className='__sample-code-page-container__'>
        <h2>Sample Code</h2>
        <Tabs defaultActiveKey="1" tabBarExtraContent={{right: saveButtonItem}}>
            <TabPane tab="Edit" key="1">
                
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
            </TabPane>
            <TabPane tab="Preview" key="2">
                <Card className='__sample-code-container__'>
                    <div dangerouslySetInnerHTML={ { __html: data } }></div>
                </Card>
            </TabPane>
        </Tabs>
    </div>;
}