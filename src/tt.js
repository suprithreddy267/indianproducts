import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [
    {value:1,heading:'Revive the Indian Rupee with a Swadeshi Movement!',content:'The Swadeshi movement, which entailed the use of domestic products, stopped filling the pocket of the rulers, thus weakening their interest in India as a target market. This movement played a major role in the achievement of India’s Independence.',imagelink:"https://ask.careers/wp-content/uploads/2013/08/swadeshi.jpg"},
    {value:2,heading:'Promote Indian products',content:'The Swadeshi Jagran Manch (SJM), an affiliate of the RSS, which pitches for swadeshi or indigenous production, has launched a pan-Indian Swadeshi Swavlamban Abhiyan (self-reliance campaign) to promote local production.',imagelink:"https://img.etimg.com/thumb/msid-75839631,width-300,imgsize-83551,resizemode-4/self-reliant.jpg"},
    {value:3,heading:'India to see its first ‘Swadeshi only’ online store',content:'India e-commerce sector has been in the highlight since the Walmart-Flipkart deal. Yoga Guru Baba Ramdev plans to enter the sector with an e-commerce portal called "OrderMe."',imagelink:"https://content.techgig.com/thumb/msid-75812815,width-860,resizemode-4/India-to-see-its-first-Swadeshi-only-online-store.jpg?84878"},
    {value:4,heading:'We will boycott all Chinese products say 87% of Indians LocalCircles survey',content:"As the public anger over the India-China face off increases, 87% of Indians want to boycott Chinese products for a year and a large majority also want Indian government to at least give a level playing field to products manufactured domestically.",imagelink:"https://img.etimg.com/thumb/msid-76482463,width-300,imgsize-48317,resizemode-4/delivery.jpg"},
    {value:5,heading:'Practise swadeshi, save the rupee',content:"The only way to save the rupee and to prevent its free fall is to start practising swadeshi all over again. Yes, you read it correctly. As a nation we are living beyond our means and you can’t continue doing so unless we want India to crash (and not the rupee alone). ",imagelink:"https://ask.careers/wp-content/uploads/2013/08/swadeshi_label.jpg"},
    {value:6,heading:'Swadeshi vs Videshi: A whole lot of things we think of as Indian have come to us from foreign parts',content:"It is time to restore balance in our lives, think in terms of age old concepts like import substitution and check the rampant spread of this consumerist culture. Otherwise doomsday is not far away.",imagelink:"https://img.etimg.com/thumb/msid-76496543,width-300,imgsize-247373,resizemode-4/current-account-surplus.jpg"}
];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card,index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.imagelink}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.heading}
                    </Typography>
                    <Typography>
                      {card.content}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}