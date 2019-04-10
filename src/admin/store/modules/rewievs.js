export default {
        namespaced: true,
        state: {
            rewievs: []
        },
        mutations: {
            LOAD_REWIEVS: (state, rewievs) => {
                state.rewievs = rewievs;
              },
              SET_REWIEVS: (state, newRewievs) => {
                state.rewievs.push(newRewievs);
              },
              REMOVE_REWIEVS: (state, deletedRewievsId) => {
                state.rewievs = state.rewievs.filter(rewievs => rewievs.id != deletedRewievsId);
            },
        EDIT_REWIEVS: (state, editedRewievs) =>{
          state.rewievs = state.rewievs.map(rewievs => rewievs.id == editedRewievs.id ? editedRewievs : rewievs);
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
                  console.log(formData);
                  return response;
                } catch (error) {
                    alert('Ошибка при создании отзыва');
                }
              },
              async editRewievs({commit}, rewiev) {
                try {
                  

                  const response = await this.$axios.post(`/reviews/${rewiev.id}`, rewiev);
                  commit('EDIT_REWIEVS', response.data);
               

                  return response;  
                } catch (error) {
                  console.log(formData);
               
                alert('Какая ошибка при изменение Отзыва');
                    
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
            async removeRewievs({commit}, rewievsId) {
              try {
                const response = await this.$axios.delete(`/reviews/${rewievsId}`);
                commit('REMOVE_REWIEVS', rewievsId);
                return response;  
              } catch (error) {
              alert('Ошибка в reviews.js / admin REMOVE_SKILL')
                  
              }            
          }
        }
}