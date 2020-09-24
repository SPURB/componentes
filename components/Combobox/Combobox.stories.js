import { storiesOf } from '@storybook/vue'
import Combobox from './Combobox'

storiesOf('Combobox', module)
  .add('normal', () => ({
    components: { Combobox },
    template:
    `
      <Combobox
        :options="options"
        :type="true"
      />
    `,
    data: () => ({
      options: [
        {
          title: 'Selecione um projeto',
          value: 0
        },
        {
          title: 'PIU Bairros do Tamandatueí',
          value: 1
        },
        {
          title: 'PIU Jurubatuba',
          value: 2
        },
        {
          title: 'PIU Setor Central',
          value: 3
        }
      ]
    })
  }))