const tableBody =
    document.getElementById("order-data");
    const totalPesanan =
    document.getElementById("totalPesanan");


// AMBIL DATA DARI LOCAL STORAGE
const state = {

    orders: JSON.parse(
        localStorage.getItem("orders")
    ) || []
};


// RENDER TABLE
function renderTable() {

    tableBody.innerHTML =
        state.orders.map(order => `

        <tr>

            <td>${order.customerName}</td>

            <td>${order.menuSelect}</td>

            <td>
                <span class="badge ${order.status}">
                    ${order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
            </td>

        </tr>

    `).join('');

    totalPesanan.textContent =
    state.orders.length;
}


// LOAD DATA
document.addEventListener(
    'DOMContentLoaded',
    () => {

        renderTable();
    }
);

