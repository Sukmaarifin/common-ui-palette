## How to use PriusSnackbar

### In a functional component

```typescript
import { useSnackbar } from 'ui_palette/PriusSnackbar';

export default = () => {
  const snackbar = useSnackbar();

  const handleSubmit = () => {
    snackbar.show(
      "Item submitted succesfully",
      "success"
    );
  };
}
```

### In a Class component

```typescript
import { withSnackbar, SnackbarContextType } from "ui_palette/PriusSnackbar";

type ExampleComponentPropsType = {
  snackbar: SnackbarContextType;
};

class ExampleComponent<ExampleComponentPropsType> {
  handleSubmit() {
    this.props.snackbar.show("Item submitted succesfully", "success");
  }
}

export default withSnackbar(ExampleComponent);
```
