import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

export const Succes = ({clickSucces, invites}) => {
    return (

        <Card sx={{ maxWidth: 345,  borderRadius: 4, textAlign: 'center', padding:5 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                
                image="https://img2.freepng.ru/20180320/rvq/kisspng-business-hotel-pest-control-insurance-company-ico-success-download-5ab1325141d235.7019399415215621932696.jpg"
            />

            <CardContent>

                <Typography variant="h6">
                    пользователям пришло приглашение({invites.length})
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={clickSucces} fullWidth size="normal" variant="contained">Продолжить</Button>

            </CardActions>
        </Card>

    )
}