import { Box, Stack, Typography } from '@mui/material';
import { ButtonPrimary, ButtonSecondary, Input } from '../atoms';
import { InputAlert } from '../molecules';
import { useForm } from 'react-hook-form';

interface InputsPassword {
  password: string;
  newPassword: string;
  confirmPassword: string;
}

export function ChangePassword(): JSX.Element {

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<InputsPassword>();

  const onSubmit = (data: InputsPassword): void => {
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

      {(errors.password != null) && <InputAlert message={errors.password.message ?? ''} />}

      <Input
        id={'Contraseña actual'}
        label={'Contraseña actual'}

        {...register('password', {
          required: 'La contraseña actual es requerida',
        })}
      />

      <Input
        id={'Nueva contraseña'}
        label={'Nueva contraseña'}
        {...register('newPassword', {
          required: 'La nueva contraseña es requerida',
          minLength: {
            value: 6,
            message: 'La contraseña debe tener al menos 6 caracteres',
          },
        })}
      />

      <Input
        id={'Confirmar contraseña'}
        label={'Confirmar contraseña'}
        {...register('confirmPassword', {
          required: 'La confirmación de la contraseña es requerida',
          validate: (value) =>
            value === watch('newPassword') || 'Las contraseñas no coinciden',
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
  );
}

