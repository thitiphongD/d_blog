import React, { useState } from 'react';
import { InputCustom } from '../custom/InputCustom';

const SearchComponent = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            console.log(searchValue);
            setSearchValue('');
        }
    }

    return (
        <InputCustom placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleSearch} />
    )
}

export default SearchComponent