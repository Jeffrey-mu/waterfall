<script setup lang="ts">
const { t, availableLocales, locale } = useI18n()
const TITLE = [
  '纵使此后上穷碧落下黄泉，这个小花妖，再也找不到了.....',
  '她离开这世间，也是好事。至少没有尔虞我诈，也没有心爱之人时时刻刻的算计与背叛了。',
  '我本以为这世上谁都有心，唯独东方青苍没有，看来竟是我想错了。',
  '他骨子里仍旧是一个十恶不赦的坏人，但唯独在这个什么都不记得的人面前，他想变得好一些。',
  '我活着，不是为了被当成药物的。',
  '你那么讨厌，我却喜欢你。',
  '以前的无畏无惧，是因为对任何生命都不在乎，但他现在，有在乎的、想要守护的东西了。',
  '天道算什么....这十余年时间，你还不曾知晓天道是什么吗？',
  '原来，怀疑的，不只是她，不安分不只是她，想要知道对方心里在想什么的，也不只是她。',
  '你看她这神情，是在逞强来着。被心爱的人逼上绝路，心里得多苍凉。']
const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <nav flex justify="center" text-xl m-2>
    <h1>{{ TITLE[Math.floor(Math.random() * TITLE.length)] }}</h1>
  </nav>
</template>
