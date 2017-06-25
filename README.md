# Casein 🔸

Writing Sass/CSS with Javascript

Experimenting!

Running `node index.js` will output:

```css
.c-button {


-webkit-appearance: none;
appearance: none;

box-sizing: border-box;
cursor: pointer;
outline: none;
vertical-align: middle;


    background: red;
    border-radius: 4px;
    font-size: 14px;

    &:hover {
    background: lighten(red, 4);
    }
    &:active {
    background: darken(red, 4);
    }
}
```
