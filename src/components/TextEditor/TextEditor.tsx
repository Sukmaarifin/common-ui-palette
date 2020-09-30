import React, { useState, useEffect, useRef } from 'react';
import CKEditor from 'ckeditor4-react';
import { Grid, createStyles, makeStyles, Theme } from '@material-ui/core';
import { useMutation } from 'react-apollo';

import CircularProgress from '../CircularProgress';
import { FileType } from '../ImageUploader';
import ButtonText from '../ButtonText';
import { useSnackbar } from '../PriusSnackbar';

import { ToolbarType, StartupModeTypes } from './types';
import {
  DEFAULT_EXTRA_PLUGINS,
  DEFAULT_HEIGHT,
  DEFAULT_TOOLBAR,
} from './constants';
import { UPLOAD_IMAGE } from '../../graphql';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    uploadImageButton: {
      marginTop: 10,
      borderColor: theme.colors.primary,
      border: `1px solid ${theme.colors.primary}`,
      padding: '4px 20px',
      borderRadius: '3px',
      fontWeight: 'bold',
      '&:hover': {
        backgroundColor: theme.colors.primary,
        color: theme.colors.white,
      },
    },
    imageUploader: {
      display: 'none',
    },
  })
);

export type TextEditorProps = {
  data?: string;
  extraPlugins?: string;
  height?: number;
  /** @deprecated Use `data` instead */
  previousText?: string;
  readOnly?: boolean;
  /** @deprecated Use `height` instead */
  setHeight?: number;
  /** @deprecated Use `uiColor` instead */
  setTheme?: string;
  startupMode?: StartupModeTypes;
  title?: string;
  toolbar?: Array<ToolbarType>;
  uiColor?: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextEditor = ({
  data,
  extraPlugins = DEFAULT_EXTRA_PLUGINS,
  height = DEFAULT_HEIGHT,
  previousText,
  readOnly = false,
  setTheme,
  setHeight,
  startupMode = StartupModeTypes.WYSIWYG,
  title = 'Text Editor',
  toolbar = DEFAULT_TOOLBAR,
  uiColor,
  onBlur,
  onChange,
}: TextEditorProps) => {
  const [contentState, setContentState] = useState<string>();
  const classes = useStyle();

  useEffect(() => {
    if (previousText) {
      setContentState(previousText);
    } else if (data) {
      setContentState(data);
    } else {
      setContentState('');
    }
  }, [previousText, data]);

  const [uploadImage, { called, loading }] = useMutation(UPLOAD_IMAGE);

  const uploadImageToTextEditor = (file: FileType) => {
    uploadImage({
      variables: {
        input: {
          file: file.file,
          bucket: 'PRIUS',
          contentType: file.contentType,
          uploadType: 'TEXT_EDITOR_IMAGE',
        },
      },
    }).then((image: any) => {
      setContentState((prevContent) =>
        prevContent?.concat(
          `<img src="${image.data.singleUpload.url}" width="auto" height="auto" />`
        )
      );
    });
  };

  const fileInput = useRef<HTMLInputElement>(null);
  const snackbar = useSnackbar();

  const uploadImageInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    if (file?.type.indexOf('image') !== -1) {
      try {
        if (file.type) {
          uploadImageToTextEditor({
            file: file,
            contentType: file.type,
          });
        }
      } catch (e) {
        snackbar.show(`Error: ${e.message}`, 'error');
      }
    } else {
      snackbar.show('Invalid data type: limited to image only.', 'error');
    }
  };

  const imageInputClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  return (
    <>
      <CKEditor
        config={{
          extraPlugins,
          height: setHeight || height,
          removeButtons: 'Subscript, Superscript',
          resize_enabled: false,
          startupMode,
          title,
          toolbar,
          uiColor: setTheme || uiColor,
          enterMode: 2,

          //allow inline styling to pass content filtering
          allowedContent: {
            //allow all elements to add inline styling
            $1: {
              elements: CKEditor.dtd,
              attributes: true,
              styles: true,
            },
          },

          //filter script and embed styling
          disallowedContent: 'script; *[on*]; style',
        }}
        data={contentState}
        disabled={true}
        readOnly={readOnly}
        onBlur={onBlur}
        onChange={onChange}
      />

      {startupMode === StartupModeTypes.WYSIWYG && (
        <Grid item>
          <ButtonText
            color="primary"
            onClick={imageInputClick}
            className={classes.uploadImageButton}
            inputId="texteditor-input-image"
          >
            {loading && called ? (
              <CircularProgress size={10} isWithText={false} />
            ) : (
              'Unggah Gambar'
            )}
          </ButtonText>

          {!loading && (
            <input
              ref={fileInput}
              className={classes.imageUploader}
              data-identity="texteditor-input-image"
              id="texteditor-input-image"
              type="file"
              accept="image/*"
              onChange={(event: any) => uploadImageInput(event)}
            />
          )}
        </Grid>
      )}
    </>
  );
};

export default TextEditor;
