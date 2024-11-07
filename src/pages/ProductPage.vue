<script>
export default {
  data() {
    return {
      selectedProduct: null,
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
  },
  created() {
    this.products.forEach((product) => {
      if (product.slug == this.$route.params.slug) {
        this.selectedProduct = product;
        return;
      }
    });

    if (this.selectedProduct == null) {
      this.$router.push({ name: 'not-found' });
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="row text-center">
      <div class="col">
        <div v-if="selectedProduct != null">
          <h1>
            {{ selectedProduct.name }}
          </h1>
          <h6>
            {{ selectedProduct.slug }}
          </h6>
        </div>
        <div v-else>
          Prodotto non trovato
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
