import React from 'react';
import { FaTimes, FaCheck } from 'react-icons/fa';
import './index.css'; // Import the custom CSS file

function ModalDialog() {
    const [isShow, invokeModal] = React.useState(false);

    const initModal = () => {
        return invokeModal(!isShow);
    };

    return (
        <>
            <button className="open-modal-btn" onClick={initModal}>
                Open Modal
            </button>
            {isShow && (
                <div className="modal-overlay">
                    <div className="modal">
                        <div className="modal-header">
                            <h2>React Modal Popover Example</h2>
                            <button className="close-btn" onClick={initModal}>
                                <FaTimes />
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button className="close-btn" onClick={initModal}>
                                <FaTimes /> Close
                            </button>
                            <button className="store-btn" onClick={initModal}>
                                <FaCheck /> Store
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ModalDialog;
