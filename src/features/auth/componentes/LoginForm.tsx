import { FormEvent, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { AuthUserSignIn } from '../models/types'; 
import { Button, InputField } from '../../../core/components/ui'; 
import { useAuthMutate } from '../hooks'; 

export const LoginForm = () => {
  const { mutateAsync: loginMutate, isPending, isError, error } = useAuthMutate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<AuthUserSignIn>({
    email: '',
    password: '',
  });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginMutate(formData);
  };

  return (
    <form className='space-y-6' onSubmit={handleSubmit}>
      <InputField
        type='email'
        name='email'
        placeholder='Ingrese su dirección de correo'
        label='Correo Electrónico'
        value={formData.email}
        onChange={handleInput}
        required
      />
      <div className='space-y-2'>
        <div className='flex items-center justify-between'>
          <label className='block text-sm font-bold text-gray-700'>Contraseña</label>
          <button
            type='button'
            className='text-blue-600 focus:outline-none'
            onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        <InputField
          type={showPassword ? 'text' : 'password'}
          name='password'
          placeholder='Ingrese su contraseña'
          value={formData.password}
          onChange={handleInput}
          required
        />
      </div>
      <Button type='submit' className='w-full bg-[#1F7EBE] text-white'>
        {isPending ? 'Cargando...' : 'Iniciar Sesión'}
      </Button>
      {isError && (<span className='text-red-600 text-xs font-semibold absolute'>{error.message}</span>)}
    </form>
  );
};