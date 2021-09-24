import {
  Grid,
  Container,
  Typography
} from '@material-ui/core';
import { Card } from '../../../components';
import { useStyles } from './styles';
import logo from '../../../logo/icons8-search-property-100.png'

export default function Album({ data, type }) {

  const classes = useStyles();

  return (
    <main style={{width: '100%'}}>
      <Container className={classes.cardGrid}>
        <Grid container spacing={6} style={{justifyContent: 'center'}}>
          {console.log(data.length)}
          {data.length==0 &&
            (<div className={classes.itemInfoContent} style={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'center', paddingRight: '16rem' }}>
              <Typography variant='h5' gutterBottom={true}>Fess with type {type} where not found</Typography>
              <img style={{ width: '90px', height: 'auto', marginTop: '2rem' }} src={logo} />
            </div>)}
             
             {data.length > 0 && data.map(({ id, imgSrc, type, title, description, countLeft, raised, raisedPercentage, daysLeft, price }, index) => (
              <Card
                id={id}
                imgSrc={imgSrc}
                type={type}
                title={title}
                description={description}
                countLeft={countLeft}
                raised={raised}
                raisedPercentage={raisedPercentage}
                daysLeft={daysLeft}
                key={`card-${type}-${index}`}
                price={price}
              />
            ))}
        </Grid>
      </Container>
    </main>
  );
}