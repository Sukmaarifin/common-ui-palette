export var DEFAULT_TOOLBAR = [
    { name: "document", items: ["Source", "-", "Undo", "Redo"] },
    { name: "editing", items: ["Find", "-", "Scayt"] },
    {
        name: "basicstyles",
        items: [
            "Bold",
            "Italic",
            "Underline",
            "-",
            "CopyFormatting",
            "RemoveFormat",
        ],
    },
    { name: "styles", items: ["Format"] },
    { name: "colors", items: ["TextColor"] },
    { name: "tools", items: ["Maximize"] },
    {
        name: "paragraph",
        items: [
            "NumberedList",
            "BulletedList",
            "-",
            "Outdent",
            "Indent",
            "-",
            "Blockquote",
            "CreateDiv",
            "-",
            "JustifyLeft",
            "JustifyCenter",
            "JustifyRight",
            "JustifyBlock",
        ],
    },
    {
        name: "clipboard",
        items: ["BidiLtr", "BidiRtl", "-", "Link", "Unlink"],
    },
    {
        name: "insert",
        items: ["-", "Image", "Table", "HorizontalRule", "Smiley", "SpecialChar"],
    },
    {
        name: "forms",
        items: [
            "Form",
            "Checkbox",
            "Radio",
            "TextField",
            "Textarea",
            "Select",
            "Button",
            "ImageButton",
            "HiddenField",
        ],
    },
];
export var DEFAULT_EXTRA_PLUGINS = "find, copyformatting, div, justify, uploadimage, bidi, colorbutton";
export var DEFAULT_HEIGHT = 300;
