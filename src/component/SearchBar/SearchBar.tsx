import React, { useEffect } from 'react';
import { api } from '../../api';
import { Button, FlexContainer, Input } from '..';
import { updateSearchResults, raiseError, updateInput } from '../../redux/actions/actions';
import { useTypedDispatch, useTypedSelector } from '../../redux/store';
import { SearchBarProps, SearchParams } from './SearchBar.types';
import { AxiosError, AxiosResponse } from 'axios';

const SearchBar: React.FC<SearchBarProps> = ({ setLoading }) => {
    const { inputs } = useTypedSelector(state => state.app);
    const dispatch = useTypedDispatch();

    const isValidYear = (year: string) => year.length === 4 && !!parseInt(year, 10);

    const checkEndYearGreater = (isValidStartYear: boolean, isValidEndYear: boolean) => isValidStartYear && isValidEndYear && parseInt(inputs.eYear, 10) > parseInt(inputs.sYear, 10);

    const handleSearch = () => {
        try {
            let params: SearchParams = {
                q: inputs.search,
                media_type: 'image'
            };

            const isValidStartYear: boolean = isValidYear(inputs.sYear);
            const isValidEndYear: boolean = isValidYear(inputs.eYear);
            const isEndYearGreater: boolean = checkEndYearGreater(isValidStartYear, isValidEndYear);
            
            if (isValidStartYear) params.year_start = inputs.sYear;
            else if (inputs.sYear.length) {
                dispatch(raiseError('Start year is invalid!'));
                if (isValidEndYear && inputs.eYear.length) dispatch(raiseError('End year is invalid!!'));
                return;
            }
            
            if (isEndYearGreater) params.year_end = inputs.eYear;
            else if (isValidStartYear && isValidEndYear) return dispatch(raiseError('End year must be greater than start year!'));
            else if (!isValidEndYear && inputs.eYear.length) return dispatch(raiseError('End year is invalid!'));

            if (isValidEndYear && !isValidStartYear) params.year_end = inputs.eYear;

            
            setLoading(true);
            api({ method: 'get', url: '/search', params })
                .then(({ data }: AxiosResponse) => dispatch(updateSearchResults(data.collection)))
                .catch((err: AxiosError) => dispatch(raiseError(err.message)))
                .finally(() => setLoading(false));

        } catch (err) {
            // handle error
            console.log(err);
        }
    }

    useEffect(() => {
        handleSearch();
    }, [])

    return (
        <FlexContainer justifyCenter row>
            <Input data-testid="search-input" placeholder='Search' value={inputs.search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(updateInput({ ...inputs, search: e.target.value }))} />
            <Input data-testid="start-year" type='number' placeholder='Start Year' value={inputs.sYear} onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(updateInput({ ...inputs, sYear: e.target.value }))} />
            <Input data-testid="end-year" type='number' placeholder='End Year' value={inputs.eYear} onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(updateInput({ ...inputs, eYear: e.target.value }))} />
            <Button data-testid="search-button" onClick={handleSearch}>Search</Button>
        </FlexContainer>
    )
}

export default SearchBar;
