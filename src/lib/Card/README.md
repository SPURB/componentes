# Combobox.vue
Componente de dropdown para seleção de items

## Exemplo
https://spurb.github.io/componentes/?path=/story/combobox--normal

## Instruções de uso
Declare
```js
import { Card } from '@spurb/componentes'
export default {
  components: { Card }
}
```

Exemplo de uso no template
```html
<Card headerClass="bg-gray-200 px-2 py-3">
  <template v-slot:header>
    <h1>Aqui pode estar o título do card</h1>
  </template>
  <template v-slot:body>
    <p>Um parágrafo para o conteúdo principal.</p>
    <p>E um outro parágrafo.</p>          
  </template>
  <template v-slot:footer>
    <p>Aqui está o footer</p>
  </template>
</Card>
```

### Props
| nome | data type | descrição |
|:-|:-|:-|
| `headerClass` |  String | Define as classes a serem usadas no header do card |
| `bodyClass` | String | Define as classes a serem usadas no body do card |
| `footerClass` | String | Define as classes a serem usadas no footer do card |

### Slots
| nome | descrição
| `header` | Define conteúdo no header do card |
| `body` | Define conteúdo no body do card |
| `footerClass` | Define conteúdo no footer do card|
