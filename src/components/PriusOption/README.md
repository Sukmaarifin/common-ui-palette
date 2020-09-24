# PriusOption

PriusOption component provide easy way to show menu that triggered via 3-dotted-button (vertical or horizontal). You can just pass menu items via `items` props. Each item should have their own onClick handler.

## Example data for items prop

```
const menuData = [
  {
    disabled: true,
    iconLeft: <DownloadIcon />,
    title: "Download",
    tooltipText: "Download feature is not ready yet!"
  },
  {
    disabled: false,
    iconLeft: <TrashBinIcon />,
    title: "Delete",
    onClick: id => alert(`Delete item with id: ${id}`),
  },
];
```

## How to use

```
<PriusOption
  icon="vertical"
  items={menuData}
/>
```

---

p.s:
Icon props will be used to determined whether the option icon is in Horizontal or Vertial direction.
