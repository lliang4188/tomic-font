<template>
  <div v-show="isShow">
    <div class="alert">
      <div class="flex">{{ msg }}</div>
      <div v-if="type === 'alert'">
        <div class="btn-common success" @click="close()">确定</div>
      </div>
      <div class="space-round" v-else>
        <div class="btn-common cancel" @click="cancelEvent()">取消</div>
        <div class="btn-common success" @click="successEvent()">确定</div>
      </div>
    </div>
    <div class="mask" @click="closeMask()"></div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'alert'
    },
    msg: {
      type: String,
      default: ''
    },
    isShow: {
      type: Boolean,
      default: false
    },
    success: {
      type: Function,
      default: () => {
        console.log('点击了success')
      }
    },
    cancel: {
      type: Function,
      default: () => {
        console.log('点击了cancel')
      }
    }
  },
  methods: {
    close () {
      this.isShow = false
    },
    closeMask () {
      if (this.type === 'alert') {
        this.close()
      }
    },
    cancelEvent () {
      this.cancel()
      this.close()
    },
    successEvent () {
      this.success()
      this.close()
    }
  }
}
</script>

<style lang="scss" scoped>
  .alert {
    width: 300px;
    height: 150px;
    padding: 20px 10px;
    position: fixed;
    background-color: #fff;
    border-radius: 6px;
    top:50%;
    left: 50%;
    margin-top: -75px;
    margin-left: -150px;
    box-shadow:0 5px 8px rgba(0, 0, 0, .05);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  .flex{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
   .space-round {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 10px;
    width: 100%;
  }
  .btn-common {
    width: 105px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border-radius: 6px;
    &.success {
      background-color: #009688;
      color: #fff;
    }
    &.cancel{
      background-color: #ededed;
      color: #333;
    }
  }

  .mask {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top:0;
    background-color: rgba(0, 0, 0, .6);
    z-index: 999;
  }
</style>
