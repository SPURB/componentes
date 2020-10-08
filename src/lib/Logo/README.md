# Logo.vue
Componente com o logo da São Paulo Urbanismo

## Exemplo
https://spurb.github.io/componentes/?story/preloaderverticalizacao--preloaderverticalizacao

## Instruções de uso
Declare
```js
import { Logo } from '@spurb/componentes'
export default {
  components: { Logo }
}
```

Exemplo de uso no template
```html
<logo
  fill-type="black" 
  fill-brand="#038375"
  :opacity="1"
/>
```

### Props
| nome | data type | descrição |
|:-|:-|:-|
| `fill-type` |  String | Cor de preenchimento do texto |
| `fill-brand` | String | Cor de preenchimento da marca |
| `opacity` | Number | Define a opacidade do elemento número variando de 0 a 1 |


### Events
Este componente não emite nenhum evento
