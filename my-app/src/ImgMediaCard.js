import { CardActionArea, Card, CardContent, CardMedia, Button, Typography } from '@mui/material';
import './ImgMediaCard.css'

function ImgMediaCard(props) {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    alt="food"
                    image={props.imgurl}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {[props.item]} 
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                       {[props.id]}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Price: ${[props.price]}
                    </Typography>
                    <Button size="medium" color="secondary">
                       Order Now
                    </Button>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default ImgMediaCard;