import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, InputBase, IconButton } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import BookmarkIcon from '@mui/icons-material/Bookmark'; // Import Icon for Watchlist

// Styled components for the search bar
const Search = styled('div')(({ theme }) => ({
position: 'relative',
borderRadius: theme.shape.borderRadius,
backgroundColor: alpha(theme.palette.common.white, 0.15),
'&:hover': {
  backgroundColor: alpha(theme.palette.common.white, 0.25),
},
marginLeft: theme.spacing(2),
width: 'auto',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
padding: theme.spacing(0, 2),
height: '100%',
position: 'absolute',
pointerEvents: 'none',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
color: 'inherit',
'& .MuiInputBase-input': {
  padding: theme.spacing(1, 1, 1, 0),
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  transition: theme.transitions.create('width'),
  width: '12ch',
  [theme.breakpoints.up('md')]: {
    width: '20ch',
  },
},
}));

const Navbar: React.FC = () => {
const [searchQuery, setSearchQuery] = useState<string>('');
const navigate = useNavigate();

const handleSearch = (e: React.FormEvent) => {
  e.preventDefault();
  if (searchQuery.trim()) {
    navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    setSearchQuery(''); // Clear the search input after submitting
  }
};

return (
  <AppBar position="fixed">
    <Toolbar>
      <Typography variant="h6" component="div">
        Movie App
      </Typography>
      <Box component="form" onSubmit={handleSearch} sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search' }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Search>
        <IconButton
          onClick={() => navigate('/watchlist')}
          sx={{
            ml: 2,
            color: 'white', // Ensure the icon is white to be visible
          }}
          aria-label="Watchlist"
        >
          <BookmarkIcon />WatchList
        </IconButton>
      </Box>
    </Toolbar>
  </AppBar>
);
};

export default Navbar;
