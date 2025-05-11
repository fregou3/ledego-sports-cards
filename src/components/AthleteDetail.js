import React from 'react';
import { useParams } from 'react-router-dom';
import { 
  Container, 
  Grid, 
  Typography, 
  Card, 
  CardMedia, 
  CardContent, 
  Box, 
  Button, 
  Chip,
  Divider,
  Paper
} from '@mui/material';
import { motion } from 'framer-motion';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EventIcon from '@mui/icons-material/Event';
import sportsData from '../data/sportsData';
import artistsData from '../data/artistsData';
import celebritiesData from '../data/celebritiesData';

// Motion components
const MotionBox = motion(Box);
const MotionCard = motion(Card);

const AthleteDetail = ({ type = 'athlete' }) => {
  const { id } = useParams();
  // Determine which data source to use based on type
  let dataSource;
  let profileType;
  
  switch(type) {
    case 'artist':
      dataSource = artistsData;
      profileType = 'artist';
      break;
    case 'celebrity':
      dataSource = celebritiesData;
      profileType = 'celebrity';
      break;
    default:
      dataSource = sportsData;
      profileType = 'athlete';
  }
  
  // Find profile by id
  const athlete = dataSource.find(item => item.id === parseInt(id)) || dataSource[0];



  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Athlete Profile Section */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={5}>
          <MotionCard
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            sx={{ 
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}
          >
            <CardMedia
              component="img"
              image={athlete.profileImage}
              alt={athlete.name}
              sx={{ 
                height: 500,
                objectFit: 'cover'
              }}
            />
          </MotionCard>
        </Grid>
        
        <Grid item xs={12} md={7}>
          <MotionBox
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h2" component="h1" gutterBottom>
              {athlete.name}
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
              {profileType === 'athlete' && (
                <>
                  <Chip 
                    label={athlete.sport} 
                    color="primary" 
                    sx={{ fontWeight: 'bold' }}
                  />
                  <Chip 
                    label={athlete.nationality} 
                    variant="outlined"
                  />
                </>
              )}
              
              {profileType === 'artist' && (
                <>
                  <Chip 
                    label={athlete.art} 
                    color="secondary" 
                    sx={{ fontWeight: 'bold' }}
                  />
                  <Chip 
                    label={athlete.nationality} 
                    variant="outlined"
                  />
                </>
              )}
              
              {profileType === 'celebrity' && (
                <>
                  <Chip 
                    label={athlete.profession} 
                    color="error" 
                    sx={{ fontWeight: 'bold' }}
                  />
                  <Chip 
                    label={athlete.nationality} 
                    variant="outlined"
                  />
                </>
              )}
            </Box>
            
            <Typography variant="body1" paragraph sx={{ mb: 3 }}>
              {athlete.description}
            </Typography>
            
            <Box sx={{ mb: 4 }}>
              <Typography variant="subtitle1" gutterBottom>
                Date de naissance: {athlete.birthDate}
              </Typography>
            </Box>
            
            <Divider sx={{ mb: 4 }} />
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
              <Typography variant="h4" component="p" color="primary" sx={{ fontWeight: 'bold', mr: 3 }}>
                {athlete.price} €
              </Typography>
              
              {athlete.forSale ? (
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                  startIcon={<ShoppingCartIcon />}
                  sx={{ px: 3 }}
                >
                  Ajouter au Panier
                </Button>
              ) : (
                <Chip label="Non disponible" color="error" />
              )}
            </Box>
          </MotionBox>
        </Grid>
      </Grid>

      {/* Events Section */}
      <Paper sx={{ mb: 4 }}>
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
          <EventIcon sx={{ mr: 1 }} />
          <Typography variant="h6">Événements</Typography>
        </Box>
      </Paper>

      <Box sx={{ mb: 4 }}>
        <MotionBox
          component={Grid}
          container
          spacing={3}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {athlete.events.map((event) => (
            <Grid item xs={12} sm={6} md={4} key={event.id}>
              <MotionCard variants={itemVariants} sx={{ height: '100%' }}>
                <Box sx={{ 
                  position: 'relative', 
                  paddingTop: '100%', /* Format carré 1:1 */
                  overflow: 'hidden'
                }}>
                  <CardMedia
                    component="img"
                    image={event.image}
                    alt={event.title}
                    sx={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center center' /* Meilleur centrage */
                    }}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {event.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {event.date}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {event.description}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" color="primary">
                      {event.price} €
                    </Typography>
                    <Button 
                      variant="contained" 
                      size="small"
                      startIcon={<ShoppingCartIcon />}
                      disabled={!event.forSale}
                    >
                      Acheter
                    </Button>
                  </Box>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </MotionBox>
      </Box>
    </Container>
  );
};

export default AthleteDetail;
