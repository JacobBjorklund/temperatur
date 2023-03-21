fetchapi()

document.querySelector('select').addEventListener('change', () => {
    fetchapi()
})

async function fetchapi() {
    let select = document.querySelector('select').value
    const res = await fetch(`/api/temperature/${select}`)
    const data = await res.json()

    RenderTable(data)
    function RenderTable(json) {
        document.querySelector('#parent').innerHTML = `
        <table>
        <tr>
            <th>
                Country
            </th>
            <th>
                Year
            </th>
            <th>
                ATP
            </th>
        </tr>
        ${json.map(temperature => `<tr>
        <td>${temperature.country}</td>
        <td>${temperature.year}</td>
        <td>${temperature.averageTemperature}
        `).join('')}
        </table>
        `
    }
}