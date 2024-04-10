import { Box } from '@mui/material';
import SearchBar from './SearchBar/SearchBar';
import Result from './Result/Result';
const SearchPage = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <SearchBar />
      <Result />
    </Box>
  );
};

export default SearchPage;
