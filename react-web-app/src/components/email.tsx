import React, { useState } from 'react';

function Email() {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');

    const handleFileSelect = (event: any) => {
        setFile(event.target.files[0]);
        setFileName(event.target.files[0].name);
    };

    const handleSendEmail = async () => {
        const formData = new FormData();
        formData.append('file', fileName);

        try {
            const response = await fetch('https://your-api-endpoint.com/send-email', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error(`${response.status}: ${response.statusText}`);
            }

            const result = await response.json();
            if (result.success) {
                console.log('Email sent successfully');
            } else {
                console.error(result.error);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>

            <div className="card w-50 mx-auto mt-5">
                <div className="card-body" >
                    <input type="file" onChange={handleFileSelect} />
                    <p className='mt-2'>Selected file: {fileName}</p>
                    <button   onClick={handleSendEmail}>Send Email</button>
                </div>
            </div>

        </div>
    );
}

export default Email;
