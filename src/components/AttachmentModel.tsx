import axios from "axios";
import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

interface EmailData {
    email: string;
    file: File | null;
}

const AttachmentModel = (props: { emailId: string, show: boolean, handleClose: () => void }) => {
    const [emailData, setEmailData] = useState<EmailData>({
        email: props.emailId,
        file: null,
    })


    const handleFileChange = (event: any) => {
        setEmailData({
            ...emailData,
            file: event.target.files ? event.target.files[0] : null,
        });
    };


    const handleSubmit = (event: any) => {
        event.preventDefault();

        axios.post('/send-email', emailData)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (

        <Modal
            show={props.show}
            onHide={props.handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header>
                <Modal.Title>Send Email</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit} >
                    <span>
                        <Form.Control
                            type="email"
                            value={props.emailId}
                            placeholder=" Enter Email address"
                            className="mb-3"
                            disabled
                        /> </span>

                    <Form.Control type="file" onChange={handleFileChange} />

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary">Send </Button>
            </Modal.Footer>
        </Modal>

    );
};

export default AttachmentModel;
