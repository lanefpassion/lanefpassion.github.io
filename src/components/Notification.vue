<template>
    <div v-if="notification.active" class="notification" :class="isActive">
      {{notification.message}}
    </div>
</template>

<static-query>
query {
  metadata {
    settings {
      notification {
        message
        active
      }
    }
  }
}
</static-query>

<script>
export default {
  name: 'Notification',
  computed: {
    notification() {
      return this.$static.metadata.settings.notification
    },
    isActive() {
      return this.notification ? 'is-active' : null
    }
  }
}
</script>

<style>
.notification {
  padding: 2rem 5vw;
  background: var(--dark-color);
  color: var(--light-color);
  text-align: center;
  font-size: .8em;
}
</style>