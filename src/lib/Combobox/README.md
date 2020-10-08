# Combobox.vue
Componente de dropdown para seleção de items

## Exemplo
https://spurb.github.io/componentes/?path=/story/combobox--normal

## Instruções de uso
Declare
```js
import { Combobox } from '@spurb/componentes'
export default {
  components: { Combobox }
}
```

Exemplo de uso no template
```html
<combobox
  :disabled="true"
  :open="true"
  fill-brand="#038375"
  :options="[
      {
        title: 'Selecione um projeto',
        value: 'valor default'
      },
      {
        title: 'PIU Bairros do Tamandatueí',
        value: 'projeto-1'
      },
      {
        title: 'PIU Jurubatuba',
        value: 'projeto-2'
      },
      {
        title: 'PIU Setor Central',
        value: 'projeto-3'
      }
  ]"
  @setOptionValue="metodoComponentePai"
/>
```

### Props
| nome | data type | descrição |
|:-|:-|:-|
| `fill-type` |  String | Cor de preenchimento do texto |
| `fill-brand` | String | Cor de preenchimento da marca |
| `opacity` | Number | Define a opacidade do elemento número variando de 0 a 1 |


### Events
| nome | Parâmetro do callback |
|:-|:-|
| `setOptionValue` | Valor de `value` da opção selecionada pelo usuário|
