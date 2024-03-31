import { Box, Stack, Typography } from '@mui/material';
import { ButtonPrimary, ButtonSecondary, Input } from '../atoms';
import { InputAlert } from '../molecules';
import { useForm } from 'react-hook-form';

interface InputsInfo {
  name: string;
  lastName: string;
  city: string;
  email: string;
  postalCode: string;
  cologne: string;
  street: string;
  street2: string;
  number: string;
}

export function ChangeInfo(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsInfo>();

  const onSubmit = (data: InputsInfo): void => {
    // Aquí puedes manejar la lógica de envío de datos o la validación adicional
    console.log(data);
  };

  const handleConfirmPassword = (): void => {
    // Puedes realizar la validación adicional aquí si es necesario antes de enviar los datos
    void handleSubmit(onSubmit)();
  };

  return (
    <Stack spacing={2} width={'100%'} px={{ xs: 2, md: 20 }}>
      <Typography variant="h1">Cambiar contraseña</Typography>

      {(errors.name != null) && <InputAlert message={errors.name.message ?? ''} />}
      <Input
        id={'Nombre'}
        label={'Nombre'}
        {...register('name', {
          required: 'El nombre es requerido',
        })}
      />
      <Input
        id={'Apellido'}
        label={'Apellido'}
        {...register('lastName', {
          required: 'El apellido es requerido',
        })}
      />
      <Input
        id={'Ciudad'}
        label={'Ciudad'}
        {...register('city', {
          required: 'La ciudad es requerida',
        })}
      />
      <Input
        id={'Correo'}
        label={'Correo'}
        {...register('email', {
          required: 'El correo es requerido',
        })}
      />
      <Input
        id={'Código postal'}
        label={'Código postal'}
        {...register('postalCode', {
          required: 'El código postal es requerido',
        })}
      />
      <Input
        id={'Colonia'}
        label={'Colonia'}
        {...register('cologne', {
          required: 'La colonia es requerida',
        })}
      />
      <Input
        id={'Calle'}
        label={'Calle'}
        {...register('street', {
          required: 'La calle es requerida',
        })}
      />
      <Input
        id={'Calle 2'}
        label={'Calle 2'}
        {...register('street2', {
          required: 'La calle 2 es requerida',
        })}
      />
      <Input
        id={'Número'}
        label={'Número'}
        {...register('number', {
          required: 'El número es requerido',
        })}
      />

      <Box display={'flex'}>
        <Box pr={1} width={'50%'}>
          <ButtonPrimary text={'Guardar'} onClick={handleConfirmPassword} />
        </Box>
        <Box pl={1} width={'50%'}>
          <ButtonSecondary text={'Salir'} onClick={() => { }} />
        </Box>
      </Box>
    </Stack>
  )
}
