<template>
  <div class="hy-swiper">
    <div class="swiper" :style="swiperStyle"  @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
      <slot></slot>
    </div>
    <!-- <slot name="indicator"></slot> -->
    {{ swiperItemCount }}
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && swiperItemCount>1">
        <div class="indi-item" v-for="(item, index) in swiperItemCount" :key="item.id" :class="{active: index === currentIndex-1}"></div>
      </slot>
    </div>
  </div>
</template>
<script>
import SwiperItem from './SwiperItem.vue'
export default {
  name: '',
  props: {
    interval: {
	    type: Number,
      default: 3000
    },
    animDuration: {
	    type: Number,
      default: 300
    },
    moveRatio: {
      type: Number,
      default: 0.25
    },
    showIndicator: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      swiperItemCount: 0, // 元素个数
      totalWidth: 0, // swiper的宽度
      swiperStyle: {}, // swiper样式
      currentIndex: 1, // 当前的index
      scrolling: false, // 是否正在滚动
      playTimer: null
    }
  },
  components: {
    SwiperItem
  },
  computed: {
    list() {
      let arr = []
      console.log(this.swiperItemCount)
      // debugger
      for (let i = 0; i < this.swiperItemCount; i++) {
        arr.push({ id: i })
      }
      console.log(arr)
      return arr
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.handleDom()
      this.startTimer()
    })
    // setTimeout(() => {
    //   this.handleDom();

    //   // 2.开启定时器
    //   this.startTimer();
    // }, 100)
  },
  methods: {
    handleDom() {
      const swiperEl = document.querySelector('.swiper')
      const swiperItemEls = document.getElementsByClassName('swiper-item')

      this.swiperItemCount = swiperItemEls.length

      if (this.swiperItemCount > 1) {
        const firstNode = swiperItemEls[0].cloneNode(true)
        const lastNode = swiperItemEls[this.swiperItemCount - 1].cloneNode(true)
        swiperEl.insertBefore(lastNode, swiperItemEls[0])
        swiperEl.appendChild(firstNode)

        this.totalWidth = swiperEl.offsetWidth;
        this.swiperStyle = swiperEl.style;
      }

      this.onScrolling(-this.totalWidth * this.currentIndex)
    },

    startTimer() {
      this.playTimer = setInterval(() => {
        this.currentIndex ++
        this.startScroll()
      }, this.interval)
    },

    stopTimer() {
      clearInterval(this.playTimer)
    },

    startScroll() {
      this.scrolling = true
      this.onScrolling(-this.totalWidth * this.currentIndex, this.animDuration)

      // 滑动完成后，监测是否是做自动新增的第一个[0]或最后一个[swiperItemCount+1]，如果是，替换成[1],[swiperItemCount]
      setTimeout(() => {
        if (this.currentIndex > this.swiperItemCount) {
          this.currentIndex = 1
          this.onScrolling(-this.totalWidth * this.currentIndex)
        } else if (this.currentIndex < 1) {
          this.currentIndex = this.swiperItemCount
          this.onScrolling(-this.totalWidth * this.currentIndex)
        }
      }, this.animDuration)

      this.scrolling = false
    },

    onScrolling(moveWidth, animationTime) {
      this.swiperStyle.transition = animationTime ? animationTime + 'ms' : '0ms'
      this.swiperStyle.transform = `translateX(${moveWidth}px)`
    },

    handleTouchStart(e) {
      if (this.scrolling) return
      this.stopTimer()
      this.startX = e.touches[0].pageX
    },
    handleTouchMove(e) {
      this.currentX = e.touches[0].pageX
      this.distance = this.currentX - this.startX
      const currentPosition = -this.currentIndex * this.totalWidth
      const moveDistance = this.distance + currentPosition
      this.onScrolling(moveDistance)
    },
    handleTouchEnd(e) {
      // 1.获取移动的距离
      let currentMove = Math.abs(this.distance)

      // 2.判断最终的距离
      if (this.distance === 0) {
        return
      } else if (this.distance > 0 && currentMove > this.totalWidth * this.moveRatio) { // 右边移动超过0.5
        this.currentIndex--
      } else if (this.distance < 0 && currentMove > this.totalWidth * this.moveRatio) { // 向左移动超过0.5
        this.currentIndex++
      }

      // 3.移动到正确的位置
      this.startScroll()

      // 4.移动完成后重新开启定时器
      this.startTimer()
    }
  }
}
</script>
<style scoped>
.hy-swiper {
  position: relative;
  background: pink;
  overflow: hidden;
}
.swiper {
  display: flex;
  height: 200px;
}
.indicator {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  z-index: 2;
}
.indi-item {
  width: 5px;
  height: 5px;
  margin: 0 2px;
  background: #000;
  /* border: 1px solid #eee; */
  border-radius: 50%;
}
.indi-item.active {
  background-color: rgba(212,62,46,1.0);
}
</style>
