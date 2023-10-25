<template>
  <div class="chart__window">
    <svg width="100%" height="100%" viewBox="0 0 42 42">
      <circle v-bind="diagramStyleDefault">{{}}</circle>
      <circle v-bind="diagramStyle"></circle>
    </svg>
    <div class="procent_counter">{{this.$props.medinspection}}%</div>
  </div>
</template>

<script>
export default {
  name: 'RingDiagram',
  props: {
    medinspection: Number
  },
  computed: {
    percent() {
      return this.$props.medinspection;
    },
    diagramStyleDefault(){
      const percent = 100;
      const length = 100;
      const radius = length / (Math.PI * 2)
      const dash = percent;
      const space = length - dash;

      // Цвет линии по умолчанию.
      let stroke = '#175238';

      return {
        'cx': 21, // координата центра окружности по оси абсцисс
        'cy': 21, // координата центра окружности по оси ординат
        'r': radius, // радиус окружности или просто: 15.91549431
        'fill': 'none', // заливка элемента
        'stroke': stroke, // цвет линии
        'stroke-width': 4, // толщина линии
        'stroke-dasharray': `${dash} ${space}`, // штрих и промежуток
        'stroke-dashoffset': 0 // смещение пунктирной обводки
      }
    },
    diagramStyle() {
      const percent = this.percent;
      const length = 100;
      const radius = length / (Math.PI * 2)
      const dash = percent;
      const space = length - dash;

      // Цвет линии по умолчанию.
      let stroke = '#00B467';

      return {
        'cx': 21, // координата центра окружности по оси абсцисс
        'cy': 21, // координата центра окружности по оси ординат
        'r': radius, // радиус окружности или просто: 15.91549431
        'fill': 'none', // заливка элемента
        'stroke': stroke, // цвет линии
        'stroke-width': 4, // толщина линии
        'stroke-dasharray': `${dash} ${space}`, // штрих и промежуток
        'stroke-dashoffset': 0 // смещение пунктирной обводки
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .procent_counter{
    text-align: center;
    margin-top: -57%;
    margin-bottom: 42%;
    font-size: 29px;
  }
</style>
