import React from 'react';
import {
  CustomPicker,
  HSLColor,
  RGBColor,
  Color,
  ColorResult,
} from 'react-color';
import {
  EditableInput,
  Hue,
  Saturation,
} from 'react-color/lib/components/common';
import { Grid, Typography } from '@material-ui/core';
import clsx from 'clsx';

import {
  useStyles,
  editableInputStyle,
  presetColors,
} from './PriusColorPickerCss';

const HuePointer = () => {
  const classes = useStyles();
  return <Grid className={classes.huepointer} />;
};

const SaturationPointer = () => {
  const classes = useStyles();
  return <Grid className={classes.saturationPointer} />;
};

export type PriusColorPickerType = {
  hex?: string;
  hsl?: HSLColor;
  rgb?: RGBColor;
  /**
   * color code (hex)
   */
  color?: Color;
  /**
   * onChange callback
   */
  onChange: (selectedColor: any) => void;
};

const PriusColorPicker = (props: PriusColorPickerType) => {
  const classes = useStyles();

  const handleChange = (color: ColorResult, type: 'hex' | 'r' | 'g' | 'b') => {
    if (type === 'hex') {
      if (typeof color === 'string') {
        if (/^([0-9A-F]{3}){1,2}$/i.test(color)) {
          props.onChange({ hex: color, source: 'hex' });
        }
      } else {
        props.onChange({ hex: color.hex, source: 'hex' });
      }
    } else {
      if (typeof color === 'string') {
        props.onChange({
          r: type === 'r' ? color : props.rgb?.r,
          g: type === 'g' ? color : props.rgb?.g,
          b: type === 'b' ? color : props.rgb?.b,
          source: 'rgb',
        });
      } else {
        props.onChange({
          r: type === 'r' ? color.rgb.r : props.rgb?.r,
          g: type === 'g' ? color.rgb.g : props.rgb?.g,
          b: type === 'b' ? color.rgb.b : props.rgb?.b,
          source: 'rgb',
        });
      }
    }
  };

  return (
    <>
      {/* Saturation Picker */}
      <Grid className={classes.saturation}>
        <Saturation {...props} pointer={SaturationPointer} />
      </Grid>

      {/* Hue Slider */}
      <Grid className={classes.hueContainer} container direction="row">
        <Grid item className={classes.hue}>
          <Hue {...props} direction="horizontal" pointer={HuePointer} />
        </Grid>
        <Grid item>
          <Grid
            className={classes.colorBox}
            style={{ backgroundColor: props.hex }}
          />
        </Grid>
      </Grid>

      {/* Editable Inputs */}
      <Grid container>
        {/* Hex code */}
        <Grid item>
          <Typography>Hex</Typography>
          <EditableInput
            style={editableInputStyle.hex}
            value={props.hex?.replace('#', '')}
            onChange={(color: ColorResult) => handleChange(color, 'hex')}
          />
        </Grid>

        {/* RGB */}
        <Grid item>
          <Typography>R</Typography>
          <EditableInput
            style={editableInputStyle.rgb}
            value={props.rgb?.r}
            onChange={(color: ColorResult) => handleChange(color, 'r')}
          />
        </Grid>
        <Grid item>
          <Typography>G</Typography>
          <EditableInput
            style={editableInputStyle.rgb}
            value={props.rgb?.g}
            onChange={(color: ColorResult) => handleChange(color, 'g')}
          />
        </Grid>
        <Grid item>
          <Typography>B</Typography>
          <EditableInput
            style={editableInputStyle.rgbLastChild}
            value={props.rgb?.b}
            onChange={(color: ColorResult) => handleChange(color, 'b')}
          />
        </Grid>
      </Grid>

      <Grid container>
        <Grid className={classes.divider} />
      </Grid>

      {/* Color Presets */}
      <Grid container>
        {presetColors.map((color: { hex: string }, index: number) => (
          <Grid
            className={clsx(
              classes.swatchBox,
              index === presetColors.length - 1 && classes.swatchBoxLastChild
            )}
            style={{ backgroundColor: color.hex }}
            key={index}
            onClick={() => props.onChange(color.hex)}
          />
        ))}
      </Grid>
    </>
  );
};

export default CustomPicker(PriusColorPicker);
