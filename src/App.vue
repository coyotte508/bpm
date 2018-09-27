<template>
  <div id="app" @mousedown="touch" @touchstart="touch" :class="{ticking}">
    <h1 class="pt-4">THE PULSOMETER</h1>

    <div style="flex-grow: 1"></div>

    <div style="flex-grow: 1">
      <h3 class="my-3 bpm">{{BPM}}</h3>

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

@font-face {
  font-family: 'Nitti Normal';
  src: url('/typefaces/nitti-normal-v500.eot') format('eot'),
       url('/typefaces/nitti-normal-v500.woff') format('woff'),
       url('/typefaces/nitti-normal-v500.woff2') format('woff2');
}

@font-face {
  font-family: 'Nitti Bold';
  src: url('/typefaces/nitti-bold-v500.eot') format('eot'),
       url('/typefaces/nitti-bold-v500.woff') format('woff'),
       url('/typefaces/nitti-bold-v500.woff2') format('woff2');
}

#app {
  font-family: 'Nitti Normal', Courier, Arial, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;

  background-color: #B40486;

  &.ticking {
    background-color: #D4FE5B;
  }
  transition-duration: 200ms;

  display: flex;
  flex-direction: column;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Nitti Bold', Courier, Arial, monospace;
}

h1 {
  // Title
  // color: #2c3e50;
  color: white;
  text-shadow: -1px 1px #D4FE5B;
}


.manual {
  color: white;
  transition-delay: 200ms;

  .ticking & {
    // opacity: 0;
  }
}

.bpm {
  font-size: 4em;
  color: white;
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
