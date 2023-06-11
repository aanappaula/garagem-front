<script>
import ModelosApi from "@/api/modelo";
const modelosApi = new ModelosApi();
export default {
  data() {
    return {
      modelos: [],
      modelo: {},
    };
  },
  async created() {
    this.modelos = await modelosApi.buscarTodosOsModelos();
  },
  methods: {
    async salvar() {
      if (this.modelo.id) {
        await modelosApi.atualizarModelo(this.modelo);
      } else {
        await modelosApi.adicionarModelo(this.modelo);
      }
      this.modelo = {};
      this.modelos = await modelosApi.buscarTodosOsModelos();
    },
    editar(modelo) {
      Object.assign(this.modelo, modelo);
    },
    async excluir(modelo) {
      await modelosApi.excluirModelo(modelo.id);
      this.modelos = await modelosApi.buscarTodosOsModelos();
    },
  },
};
</script>

<template>
  <h1>Modelo</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="modelo.descricao" placeholder="Nome" />
    <button @click="salvar">Salvar</button>
  </div>
  <hr />
  <ul>
    <li v-for="modelo in modelos" :key="modelo.id">
      <span @click="editar(modelo)">
        ({{ modelo.id }}) - {{ modelo.descricao }} -
      </span>
      <button @click="excluir(modelo)">X</button>
    </li>
  </ul>
</template>

<style></style>