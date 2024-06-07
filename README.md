# Navigation

Een horizontale navigatie webcomponent voor UGent webapplicaties

## Inleiding

Dit pakket exporteert een webcomponent die kan worden geïntegreerd in UGent webapplicaties om een consistente en toegankelijke navigatie-ervaring te bieden.

## Demo

https://ugentui.github.io/navigation

## Installatie

```bash
npm add @ugent-ui/navigation
```

> [!NOTE]
> Zorg steeds dat de [UGent UI CSS Reset](https://www.npmjs.com/package/@ugent-ui/css-reset?activeTab=readme) de eerste stylesheet op je pagina is om te zorgen voor een consistente styling. Voeg het `data-color-mode` attribute toe aan de HTML tag voor `light` and `dark` mode ondersteuning. Instaleer indien nodig:

```bash
npm add @ugent-ui/css-reset
```

## Gebruik

```html
<!DOCTYPE html>
<html lang="en" data-color-mode="light">
  <head>
    <meta charset="UTF-8" />
    <title></title>
    <link
      rel="stylesheet"
      href="node_modules/@ugent-ui/css-reset/dist/assets/reset.css"
    />
    <script
      type="module"
      src="node_modules/@ugent-ui/navigation/dist/assets/navigation.js"
    ></script>
  </head>
  <body>
    <ug-navigation></ug-navigation>
  </body>
</html>
```

## Component tag

Gebruik de volgende tag om de component in je HTML op te nemen:

```html
<ug-navigation></ug-navigation>
```

## Component properties

- `links`: Een array van objecten die elk een link vertegenwoordigen. Elk object moet de volgende eigenschappen bevatten:
  - `name`: De naam van de link die wordt weergegeven.
  - `url`: De URL waarnaar de link verwijst.
  - `active` (optioneel): Een boolean die aangeeft of de link actief is.

```html
<script>
  // Definieer de data die je aan de component wilt doorgeven
  const dataLinks = [
    { name: "Home", url: "#", active: true },
    { name: "Features", url: "#" },
    { name: "Projects", url: "#" },
    { name: "Info", url: "#" },
  ];

  // Verkrijg een referentie naar het custom element met behulp van querySelector
  const ugNavigationElement = document.querySelector("ug-navigation");

  // Stel de eigenschap rechtstreeks in
  ugNavigationElement.links = dataLinks;
</script>
```
