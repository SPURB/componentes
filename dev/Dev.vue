<template>
  <div id="dev">
    <Logo fillType="black" fillBrand="black" />
    <PreloaderVerticalizacao :stroke="'grey'" />
    <Combobox :type="true" :options="[
      {
        title: 'Selecione um projeto',
        value: 'nenhum projeto'
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
    />
  </div>
</template>
<script>
import Vue from 'vue';
import { Logo, Combobox, PreloaderVerticalizacao } from '@/entry';

export default Vue.extend({
  name: 'Dev',
  components: {
    Logo,
    Combobox,
    PreloaderVerticalizacao
  }
})
</script>
<style scoped>
#dev {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>