import { MyContainer } from '@/components';
import { Box, useMediaQuery } from '@mui/material';
import React from 'react';
import Typography from '@/components/Typography/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { SearchBarBox, SearchBarContainer, Search } from './StyleSearchBar';

const StyledInputBase = styled(InputBase)(({ theme }) => ({}));

const SearchBar = () => {
  const isSmallScreen = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));
  return (
    <SearchBarContainer>
      <SearchBarBox>
        <Typography emphasis="high" fontSize="xl3" fontWeight="bold" fontFamily="Poppins">
          What do you want to search for ?
        </Typography>
        <Search>
          <SearchIcon />
          <StyledInputBase placeholder="Type everything you want ..." />
        </Search>
      </SearchBarBox>
    </SearchBarContainer>
  );
};

export default SearchBar;
