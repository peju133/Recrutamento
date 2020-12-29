import api from "./api";


class service { 
    
    async getPages():Promise<IPages[]>{
        try {
            let response = await api.get('pages');
            return response.data;
            
        } catch (error) {
            return error;
        }
    }

    async getPost( values:string[] ): Promise<IPost[]>{
        try {
            let response = await api.post('posts', {category:values});
            return response.data;
            
        } catch (error) {
            return error;
        }
    }
}

export default new service();
