import React, { useCallback, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaArrowRight } from 'react-icons/fa';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as yup from 'yup';
import { motion } from 'framer-motion';

import Button from '../../components/Button';
import Input from '../../components/Input';

import BackgroundVideo from '../../components/BackgroundVideo';
import LoginArea from '../../styles/componentes/LoginArea';

import api from '../../services/api';
import updateReduxState from '../../services/updateReduxState';
import getValidationErrors from '../../utils/getValidationErrors';

import { UserResponse } from '../../types/user';
import { AnyObject } from '../../types/utils';
import Header from '../../components/Header';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(async (data: AnyObject) => {
    setLoading(true);

    const filteredData: AnyObject = {}
    Object.keys(data).forEach(key => {
      filteredData[key] = data[key].trim();
    });

    try {
      formRef.current?.setErrors({});

      const schema = yup.object().shape({
        username: yup.string().required('Nome de usuário obrigatório'),
        password: yup.string().required('Senha obrigatória'),
      });
      await schema.validate(filteredData, {
        abortEarly: false
      });

      const { data: response } = await api.post<UserResponse>('/login', {
        "usuario": username,
        "senha": password
      });

      localStorage.setItem('@token_user', response.token);
      localStorage.setItem('@user_name', response.usuario.nome);
      updateReduxState();
      toast.success('Seja bem-vindo(a)');

      setLoading(false);
      history.push('/dashboard');
    } catch (err) {
      setLoading(false);
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
      if (Object.keys(err).includes('isAxiosError')) {
        if (err.response.data.status === 409) {
          toast.error('Usuario ou senha incorretos!');
          return
        }
        toast.error('Ocorreu algum erro!');
        return history.push('/error');
      }
      err.errors.forEach((error: string) => {
        toast.error(error);
      })
    }

  }, [username, password, history]);

  return (
    <>
      <BackgroundVideo />
      <LoginArea>
        <motion.div
          transition={{ delay: 0.2, duration: 1 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '80%' },
          }}
          initial="hidden"
          animate="show"
          text-align="center"
        >

          <Header />
          <Form className="form-login-display" ref={formRef} onSubmit={handleSubmit}>
            <label>
              Usuário:
            <Input name="username" value={username} onChange={e => setUsername(e.target.value)} placeholder="Digite seu usuário" autoFocus />
            </label>
            <label>
              Senha:
            <Input name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Digite sua senha" type="password" />
            </label>

            <Button
              type="submit"
              text={"Continuar"}
              Icon={FaArrowRight}
              loading={loading}
              className="form-button"
            />
            <Link className="login-link" to="/recover">Esqueci minha senha</Link>
            <Link className="login-link" to="/">Ainda não sou cliente</Link>
          </Form>
        </motion.div>
      </LoginArea>
    </>
  );
}

export default Login;