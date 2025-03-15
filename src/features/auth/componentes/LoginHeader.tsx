import { Logo } from "../../../core/components/ui"; 

export const LoginHeader = () => {
  return (
    <section className='flex items-center justify-start space-x-2 md:space-x-4'>
      <Logo className='h-12 sm:h-14' />
      <h1 className='text-sm sm:text-base md:text-lg font-bold text-blue-600 leading-tight'>
        MUNICIPALIDAD DE NUEVO CHIMBOTE
      </h1>
    </section>
  );
};