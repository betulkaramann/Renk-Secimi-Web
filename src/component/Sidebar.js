import React, { useState } from 'react';
import Modal from 'react-modal';
import {GrClose} from 'react-icons/gr';


function Sidebar(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false) //initial state is false

    function openModal() {
        setModalIsOpen(true);
      }
    
    
      function closeModal() {
        setModalIsOpen(false);
      }

   /*  const toggleModal = () => {
        setModalIsOpen(!modalIsOpen);
    } */
    
    return (
        <>
            <aside className="sidebar">

                <div className='logo'>
                    <a >Renk <b>Paleti</b></a>
                </div>
                <div className="description">
                    Aradığın bütün renkler burada mevcut!
                </div>
                <nav className="menu">
                    <ul>
                        <li>
                            <a  onClick={openModal}>
                                Renkler hakkında
                            </a>
                        </li>
                    </ul>
                </nav>

            </aside> 
            <Modal
                isOpen={modalIsOpen}
                //isopen need state
                onRequestClose={closeModal}
                className="about-Modal"
                overlayClassName="about-Overlay">
                <button className='close-icons' onClick={closeModal}>
               <GrClose />
                </button>
                <h3>
                    Renkler hakkında
                </h3>
                <p>
                    Sizin için seçilen bu renkler uygulamalarınızda rahatlıkla kullanabileceğiniz renk kodlarını içermektedir.
                </p>
                <p>Renk kodlarını görebilmeniz ve kopyalayabilmeniz için için üzerine tıklamanız yeterlidir. </p>
            </Modal>

        </>
    );

}

export default Sidebar;