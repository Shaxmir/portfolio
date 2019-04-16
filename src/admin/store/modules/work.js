export default {
    namespaced: true,
    state: {
        works: []
    },
    mutations: {
        ADD_WORKS: (state, newWork) => {
            state.works.push(newWork);
        },
        LOAD_WORKS: (state, work) => {
            state.works = work;
          },
          DELETE_WORKS: (state, removeWorkId) => {
            state.works = state.works.filter(wow => wow.id != removeWorkId);
        },
        EDIT_WORK: (state, editedWork) =>{
            state.works = state.works.map(wow => wow.id === editedWork.id ? editedWork : wow);
        }
    },
    actions:  {
        async addWork({commit}, work) {
            try {
                const formData = new FormData();                    
          
                formData.append('photo', work.photo);
                formData.append('title', work.title);
                formData.append('techs', work.tags);
                formData.append('link', work.link);
                formData.append('description', work.text);

              const response = await this.$axios.post('/works', formData);
              commit('ADD_WORKS', response.data);
              return response;  
            } catch (error) {
            alert('Ошибка в works.js / admin ADD_works')
                
            }            
        },
        async fetchWorks({commit}, work) {
            try {
              const response = await this.$axios.get('/works/118', work);
              commit('LOAD_WORKS', response.data);
              return response;  
            } catch (error) {
            alert('Ошибка при загрузки Работ');
                
            }            
        },
        async removeWork({commit}, workId) {
            try {
              const response = await this.$axios.delete(`/works/${workId}`);
              commit('DELETE_WORKS', workId);
              return response;  
            } catch (error) {
            alert('Ошибка в works.js / admin DELETE_works')
                
            }            
        },
        async editWorks({commit}, work) {
            try {
              

              const response = await this.$axios.post(`/works/${work.id}`, work);
              commit('EDIT_WORK', response.data.work);
           

              return response;  
            } catch (error) {
              console.log(formData);
           
            alert('Какая ошибка при изменение Работы');
                
            }            
        }
    }
}