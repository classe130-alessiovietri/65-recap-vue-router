<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Palla rossa',
          slug: 'palla-rossa'
        },
        {
          id: 2,
          name: 'Bicchiere giallo',
          slug: 'bicchiere-giallo'
        },
        {
          id: 3,
          name: 'Sedia blu',
          slug: 'sedia-blu'
        },
      ]
    };
  }
}
</script>

<template>
  <div class="container">
    <div class="row text-center">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="product in products" :key="product.id">
        {{ product.name }}

        <div>
          <router-link class="btn btn-primary btn-sm" :to="{ name: 'products-show', params: { slug: product.slug } }">
            Vedi prodotto
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
