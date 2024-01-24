import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './style/Registration.css';

function Registration() {
    const history = useHistory();
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
        phone: '',
        address: '',
    });

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleInputChange = ({ target: { value, name } }) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        const allFieldsFilled = Object.values(formData).every((field) => field !== '');
        setIsButtonDisabled(!allFieldsFilled);
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

    return (
        <div className='registration-container'>
            <form className='registration-form'>
                <h1 className='registration-title'>Faça o seu cadastro</h1>
                <label className='registration-first' htmlFor="userName">Nome Completo:</label>
                <input 
                    type="text" 
                    className="registration-form-user-name"
                    name='userName'
                    value={formData.userName}
                    placeholder="Nome Completo"
                    onChange={handleInputChange}
                />

                <label htmlFor="email">E-mail:</label>
                <input 
                    type="email"
                    className="registration-form-email"
                    name='email'
                    value={formData.email}
                    placeholder="E-mail"
                    onChange={handleInputChange}
                />

                <label htmlFor="password">Senha:</label>
                <input 
                    type="password" 
                    className="registration-form-password"
                    name='password'
                    value={formData.password}
                    placeholder="Senha" 
                    onChange={handleInputChange}
                />

                <label htmlFor="phone">Telefone:</label>
                <input 
                    type="text"
                    className="registration-form-phone"
                    name='phone'
                    value={formData.phone}
                    placeholder='Telefone'
                    onChange={handleInputChange}
                />

                <label htmlFor="address">Endereço:</label>
                <input 
                    type="text" 
                    className="registration-form-address"
                    name='address'
                    value={formData.address}
                    placeholder="Endereço"
                    onChange={handleInputChange}
                />

                <button 
                    type="button"
                    onClick={handleRegistration}
                    className="registration-form-submit"
                    disabled={isButtonDisabled}
                >
                    Cadastrar
                </button>
            </form>
        </div>
    );
}

export default Registration;
