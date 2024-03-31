import { Box, Typography } from '@mui/material';
import { ButtonSecondary, IconEdit } from '../atoms';

export interface MiInfoData {
    name: string;
    lastName: string;
    street: string;
    number: string;
    cologne: string;
    city: string;
    delegation: string;
    postalCode: string;
    betweenStreet: string;
    betweenStreet2: string;
    email: string;
    phone: string;
}

interface MiInfoProps {
    data: MiInfoData;
}

export const MiInfo = ({ data }: MiInfoProps): JSX.Element => {

    const onEditInfo = (): void => {
        window.location.href = '/account/changeInfo'
    }

    const onChangePass = (): void => {
        window.location.href = '/account/changePassword'
    }


    return (
        <Box width={{ xs: "100%", md: "230px" }}>
            <Box display={{ xs: "none", md: "flex" }} textAlign={'center'} marginBottom={2} justifyContent={"space-between"} alignItems={"center"}  >
                <Typography variant="subtitle1">Mi información</Typography>

                <Box onClick={onEditInfo} width={"24px"} height={"24px"}><IconEdit /></Box>
            </Box>
            <Typography>{data.name} {data.lastName}</Typography>
            <Typography>
                {data.street} {data.number} colonia {data.cologne} {data.postalCode} {data.delegation} {data.city} entre {data.betweenStreet} y {data.betweenStreet2}
            </Typography>
            <br />
            <Typography style={{ textDecoration: 'underline' }}>{data.email}</Typography>
            <br />
            <Typography>{data.phone}</Typography>
            <br />
            <Box display={"flex"} >
                <Box width={{ sx: "50%", md: "90%" }} >
                    <ButtonSecondary text={"Cambiar contraseña"} onClick={onChangePass} />
                </Box>
                <Box display={{ sx: "block", md: "none" }} width={"50%"} pl={1} >
                    <ButtonSecondary text={"Editar informacion"} onClick={onEditInfo} />
                </Box>
            </Box>
        </Box>
    );
};

