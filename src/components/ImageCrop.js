import React, { useState } from 'react';
import { Row, Col } from 'antd';
import ReactCrop from "react-image-crop";
import IconUpload from "./IconUpload"
import "react-image-crop/dist/ReactCrop.css";



export default function ImageCrop() {
    const [imageState, setImageState] = useState({
        src: null,
        crop: {
            unit: "%",
            width: 30,
            aspect: 16 / 9
        }
    });
    const [croppedImage, setCroppedImage] = useState({

    })

    const onSelectFile = e => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener("load", () =>
                setImageState({ src: reader.result })
            );
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    // If you setState the crop in here you should return false.
    const onImageLoaded = image => {
        this.imageRef = image;
    };

    const onCropComplete = crop => {
        makeClientCrop(crop);
    };

    const onCropChange = (crop, percentCrop) => {
        setImageState({ crop });
    };

    const makeClientCrop = async (crop) => {
        if (this.imageRef && crop.width && crop.height) {
            const croppedImageUrl = await getCroppedImg(
                this.imageRef,
                crop,
                "newFile.jpeg"
            );
            setCroppedImage({ croppedImageUrl });
        }
    }

    const getCroppedImg = (image, crop, fileName) => {
        const canvas = document.createElement("canvas");
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext("2d");

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        );

        return new Promise((resolve, reject) => {
            canvas.toBlob(blob => {
                if (!blob) {
                    //reject(new Error('Canvas is empty'));
                    console.error("Canvas is empty");
                    return;
                }
                blob.name = fileName;
                window.URL.revokeObjectURL(this.fileUrl);
                this.fileUrl = window.URL.createObjectURL(blob);
                resolve(this.fileUrl);
            }, "image/jpeg");
        });
    }


    return (
        <Row type="flex" justify="space-around" align="middle" style={{ height: '80vh' }}>
            <Col span={8}>
                <IconUpload imageUpload={onSelectFile} />
            </Col>
            <Col span={8} >
                <div className="height-100" >
                    {imageState.src && (
                        <ReactCrop
                            src={imageState.src}
                            crop={imageState.crop}
                            onImageLoaded={onImageLoaded}
                            onComplete={onCropComplete}
                            onChange={onCropChange}
                        />
                    )}
                </div>
            </Col>
            <Col span={8}>
                {croppedImage && (
                    <img alt="Crop" style={{ maxWidth: "100%" }} src={croppedImage} />
                )}
            </Col>
        </Row>
    )

}
