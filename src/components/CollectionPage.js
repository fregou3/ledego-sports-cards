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
  Paper,
  Tabs,
  Tab
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import StarIcon from '@mui/icons-material/Star';
import sportsData from '../data/sportsData';
import artistsData from '../data/artistsData';
import celebritiesData from '../data/celebritiesData';

// Motion components
const MotionBox = motion(Box);
const MotionCard = motion(Card);

const CollectionPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [tabValue, setTabValue] = useState(0);
  const location = useLocation();
  
  // Get all celebrities data
  const athletes = sportsData;
  const artists = artistsData;
  const celebrities = celebritiesData;
  
  // Combine all data
  const allCelebrities = [
    ...athletes.map(item => ({ ...item, type: 'athlete' })),
    ...artists.map(item => ({ ...item, type: 'artist' })),
    ...celebrities.map(item => ({ ...item, type: 'celebrity' }))
  ];
  
  // Get data based on selected tab
  const getDataByTab = () => {
    switch(tabValue) {
      case 0: return allCelebrities;
      case 1: return athletes.map(item => ({ ...item, type: 'athlete' }));
      case 2: return artists.map(item => ({ ...item, type: 'artist' }));
      case 3: return celebrities.map(item => ({ ...item, type: 'celebrity' }));
      default: return allCelebrities;
    }
  };
  
  // Get category options based on selected tab
  const getCategoryOptions = () => {
    switch(tabValue) {
      case 0: return [];
      case 1: return [...new Set(athletes.map(item => item.sport))];
      case 2: return [...new Set(artists.map(item => item.art))];
      case 3: return [...new Set(celebrities.map(item => item.profession))];
      default: return [];
    }
  };
  
  // Get category field name based on selected tab
  const getCategoryField = () => {
    switch(tabValue) {
      case 1: return 'sport';
      case 2: return 'art';
      case 3: return 'profession';
      default: return '';
    }
  };
  
  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    setCategoryFilter('');
  };
  
  // Filter data based on search and category filter
  const filteredData = getDataByTab().filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (tabValue === 0) return matchesSearch;
    
    const categoryField = getCategoryField();
    const matchesCategory = categoryFilter === '' || item[categoryField] === categoryFilter;
    
    return matchesSearch && matchesCategory;
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
        Toutes nos Collections
      </Typography>
      
      {/* Tabs Section */}
      <Paper elevation={0} sx={{ mb: 4, borderRadius: 2 }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          variant="fullWidth"
          textColor="primary"
          indicatorColor="primary"
          aria-label="collection categories tabs"
        >
          <Tab icon={<StarIcon />} label="Toutes les Célébrités" id="tab-0" />
          <Tab icon={<SportsTennisIcon />} label="Sportifs" id="tab-1" />
          <Tab icon={<MusicNoteIcon />} label="Artistes" id="tab-2" />
          <Tab icon={<StarIcon />} label="Célébrités" id="tab-3" />
        </Tabs>
      </Paper>
      
      {/* Search and Filter Section */}
      <Paper elevation={0} sx={{ p: 3, mb: 6, borderRadius: 2 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Rechercher"
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
          {tabValue !== 0 && getCategoryOptions().length > 0 && (
            <Grid item xs={12} md={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="category-filter-label">
                  {tabValue === 1 ? 'Filtrer par Sport' : 
                   tabValue === 2 ? 'Filtrer par Art' : 
                   'Filtrer par Profession'}
                </InputLabel>
                <Select
                  labelId="category-filter-label"
                  id="category-filter"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  label={tabValue === 1 ? 'Filtrer par Sport' : 
                         tabValue === 2 ? 'Filtrer par Art' : 
                         'Filtrer par Profession'}
                  startAdornment={
                    <InputAdornment position="start">
                      <FilterListIcon />
                    </InputAdornment>
                  }
                >
                  <MenuItem value="">
                    <em>Tous</em>
                  </MenuItem>
                  {getCategoryOptions().map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          )}
        </Grid>
      </Paper>
      
      {/* Results Count */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" component="p">
          {filteredData.length} {filteredData.length > 1 ? 'résultats' : 'résultat'} trouvé{filteredData.length > 1 ? 's' : ''}
        </Typography>
        
        {categoryFilter && tabValue !== 0 && (
          <Chip 
            label={`${tabValue === 1 ? 'Sport' : tabValue === 2 ? 'Art' : 'Profession'}: ${categoryFilter}`} 
            onDelete={() => setCategoryFilter('')}
            color={tabValue === 1 ? 'primary' : tabValue === 2 ? 'secondary' : 'error'}
          />
        )}
      </Box>
      
      {/* Celebrities Grid */}
      <MotionBox
        component={Grid}
        container
        spacing={4}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredData.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={`${item.type}-${item.id}`}>
            <MotionCard 
              variants={itemVariants} 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)'
                }
              }}
            >
              <Box sx={{ 
                position: 'relative', 
                paddingTop: '100%', /* Format carré 1:1 */
                overflow: 'hidden'
              }}>
                <CardMedia
                  component="img"
                  image={item.profileImage}
                  alt={item.name}
                  sx={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center center'
                  }}
                />
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {item.name}
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                  {item.type === 'athlete' && (
                    <Chip 
                      label={item.sport} 
                      color="primary" 
                      size="small"
                    />
                  )}
                  {item.type === 'artist' && (
                    <Chip 
                      label={item.art} 
                      color="secondary" 
                      size="small"
                    />
                  )}
                  {item.type === 'celebrity' && (
                    <Chip 
                      label={item.profession} 
                      color="error" 
                      size="small"
                    />
                  )}
                  <Chip 
                    label={item.nationality} 
                    variant="outlined"
                    size="small"
                  />
                </Box>
                
                <Typography variant="body2" color="text.secondary" paragraph>
                  {item.description.substring(0, 100)}...
                </Typography>
                
                <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6" color="primary">
                    {item.price} €
                  </Typography>
                  <Button 
                    variant="contained" 
                    color={item.type === 'athlete' ? 'primary' : item.type === 'artist' ? 'secondary' : 'error'}
                    component={Link}
                    to={`/${item.type}/${item.id}`}
                    size="small"
                  >
                    Voir le Profil
                  </Button>
                </Box>
              </CardContent>
            </MotionCard>
          </Grid>
        ))}       </MotionBox>
      
      {/* No Results Message */}
      {filteredData.length === 0 && (
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
