<template>
    <div>
        <div class="locale-switcher">🌐 {{$i18n.locale}}</div>
        <div class="locale-switcher">
            <select v-model="$i18n.locale">
              <!-- show list of available languages from supported list -->
              <option :value="locale.code" v-for="locale in locales" :key="locale.code">{{ locale.name }}</option>
                <!-- <option value="en">English</option>
                <option value="de">Deutsche</option> -->
            </select>
        </div>
    </div>
</template>

<script>
import { getSupportedLocales } from '@/util/supported-locales';

export default {
  data() {
    return {
      locales: getSupportedLocales(),
    };
  },
};
</script>
