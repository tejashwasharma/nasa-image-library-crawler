import React, { useState } from 'react';
import Header from '../../component/Header/Header';
import List from '../../component/List/List';
import SearchBar from '../../component/SearchBar/SearchBar';

const Search: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    return (
        <React.Fragment>
            <Header>Interstellar crawler</Header>
            <SearchBar setLoading={setLoading} />
            <List loading={loading} setLoading={setLoading} />
        </React.Fragment>
    )
}

export default Search;
