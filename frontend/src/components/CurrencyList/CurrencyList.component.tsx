import React, { useEffect, useState } from 'react';
import type { TableColumn, TableStyles } from 'react-data-table-component';
import DataTable, { Media } from 'react-data-table-component';
import axios from 'axios';
import { getEnv } from '../utils/env';
import Toggle from '../Toggle';
import { Currency } from './CurrencyList.types';
import ToggleWrapper from './styled/ToggleWrapper.styled';

const columns: TableColumn<Currency>[] = [
    {
        id: 'name',
        name: 'Name',
        selector: ({ name }) => name,
        sortable: true
    },
    {
        id: 'code',
        name: 'Code',
        selector: ({ code }) => code.toUpperCase(),
        hide: Media.SM,
        sortable: true
    },
    {
        id: 'type',
        name: 'Type',
        selector: ({ type }) => type,
        hide: Media.MD
    },
    {
        id: 'isSupportedInUS',
        name: 'Is Supported In The US?',
        selector: ({ isSupportedInUS }) => isSupportedInUS ? 'Yes' : 'No',
        hide: Media.MD
    },
    {
        id: 'supportsTestMode',
        name: 'Is Available In The Test Mode?',
        selector: ({ supportsTestMode }) => supportsTestMode ? 'Yes' : 'No',
        hide: Media.MD
    }
];

const customStyles: TableStyles = {
    headRow: {
        style: {
            fontWeight: 'bold',
            fontSize: '1rem'
        }
    },
    rows: {
        style: {
            '&:nth-of-type(odd)': {
                backgroundColor: 'ghostwhite'
            }
        }
    }
};

function CurrencyList(): JSX.Element {
    const [currencies, setCurrencies] = useState<Currency[]>([]);
    const [hideNotSupportedInUS, setHideNotSupportedInUS] = useState(false);
    const [hideNotAvailableInTestMode, setHideNotAvailableInTestMode] = useState(false);

    const filteredCurrencies = currencies.filter(({ isSupportedInUS, supportsTestMode }) =>
        !(hideNotSupportedInUS && !isSupportedInUS) &&
        !(hideNotAvailableInTestMode && !supportsTestMode)
    );

    useEffect(() => {
        const fetchCurrencies = async (): Promise<void> => {
            const { data } = await axios.get<Currency[]>(getEnv('REACT_APP_MOONPAY_API_CURRENCIES_ENDPOINT'));
            setCurrencies(data);
        };

        void fetchCurrencies();
    }, []);

    return (
        <div className="CurrencyList">
            <ToggleWrapper>
                <Toggle
                  label="Hide currencies not supported in the US"
                  isChecked={ hideNotSupportedInUS }
                  onToggle={ () => { setHideNotSupportedInUS(!hideNotSupportedInUS); } }
                />
                <Toggle
                  label="Hide currencies not available in the test mode"
                  isChecked={ hideNotAvailableInTestMode }
                  onToggle={ () => { setHideNotAvailableInTestMode(!hideNotAvailableInTestMode); } }
                />
            </ToggleWrapper>
            <DataTable
              columns={ columns }
              data={ filteredCurrencies }
              customStyles={ customStyles }
            />
        </div>
    );
}

export default CurrencyList;
