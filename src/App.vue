<script>
export default {

}
</script>

<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col">
          <nav>
            <ul class="d-flex justify-content-center">
              <li>
                <router-link :to="{ name: 'home' }">
                  Home
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'about' }">
                  Chi siamo
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'products-index' }">
                  Prodotti
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>

  <main>
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>
            Recap Vue Router
          </h1>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </main>

  <footer>
    <div class="container">
      <div class="row">
        <div class="col">
          footer
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@import './main';
</style>
