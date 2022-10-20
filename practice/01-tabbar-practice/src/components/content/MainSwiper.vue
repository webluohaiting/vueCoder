<template>
  <div>
    <swiper>
      <!-- <swiper-item></swiper-item> -->
      <swiper-item v-for="item in banners" :key="item.id">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
// import Swiper from '@/components/common/swiper/Swiper'
// import SwiperItem from '@/components/common/swiper/SwiperItem'
import Swiper from '@/components/common/swiper1/Swiper'
import SwiperItem from '@/components/common/swiper1/SwiperItem'
// import Swiper from '@/components/common/swiper2/Swiper'
// import SwiperItem from '@/components/common/swiper2/SwiperItem'

export default {
  name: 'MainSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      banners: [
        { id: 1, link: '', image: require('@/assets/img/home/pink.jpg') },
        { id: 2, link: '', image: require('@/assets/img/home/girl.jpg') },
        { id: 3, link: '', image: require('@/assets/img/home/blue.jpg') },
      ]
    }
  },
  created() {
    
  },
  methods: {
    imageLoad() {
      
    }
  }
}
</script>
<style scoped>
</style>
