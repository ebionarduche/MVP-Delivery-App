import React from 'react';
import { useHistory } from 'react-router-dom';
import mouth from '../images/mouth.png';
import './style/LandingPage.css';
import { useMediaQuery } from 'react-responsive';



function LandingPage() {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const history = useHistory(); 

    const navigatePage = (link) => {
        history.push(link);
    };

    return(
        <div className='landing-page-container'>

            <div className='landing-page-back-color'>
                <div className='landing-page-header'>
                    <div className='landing-page-title-container'>
                        <h1 className='landing-page-title'>Quem</h1>
                        <h1 className='landing-page-title'>tem</h1>
                        <h1 className='landing-page-title'>Boca</h1>
                    </div>
                    <img className='landing-page-logo' src={mouth} alt="" />
                </div>
                {
                    !isMobile && (
                        <>
                            <h2 className='landing-page-sub-title'>Falta pouco para matar sua fome!</h2>
                            <p className='landing-page-content'>Como deseja continuar ?</p>
                        </>
                    )
                }
                <button
                    type='button'
                    className='landing-page-button-create-account'
                    onClick={() => navigatePage('/registration')}
                >
                Cadastrar
                </button>
                <button
                    type='button'
                    onClick={() => navigatePage('/login')}
                    className='landing-page-button-login'
                >
                Já tenho cadastro
                </button>
            </div>
        </div>
    );
}

export default LandingPage;