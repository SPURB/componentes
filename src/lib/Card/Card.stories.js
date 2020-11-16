import { storiesOf } from '@storybook/vue'
import Card from './Card.vue'

storiesOf('Card', module).add('Card', () => ({
  components: { Card },
  template: `
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
    
    `
}))
