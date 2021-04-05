import React, { useState, useCallback, useEffect, ChangeEvent, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as yup from 'yup';
import api from '../../services/api';
import getIsAuth from '../../services/getIsAuth';
import getValidationErrors from '../../utils/getValidationErrors';
import { maskCPF, removeMaskCPF } from '../../utils/mask';

import Input from '../../components/Input';
import LogoWhite from '../../components/LogoWhite';

import { toast } from 'react-toastify';
import { AnyObject } from '../../types/utils';
import { UserResponse } from '../../types/user';
import updateReduxState from '../../services/updateReduxState';

import SectionAccount from './SectionAccount';
import SectionCard from './SectionCard';
import SectionCosts from './SectionCosts';
import SectionInvite from './SectionInvite';
import SectionBenefits from './SectionBenefits';
import Footer from './Footer';

import { HeaderTop, Container, Section, SectionHome, BackgroundLanding1 } from '../../styles/pages/Lading';
import Button from '../../components/Button';

const Landing: React.FC = () => {

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [cpfMask, setCpfMask] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);
  const [isFilled, setIsFilled] = useState(false);

  // Atualiza a mascara do CPF
  useEffect(() => {
    setCpf(removeMaskCPF(cpfMask))
  }, [cpfMask]);

  // Atualiza se todos os campos estão preenchidos para deixar o botão de confirmar verde
  useEffect(() => {
    if (name.length > 3 &&
      password &&
      confirmPassword &&
      cpf.length === 11 &&
      username) setIsFilled(true);
    else setIsFilled(false);
  }, [
    name,
    password,
    confirmPassword,
    cpf,
    username
  ]);
  // devemos informar os elementos utilizados

  // Lidar com o registro
  const handleSubmit = useCallback(async (data: AnyObject) => {
    const filteredData: AnyObject = {}

    Object.keys(data).forEach(key => {
      filteredData[key] = data[key].trim();
    });


    setLoading(true);

    try {
      formRef.current?.setErrors({});

      const schema = yup.object().shape({
        cpf: yup.string().min(14, 'Obrigatório ter 11 digitos'),
        username: yup.string().required('Nome de usuário obrigatório '),
        name: yup.string().required('Nome completo obrigatório'),
        password: yup.string().min(6, 'No mínimo 6 digitos'),
        confirmPassword: yup.string().min(6, 'No mínimo 6 digitos')
      });

      await schema.validate(filteredData, {
        abortEarly: false
      });

      if (password !== confirmPassword) {
        toast.error("Senhas diferentes, por favor insira duas senhas iguais");
        return
      }

      const { status } = await api.post('/usuarios', {
        "cpf": cpf,
        "login": username,
        "nome": name,
        "senha": password,
      });

      if (status === 200 || status === 201) {
        const { data } = await api.post<UserResponse>('/login', {
          usuario: username,
          senha: password
        });

        localStorage.setItem('@token_user', data.token);
        localStorage.setItem('@user_name', data.usuario.nome);
        updateReduxState();

        toast.success('Usuário registrado!');
        history.push('/dashboard');
      } else {
        toast.error('Ocorreu algum erro!');
        history.push('/error');
      }
    } catch (err) {
      if (err.response) {
        console.log("error:", err.response)
        if (err.response.data.codigo == "001") {
          toast.error("Nome de usuário indisponível utilize outro")
          return;
        }
      }
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
      toast.error('O formulário está incorreto!');
    } finally {
      setLoading(false);
    }
  }, [cpf, username, name, password, confirmPassword, history]);

  // Check if user is authenticated
  const handleRedirectToLogin = useCallback(() => {
    const isAuth = getIsAuth();

    if (isAuth) history.push('/dashboard');
    else history.push('/login');
  }, [history]);

  const handleSetCpfMask = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCpfMask(
      maskCPF(
        removeMaskCPF(e.target.value)
      )
    );
  }, []);

  return (
    <>
      <HeaderTop>
        <LogoWhite />
      </HeaderTop>
      <Section>
        <BackgroundLanding1
          transition={{ delay: 0.2, duration: 1 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '80%' },
          }}
          initial="hidden"
          animate="show"
          text-align="center">
          <Container>
            <SectionHome>
              <div>
                <div>
                  <p className="section-home-content">
                    <span>iBank é um projeto dos participantes da Accenture 2.0.</span>
                    <span className="section-home-content-account" > Já tem conta?</span>
                  </p>
                </div>
                <button className="section-home-button-main" onClick={handleRedirectToLogin}>Acessar <FaArrowRight /></button>
              </div>
              <div>
                <Form ref={formRef} onSubmit={handleSubmit} className="section-home-form-register">
                  <h1> Peça sua conta e cartão de crédito do Gama Bank</h1>
                  <Input 
                    name="cpf" 
                    maxLength={14} 
                    value={cpfMask} 
                    onChange={handleSetCpfMask} 
                    placeholder="Digite seu CPF"
                    />
                  <Input 
                    name="username" 
                    value={username} 
                    onChange={e => setUsername(e.target.value)} 
                    placeholder="Escolha um nome de usuário"
                    />
                  <Input 
                    name="name" value={name} 
                    onChange={e => setName(e.target.value)} 
                    placeholder="Nome completo"
                    />
                  <Input 
                    name="password" value={password} type="password" 
                    onChange={e => setPassword(e.target.value)} 
                    placeholder="Digite sua senha"
                    />
                  <Input 
                    name="confirmPassword" value={confirmPassword} type="password" 
                    onChange={e => setConfirmPassword(e.target.value)} 
                    placeholder="Confirme sua senha"
                    />

                  <Button
                    text="Continuar"
                    Icon={FaArrowRight}
                    type="submit"
                    loading={loading}
                    disabled={!isFilled} 
                    style={{ backgroundColor: '#4a148c', height: '3rem'}}
                  />
                  
                </Form>
              </div>
            </SectionHome>
          </Container>
        </BackgroundLanding1>
      </Section>
      <SectionAccount background={'var(--primary-purple)'} />
      <SectionCard />
      <SectionCosts background={'#5c6bc0'} />
      <SectionBenefits background={'#50c878bb'} />
      <SectionInvite />
      <Footer background={'#333'} heightSize={'25vh'} />
    </>
  );
}

export default Landing;