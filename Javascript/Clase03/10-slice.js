const historias = [
	{id: 1, nHistoria: 2000, cNombrePaciente: "Clarisa", cApellidoPaternoPaciente: "        Barco    ", edad: 15},
	{id: 2, nHistoria: 2010, cNombrePaciente: "Maritza", cApellidoPaternoPaciente: "Hidalgo   ", edad:8},
	{id: 3, nHistoria: 2011, cNombrePaciente: "Carmen", cApellidoPaternoPaciente: "   Villanueva", edad:39},
	{id: 4, nHistoria: 2013, cNombrePaciente: "Delia   ", cApellidoPaternoPaciente: "Tazza   ", edad:89},
	{id: 5, nHistoria: 2014, cNombrePaciente: "Mario", cApellidoPaternoPaciente: "Alcazaba", edad:20}
]

const paginacion = (arr, numPagina, tamanoPagina) => {
	return arr.slice((numPagina-1) * tamanoPagina, (numPagina-1) * tamanoPagina + tamanoPagina)
}

// const pagina = historias.slice(0, 3)
const pagina = paginacion(historias, 2, 2)

console.log(pagina)