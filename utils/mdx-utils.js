import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts');
    console.log("teste");

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {
    try {
      const { data } = await api.get(`/post?id=eq.${id}`);
  
      if (data && data.length > 0) {
        const post = data[0];
  
        return {
          title: post.title || 'Título não disponível',
          description: post.description || '',
          body: post.body || '',
        };
      } else {
        return {
          title: 'Post não encontrado',
          description: '',
          body: '',
        };
      }
    } catch (error) {
      console.error("Erro ao buscar o post:", error);
      return {
        title: 'Erro ao carregar o post',
        description: '',
        body: '',
      };
    }
  };