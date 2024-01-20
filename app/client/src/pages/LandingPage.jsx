import React from 'react';
import { useHistory } from 'react-router-dom';


function LandingPage() {
    const history = useHistory(); // Inicialize o useHistory

    const navigateHeader = (link) => {
        history.push(link);
    };

    return(

        
        <div>
            <h1>LadingPage</h1>
            <button onClick={() => navigateHeader('/home')}>
                home
            </button>
        </div>
    );
}

export default LandingPage;