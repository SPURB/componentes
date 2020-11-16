# Galeria.vue
Componente de galeria de imagens

## Exemplo
https://spurb.github.io/componentes/?path=/story/galeria--background-size-100-100

## Instruções de uso
Declare
```js
import { Galeria } from '@spurb/componentes'
export default {
  components: { Galeria }
}
```

Exemplo de uso no template
```html
<Galeria
  :imagens="[
    'https://www.clubesindicoprofissional.com.br/wp-content/uploads/SAO-PAULO11.jpg', 
    'https://www.estudarfora.org.br/app/uploads/2019/04/urbanismo.jpg'
  ]"
  :backgroundCover="true"
  width="100%"
  height="300px"
/>
```

### Props
| nome | data type | descrição |
|:-|:-|:-|
| `imagens` |  Array | Define as imagens da galeria |
| `backgroundCover` | Bool | Define se as imagens devem se ajustar a width e height passada |
| `width` | String | Define o width (largura) do Card, pode ser utilizado qualquer medida (px, %) |
| `height` | String | Define o height (altra) do Card, pode ser utilizado qualquer medida (px, %) |
