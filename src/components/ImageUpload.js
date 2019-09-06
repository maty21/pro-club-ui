import { Upload, Icon, Modal } from 'antd';
import React, { useState } from 'react';
function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

export default function ImageUpload() {
    // const [previewVisible, setPreviewVisible] = useState(false);
    const [preview, setPreviewImage] = useState({
        previewVisible: false,
        previewImage: ''
    });
    const [fileList, setFileList] = useState([])


    const handleCancel = () => setPreviewImage({ previewVisible: false });

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setPreviewImage({
            previewImage: file.url || file.preview,
            previewVisible: true

        });
        //    setPreviewVisible(true)
    };

    const handleChange = async ({ fileList }) => {
        setFileList(fileList);
        if (!fileList[0].url && !fileList[0].preview) {
            fileList[0].preview = await getBase64(fileList[0].originFileObj);
        }

        setPreviewImage({
            previewImage: fileList[0].url || fileList[0].preview,
            previewVisible: true

        });
    };
    const uploadButton = (
        <div style={{ width: "400px" }}>
            <Icon type="plus" />
            <div className="ant-upload-text">Upload</div>
        </div>
    );


    return (
        <div className="clearfix" style={{ width: '500px' }}>
            <Upload
                action=""
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
            >
                {fileList.length >= 1 ? null : uploadButton}
            </Upload>
            {fileList.length === 1 ? <img alt="example" style={{ width: '100%' }} src={preview.previewImage} /> : null}
            <Modal visible={preview.previewVisible} footer={null} onCancel={handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={preview.previewImage} />
            </Modal>
        </div>
    );

}