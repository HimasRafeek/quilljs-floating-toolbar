# Floating Toolbar for Quilljs Editor

This JavaScript plugin adds a floating toolbar to the Quill editor. When text is selected within the Quill editor, a custom floating toolbar appears above the selection, allowing the user to apply formatting options directly. The toolbar is hidden when the selection is cleared or when the selected text does not require formatting changes.

![Preview](https://ibb.co/d6x7LCB)

## Features

- Dynamically shows and hides a floating toolbar based on text selection.
- Allows applying formatting options such as bold, italic, underline, strikethrough, and more.
- Supports custom actions like adding links or images via a dialog prompt.

## Prerequisites

Before you begin, ensure you have included jQuery and Quill Editor in your project as this plugin relies on them.

## Installation

To use the floating toolbar, include the provided CSS and JavaScript code in your project. Ensure the HTML structure for the toolbar is present in your document.

### Usage

Implement the floating toolbar functionality by including this JavaScript snippet in your project. Make sure to include it after jQuery and Quill scripts.

```javascript
var quill = new Quill('#editor-container', {
  // Quill editor options...
});
var $toolbar = $('#quill-toolbar').floatingToolbar(quill);

$toolbar.on('click', 'button', function () {
  // Button action implementation...
});
```

### HTML

You can use any icon, in the Example I have used "remixicon"

```html
<div id="quill-toolbar" style="display:none;">
  <button id="btn-magic-wand" data-action="rewrite"><i class="ri-bard-line"></i></button>
  <button id="btn-bold" data-format="bold"><i class="ri-bold"></i></button>
  <button id="btn-italic" data-format="italic"><i class="ri-italic"></i></button>
  <button id="btn-underline" data-format="underline"><i class="ri-underline"></i></button>
  <button id="btn-strike" data-format="strike"><i class="ri-strikethrough"></i></button>
  <button id="btn-link" data-action="link"><i class="ri-link"></i></button>
  <button id="btn-code-block" data-format="code-block"><i class="ri-code-s-slash-line"></i></button>
  <button id="btn-image" data-action="image"><i class="ri-image-line"></i></button>
</div>
```
### CSS

Style the toolbar and buttons using the following CSS. You can customize the appearance according to your project's theme.

```css

--primary: black

#quill-toolbar {
  position: absolute;
  padding: 5px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  z-index: 1000;
}

#quill-toolbar button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  border-radius: 5px;
}

#quill-toolbar button:hover {
  color: var(--primary);
}

#quill-toolbar button.active {
  background-color: var(--primary);
  color: white;
}
```

## Customization
You can customize the toolbar by adding or removing buttons, changing styles, or extending the JavaScript functionality to include more features.

## License
Specify your project's license here, typically MIT or another open source license.