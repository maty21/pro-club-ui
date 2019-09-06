import React, { useState } from 'react';
import { Upload, Icon, message } from 'antd';
import { Row, Col } from 'antd';
const { Dragger } = Upload;
export default function IconUpload(props) {
    const draggerProps = {
        name: 'file',
        multiple: true,
        action: '',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                props.imageUpload(info.file)
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    return (
        <Row type="flex" justify="space-around" align="middle" style={{ height: '80vh' }}>
            <Col span={8} >
                <div className="height-100" >
                    <Dragger {...draggerProps}>
                        <p className="ant-upload-drag-icon">
                            <Icon type="inbox" />
                        </p>
                        <p className="ant-upload-text">Click or drag Icon to this area to upload</p>
                        {/* <p className="ant-upload-hint">
                            Support for a single upload. Strictly prohibit from uploading company data or other
                            band files
    </p> */}
                    </Dragger>
                </div>
            </Col>
            <Col span={8}>

            </Col>
            <Col span={8}>

            </Col>
        </Row >

    )
}