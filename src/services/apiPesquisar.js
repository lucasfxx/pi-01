import axios from "axios"

const  getDeputado = async (query) => {
    const response = await axios.get("https://dadosabertos.camara.leg.br/api/v2/deputados/?nome=" + query)
    return response.data.dados
 }




 export {getDeputado,}