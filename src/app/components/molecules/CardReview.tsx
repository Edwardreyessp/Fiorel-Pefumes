import { Box, Card, Typography } from '@mui/material';
import { IconStar } from '../atoms/Icons';

export interface CardReviewsProps {
  title: string;
  review: string;
}

const CardReviews = ({ title, review }: CardReviewsProps): JSX.Element => {

  return (
    <Card sx={{ width: { xs: 354, sm: 400 }, height: "300px", backgroundColor: 'black', color: 'white', justifyContent: "flex-start", p: "20px" }}>
      <Box sx={{ display: "flex", gap: "10px" }}>
        <IconStar color='#FFC20A' />
        <IconStar color='#FFC20A' />
        <IconStar color='#FFC20A' />
        <IconStar color='#FFC20A' />
        <IconStar color='#FFC20A' />
      </Box>
      <Typography variant='subtitle1'>{title}</Typography>
      <Typography>
        {review}
      </Typography>
    </Card>

  );
};

export default CardReviews;