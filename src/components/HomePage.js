import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button,
  Paper
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import sportsData from '../data/sportsData';

// Wrapper for Framer Motion
const MotionBox = motion(Box);
const MotionCard = motion(Card);

const HomePage = () => {
  // All athletes from our data
  const athletes = sportsData;
  // Featured athlete (first one in our data for events and magazines sections)
  const featuredAthlete = athletes[0];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Hero Section */}
      <Paper 
        elevation={0}
        sx={{
          p: 4,
          mb: 6,
          borderRadius: 2,
          background: 'linear-gradient(135deg, #1E88E5 0%, #42a5f5 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{ position: 'relative', zIndex: 2 }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Collectionnez les Légendes du Sport
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, maxWidth: '70%' }}>
            Achetez, vendez et échangez des cartes de collection de vos sportifs préférés
          </Typography>
          <Button 
            variant="contained" 
            color="secondary" 
            size="large"
            component={Link}
            to="/collection"
            sx={{ 
              px: 4, 
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 'bold'
            }}
          >
            Découvrir la Collection
          </Button>
        </MotionBox>
        
        {/* Decorative elements */}
        <Box 
          sx={{ 
            position: 'absolute',
            right: { xs: -100, md: 0 },
            bottom: { xs: -100, md: 0 },
            width: { xs: 300, md: 400 },
            height: { xs: 300, md: 400 },
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            zIndex: 1
          }} 
        />
        <Box 
          sx={{ 
            position: 'absolute',
            right: { xs: -50, md: 50 },
            bottom: { xs: -50, md: 50 },
            width: { xs: 200, md: 300 },
            height: { xs: 200, md: 300 },
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.15)',
            zIndex: 1
          }} 
        />
      </Paper>

      {/* Athletes Section */}
      <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 4 }}>
        Nos Sportifs
      </Typography>
      
      <MotionBox
        component={Grid}
        container
        spacing={3}
        sx={{ mb: 6 }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {athletes.map((athlete) => (
          <Grid item xs={12} sm={6} md={3} key={athlete.id}>
            <MotionCard 
              variants={itemVariants}
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease-in-out',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.12)'
                }
              }}
            >
              <Box sx={{ 
                position: 'relative', 
                overflow: 'hidden', 
                height: 0,
                paddingTop: '100%', // Format carré 1:1
                width: '100%'
              }}>
                <CardMedia
                  component="img"
                  image={athlete.profileImage}
                  alt={athlete.name}
                  sx={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 10%', // Meilleur centrage sur le visage
                    transition: 'transform 0.5s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }}
                />
              </Box>
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 2 }}>
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {athlete.name}
                </Typography>
                <Typography variant="subtitle1" color="primary" gutterBottom sx={{ mb: 1 }}>
                  {athlete.sport}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 2, flexGrow: 1, fontSize: '0.875rem' }}>
                  {athlete.description.substring(0, 90)}...
                </Typography>
                <Box sx={{ mt: 'auto' }}>
                  <Button 
                    variant="contained" 
                    color="primary"
                    component={Link}
                    to={`/athlete/${athlete.id}`}
                    fullWidth
                    size="small"
                    sx={{ borderRadius: 4, textTransform: 'none', fontWeight: 'bold' }}
                  >
                    Voir le Profil
                  </Button>
                </Box>
              </CardContent>
            </MotionCard>
          </Grid>
        ))}
      </MotionBox>

      {/* Call to Action Section */}
      <Box 
        sx={{ 
          textAlign: 'center', 
          mt: 6, 
          mb: 6, 
          p: 4, 
          borderRadius: 2,
          background: 'linear-gradient(135deg, rgba(30, 136, 229, 0.1) 0%, rgba(66, 165, 245, 0.1) 100%)',
        }}
      >
        <Typography variant="h4" component="h3" gutterBottom>
          Explorez Notre Collection Complète
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
          Découvrez les événements marquants et les couvertures de magazines de vos sportifs préférés en visitant leurs profils ou en explorant notre collection complète.
        </Typography>
        <Button 
          variant="contained" 
          color="primary"
          component={Link}
          to="/collection"
          size="large"
          sx={{ px: 4, py: 1.5 }}
        >
          Voir la Collection
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
