document.addEventListener(
    "DOMContentLoaded",
    function () {

        const searchInput =
            document.getElementById("searchOutput");

        const tableBody =
            document.getElementById("statusTableBody");


        // AMBIL DATA DARI LOCAL STORAGE
        const orders = JSON.parse(
            localStorage.getItem("orders")
        ) || [];


        // RENDER TABLE
        function renderTable(data) {

            tableBody.innerHTML =
                data.map(order => `

                <tr>

                    <td>
                        <strong>
                            ${order.customerName}
                        </strong>
                    </td>

                    <td>
                        ${order.menuSelect}
                    </td>

                    <td>
                        <span class="badge ${order.status}">
                            ${order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                    </td>

                </tr>

            `).join('');
        }


        // TAMPILKAN SEMUA DATA AWAL
        renderTable(orders);


        // SEARCH REALTIME
        searchInput.addEventListener(
            "keyup",
            function () {

                const filterValue =
                    searchInput.value.toLowerCase();

                const filteredOrders =
                    orders.filter(order =>

                        order.customerName
                            .toLowerCase()
                            .includes(filterValue)
                    );

                renderTable(filteredOrders);
            }
        );
    }
);