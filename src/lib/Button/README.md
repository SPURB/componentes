# Button.vue
Componente de botão

## Exemplo
https://spurb.github.io/componentes/?path=/story/button--button

## Instruções de uso
Declare
```js
import { Button } from '@spurb/componentes'
export default {
  components: { Button }
}
```

Exemplo de uso no template
```html
<Button action-text="submit" @buttonClick="getClick" />
```

### Props
| nome | data type | descrição |
|:-|:-|:-|
| `actionText` |  String | Define o texto do botão |
| `styleButton` |  String | Define o estilo do botão |

### Event
| nome | descrição |
|:-|:-|
| `@buttonClick` | Envia um action quando o botão for clicado |

