<template>
  <div style="padding:10px">
    <!-- <div class="video-container">
      <video
        autoplay="autoplay"
        ref="video"
        webkit-playsinline="true"
        playsinline="true"
        loop
        src="https://mdn.alipayobjects.com/afts/file/A*grJPTKqmP9QAAAAAAAAAAABjAQAAAQ?bz=antv_site"
        style="width: 100%; height: 100%; object-fit: cover;"
      ></video>
      <div class="overlay">
        <img
          id="arrow"
          src="https://gw.alipayobjects.com/zos/rmsportal/cfUeahyjXCvoeUHrZDcE.svg"
          width="64"
          height="64"
        >
      </div>
    </div> -->

    <!-- <a-row :gutter="24">
      <a-col :xs="24" :sm="12" :md="12" :lg="6" v-for="i in 1" :key="i">
        <a-card :bordered="false" style="margin-bottom:24px;">
          <apex-line2/>
        </a-card>
      </a-col>
    </a-row> -->
     <!-- apex -->
    <a-row :gutter="24" style="margin-bottom:24px;">
      <a-col :xs="24" :sm="24" :md="12" :lg="12">
        <a-card :bordered="false">
          <apex-line2/>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="24" :md="12" :lg="12">
        <a-card :bordered="false">
          <apex-line3/>
        </a-card>
      </a-col>
    </a-row>
    <!-- g2 -->
    <a-row :gutter="24" style="margin-bottom:24px;">
      <a-col :xs="24" :sm="24" :md="12" :lg="12">
        <a-card :bordered="false">
          <g2bar/>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="24" :md="12" :lg="12">
        <a-card :bordered="false">
          <g2clock/>
        </a-card>
      </a-col>
    </a-row>
    <!-- apex -->
    <a-row :gutter="24" style="margin-bottom:24px;">
      <a-col :xs="24" :sm="24" :md="12" :lg="12">
        <a-card :bordered="false">
          <apex-line/>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="24" :md="12" :lg="12">
        <a-card :bordered="false">
          <apex-area/>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
// import bar from './chart/bar'
import g2bar from './g2/g2bar'
import g2clock from './g2/g2clock'
import apexLine from './apex-charts/line'
import apexLine2 from './apex-charts/line2'
import apexLine3 from './apex-charts/line3'
import apexArea from './apex-charts/area'
export default {
  components: {
    // bar,
    g2bar,
    g2clock,
    apexLine,
    apexLine2,
    apexLine3,
    apexArea,
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {
    console.log('刷新了')
    this.$nextTick(() => {
      // this.$refs.video.play()
    })
  },
}
</script>
<style lang="less">
.current-data {
  padding-right: 10px;
  > a {
    color: #777;
    padding: 0 10px;
    &.active {
      color: #1690ff;
    }
  }
}
.video-container {
  position: relative;
  width: 100%;
  .homepage-title {
    position: absolute;
    top: 50%;
    margin-top: -70px;
    width: 100%;
    z-index: 1;
  }
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: rgba(45, 57, 103, 0.6);
    img {
      width: 20px;
      height: 18px;
      position: absolute;
      bottom: 18px;
      left: 50%;
      margin-left: -10px;
      animation: updown 2s infinite;
      animation-timing-function: cubic-bezier(0.36, 0.72, 0.35, 0.92);
    }
  }
}
@keyframes updown {
  0% {
    bottom: 18px;
  }
  50% {
    bottom: 28px;
  }
  100% {
    bottom: 18px;
  }
}
</style>
