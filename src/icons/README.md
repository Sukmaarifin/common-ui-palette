# Prius Iconography

---

Prius iconography is provided as React component that render [SvgIcon](https://material-ui.com/api/svg-icon/#svgicon-api). It uses Material-UI's [createSvgIcon()](https://github.com/mui-org/material-ui/blob/master/packages/material-ui-icons/src/utils/createSvgIcon.js) utility. It allows code splitting, provide better render quality, accessibility, and also integration with other Material-UI component.

## Usage

You can import icons (with relative path) using one of these two option.

> :warning: **NOTE**: Prius icons are placed in `./src/components/icons`.

```tsx
// Option 1: default export
import AddCircleIcon from "src/components/icons/AddCircle";
import CalendarOutlinedIcon from "src/components/icons/CalendarOutlined";

// Option 2: named export
import { AddCircleIcon, CalendarOutlinedIcon } from "src/components/icons";
```

You can use Prius icons as a standalone component. Those will only render <svg> tag with some props (e.g. `fontSize`, `htmlColor`) as described in [SvgIcon](https://material-ui.com/api/svg-icon/#svgicon-api) documentation.

```tsx
```

You can also use Prius icons as composition with another Material-UI component (e.g. [Button](https://material-ui.com/api/button/), [IconButton](https://material-ui.com/api/icon-button/#iconbutton-api)), checkout [more documentation](https://material-ui.com/components/buttons/#buttons). All preserved icon size and styling are configured by overriding the default theme (check `src/root/styles/material-ui-theme/index.ts`)

```tsx
const App: React.FC = () => (
  <>
    <Button
      variant="contained"
      size="small"
      startIcon={<AddCircleIcon />}
      endIcon={<CalendarOutlined />}
    >
      Add
    </Button>

    <Fab color="secondary" aria-label="add">
      <AddCircleIcon />
    </Fab>

    <IconButton aria-label="add">
      <AddCircleIcon fontSize="small" />
    </IconButton>
  </>
);
```

You can also manually style by applying css.

```tsx
<AddCircleIcon style={{ fill: "red", fontSize: "40px"}}>
```
