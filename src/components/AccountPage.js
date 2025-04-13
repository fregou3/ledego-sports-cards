import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Tabs, 
  Tab, 
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider
} from '@mui/material';
import { motion } from 'framer-motion';
import PersonIcon from '@mui/icons-material/Person';
import CollectionsIcon from '@mui/icons-material/Collections';
import HistoryIcon from '@mui/icons-material/History';
import FavoriteIcon from '@mui/icons-material/Favorite';
import sportsData from '../data/sportsData';

// Motion components
const MotionBox = motion(Box);

const AccountPage = () => {
  const [tabValue, setTabValue] = useState(0);
  
  // Mock user data
  const user = {
    name: "Jean Dupont",
    email: "jean.dupont@example.com",
    avatar: null,
    collection: [
      { id: 1, type: 'athlete', item: sportsData[0] },
      { id: 2, type: 'event', item: sportsData[0].events[0] },
      { id: 3, type: 'magazine', item: sportsData[0].magazines[0] }
    ],
    favorites: [
      { id: 4, type: 'athlete', item: sportsData[0] },
      { id: 5, type: 'magazine', item: sportsData[0].magazines[1] }
    ],
    purchaseHistory: [
      { 
        id: 1001, 
        date: '10/04/2025', 
        items: [
          { id: 1, type: 'athlete', item: sportsData[0], quantity: 1 },
          { id: 2, type: 'event', item: sportsData[0].events[0], quantity: 1 }
        ],
        total: 205
      },
      { 
        id: 1002, 
        date: '05/03/2025', 
        items: [
          { id: 3, type: 'magazine', item: sportsData[0].magazines[0], quantity: 1 }
        ],
        total: 45
      }
    ]
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ mb: 4 }}>
        Mon Compte
      </Typography>
      
      <Grid container spacing={4}>
        {/* User Profile Card */}
        <Grid item xs={12} md={4}>
          <Card elevation={0} sx={{ mb: 4, borderRadius: 2 }}>
            <CardContent sx={{ textAlign: 'center', py: 4 }}>
              <Avatar 
                sx={{ 
                  width: 120, 
                  height: 120, 
                  mx: 'auto', 
                  mb: 2,
                  bgcolor: 'primary.main',
                  fontSize: '3rem'
                }}
              >
                {user.name.charAt(0)}
              </Avatar>
              <Typography variant="h4" gutterBottom>
                {user.name}
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                {user.email}
              </Typography>
              <Button 
                variant="outlined" 
                color="primary" 
                sx={{ mt: 2 }}
              >
                Modifier le profil
              </Button>
            </CardContent>
          </Card>
          
          <Card elevation={0} sx={{ borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Informations personnelles
              </Typography>
              <Box component="form" sx={{ mt: 3 }}>
                <TextField
                  fullWidth
                  label="Nom"
                  variant="outlined"
                  defaultValue={user.name}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  defaultValue={user.email}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Mot de passe"
                  variant="outlined"
                  type="password"
                  defaultValue="********"
                  margin="normal"
                />
                <Button 
                  variant="contained" 
                  color="primary" 
                  sx={{ mt: 3 }}
                >
                  Enregistrer
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        {/* Tabs Section */}
        <Grid item xs={12} md={8}>
          <Paper elevation={0} sx={{ borderRadius: 2, overflow: 'hidden' }}>
            <Tabs 
              value={tabValue} 
              onChange={handleTabChange} 
              variant="fullWidth"
              textColor="primary"
              indicatorColor="primary"
              aria-label="account tabs"
            >
              <Tab 
                icon={<CollectionsIcon />} 
                label="Ma Collection" 
                id="tab-0" 
                aria-controls="tabpanel-0" 
              />
              <Tab 
                icon={<FavoriteIcon />} 
                label="Favoris" 
                id="tab-1" 
                aria-controls="tabpanel-1" 
              />
              <Tab 
                icon={<HistoryIcon />} 
                label="Historique" 
                id="tab-2" 
                aria-controls="tabpanel-2" 
              />
            </Tabs>
            
            {/* My Collection Tab */}
            <Box
              role="tabpanel"
              hidden={tabValue !== 0}
              id="tabpanel-0"
              aria-labelledby="tab-0"
              sx={{ p: 3 }}
            >
              {tabValue === 0 && (
                <MotionBox
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Typography variant="h5" gutterBottom>
                    Ma Collection ({user.collection.length})
                  </Typography>
                  
                  <Grid container spacing={3}>
                    {user.collection.map(({ id, type, item }) => (
                      <Grid item xs={12} sm={6} key={id}>
                        <Card sx={{ display: 'flex', height: '100%' }}>
                          <CardMedia
                            component="img"
                            sx={{ width: 120 }}
                            image={item.profileImage || item.image}
                            alt={item.name || item.title}
                          />
                          <CardContent sx={{ flexGrow: 1 }}>
                            <Typography variant="h6">
                              {item.name || item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {type === 'athlete' ? 'Sportif' : type === 'event' ? 'Événement' : 'Magazine'}
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1 }}>
                              Valeur: {item.price} €
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </MotionBox>
              )}
            </Box>
            
            {/* Favorites Tab */}
            <Box
              role="tabpanel"
              hidden={tabValue !== 1}
              id="tabpanel-1"
              aria-labelledby="tab-1"
              sx={{ p: 3 }}
            >
              {tabValue === 1 && (
                <MotionBox
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Typography variant="h5" gutterBottom>
                    Mes Favoris ({user.favorites.length})
                  </Typography>
                  
                  <Grid container spacing={3}>
                    {user.favorites.map(({ id, type, item }) => (
                      <Grid item xs={12} sm={6} key={id}>
                        <Card sx={{ display: 'flex', height: '100%' }}>
                          <CardMedia
                            component="img"
                            sx={{ width: 120 }}
                            image={item.profileImage || item.image}
                            alt={item.name || item.title}
                          />
                          <CardContent sx={{ flexGrow: 1 }}>
                            <Typography variant="h6">
                              {item.name || item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {type === 'athlete' ? 'Sportif' : type === 'event' ? 'Événement' : 'Magazine'}
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                              <Typography variant="body2">
                                Prix: {item.price} €
                              </Typography>
                              <Button 
                                variant="outlined" 
                                size="small"
                                color="secondary"
                              >
                                Acheter
                              </Button>
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </MotionBox>
              )}
            </Box>
            
            {/* Purchase History Tab */}
            <Box
              role="tabpanel"
              hidden={tabValue !== 2}
              id="tabpanel-2"
              aria-labelledby="tab-2"
              sx={{ p: 3 }}
            >
              {tabValue === 2 && (
                <MotionBox
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Typography variant="h5" gutterBottom>
                    Historique d'Achats
                  </Typography>
                  
                  {user.purchaseHistory.map((purchase) => (
                    <Paper 
                      key={purchase.id}
                      elevation={0}
                      sx={{ 
                        p: 2, 
                        mb: 3, 
                        borderRadius: 2,
                        border: '1px solid',
                        borderColor: 'divider'
                      }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                        <Typography variant="subtitle1">
                          Commande #{purchase.id}
                        </Typography>
                        <Typography variant="subtitle1">
                          {purchase.date}
                        </Typography>
                      </Box>
                      
                      <Divider sx={{ mb: 2 }} />
                      
                      <List sx={{ mb: 2 }}>
                        {purchase.items.map(({ id, item, quantity }) => (
                          <ListItem key={id} alignItems="flex-start" sx={{ px: 0 }}>
                            <ListItemAvatar>
                              <Avatar 
                                variant="rounded"
                                src={item.profileImage || item.image}
                                alt={item.name || item.title}
                              />
                            </ListItemAvatar>
                            <ListItemText
                              primary={item.name || item.title}
                              secondary={
                                <>
                                  <Typography
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                  >
                                    {item.price} € × {quantity}
                                  </Typography>
                                  {" — "}{item.description?.substring(0, 60)}...
                                </>
                              }
                            />
                          </ListItem>
                        ))}
                      </List>
                      
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 2, borderTop: '1px solid', borderColor: 'divider' }}>
                        <Typography variant="subtitle1">
                          Total
                        </Typography>
                        <Typography variant="h6" color="primary">
                          {purchase.total} €
                        </Typography>
                      </Box>
                    </Paper>
                  ))}
                </MotionBox>
              )}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AccountPage;
