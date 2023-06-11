import axios from 'axios';
export default class ModelosApi {
  async buscarTodosOsModelos() {
    const { data } = await axios.get('/modelos/');
    return data;
  }
  async adicionarModelo(modelo) {
    const { data } = await axios.post('/modelos/', modelo);
    return data;
  }
  async atualizarModelo(modelo) {
    const { data } = await axios.put(`/modelos/${modelo.id}/`, modelo);
    return data;
  }
  async excluirModelo(id) {
    const { data } = await axios.delete(`/modelos/${id}/`);
    return data;
  }
}