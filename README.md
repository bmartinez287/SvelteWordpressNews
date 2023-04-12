# Svelte + Vite

This template should help get you started developing with Svelte in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## Technical considerations

**Svelte library fpr fetching the items**

This application fetches and displays a simple set of cards with images or just text based on the blog that was chosen.

```js
// store.js
// Generates css file if new tailwindcss styles need to be added dynamically
npx tailwindcss -i ./src/app.css -o ./src/output.css
// compiles the assets and generates the new .js and .css files inside build
vite build 
```


```js
// The client defines the div id and adds the paremeters for any given request.
<script type="module" src="/pathtocdn/main.js"></script>
<div id="utcitsveltewordpressnewsapp"></div>
    <script>
        window.utcitsveltewordpress = {
            url: 'https://web.api.endpoints.utc.edu/api/wpcache/news',
            image: false
        };
    </script>
```

