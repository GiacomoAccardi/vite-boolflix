  
  <script>
  export default {
    props: {
      rate: {
        type: Number,
        required: true
      }
    },
    computed: {
      // La funzione stars restituirà un array di 5 elementi, ognuno rappresenta una stella
      stars() {
        return Array(5).fill(0);
      },
      // La conversione del rate da scala 0-10 a scala 0-5
      normalizedRate() {
        return this.rate / 2;
      }
    },
    methods: {
      // La funzione per determinare la classe della stella
      starClass(index) {
        if (index + 1 <= this.normalizedRate) {
          return 'full-star'; // stella piena
        } else if (index + 0.5 < this.normalizedRate) {
          return 'half-star'; // mezza stella
        } else {
          return 'empty-star'; // stella vuota
        }
      }
    }
  }
  </script>
  
  <template>
    <div class="star-rating">
      <i v-for="(star, index) in stars" :key="index"
         :class="starClass(index)" class="fa fa-star"></i>
    </div>
  </template>

  <style scoped>
  .star-rating {
    display: flex;
  }
  
  .full-star {
    color: yellow;
  }
  
  .half-star {
    background: linear-gradient(to right, yellow 50%, lightgray 50%);
    -webkit-background-clip: text;
    color: transparent;
  }
  
  .empty-star {
    color: lightgray;
  }
  </style>