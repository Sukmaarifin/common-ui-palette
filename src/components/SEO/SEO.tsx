import React, { useState, useEffect, useContext } from 'react';
import { Typography } from '@material-ui/core';

import Fieldset from '../Fieldset';
import Input from '../InputNew';
import MultipleSelect, {
  OptionType,
  PriusActionMeta,
} from '../MultipleSelect';

import { SEOType } from './types';
import { TenantContext } from '../SSSO';

export type SEOProps = {
  data: Array<SEOType>;
  errors?: any;
  isSlugActive: boolean;
  placeholder?: string;
  slug: string;
  onChange: (data: string | Array<string>, section: string) => void;
  inputId?: string;
  showTitle?: boolean;
};

const SEOComponent = ({
  data,
  errors,
  isSlugActive,
  placeholder,
  slug,
  onChange,
  inputId,
  showTitle = true,
}: SEOProps) => {
  const { lang } = useContext(TenantContext);

  const [keywords, setKeywords] = useState<Array<string>>([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const findSEOByLanguage = data.find((SEOs) => SEOs.language === lang);

      if (findSEOByLanguage) {
        setKeywords(findSEOByLanguage.keywords);
      }
    }
  }, [data, lang]);

  const onChangeInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(event.target.value, event.target.name);
  };

  const onChangeKeywords = (
    selectedOptions: Array<OptionType>,
    _: PriusActionMeta
  ) => {
    let selected: Array<string> = [];

    if (selectedOptions) {
      selectedOptions.forEach((selectedOption: OptionType) =>
        selected.push(selectedOption.value)
      );
    }
    onChange(selected, 'keywords');
  };

  return (
    <React.Fragment>
      {showTitle && (
        <Typography variant="h3" style={{ marginBottom: '2rem' }}>
          SEO
        </Typography>
      )}

      <Fieldset
        fullWidth
        inputId="input-seo-description"
        label="Deskripsi"
        tooltipText={
          <span>
            Deskripsi digunakan untuk menampilkan cuplikan pencarian dari search
            engine Anda. Biarkan kosong untuk <i>default</i>.
          </span>
        }
      >
        <Input
          inputProps={{
            'data-identity': inputId && `${inputId}-input-seoDescription`,
          }}
          id="input-seo-description"
          name="description"
          autoComplete="off"
          placeholder="Masukkan meta deskripsi"
          value={data.length > 0 ? data[0].description : ''}
          onChange={(event) => onChangeInput(event)}
        />
      </Fieldset>

      <Fieldset
        fullWidth
        inputId="input-keywords"
        status="normal"
        label="Kata Kunci"
        tooltipText={
          <span>
            Kata kunci akan digunakan oleh search engine untuk menghubungkan
            halaman ini. Biarkan kosong untuk <i>default</i>.
          </span>
        }
      >
        <MultipleSelect
          isCreatable
          isDeletable
          id={inputId && `${inputId}-input-seoKeywords`}
          name="keywords"
          onChange={onChangeKeywords}
          placeholder="Masukkan kata kunci yang akan ditampilkan"
          selectedData={keywords?.map((keyword: string) => ({
            isDisabled: false,
            value: keyword,
            label: keyword,
          }))}
        />
      </Fieldset>

      <Fieldset
        disabled={!isSlugActive}
        fullWidth
        helperText={errors?.slug && errors.slug}
        inputId="input-slug"
        label="Slug"
        status={errors?.slug ? 'error' : 'normal'}
        tooltipText="Slug digunakan untuk mempersingkat URL produk Anda."
      >
        <Input
          inputProps={{
            'data-identity': inputId && `${inputId}-input-slug`,
          }}
          id="input-slug"
          name="slug"
          placeholder={placeholder || 'Masukkan slug untuk produk anda'}
          value={slug || ''}
          onChange={(event) => onChangeInput(event)}
        />
      </Fieldset>
    </React.Fragment>
  );
};

export default SEOComponent;
