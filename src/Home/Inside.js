import { Grid, Typography, Paper, makeStyles, Card, CardContent } from "@material-ui/core";
import CircularIndeterminate from '../Shared/Loading';

const Inside = (props) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            marginTop: theme.spacing(2),
            height: '200px'
        },
        paper: {
            padding: theme.spacing(2),
            color: theme.palette.text.secondary,
            marginTop: theme.spacing(3)
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginTop: 12,
            marginBottom: 12,
            marginLeft: 12
        },
    }));

    const classes = useStyles();

    if (props.data == null) {
        return <CircularIndeterminate />;
    }


    return <Grid container spacing={3}>
        {
            props.data.map((statusList, index) => {
                return < Grid item xs={4} >
                    <Paper className={classes.paper}>
                        <Typography variant="h5">{statusList.deviceName}</Typography>
                        {
                            statusList.statusListModels.map((status, index2) => {
                                return <div>
                                    <Card className={classes.root} elevation="8">
                                        <CardContent>
                                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                {status.statusName}
                                            </Typography>
                                            {
                                                status.userModelList.map((user) => {
                                                    return <Typography className={classes.pos} >
                                                        {user.name}
                                                    </Typography>;
                                                })
                                            }
                                        </CardContent>
                                    </Card>
                                </div>
                            })
                        }
                    </Paper>
                </Grid>;
            })
        }
    </Grid >;
}

export default Inside;