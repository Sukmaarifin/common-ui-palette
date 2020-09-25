/**
 * @todo
 * [ ] Unit Test
 */
import React, { useState, useEffect } from 'react';
import get from 'lodash/get';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import NumberFormat from 'react-number-format';

import PriusFieldset from '../../../components/PriusFieldset';
import PriusInput from '../../../components/PriusInputNew';
import PriusInputGroup from '../../PriusInputGroup';

import { FieldProps } from '../../../components/PriusTable';

type FieldInputProps = {
  handleOnChange: (ID: string, input: React.ReactText) => void;
  rowID: string;
  minInput?: number;
  maxInput?: number;
  className?: string;
  isInputPrice?: boolean;
  isInputString?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  leftLabel?: string;
} & FieldProps;

const useStyles = makeStyles(() => ({
  priceInput: {
    fontSize: '0.8125rem',
    fontFamily: 'Metropolis',
    margin: '-0.2rem -0.8rem',
    border: 'none',
    width: '100%',
    '&:focus': {
      outline: 'none',
    },
  },
  container: {
    justifySelf: 'flex-end',
    alignSelf: 'center',
    display: 'flex',
    width: 'fit-content',
    alignItems: 'center',
    paddingRight: '1.375rem',
  },
}));

const FieldInput = ({
  handleOnChange,
  fieldId,
  source,
  record,
  rowID,
  className,
  minInput,
  maxInput,
  isInputPrice,
  isInputString = false,
  isRequired = false,
  style,
  fixedWidth,
  width,
  title,
  isDisabled = false,
  leftLabel,
}: FieldInputProps) => {
  const classes = useStyles();
  const [input, setInput] = useState<string>('');
  const [priceInput, setPriceInput] = useState<number>(0);
  const [isError, setIsError] = useState<boolean>(false);
  const ID = get(record, rowID);

  useEffect(() => {
    const data = get(record, source);
    isInputPrice ? setPriceInput(data) : setInput(data as string);

    if (isRequired) {
      data.length ? setIsError(false) : setIsError(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [record, source]);

  const getErrors = (value: string) => {
    if (isRequired) {
      value.length ? setIsError(false) : setIsError(true);
    }

    if (minInput && maxInput) {
      if (value) {
        if (parseInt(value) < minInput || parseInt(value) > maxInput) {
          setIsError(true);
        } else {
          setIsError(false);
        }
      } else {
        setIsError(true);
      }
    }
  };

  return (
    <Grid
      item
      style={{
        ...style,
        alignSelf: 'center',
        flexBasis: fixedWidth ? fixedWidth : width,
        flexShrink: fixedWidth ? 0 : 1,
        maxWidth: fixedWidth ? fixedWidth : width,
      }}
    >
      <Grid item className={classes.container}>
        <PriusFieldset
          disabled={isDisabled}
          gutterBottom={false}
          status={isError ? 'error' : 'normal'}
          helperText={isRequired ? (isError ? `${title} wajib diisi` : '') : ''}
        >
          {isInputPrice ? (
            <PriusInputGroup
              inputId={fieldId && `${fieldId}`}
              name="inputCurrency"
              leftLabel={leftLabel}
              handleInput={() => {}}
              handleDropdown={() => {}}
            >
              <NumberFormat
                id={fieldId && `${fieldId}`}
                data-identity={fieldId && `${fieldId}`}
                disabled={isDisabled}
                allowNegative={false}
                decimalSeparator={','}
                isNumericString={true}
                thousandSeparator={'.'}
                value={priceInput}
                className={classes.priceInput}
                onValueChange={(values) => {
                  const { floatValue } = values;
                  setPriceInput(floatValue as number);
                  handleOnChange(ID, floatValue ? floatValue : 0);
                }}
              />
            </PriusInputGroup>
          ) : (
            <PriusInput
              disabled={isDisabled}
              className={className && `${className}`}
              id={fieldId && `${fieldId}`}
              inputProps={{
                'data-identity': fieldId && `${fieldId}`,
              }}
              type="text"
              autoComplete="off"
              value={input}
              onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                setInput(event.target.value as string);
                getErrors(event.target.value as string);
                isInputString
                  ? handleOnChange(
                      ID,
                      event.target.value ? (event.target.value as string) : ''
                    )
                  : handleOnChange(
                      ID,
                      event.target.value
                        ? parseInt(event.target.value as string)
                        : 0
                    );
              }}
            />
          )}
        </PriusFieldset>
      </Grid>
    </Grid>
  );
};
export default FieldInput;
