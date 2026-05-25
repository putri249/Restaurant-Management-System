const orderForm =
    document.getElementById("orderForm");

const orderTableBody =
    document.getElementById("orderTableBody");

const totalOrder =
    document.getElementById("totalOrder");


// STATE
const state = {
    orders: JSON.parse(
        localStorage.getItem("orders")
    ) || []
};


// RENDER TABLE
function renderOrders() {

    orderTableBody.innerHTML = "";

    state.orders.forEach((order, index) => {

        const newRow =
            document.createElement("tr");

        newRow.innerHTML = `
            <td>${order.customerName}</td>

            <td>${order.menuSelect}</td>

            <td>${order.jumlah}</td>

            <td>
                <span class="badge ${order.status}">
                    ${order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
            </td>

            <td>
                <div class="action-buttons">

                    <button 
                        class="done-btn"
                        data-index="${index}"
                    >
                        <i class="fas fa-check"></i>
                    </button>

                    <button 
                        class="process-btn"
                        data-index="${index}"
                    >
                        <i class="fas fa-rotate-right"></i>
                    </button>

                    <button 
                    class="cancel-btn"
                    data-index="${index}"
                    >
                    <i class="fas fa-xmark"></i>
                    </button>
                    <button 
                    class="delete-btn"
                    data-index="${index}"
                    >
                    <i class="fas fa-trash"></i>
                    </button>

                </div>
            </td>
        `;

        orderTableBody.appendChild(newRow);
    });

    updateTotalOrder();
}


// SAVE LOCAL STORAGE
function saveToLocalStorage() {

    localStorage.setItem(
        "orders",
        JSON.stringify(state.orders)
    );
}


// UPDATE TOTAL
function updateTotalOrder() {

    totalOrder.textContent =
        `${state.orders.length} Pesanan`;
}


// TAMBAH PESANAN
orderForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const customerName =
        document.getElementById("customerName").value;

    const menuSelect =
        document.getElementById("menuSelect").value;

    const jumlah =
        document.getElementById("jumlah").value;


    if (
        customerName === "" ||
        menuSelect === "" ||
        jumlah === ""
    ) {

        alert("Semua data harus diisi!");

        return;
    }


    const newOrder = {

        customerName,
        menuSelect,
        jumlah,
        status: "proses"
    };


    state.orders.push(newOrder);

    saveToLocalStorage();

    renderOrders();

    orderForm.reset();
});


// ACTION BUTTONS
orderTableBody.addEventListener("click", function (e) {

    const index =
        e.target.closest("button")?.dataset.index;

    if (index === undefined) return;


    // BATAL
    if (e.target.closest(".cancel-btn")) {

        state.orders[index].status = "batal";
    }


    // PROSES
    if (e.target.closest(".process-btn")) {

        state.orders[index].status = "proses";
    }


    // SIAP
    if (e.target.closest(".done-btn")) {

        state.orders[index].status = "siap";
    }

    // DELETE
    if (e.target.closest(".delete-btn")) {
        state.orders.splice(index, 1);
        saveToLocalStorage();
        renderOrders();
    }


    saveToLocalStorage();

    renderOrders();
});


// AWAL LOAD
renderOrders();