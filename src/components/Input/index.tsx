import React, { InputHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';
import Tooltip from '../Tooltip';

import { Container, InputStandard } from '../../styles/componentes/Input';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = ({ name, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);
  
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField]);

  return (
    <Container>
      <InputStandard
        defaultValue={defaultValue}
        ref={inputRef} {...props}
      />

      {error && (
        <Tooltip message={error}>
          <FiAlertCircle color="#f42121" size={20} />
        </Tooltip>
      )}
    </Container>
  );
}

export default Input;