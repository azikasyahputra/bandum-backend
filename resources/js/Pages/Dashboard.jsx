import { Head } from "@inertiajs/react";
import { useEffect, useRef } from "react";

const dashboardMarkup = String.raw`<div class="row">
  <div class="col-xl-3 col-lg-4 col-sm-6">
    <div class="icon-card mb-30">
      <div class="icon purple">
        <i class="lni lni-cart-full"></i>
      </div>
      <div class="content">
        <h6 class="mb-10">New Orders</h6>
        <h3 class="text-bold mb-10">34567</h3>
        <p class="text-sm text-success">
          <i class="lni lni-arrow-up"></i> +2.00%
          <span class="text-gray">(30 days)</span>
        </p>
      </div>
    </div>
    <!-- End Icon Cart -->
  </div>
  <!-- End Col -->
  <div class="col-xl-3 col-lg-4 col-sm-6">
    <div class="icon-card mb-30">
      <div class="icon success">
        <i class="lni lni-dollar"></i>
      </div>
      <div class="content">
        <h6 class="mb-10">Total Income</h6>
        <h3 class="text-bold mb-10">$74,567</h3>
        <p class="text-sm text-success">
          <i class="lni lni-arrow-up"></i> +5.45%
          <span class="text-gray">Increased</span>
        </p>
      </div>
    </div>
    <!-- End Icon Cart -->
  </div>
  <!-- End Col -->
  <div class="col-xl-3 col-lg-4 col-sm-6">
    <div class="icon-card mb-30">
      <div class="icon primary">
        <i class="lni lni-credit-cards"></i>
      </div>
      <div class="content">
        <h6 class="mb-10">Total Expense</h6>
        <h3 class="text-bold mb-10">$24,567</h3>
        <p class="text-sm text-danger">
          <i class="lni lni-arrow-down"></i> -2.00%
          <span class="text-gray">Expense</span>
        </p>
      </div>
    </div>
    <!-- End Icon Cart -->
  </div>
  <!-- End Col -->
  <div class="col-xl-3 col-lg-4 col-sm-6">
    <div class="icon-card mb-30">
      <div class="icon orange">
        <i class="lni lni-user"></i>
      </div>
      <div class="content">
        <h6 class="mb-10">New User</h6>
        <h3 class="text-bold mb-10">34567</h3>
        <p class="text-sm text-danger">
          <i class="lni lni-arrow-down"></i> -25.00%
          <span class="text-gray"> Earning</span>
        </p>
      </div>
    </div>
    <!-- End Icon Cart -->
  </div>
  <!-- End Col -->
</div>
<!-- End Row -->
<div class="row">
  <div class="col-lg-7">
    <div class="card-style mb-30">
      <div class="title d-flex flex-wrap justify-content-between">
        <div class="left">
          <h6 class="text-medium mb-10">Yearly Stats</h6>
          <h3 class="text-bold">$245,479</h3>
        </div>
        <div class="right">
          <div class="select-style-1">
            <div class="select-position select-sm">
              <select class="light-bg">
                <option value="">Yearly</option>
                <option value="">Monthly</option>
                <option value="">Weekly</option>
              </select>
            </div>
          </div>
          <!-- end select -->
        </div>
      </div>
      <!-- End Title -->
      <div class="chart">
        <canvas id="Chart1" style="width: 100%; height: 400px; margin-left: -35px;"></canvas>
      </div>
      <!-- End Chart -->
    </div>
  </div>
  <!-- End Col -->
  <div class="col-lg-5">
    <div class="card-style mb-30">
      <div class="title d-flex flex-wrap align-items-center justify-content-between">
        <div class="left">
          <h6 class="text-medium mb-30">Sales/Revenue</h6>
        </div>
        <div class="right">
          <div class="select-style-1">
            <div class="select-position select-sm">
              <select class="light-bg">
                <option value="">Yearly</option>
                <option value="">Monthly</option>
                <option value="">Weekly</option>
              </select>
            </div>
          </div>
          <!-- end select -->
        </div>
      </div>
      <!-- End Title -->
      <div class="chart">
        <canvas id="Chart2" style="width: 100%; height: 400px; margin-left: -45px;"></canvas>
      </div>
      <!-- End Chart -->
    </div>
  </div>
  <!-- End Col -->
</div>
<!-- End Row -->
<div class="row">
  <div class="col-lg-5">
    <div class="card-style mb-30">
      <div class="title d-flex justify-content-between align-items-center">
        <div class="left">
          <h6 class="text-medium mb-30">Sells by State</h6>
        </div>
      </div>
      <!-- End Title -->
      <div id="map" style="width: 100%; height: 400px; overflow: hidden;"></div>
      <p>Last updated: 7 days ago</p>
    </div>
  </div>
  <!-- End Col -->
  <div class="col-lg-7">
    <div class="card-style mb-30">
      <div class="title d-flex flex-wrap justify-content-between align-items-center">
        <div class="left">
          <h6 class="text-medium mb-30">Top Selling Products</h6>
        </div>
        <div class="right">
          <div class="select-style-1">
            <div class="select-position select-sm">
              <select class="light-bg">
                <option value="">Yearly</option>
                <option value="">Monthly</option>
                <option value="">Weekly</option>
              </select>
            </div>
          </div>
          <!-- end select -->
        </div>
      </div>
      <!-- End Title -->
      <div class="table-responsive">
        <table class="table top-selling-table">
          <thead>
            <tr>
              <th></th>
              <th>
                <h6 class="text-sm text-medium">Products</h6>
              </th>
              <th class="min-width">
                <h6 class="text-sm text-medium">Category</h6>
              </th>
              <th class="min-width">
                <h6 class="text-sm text-medium">Price</h6>
              </th>
              <th class="min-width">
                <h6 class="text-sm text-medium">Sold</h6>
              </th>
              <th class="min-width">
                <h6 class="text-sm text-medium">Profit</h6>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="check-input-primary">
                  <input class="form-check-input" type="checkbox" id="checkbox-1" />
                </div>
              </td>
              <td>
                <div class="product">
                  <div class="image">
                    <img src="/assets/images/products/product-mini-1.jpg" alt="" />
                  </div>
                  <p class="text-sm">Arm Chair</p>
                </div>
              </td>
              <td>
                <p class="text-sm">Interior</p>
              </td>
              <td>
                <p class="text-sm">$345</p>
              </td>
              <td>
                <p class="text-sm">43</p>
              </td>
              <td>
                <p class="text-sm">$45</p>
              </td>
              <td>
                <div class="action justify-content-end">
                  <button class="more-btn ml-10 dropdown-toggle" id="moreAction1" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="lni lni-more-alt"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="moreAction1">
                    <li class="dropdown-item">
                      <a href="#" class="text-gray">Remove</a>
                    </li>
                    <li class="dropdown-item">
                      <a href="#" class="text-gray">Edit</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="check-input-primary">
                  <input class="form-check-input" type="checkbox" id="checkbox-1" />
                </div>
              </td>
              <td>
                <div class="product">
                  <div class="image">
                    <img src="/assets/images/products/product-mini-2.jpg" alt="" />
                  </div>
                  <p class="text-sm">SOfa</p>
                </div>
              </td>
              <td>
                <p class="text-sm">Interior</p>
              </td>
              <td>
                <p class="text-sm">$145</p>
              </td>
              <td>
                <p class="text-sm">13</p>
              </td>
              <td>
                <p class="text-sm">$15</p>
              </td>
              <td>
                <div class="action justify-content-end">
                  <button class="more-btn ml-10 dropdown-toggle" id="moreAction1" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="lni lni-more-alt"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="moreAction1">
                    <li class="dropdown-item">
                      <a href="#" class="text-gray">Remove</a>
                    </li>
                    <li class="dropdown-item">
                      <a href="#" class="text-gray">Edit</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="check-input-primary">
                  <input class="form-check-input" type="checkbox" id="checkbox-1" />
                </div>
              </td>
              <td>
                <div class="product">
                  <div class="image">
                    <img src="/assets/images/products/product-mini-3.jpg" alt="" />
                  </div>
                  <p class="text-sm">Dining Table</p>
                </div>
              </td>
              <td>
                <p class="text-sm">Interior</p>
              </td>
              <td>
                <p class="text-sm">$95</p>
              </td>
              <td>
                <p class="text-sm">32</p>
              </td>
              <td>
                <p class="text-sm">$215</p>
              </td>
              <td>
                <div class="action justify-content-end">
                  <button class="more-btn ml-10 dropdown-toggle" id="moreAction1" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="lni lni-more-alt"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="moreAction1">
                    <li class="dropdown-item">
                      <a href="#" class="text-gray">Remove</a>
                    </li>
                    <li class="dropdown-item">
                      <a href="#" class="text-gray">Edit</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="check-input-primary">
                  <input class="form-check-input" type="checkbox" id="checkbox-1" />
                </div>
              </td>
              <td>
                <div class="product">
                  <div class="image">
                    <img src="/assets/images/products/product-mini-4.jpg" alt="" />
                  </div>
                  <p class="text-sm">Office Chair</p>
                </div>
              </td>
              <td>
                <p class="text-sm">Interior</p>
              </td>
              <td>
                <p class="text-sm">$105</p>
              </td>
              <td>
                <p class="text-sm">23</p>
              </td>
              <td>
                <p class="text-sm">$345</p>
              </td>
              <td>
                <div class="action justify-content-end">
                  <button class="more-btn ml-10 dropdown-toggle" id="moreAction1" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="lni lni-more-alt"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="moreAction1">
                    <li class="dropdown-item">
                      <a href="#" class="text-gray">Remove</a>
                    </li>
                    <li class="dropdown-item">
                      <a href="#" class="text-gray">Edit</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- End Table -->
      </div>
    </div>
  </div>
  <!-- End Col -->
</div>
<!-- End Row -->
<div class="row">
  <div class="col-lg-7">
    <div class="card-style mb-30">
      <div class="title d-flex flex-wrap align-items-center justify-content-between">
        <div class="left">
          <h6 class="text-medium mb-2">Sales Forecast</h6>
        </div>
        <div class="right">
          <div class="select-style-1 mb-2">
            <div class="select-position select-sm">
              <select class="light-bg">
                <option value="">Last Month</option>
                <option value="">Last 3 Months</option>
                <option value="">Last Year</option>
              </select>
            </div>
          </div>
          <!-- end select -->
        </div>
      </div>
      <!-- End Title -->
      <div class="chart">
        <div id="legend3">
          <ul class="legend3 d-flex flex-wrap align-items-center mb-30">
            <li>
              <div class="d-flex">
                <span class="bg-color primary-bg"> </span>
                <div class="text">
                  <p class="text-sm text-success">
                    <span class="text-dark">Revenue</span> +25.55%
                    <i class="lni lni-arrow-up"></i>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="d-flex">
                <span class="bg-color purple-bg"></span>
                <div class="text">
                  <p class="text-sm text-success">
                    <span class="text-dark">Net Profit</span> +45.55%
                    <i class="lni lni-arrow-up"></i>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="d-flex">
                <span class="bg-color orange-bg"></span>
                <div class="text">
                  <p class="text-sm text-danger">
                    <span class="text-dark">Order</span> -4.2%
                    <i class="lni lni-arrow-down"></i>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <canvas id="Chart3" style="width: 100%; height: 450px; margin-left: -35px;"></canvas>
      </div>
    </div>
  </div>
  <!-- End Col -->
  <div class="col-lg-5">
    <div class="card-style mb-30">
      <div class="title d-flex flex-wrap align-items-center justify-content-between">
        <div class="left">
          <h6 class="text-medium mb-2">Traffic</h6>
        </div>
        <div class="right">
          <div class="select-style-1 mb-2">
            <div class="select-position select-sm">
              <select class="bg-ligh">
                <option value="">Last 6 Months</option>
                <option value="">Last 3 Months</option>
                <option value="">Last Year</option>
              </select>
            </div>
          </div>
          <!-- end select -->
        </div>
      </div>
      <!-- End Title -->
      <div class="chart">
        <div id="legend4">
          <ul class="legend3 d-flex flex-wrap gap-3 gap-sm-0 align-items-center mb-30">
            <li>
              <div class="d-flex">
                <span class="bg-color primary-bg"> </span>
                <div class="text">
                  <p class="text-sm text-success">
                    <span class="text-dark">Store Visits</span>
                    +25.55%
                    <i class="lni lni-arrow-up"></i>
                  </p>
                  <h2>3456</h2>
                </div>
              </div>
            </li>
            <li>
              <div class="d-flex">
                <span class="bg-color danger-bg"></span>
                <div class="text">
                  <p class="text-sm text-danger">
                    <span class="text-dark">Visitors</span> -2.05%
                    <i class="lni lni-arrow-down"></i>
                  </p>
                  <h2>3456</h2>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <canvas id="Chart4" style="width: 100%; height: 420px; margin-left: -35px;"></canvas>
      </div>
      <!-- End Chart -->
    </div>
  </div>
  <!-- End Col -->
</div>
<!-- End Row -->
<div class="row">
  <div class="col-lg-5">
    <div class="card-style calendar-card mb-30">
      <div id="calendar-mini"></div>
    </div>
  </div>
  <!-- End Col -->
  <div class="col-lg-7">
    <div class="card-style mb-30">
      <div class="title d-flex flex-wrap align-items-center justify-content-between">
        <div class="left">
          <h6 class="text-medium mb-30">Sales History</h6>
        </div>
        <div class="right">
          <div class="select-style-1">
            <div class="select-position select-sm">
              <select class="light-bg">
                <option value="">Today</option>
                <option value="">Yesterday</option>
              </select>
            </div>
          </div>
          <!-- end select -->
        </div>
      </div>
      <!-- End Title -->
      <div class="table-responsive">
        <table class="table top-selling-table">
          <thead>
            <tr>
              <th>
                <h6 class="text-sm text-medium">Products</h6>
              </th>
              <th class="min-width">
                <h6 class="text-sm text-medium">
                  Category <i class="lni lni-arrows-vertical"></i>
                </h6>
              </th>
              <th class="min-width">
                <h6 class="text-sm text-medium">
                  Revenue <i class="lni lni-arrows-vertical"></i>
                </h6>
              </th>
              <th class="min-width">
                <h6 class="text-sm text-medium">
                  Status <i class="lni lni-arrows-vertical"></i>
                </h6>
              </th>
              <th>
                <h6 class="text-sm text-medium text-end">
                  Actions <i class="lni lni-arrows-vertical"></i>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="product">
                  <div class="image">
                    <img src="/assets/images/products/product-mini-1.jpg" alt="" />
                  </div>
                  <p class="text-sm">Bedroom</p>
                </div>
              </td>
              <td>
                <p class="text-sm">Interior</p>
              </td>
              <td>
                <p class="text-sm">$345</p>
              </td>
              <td>
                <span class="status-btn close-btn">Pending</span>
              </td>
              <td>
                <div class="action justify-content-end">
                  <button class="edit">
                    <i class="lni lni-pencil"></i>
                  </button>
                  <button class="more-btn ml-10 dropdown-toggle" id="moreAction1" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="lni lni-more-alt"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="moreAction1">
                    <li class="dropdown-item">
                      <a href="#" class="text-gray">Remove</a>
                    </li>
                    <li class="dropdown-item">
                      <a href="#" class="text-gray">Edit</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="product">
                  <div class="image">
                    <img src="/assets/images/products/product-mini-2.jpg" alt="" />
                  </div>
                  <p class="text-sm">Arm Chair</p>
                </div>
              </td>
              <td>
                <p class="text-sm">Interior</p>
              </td>
              <td>
                <p class="text-sm">$345</p>
              </td>
              <td>
                <span class="status-btn warning-btn">Refund</span>
              </td>
              <td>
                <div class="action justify-content-end">
                  <button class="edit">
                    <i class="lni lni-pencil"></i>
                  </button>
                  <button class="more-btn ml-10 dropdown-toggle" id="moreAction1" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="lni lni-more-alt"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="moreAction1">
                    <li class="dropdown-item">
                      <a href="#" class="text-gray">Remove</a>
                    </li>
                    <li class="dropdown-item">
                      <a href="#" class="text-gray">Edit</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="product">
                  <div class="image">
                    <img src="/assets/images/products/product-mini-3.jpg" alt="" />
                  </div>
                  <p class="text-sm">Sofa</p>
                </div>
              </td>
              <td>
                <p class="text-sm">Interior</p>
              </td>
              <td>
                <p class="text-sm">$345</p>
              </td>
              <td>
                <span class="status-btn success-btn">Completed</span>
              </td>
              <td>
                <div class="action justify-content-end">
                  <button class="edit">
                    <i class="lni lni-pencil"></i>
                  </button>
                  <button class="more-btn ml-10 dropdown-toggle" id="moreAction1" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="lni lni-more-alt"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="moreAction1">
                    <li class="dropdown-item">
                      <a href="#" class="text-gray">Remove</a>
                    </li>
                    <li class="dropdown-item">
                      <a href="#" class="text-gray">Edit</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="product">
                  <div class="image">
                    <img src="/assets/images/products/product-mini-4.jpg" alt="" />
                  </div>
                  <p class="text-sm">Kitchen</p>
                </div>
              </td>
              <td>
                <p class="text-sm">Interior</p>
              </td>
              <td>
                <p class="text-sm">$345</p>
              </td>
              <td>
                <span class="status-btn close-btn">Canceled</span>
              </td>
              <td>
                <div class="action justify-content-end">
                  <button class="edit">
                    <i class="lni lni-pencil"></i>
                  </button>
                  <button class="more-btn ml-10 dropdown-toggle" id="moreAction1" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="lni lni-more-alt"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="moreAction1">
                    <li class="dropdown-item">
                      <a href="#" class="text-gray">Remove</a>
                    </li>
                    <li class="dropdown-item">
                      <a href="#" class="text-gray">Edit</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- End Table -->
      </div>
    </div>
  </div>
  <!-- End Col -->
</div>
<!-- End Row -->`;

const chartBaseOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false },
        title: { display: false },
    },
};

async function createCharts() {
    const { default: Chart } = await import("chart.js/auto");
    const chart1 = document.getElementById("Chart1");
    const chart2 = document.getElementById("Chart2");
    const chart3 = document.getElementById("Chart3");
    const chart4 = document.getElementById("Chart4");
    const charts = [];

    if (chart1) {
        charts.push(
            new Chart(chart1, {
                type: "line",
                data: {
                    labels: ["Jan", "Fab", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [{
                        label: "Yearly Stats",
                        backgroundColor: "transparent",
                        borderColor: "#365CF5",
                        data: [600, 800, 750, 880, 940, 880, 900, 770, 920, 890, 976, 1100],
                        pointBackgroundColor: "transparent",
                        pointHoverBackgroundColor: "#365CF5",
                        pointBorderColor: "transparent",
                        pointHoverBorderColor: "#fff",
                        pointHoverBorderWidth: 5,
                        borderWidth: 5,
                        pointRadius: 8,
                        pointHoverRadius: 8,
                        cubicInterpolationMode: "monotone",
                    }],
                },
                options: {
                    ...chartBaseOptions,
                    scales: {
                        y: { grid: { display: false }, ticks: { padding: 35 }, max: 1200, min: 500 },
                        x: { grid: { color: "rgba(143, 146, 161, .1)" }, ticks: { padding: 20 } },
                    },
                },
            }),
        );
    }

    if (chart2) {
        charts.push(
            new Chart(chart2, {
                type: "bar",
                data: {
                    labels: ["Jan", "Fab", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [{
                        label: "Sales",
                        backgroundColor: "#365CF5",
                        borderRadius: 30,
                        barThickness: 6,
                        maxBarThickness: 8,
                        data: [600, 700, 1000, 700, 650, 800, 690, 740, 720, 1120, 876, 900],
                    }],
                },
                options: {
                    ...chartBaseOptions,
                    scales: {
                        y: { grid: { display: false }, ticks: { padding: 35 }, max: 1200, min: 0 },
                        x: { grid: { display: false }, ticks: { padding: 20 } },
                    },
                },
            }),
        );
    }

    if (chart3) {
        charts.push(
            new Chart(chart3, {
                type: "line",
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [
                        { label: "Revenue", borderColor: "#365CF5", data: [80, 120, 110, 100, 130, 150, 115, 145, 140, 130, 160, 210], tension: 0.4 },
                        { label: "Profit", borderColor: "#9b51e0", data: [120, 160, 150, 140, 165, 210, 135, 155, 170, 140, 130, 200], tension: 0.4 },
                        { label: "Order", borderColor: "#f2994a", data: [180, 110, 140, 135, 100, 90, 145, 115, 100, 110, 115, 150], tension: 0.4 },
                    ].map((dataset) => ({
                        ...dataset,
                        backgroundColor: "transparent",
                        pointBackgroundColor: "transparent",
                        pointBorderColor: "transparent",
                        pointHoverBorderWidth: 3,
                        pointBorderWidth: 5,
                        pointRadius: 5,
                        pointHoverRadius: 8,
                        fill: false,
                    })),
                },
                options: {
                    ...chartBaseOptions,
                    maintainAspectRatio: true,
                    scales: {
                        y: { grid: { display: false }, ticks: { padding: 35 }, max: 350, min: 50 },
                        x: { grid: { color: "rgba(143, 146, 161, .1)" }, ticks: { padding: 20 } },
                    },
                },
            }),
        );
    }

    if (chart4) {
        charts.push(
            new Chart(chart4, {
                type: "bar",
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    datasets: [
                        { backgroundColor: "#365CF5", data: [600, 700, 1000, 700, 650, 800] },
                        { backgroundColor: "#d50100", data: [690, 740, 720, 1120, 876, 900] },
                    ].map((dataset) => ({
                        ...dataset,
                        label: "",
                        borderColor: "transparent",
                        borderRadius: 20,
                        borderWidth: 5,
                        barThickness: 20,
                        maxBarThickness: 20,
                    })),
                },
                options: {
                    ...chartBaseOptions,
                    maintainAspectRatio: true,
                    scales: {
                        y: { grid: { display: false }, ticks: { padding: 35, max: 1200, min: 0 } },
                        x: { grid: { display: false } },
                    },
                },
            }),
        );
    }

    return charts;
}

async function createMap() {
    const { default: jsVectorMap } = await import("jsvectormap");
    await import("jsvectormap/dist/maps/world-merc.js");

    if (!document.getElementById("map")) {
        return null;
    }

    return new jsVectorMap({
        map: "world_merc",
        selector: "#map",
        zoomButtons: true,
        regionStyle: { initial: { fill: "#d1d5db" } },
        markersSelectable: true,
        markers: [
            { name: "Egypt", coords: [26.8206, 30.8025] },
            { name: "Russia", coords: [61.524, 105.3188] },
            { name: "Canada", coords: [56.1304, -106.3468] },
            { name: "Greenland", coords: [71.7069, -42.6043] },
            { name: "Brazil", coords: [-14.235, -51.9253] },
        ],
        markerStyle: {
            initial: { fill: "#4A6CF7" },
            selected: { fill: "#ff5050" },
        },
        labels: {
            markers: { render: (marker) => marker.name },
        },
    });
}

async function createCalendar() {
    const { Calendar } = await import("fullcalendar");
    const calendarElement = document.getElementById("calendar-mini");

    if (!calendarElement) {
        return null;
    }

    const calendar = new Calendar(calendarElement, {
        initialView: "dayGridMonth",
        headerToolbar: { end: "today prev,next" },
    });

    calendar.render();
    return calendar;
}

export default function Dashboard() {
    const cleanup = useRef({ charts: [], map: null, calendar: null });

    useEffect(() => {
        async function init() {
            cleanup.current.charts = (await createCharts()) || [];
            cleanup.current.map = await createMap();
            cleanup.current.calendar = await createCalendar();
        }

        init().catch(console.error);

        return () => {
            cleanup.current.charts.forEach((chart) => chart.destroy());
            cleanup.current.map?.destroy?.();
            cleanup.current.calendar?.destroy?.();
        };
    }, []);

    return (
        <>
            <Head title="eCommerce Dashboard" />
                        <div dangerouslySetInnerHTML={{ __html: dashboardMarkup }} />
        </>
    );
}
