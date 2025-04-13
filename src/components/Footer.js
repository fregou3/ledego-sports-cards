import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  IconButton,
  Divider
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[900],
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <SportsBaseballIcon sx={{ mr: 1, fontSize: '2rem' }} />
              <Typography variant="h5" component="div">
                Ledego Sports Cards
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 3 }}>
              Votre plateforme de collection, d'achat et de vente de cartes de grands sportifs.
              Découvrez notre sélection unique de fiches de sportifs, d'événements et de couvertures de magazines.
            </Typography>
            <Box>
              <IconButton color="inherit" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Navigation
            </Typography>
            <Box component="ul" sx={{ p: 0, listStyle: 'none' }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Link component={RouterLink} to="/" color="inherit" underline="hover">
                  Accueil
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link component={RouterLink} to="/collection" color="inherit" underline="hover">
                  Collection
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link component={RouterLink} to="/shop" color="inherit" underline="hover">
                  Boutique
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link component={RouterLink} to="/account" color="inherit" underline="hover">
                  Mon Compte
                </Link>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Catégories
            </Typography>
            <Box component="ul" sx={{ p: 0, listStyle: 'none' }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Link component={RouterLink} to="/collection" color="inherit" underline="hover">
                  Sportifs
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link component={RouterLink} to="/shop?tab=1" color="inherit" underline="hover">
                  Événements
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link component={RouterLink} to="/shop?tab=2" color="inherit" underline="hover">
                  Magazines
                </Link>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" paragraph>
              Email: contact@ledego-sports.com
            </Typography>
            <Typography variant="body2" paragraph>
              Téléphone: +33 1 23 45 67 89
            </Typography>
            <Typography variant="body2">
              Adresse: 123 Avenue des Sports, 75001 Paris, France
            </Typography>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
        
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Ledego Sports Cards. Tous droits réservés.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
