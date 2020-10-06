# Componenentes [![Build Status](https://travis-ci.org/SPURB/componentes.svg?branch=master)](https://travis-ci.org/SPURB/componentes)
Repositório de componentes vue utilizados nas aplicações da São Paulo Urbanismo

instale
```bash
npm i @spurb/componentes -D
```

declare
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

Veja os componentes disponibilizados e os exemplos de uso aqui:
https://spurb.github.io/componentes/


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
