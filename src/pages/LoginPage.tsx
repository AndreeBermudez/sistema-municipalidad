import { LoginHeader } from '../features/auth/componentes/LoginHeader';
import { LoginForm } from '../features/auth/componentes/LoginForm';

export const LoginPage = () => {
  return (
    <div className='w-full h-dvh p-3 sm:p-5'>
      <LoginHeader />
      <section className='flex justify-center mt-8 sm:mt-10 md:mt-12'>
        <div className='w-full max-w-[320px] sm:max-w-[380px] md:max-w-sm px-6 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20 space-y-6 sm:space-y-7 md:space-y-8 bg-white rounded-lg shadow-md'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-600'>
            Iniciar Sesión
          </h2>
          <LoginForm />
        </div>  
      </section>
    </div>
  );
};