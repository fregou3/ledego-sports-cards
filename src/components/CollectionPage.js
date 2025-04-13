import React, { useState } from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Card, 
  CardMedia, 
  CardContent, 
  Box, 
  Button,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Paper
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import sportsData from '../data/sportsData';

// Motion components
const MotionBox = motion(Box);
const MotionCard = motion(Card);

const CollectionPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sportFilter, setSportFilter] = useState('');
  
  // Get all athletes
  const athletes = sportsData;
  
  // Get unique sports for filter
  const sports = [...new Set(athletes.map(athlete => athlete.sport))];

  // Filter athletes based on search and sport filter
  const filteredAthletes = athletes.filter(athlete => {
    const matchesSearch = athlete.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSport = sportFilter === '' || athlete.sport === sportFilter;
    return matchesSearch && matchesSport;
  });

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
      <Typography variant="h2" component="h1" gutterBottom sx={{ mb: 4 }}>
        Collection de Cartes Sportives
      </Typography>
      
      {/* Search and Filter Section */}
      <Paper elevation={0} sx={{ p: 3, mb: 6, borderRadius: 2 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Rechercher un sportif"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="sport-filter-label">Filtrer par Sport</InputLabel>
              <Select
                labelId="sport-filter-label"
                id="sport-filter"
                value={sportFilter}
                onChange={(e) => setSportFilter(e.target.value)}
                label="Filtrer par Sport"
                startAdornment={
                  <InputAdornment position="start">
                    <FilterListIcon />
                  </InputAdornment>
                }
              >
                <MenuItem value="">Tous les sports</MenuItem>
                {sports.map((sport) => (
                  <MenuItem key={sport} value={sport}>{sport}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
      
      {/* Results Count */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" component="p">
          {filteredAthletes.length} {filteredAthletes.length > 1 ? 'résultats' : 'résultat'} trouvé{filteredAthletes.length > 1 ? 's' : ''}
        </Typography>
        
        {sportFilter && (
          <Chip 
            label={`Sport: ${sportFilter}`} 
            onDelete={() => setSportFilter('')}
            color="primary"
          />
        )}
      </Box>
      
      {/* Athletes Grid */}
      <MotionBox
        component={Grid}
        container
        spacing={4}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredAthletes.map((athlete) => (
          <Grid item xs={12} sm={6} md={4} key={athlete.id}>
            <MotionCard 
              variants={itemVariants} 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <CardMedia
                component="img"
                height="300"
                image={athlete.profileImage}
                alt={athlete.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {athlete.name}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                  <Chip 
                    label={athlete.sport} 
                    color="primary" 
                    size="small"
                  />
                  <Chip 
                    label={athlete.nationality} 
                    variant="outlined"
                    size="small"
                  />
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {athlete.description.substring(0, 100)}...
                </Typography>
                
                <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6" color="primary">
                    {athlete.price} €
                  </Typography>
                  <Button 
                    variant="contained" 
                    component={Link}
                    to={`/athlete/${athlete.id}`}
                  >
                    Voir Détails
                  </Button>
                </Box>
              </CardContent>
            </MotionCard>
          </Grid>
        ))}
      </MotionBox>
      
      {/* No Results Message */}
      {filteredAthletes.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 6 }}>
          <Typography variant="h5" gutterBottom>
            Aucun résultat trouvé
          </Typography>
          <Typography variant="body1">
            Essayez de modifier vos critères de recherche
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default CollectionPage;
