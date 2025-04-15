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
import artistsData from '../data/artistsData';
import celebritiesData from '../data/celebritiesData';

// Wrapper for Framer Motion
const MotionBox = motion(Box);
const MotionCard = motion(Card);

const HomePage = () => {
  // All data from our collections
  const athletes = sportsData;
  const artists = artistsData;
  const celebrities = celebritiesData;
  
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
            Collectionnez les moments marquants des célébrités et légendes du sport
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, maxWidth: '70%' }}>
            Achetez, vendez et échangez des cartes de collection de vos personnalités préférées
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

      {/* Main Categories Section */}
      <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
        Nos Collections
      </Typography>
      
      <Box sx={{ mb: 6 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', margin: -2 }}>
          {/* Sportifs Column */}
          <Box sx={{ width: { xs: '100%', md: '33.33%' }, p: 2 }}>
            <Box sx={{ borderBottom: '2px solid #1976d2', mb: 2, pb: 1 }}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                Sportifs
              </Typography>
            </Box>
          
          {athletes.map((athlete) => (
            <MotionCard 
              key={athlete.id}
              variants={itemVariants}
              sx={{ 
                mb: 3,
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease-in-out',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
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
                  {athlete.description.substring(0, 70)}...
                </Typography>
                <Box sx={{ mt: 'auto' }}>
                  <Button 
                    variant="contained" 
                    color="primary"
                    component={Link}
                    to={`/athlete/${athlete.id}`}
                    size="small"
                    sx={{ borderRadius: 4, textTransform: 'none', fontWeight: 'bold' }}
                  >
                    Voir le Profil
                  </Button>
                </Box>
              </CardContent>
            </MotionCard>
          ))}
          </Box>

          {/* Artistes Column */}
          <Box sx={{ width: { xs: '100%', md: '33.33%' }, p: 2 }}>
            <Box sx={{ borderBottom: '2px solid #9c27b0', mb: 2, pb: 1 }}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#9c27b0', textAlign: 'center' }}>
                Artistes
              </Typography>
            </Box>
          
          {artists.map((artist) => (
            <MotionCard 
              key={artist.id}
              variants={itemVariants}
              sx={{ 
                mb: 3,
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease-in-out',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
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
                  image={artist.profileImage}
                  alt={artist.name}
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
                  {artist.name}
                </Typography>
                <Typography variant="subtitle1" color="secondary" gutterBottom sx={{ mb: 1 }}>
                  {artist.art}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 2, flexGrow: 1, fontSize: '0.875rem' }}>
                  {artist.description.substring(0, 70)}...
                </Typography>
                <Box sx={{ mt: 'auto' }}>
                  <Button 
                    variant="contained" 
                    color="secondary"
                    component={Link}
                    to={`/artist/${artist.id}`}
                    size="small"
                    sx={{ borderRadius: 4, textTransform: 'none', fontWeight: 'bold' }}
                  >
                    Voir le Profil
                  </Button>
                </Box>
              </CardContent>
            </MotionCard>
          ))}
          </Box>

          {/* Célébrités Column */}
          <Box sx={{ width: { xs: '100%', md: '33.33%' }, p: 2 }}>
            <Box sx={{ borderBottom: '2px solid #f50057', mb: 2, pb: 1 }}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#f50057', textAlign: 'right' }}>
                Célébrités
              </Typography>
            </Box>
          
          {celebrities.map((celebrity) => (
            <MotionCard 
              key={celebrity.id}
              variants={itemVariants}
              sx={{ 
                mb: 3,
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease-in-out',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
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
                  image={celebrity.profileImage}
                  alt={celebrity.name}
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
                  {celebrity.name}
                </Typography>
                <Typography variant="subtitle1" color="error" gutterBottom sx={{ mb: 1 }}>
                  {celebrity.profession}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 2, flexGrow: 1, fontSize: '0.875rem' }}>
                  {celebrity.description.substring(0, 70)}...
                </Typography>
                <Box sx={{ mt: 'auto' }}>
                  <Button 
                    variant="contained" 
                    color="error"
                    component={Link}
                    to={`/celebrity/${celebrity.id}`}
                    size="small"
                    sx={{ borderRadius: 4, textTransform: 'none', fontWeight: 'bold' }}
                  >
                    Voir le Profil
                  </Button>
                </Box>
              </CardContent>
            </MotionCard>
          ))}
          </Box>
        </Box>
      </Box>

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
