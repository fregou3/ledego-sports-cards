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
  Tab,
  Badge
} from '@mui/material';
import { motion } from 'framer-motion';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import sportsData from '../data/sportsData';

// Motion components
const MotionBox = motion(Box);
const MotionCard = motion(Card);

const ShopPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [tabValue, setTabValue] = useState(0);
  const [cart, setCart] = useState([]);
  
  // Get all items
  const athletes = sportsData;
  const events = athletes.flatMap(athlete => athlete.events);
  const magazines = athletes.flatMap(athlete => athlete.magazines);
  
  // Determine which items to show based on tab
  const getItemsForTab = () => {
    switch(tabValue) {
      case 0: return athletes;
      case 1: return events;
      case 2: return magazines;
      default: return athletes;
    }
  };
  
  const items = getItemsForTab();
  
  // Filter items based on search and price range
  const filteredItems = items.filter(item => {
    const matchesSearch = item.name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.title?.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesPrice = true;
    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      matchesPrice = item.price >= min && (max ? item.price <= max : true);
    }
    
    return matchesSearch && matchesPrice && item.forSale;
  });

  // Add item to cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

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
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Boutique
        </Typography>
        
        <Badge badgeContent={cart.length} color="secondary">
          <Button
            variant="contained"
            color="primary"
            startIcon={<ShoppingCartIcon />}
          >
            Panier
          </Button>
        </Badge>
      </Box>
      
      {/* Tabs for different item types */}
      <Paper elevation={0} sx={{ mb: 4, borderRadius: 2, overflow: 'hidden' }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          variant="fullWidth"
          textColor="primary"
          indicatorColor="primary"
          aria-label="shop tabs"
        >
          <Tab 
            icon={<PersonIcon />} 
            label="Sportifs" 
            id="tab-0" 
            aria-controls="tabpanel-0" 
          />
          <Tab 
            icon={<EventIcon />} 
            label="Événements" 
            id="tab-1" 
            aria-controls="tabpanel-1" 
          />
          <Tab 
            icon={<MenuBookIcon />} 
            label="LIVRES / MAGAZINES" 
            id="tab-2" 
            aria-controls="tabpanel-2" 
          />
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
          <Grid item xs={12} md={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="price-range-label">Gamme de Prix</InputLabel>
              <Select
                labelId="price-range-label"
                id="price-range"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                label="Gamme de Prix"
                startAdornment={
                  <InputAdornment position="start">
                    <FilterListIcon />
                  </InputAdornment>
                }
              >
                <MenuItem value="">Tous les prix</MenuItem>
                <MenuItem value="0-50">0€ - 50€</MenuItem>
                <MenuItem value="50-100">50€ - 100€</MenuItem>
                <MenuItem value="100-150">100€ - 150€</MenuItem>
                <MenuItem value="150">Plus de 150€</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
      
      {/* Results Count */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" component="p">
          {filteredItems.length} {filteredItems.length > 1 ? 'articles' : 'article'} disponible{filteredItems.length > 1 ? 's' : ''}
        </Typography>
      </Box>
      
      {/* Items Grid */}
      <MotionBox
        component={Grid}
        container
        spacing={4}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <MotionCard 
              variants={itemVariants} 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Box sx={{ 
                position: 'relative', 
                paddingTop: '100%', /* Format carré 1:1 */
                overflow: 'hidden'
              }}>
                <CardMedia
                  component="img"
                  image={item.profileImage || item.image}
                  alt={item.name || item.title}
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
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {item.name || item.title}
                </Typography>
                
                {item.sport && (
                  <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                    <Chip 
                      label={item.sport} 
                      color="primary" 
                      size="small"
                    />
                    {item.nationality && (
                      <Chip 
                        label={item.nationality} 
                        variant="outlined"
                        size="small"
                      />
                    )}
                  </Box>
                )}
                
                {item.date && (
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {item.date}
                  </Typography>
                )}
                
                <Typography variant="body2" paragraph>
                  {(item.description || "").substring(0, 100)}
                  {(item.description || "").length > 100 ? "..." : ""}
                </Typography>
                
                <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6" color="primary">
                    {item.price} €
                  </Typography>
                  <Button 
                    variant="contained" 
                    color="secondary"
                    startIcon={<ShoppingCartIcon />}
                    onClick={() => addToCart(item)}
                  >
                    Ajouter
                  </Button>
                </Box>
              </CardContent>
            </MotionCard>
          </Grid>
        ))}
      </MotionBox>
      
      {/* No Results Message */}
      {filteredItems.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 6 }}>
          <Typography variant="h5" gutterBottom>
            Aucun article trouvé
          </Typography>
          <Typography variant="body1">
            Essayez de modifier vos critères de recherche
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default ShopPage;
