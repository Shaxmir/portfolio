export default {
    namespaced: true,
    state: {
        skills: []
    },
    mutations: {
        SET_SKILLS: (state, skills) => {
            state.skills = skills
        },
        ADD_SKILL: (state, newSkill) => {
            state.skills.push(newSkill);
        },
        REMOVE_SKILL: (state, deletedSkillId) => {
            state.skills = state.skills.filter(skill => skill.id != deletedSkillId);
        },
        EDIT_SKILL: (state, editedSkill) =>{
            state.skills = state.skills.map(skill => skill.id === editedSkill.id ? editedSkill : skill);
        }
    },
    actions: {
       async addSkill({commit}, skill) {
            try {
              const response = await this.$axios.post('/skills', skill);
              commit('ADD_SKILL', response.data);
              return response;  
            } catch (error) {
            alert('Ошибка в skills.js / admin ADD_SKILL')
                
            }            
        },
    
    async fetchSkills({commit}, skill) {
        try {
          const response = await this.$axios.get('/skills/118', skill);
          commit('SET_SKILLS', response.data);
          return response;  
        } catch (error) {
        alert('Ошибка в skills.js / admin SET_SKILL')
            
        }            
    },
    async removeSkills({commit}, skillId) {
        try {
          const response = await this.$axios.delete(`/skills/${skillId}`);
          commit('REMOVE_SKILL', skillId);
          return response;  
        } catch (error) {
        alert('Ошибка в skills.js / admin REMOVE_SKILL')
            
        }            
    },
    async editSkills({commit}, skill) {
        try {
          const response = await this.$axios.post(`/skills/${skill.id}`, skill);
          commit('EDIT_SKILL', response.data.skill);
          return response;  
        } catch (error) {
       
            
        }            
    }
}
}