# Componenentes [![Build Status](https://travis-ci.org/SPURB/componentes.svg?branch=master)](https://travis-ci.org/SPURB/componentes)
Repositório de componentes vue utilizados nas aplicações da São Paulo Urbanismo

Instale
```bash
# com npm
npm i @spurb/componentes --save

# ou com yarn
yarn add @spurb/componentes
```

Declare
```js
import { Logo } from '@spurb/componentes'
export default {
  components: { Logo } // Combobox, PreloaderVerticalizacao
}
```
e use no template
```html
<template>
  <logo
    fillType="black" 
    fillBrand="#038375"
    :opacity="1"
  />
</template>
```

Exemplos de todos os componentes:
https://spurb.github.io/componentes/


## Instalação e intruções de uso
 - [Logo](./src/lib/logo/README.md)
 - [Preloader de verticalização](./src/lib/PreloaderVerticalizacao/README.md)
 - [Combobox](./src/lib/Combobox/README.md)
 - [Card](./src/lib/Card/README.md)
 - [Galeria](./src/lib/Galeria/README.md)
 - [Button](./src/lib/Button/README.md)


## Desenvolvimento

```sh
# instalar dependencias
npm i

# abrir ambiente de desenvolvimento
npm run dev

# testes
npm run test

# compila componentes para lib
npm run build

# inicia storybook
npm run storybook
```
