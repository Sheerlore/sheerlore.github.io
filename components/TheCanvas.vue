<template>
  <canvas id="main-canvas" />
</template>

<script>
export default {
  mounted() {
    this.startPixe()
  },
  methods: {
    startPixe() {
      // eslint-disable-next-line no-undef
      this.app = new PIXI.Application({
        backgroundColor: 0x1099bb
      })
      document.body.appendChild(this.app.view)

      // eslint-disable-next-line no-undef
      const monkey = PIXI.Sprite.from('/monkey.png')
      monkey.anchor.set(0.5)
      monkey.x = this.app.screen.width / 2.0
      monkey.y = this.app.screen.height / 2.0
      this.app.stage.addChild(monkey)
      // this.app.ticker.add((delta) => {
      //   monkey.rotation += 0.1 * delta
      // })
    }
  }
}
</script>
