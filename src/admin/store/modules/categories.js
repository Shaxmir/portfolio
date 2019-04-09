export default {
    namespaced: true,
    state: {
        categories: []
    },
    mutations: {
        SET_CATEGORIES: (state, categories) => {
            state.categories = categories
        },
        DELETE_CATEGORIES: (state, removeGroupId) => {
            state.categories = state.categories.filter(category => category.id != removeGroupId);
        }
    },
    actions: {
        async addNewSkillGroup({commit}, groupTitle){
            try {
                const response =  await this.$axios.post('/categories', {
                    title: groupTitle
                });
                return response;    
            } catch (error) {
                throw new Error(
                    error.response.data.error || error.response.data.message
                    );
                
            }

         },
         async fetchCategories({commit}){
            try {
                const response =  await this.$axios.get('/categories');
                commit('SET_CATEGORIES', response.data);
                return response;    
            } catch (error) {
                throw new Error(
                    error.response.data.error || error.response.data.message
                    );
                
            }

         },
         async removeCategories({commit}, categoriesId) {
            try {
              const response = await this.$axios.delete(`/categories/${categoriesId}`);
              commit('DELETE_CATEGORIES', categoriesId);
              return response;  
            } catch (error) {
            alert('Ошибка в categories.js / admin DELETE_CATEGORIES')
                
            }            
        }
    }
}