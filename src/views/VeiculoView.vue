<script>
import VeiculosApi from "@/api/veiculo";
const veiculosApi = new VeiculosApi();
export default {
  data() {
    return {
      veiculos: [],
      veiculo: {},
    };
  },
  async created() {
    this.veiculos = await veiculosApi.buscarTodosOsVeiculos();
  },
  methods: {
    async salvar() {
      if (this.veiculo.id) {
        await veiculosApi.atualizarVeiculo(this.veiculo);
      } else {
        await veiculosApi.adicionarVeiculo(this.veiculo);
      }
      this.veiculo = {};
      this.veiculos = await veiculosApi.buscarTodosOsVeiculos();
    },
    editar(veiculo) {
      Object.assign(this.veiculo, veiculo);
    },
    async excluir(veiculo) {
      await veiculosApi.excluirVeiculo(veiculo.id);
      this.veiculos = await veiculosApi.buscarTodosOsVeiculos();
    },
  },
};
</script>

<template>
  <h1>Veiculo</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="veiculo.nome" placeholder="Nome" />
    <button @click="salvar">Salvar</button>
  </div>
  <hr />
  <ul>
    <li v-for="veiculo in veiculos" :key="veiculo.id">
      <span @click="editar(veiculo)">
        ({{ veiculo.id }}) - {{ veiculo.marca }} -
      </span>
      <button @click="excluir(veiculo)">X</button>
    </li>
  </ul>
</template>

<style></style>