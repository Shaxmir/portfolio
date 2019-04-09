export default {
        namespaced: true,
        state: {
            rewievs: []
        },
        mutations: {
            SET_REWIEVS: (state, rewievs) => {
                state.rewievs = rewievs;
              },
              LOAD_REWIEVS: (state, rewievs) => {
                state.rewievs = rewievs;
              }
        },
        actions: {
            async createReview({commit}, review) {
                try {
                    const formData = new FormData();
          
                formData.append('photo', review.photo);
                formData.append('author', review.title);
                formData.append('occ', review.occ);
                formData.append('text', review.text);
          
                const response = await this.$axios.post('/reviews', formData);
                commit("SET_REWIEVS", response.data);
                return response;
                } catch (error) {
                    alert('Ошибка при создании отзыва');
                }
              },
              async fetchRewievs({commit}, review) {
                try {
                  const response = await this.$axios.get('/reviews/118', review);
                  commit('LOAD_REWIEVS', response.data);
                  return response;  
                } catch (error) {
                alert('Ошибка при загрузки отзывов');
                    
                }            
            },
        }
}