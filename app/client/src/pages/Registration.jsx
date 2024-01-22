import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function Registration() {
    const history = useHistory();
    const [formData, setFormData] = useState({
        userName: '',  
        email: '',
        password: '',
        phone: '',
        address: '',
    });

    const handleInputChange = ({ target: { value, name } }) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleRegistration = async () => {
        try {
            const response = await axios.post('http://localhost:3001/login/create', formData);
            if (response.status === 200) {
                localStorage.setItem('userData', JSON.stringify(response.data));
                history.push('/home');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return(
        <div>
            <h1>Faça o seu cadastro</h1>

            <form>
                <input 
                    type="text" 
                    name='userName'
                    value={formData.userName}
                    placeholder="Nome Completo"
                    onChange={handleInputChange}
                />
                <input 
                    type="email"
                    name='email'
                    value={formData.email}
                    placeholder="E-mail"
                    onChange={handleInputChange}
                />
                <input 
                    type="password" 
                    name='password'
                    value={formData.password}
                    placeholder="Senha" 
                    onChange={handleInputChange}
                />
                <input 
                    type="text"
                    name='phone'
                    value={formData.phone}
                    placeholder='telefone'
                    onChange={handleInputChange}
                />
                <input 
                    type="text" 
                    name='address'
                    value={formData.address}
                    placeholder="Endereço"
                    onChange={handleInputChange}
                />
                <button 
                    type="button"
                    onClick={handleRegistration}
                >
                  Cadastrar
                </button>

            </form>
        </div>
    );
}

export default Registration;