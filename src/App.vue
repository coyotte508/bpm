<template>
  <div id="app" @mousedown="touch" @touchstart="touch" :class="{ticking}">
    <h1 class="pt-4" style="left: 0; right: 0; position: absolute; font-size: 3rem">THE PULSOMETER</h1>

    <div style="flex-grow: 1; min-height: 80px"></div>

    <div>
      <h3 class="mb-3 bpm">{{BPM}}</h3>

      <div class="manual">
        How many beats per Minute ? <br/>
        Count the pulses :<br/>
        One : Tap !<br/>
        Two : Wait !<br/>
        Three : Wait !<br/>
        Four : Wait !<br/>
        Five : Wait !<br/>
        Six : Wait !<br/>
        Seven : Tap !<br/>
        ... and you'll know the BPM !<br/>
      </div>
    </div>

    <div style="flex-grow: 1"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  private beats = 6;
  private ticking = false;
  private lastTouch: number = 0;
  private BPM = '0';

  private touch() {
    const now = Date.now();

    // Two taps within one second, ignoring (might be double mousedown & touchstart events)
    if (now - this.lastTouch < 1000) {
      return;
    }

    this.ticking = !this.ticking;

    if (!this.ticking) {
      // End touch, calculate BPM
      this.BPM = '' + Math.floor(this.beats * 60 * 1000 / (now - this.lastTouch));
    } else {
      this.BPM = '...';
    }

    this.lastTouch = now;
  }
}
</script>

<style lang="scss">

@import '~bootstrap/scss/bootstrap.scss';

$background: #B40486;
$text: WHITE;

@font-face {font-family:'HelveticaNowText';src:url('/typefaces/Helvetica-Now-Text-Light.woff') format('woff');font-style:normal;font-weight:300;}
@font-face {font-family:'HelveticaNowText';src:url('/typefaces/Helvetica-Now-Text-Medium.woff') format('woff');font-style:normal;font-weight:500;}
@font-face {font-family:'HelveticaNowText';src:url('/typefaces/Helvetica-Now-Text-Md-It.woff') format('woff');font-style:italic;font-weight:500;}
@font-face {font-family:'HelveticaNowText';src:url('/typefaces/Helvetica-Now-Text-Bold.woff') format('woff');font-style:normal;font-weight:700;}
@font-face {font-family:'HelveticaNowText';src:url('/typefaces/Helvetica-Now-Text-Bd-It.woff') format('woff');font-style:italic;font-weight:700;}


#app {
  font-family: 'HelveticaNowText', helvetica neue, helvetica, sans; font-weight:500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;

  background-color: $background;
  color: $text;

  &.ticking {
    background-color: $text;
    color: $background;
  }
  transition-duration: 200ms;

  display: flex;
  flex-direction: column;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
}

.bpm {
  font-size: 4em;
}

html {
  min-height: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  position: relative;
}

body {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

}
</style>
