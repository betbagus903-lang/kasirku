/* =============================================
   FRESHMART POS — SCRIPT.JS
   ============================================= */

'use strict';

// =============================================
// DATA: PRODUK
// =============================================
const PRODUCTS = [
  // --- SEMBAKO ---
  { id: 'P001', name: 'Beras Premium Pandan Wangi 5kg', price: 72000,  category: 'Sembako',      stock: 120, barcode: '8991100010011' },
  { id: 'P002', name: 'Beras Medium IR64 5kg',           price: 58000,  category: 'Sembako',      stock: 150, barcode: '8991100010012' },
  { id: 'P003', name: 'Minyak Goreng Bimoli 2L',         price: 38500,  category: 'Sembako',      stock: 85,  barcode: '8991100010013' },
  { id: 'P004', name: 'Minyak Goreng Tropical 1L',       price: 21000,  category: 'Sembako',      stock: 100, barcode: '8991100010014' },
  { id: 'P005', name: 'Gula Pasir Gulaku 1kg',           price: 15500,  category: 'Sembako',      stock: 200, barcode: '8991100010015' },
  { id: 'P006', name: 'Tepung Terigu Segitiga Biru 1kg', price: 13000,  category: 'Sembako',      stock: 160, barcode: '8991100010016' },
  { id: 'P007', name: 'Garam Halus Cap Kapal 250g',      price: 4500,   category: 'Sembako',      stock: 300, barcode: '8991100010017' },
  { id: 'P008', name: 'Kecap Manis Bango 520ml',         price: 23500,  category: 'Sembako',      stock: 90,  barcode: '8991100010018' },
  { id: 'P009', name: 'Saus Tomat ABC 275ml',            price: 12000,  category: 'Sembako',      stock: 110, barcode: '8991100010019' },
  { id: 'P010', name: 'Mie Indomie Goreng',              price: 3500,   category: 'Sembako',      stock: 500, barcode: '8991100010020' },
  { id: 'P011', name: 'Mie Indomie Soto Ayam',           price: 3500,   category: 'Sembako',      stock: 480, barcode: '8991100010021' },
  { id: 'P012', name: 'Kopi Kapal Api 165g',             price: 18000,  category: 'Sembako',      stock: 75,  barcode: '8991100010022' },
  { id: 'P013', name: 'Telur Ayam 1kg',                  price: 27000,  category: 'Sembako',      stock: 100, barcode: '8991100010023' },

  // --- BUAH & SAYUR ---
  { id: 'P014', name: 'Apel Fuji Import 1kg',            price: 35000,  category: 'Buah & Sayur', stock: 50,  barcode: '8991100020011' },
  { id: 'P015', name: 'Apel Malang Lokal 1kg',           price: 22000,  category: 'Buah & Sayur', stock: 60,  barcode: '8991100020012' },
  { id: 'P016', name: 'Pisang Cavendish 1kg',            price: 18000,  category: 'Buah & Sayur', stock: 70,  barcode: '8991100020013' },
  { id: 'P017', name: 'Jeruk Mandarin 1kg',              price: 28000,  category: 'Buah & Sayur', stock: 45,  barcode: '8991100020014' },
  { id: 'P018', name: 'Anggur Merah 500g',               price: 45000,  category: 'Buah & Sayur', stock: 30,  barcode: '8991100020015' },
  { id: 'P019', name: 'Wortel Segar 500g',               price: 9000,   category: 'Buah & Sayur', stock: 80,  barcode: '8991100020016' },
  { id: 'P020', name: 'Tomat Merah 500g',                price: 8000,   category: 'Buah & Sayur', stock: 90,  barcode: '8991100020017' },
  { id: 'P021', name: 'Brokoli Segar 500g',              price: 16000,  category: 'Buah & Sayur', stock: 40,  barcode: '8991100020018' },
  { id: 'P022', name: 'Bayam Hijau 250g',                price: 5000,   category: 'Buah & Sayur', stock: 60,  barcode: '8991100020019' },
  { id: 'P023', name: 'Kentang Granola 1kg',             price: 14000,  category: 'Buah & Sayur', stock: 75,  barcode: '8991100020020' },
  { id: 'P024', name: 'Bawang Merah 500g',               price: 18500,  category: 'Buah & Sayur', stock: 85,  barcode: '8991100020021' },
  { id: 'P025', name: 'Bawang Putih 250g',               price: 12000,  category: 'Buah & Sayur', stock: 95,  barcode: '8991100020022' },
  { id: 'P026', name: 'Cabai Merah Keriting 250g',       price: 15000,  category: 'Buah & Sayur', stock: 50,  barcode: '8991100020023' },

  // --- DAGING & SEAFOOD ---
  { id: 'P027', name: 'Daging Sapi Has Dalam 500g',      price: 68000,  category: 'Daging & Seafood', stock: 25, barcode: '8991100030011' },
  { id: 'P028', name: 'Daging Sapi Cincang 500g',        price: 55000,  category: 'Daging & Seafood', stock: 30, barcode: '8991100030012' },
  { id: 'P029', name: 'Ayam Broiler Utuh 1 ekor',        price: 42000,  category: 'Daging & Seafood', stock: 35, barcode: '8991100030013' },
  { id: 'P030', name: 'Dada Ayam Fillet 500g',           price: 32000,  category: 'Daging & Seafood', stock: 40, barcode: '8991100030014' },
  { id: 'P031', name: 'Paha Ayam Bawah 500g',            price: 27000,  category: 'Daging & Seafood', stock: 45, barcode: '8991100030015' },
  { id: 'P032', name: 'Ikan Salmon Fillet 300g',         price: 85000,  category: 'Daging & Seafood', stock: 15, barcode: '8991100030016' },
  { id: 'P033', name: 'Ikan Kakap Merah 500g',           price: 45000,  category: 'Daging & Seafood', stock: 20, barcode: '8991100030017' },
  { id: 'P034', name: 'Udang Windu Kupas 250g',          price: 52000,  category: 'Daging & Seafood', stock: 18, barcode: '8991100030018' },
  { id: 'P035', name: 'Cumi Segar 300g',                 price: 38000,  category: 'Daging & Seafood', stock: 22, barcode: '8991100030019' },

  // --- MAKANAN SIAP SAJI ---
  { id: 'P036', name: 'Nasi Kotak Ayam Goreng',          price: 22000,  category: 'Siap Saji',    stock: 30,  barcode: '8991100040011' },
  { id: 'P037', name: 'Nasi Kotak Rendang',              price: 25000,  category: 'Siap Saji',    stock: 25,  barcode: '8991100040012' },
  { id: 'P038', name: 'Sandwich Tuna Mayo',              price: 18000,  category: 'Siap Saji',    stock: 20,  barcode: '8991100040013' },
  { id: 'P039', name: 'Salad Buah Cup 200g',             price: 15000,  category: 'Siap Saji',    stock: 35,  barcode: '8991100040014' },
  { id: 'P040', name: 'Sushi Roll 8 pcs',                price: 35000,  category: 'Siap Saji',    stock: 15,  barcode: '8991100040015' },
  { id: 'P041', name: 'Nugget Ayam Goreng 5 pcs',        price: 15000,  category: 'Siap Saji',    stock: 20,  barcode: '8991100040016' },
  { id: 'P042', name: 'Bakso Ikan Kuah Cup',             price: 12000,  category: 'Siap Saji',    stock: 28,  barcode: '8991100040017' },
  { id: 'P043', name: 'Dimsum Ayam Kukus 6 pcs',         price: 28000,  category: 'Siap Saji',    stock: 18,  barcode: '8991100040018' },

  // --- ROTI & BAKERY ---
  { id: 'P044', name: 'Roti Tawar Sari Roti 380g',       price: 18500,  category: 'Roti & Bakery', stock: 60,  barcode: '8991100050011' },
  { id: 'P045', name: 'Roti Tawar Gandum 400g',          price: 22000,  category: 'Roti & Bakery', stock: 50,  barcode: '8991100050012' },
  { id: 'P046', name: 'Roti Ambon Keju',                 price: 5500,   category: 'Roti & Bakery', stock: 80,  barcode: '8991100050013' },
  { id: 'P047', name: 'Roti Ambon Coklat',               price: 5500,   category: 'Roti & Bakery', stock: 80,  barcode: '8991100050014' },
  { id: 'P048', name: 'Donat Gula 3 pcs',                price: 16000,  category: 'Roti & Bakery', stock: 40,  barcode: '8991100050015' },
  { id: 'P049', name: 'Croissant Butter 2 pcs',          price: 24000,  category: 'Roti & Bakery', stock: 30,  barcode: '8991100050016' },
  { id: 'P050', name: 'Bolu Gulung Pandan',              price: 32000,  category: 'Roti & Bakery', stock: 25,  barcode: '8991100050017' },
  { id: 'P051', name: 'Keju Kraft Slice 10 lembar',      price: 28500,  category: 'Roti & Bakery', stock: 55,  barcode: '8991100050018' },
  { id: 'P052', name: 'Mentega Orchid 200g',             price: 16000,  category: 'Roti & Bakery', stock: 70,  barcode: '8991100050019' },
  { id: 'P053', name: 'Selai Kacang Skippy 340g',        price: 35000,  category: 'Roti & Bakery', stock: 45,  barcode: '8991100050020' },

  // --- MINUMAN ---
  { id: 'P054', name: 'Air Mineral Aqua 600ml',          price: 4000,   category: 'Minuman',       stock: 500, barcode: '8991100060011' },
  { id: 'P055', name: 'Air Mineral Aqua 1.5L',           price: 6500,   category: 'Minuman',       stock: 300, barcode: '8991100060012' },
  { id: 'P056', name: 'Teh Botol Sosro 350ml',           price: 5500,   category: 'Minuman',       stock: 200, barcode: '8991100060013' },
  { id: 'P057', name: 'Coca-Cola 330ml',                 price: 8500,   category: 'Minuman',       stock: 150, barcode: '8991100060014' },
  { id: 'P058', name: 'Sprite 330ml',                    price: 8500,   category: 'Minuman',       stock: 130, barcode: '8991100060015' },
  { id: 'P059', name: 'Fanta Strawberry 330ml',          price: 8500,   category: 'Minuman',       stock: 120, barcode: '8991100060016' },
  { id: 'P060', name: 'Susu UHT Ultra Full Cream 250ml', price: 7500,   category: 'Minuman',       stock: 180, barcode: '8991100060017' },
  { id: 'P061', name: 'Susu UHT Ultra 1L',               price: 19500,  category: 'Minuman',       stock: 90,  barcode: '8991100060018' },
  { id: 'P062', name: 'Yakult 5 botol',                  price: 12000,  category: 'Minuman',       stock: 100, barcode: '8991100060019' },
  { id: 'P063', name: 'Pocari Sweat 500ml',              price: 9500,   category: 'Minuman',       stock: 110, barcode: '8991100060020' },
  { id: 'P064', name: 'Kopi Good Day 250ml',             price: 6000,   category: 'Minuman',       stock: 140, barcode: '8991100060021' },
  { id: 'P065', name: 'Jus Buah Buavita 250ml',          price: 8000,   category: 'Minuman',       stock: 95,  barcode: '8991100060022' },

  // --- SNACK ---
  { id: 'P066', name: 'Chitato Sapi Panggang 68g',       price: 14000,  category: 'Snack',         stock: 80,  barcode: '8991100070011' },
  { id: 'P067', name: 'Pringles Original 107g',          price: 45000,  category: 'Snack',         stock: 50,  barcode: '8991100070012' },
  { id: 'P068', name: 'Oreo Vanilla 137g',               price: 15500,  category: 'Snack',         stock: 90,  barcode: '8991100070013' },
  { id: 'P069', name: 'Wafer Tango Coklat 130g',         price: 12000,  category: 'Snack',         stock: 100, barcode: '8991100070014' },
  { id: 'P070', name: 'Kacang Garuda Atom 100g',         price: 9500,   category: 'Snack',         stock: 120, barcode: '8991100070015' },
  { id: 'P071', name: 'Biscuit Roma Kelapa 300g',        price: 18000,  category: 'Snack',         stock: 70,  barcode: '8991100070016' },
  { id: 'P072', name: 'Coklat Silverqueen 62g',          price: 16500,  category: 'Snack',         stock: 85,  barcode: '8991100070017' },
  { id: 'P073', name: 'Permen Mentos Mint 37g',          price: 7000,   category: 'Snack',         stock: 150, barcode: '8991100070018' },

  // --- KEBUTUHAN RUMAH TANGGA ---
  { id: 'P074', name: 'Sabun Mandi Lifebuoy 75g',        price: 5500,   category: 'Rumah Tangga',  stock: 200, barcode: '8991100080011' },
  { id: 'P075', name: 'Sabun Mandi Cair Dettol 450ml',   price: 32000,  category: 'Rumah Tangga',  stock: 80,  barcode: '8991100080012' },
  { id: 'P076', name: 'Shampoo Pantene 170ml',           price: 22000,  category: 'Rumah Tangga',  stock: 75,  barcode: '8991100080013' },
  { id: 'P077', name: 'Kondisioner Pantene 170ml',       price: 23000,  category: 'Rumah Tangga',  stock: 65,  barcode: '8991100080014' },
  { id: 'P078', name: 'Pasta Gigi Pepsodent 190g',       price: 16000,  category: 'Rumah Tangga',  stock: 150, barcode: '8991100080015' },
  { id: 'P079', name: 'Sikat Gigi Formula Medium',       price: 12000,  category: 'Rumah Tangga',  stock: 100, barcode: '8991100080016' },
  { id: 'P080', name: 'Tisu Paseo 250 lembar',           price: 18000,  category: 'Rumah Tangga',  stock: 120, barcode: '8991100080017' },
  { id: 'P081', name: 'Sabun Cuci Piring Sunlight 755ml',price: 21000,  category: 'Rumah Tangga',  stock: 90,  barcode: '8991100080018' },
  { id: 'P082', name: 'Deterjen Rinso 800g',             price: 32000,  category: 'Rumah Tangga',  stock: 85,  barcode: '8991100080019' },
  { id: 'P083', name: 'Pel Lantai Wipol 780ml',          price: 25000,  category: 'Rumah Tangga',  stock: 60,  barcode: '8991100080020' },
  { id: 'P084', name: 'Pembasmi Nyamuk Baygon 600ml',    price: 38000,  category: 'Rumah Tangga',  stock: 55,  barcode: '8991100080021' },
  { id: 'P085', name: 'Kantong Plastik Kresek Besar',    price: 8500,   category: 'Rumah Tangga',  stock: 200, barcode: '8991100080022' },
  { id: 'P086', name: 'Aluminium Foil Klin Pak 10m',     price: 22000,  category: 'Rumah Tangga',  stock: 45,  barcode: '8991100080023' },
  { id: 'P087', name: 'Bola Lampu LED 9W Philips',       price: 28000,  category: 'Rumah Tangga',  stock: 40,  barcode: '8991100080024' },
  { id: 'P088', name: 'Baterai ABC AA 4 pcs',            price: 16500,  category: 'Rumah Tangga',  stock: 70,  barcode: '8991100080025' },
];

const CATEGORIES = ['Semua', 'Sembako', 'Buah & Sayur', 'Daging & Seafood', 'Siap Saji', 'Roti & Bakery', 'Minuman', 'Snack', 'Rumah Tangga'];

const MEMBER_DISC = { SILVER: 0.05, GOLD: 0.10, PLATINUM: 0.15 };
const PPN_RATE = 0.11;

// =============================================
// STATE
// =============================================
let state = {
  cart: [],               // { product, qty, discount }
  paymentMethod: 'tunai',
  cashReceived: 0,
  activeCategory: 'Semua',
  memberDiscount: 0,
  memberLevel: '',
  heldTransactions: [],
  transactions: [],       // riwayat
  bookings: [],
  returs: [],
  currentTx: null,        // last completed tx for struk
  historyPage: 1,
  historyPerPage: 10,
};

// =============================================
// UTILS
// =============================================
const fmt = (n) => 'Rp ' + Math.round(n).toLocaleString('id-ID');
const fmtNum = (n) => Math.round(n).toLocaleString('id-ID');
const uid = () => Date.now().toString(36).toUpperCase() + Math.random().toString(36).substr(2, 4).toUpperCase();
const today = () => new Date().toISOString().split('T')[0];
const nowStr = () => {
  const d = new Date();
  return d.toLocaleDateString('id-ID', { day:'2-digit', month:'2-digit', year:'numeric' })
    + ' ' + d.toLocaleTimeString('id-ID', { hour:'2-digit', minute:'2-digit' });
};

function invoiceNo() {
  const d = new Date();
  const ymd = d.getFullYear().toString().slice(2)
    + String(d.getMonth()+1).padStart(2,'0')
    + String(d.getDate()).padStart(2,'0');
  return 'INV-' + ymd + '-' + uid().slice(0,6);
}

function saveState() {
  localStorage.setItem('fm_transactions', JSON.stringify(state.transactions));
  localStorage.setItem('fm_bookings',     JSON.stringify(state.bookings));
  localStorage.setItem('fm_returs',       JSON.stringify(state.returs));
  localStorage.setItem('fm_held',         JSON.stringify(state.heldTransactions));
}

function loadState() {
  try {
    // Versi check — clear data lama jika kategori berubah
    const savedVer = localStorage.getItem('fm_ver');
    if (savedVer !== '2') {
      localStorage.clear();
      localStorage.setItem('fm_ver', '2');
    }
    state.transactions    = JSON.parse(localStorage.getItem('fm_transactions')) || [];
    state.bookings        = JSON.parse(localStorage.getItem('fm_bookings'))     || [];
    state.returs          = JSON.parse(localStorage.getItem('fm_returs'))       || [];
    state.heldTransactions= JSON.parse(localStorage.getItem('fm_held'))         || [];
  } catch(e) {
    console.warn('Failed to load state', e);
  }
}

// =============================================
// TOAST
// =============================================
function toast(msg, type = 'info', duration = 3000) {
  const icons = { success: 'fa-check-circle', danger: 'fa-xmark-circle', warning: 'fa-triangle-exclamation', info: 'fa-circle-info' };
  const tc = document.getElementById('toastContainer');
  const el = document.createElement('div');
  el.className = `toast toast-${type}`;
  el.innerHTML = `<i class="fa-solid ${icons[type] || icons.info}"></i><span>${msg}</span>`;
  tc.appendChild(el);
  setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 280); }, duration);
}

// =============================================
// CLOCK
// =============================================
function startClock() {
  const el = document.getElementById('topbarClock');
  const update = () => {
    const d = new Date();
    el.textContent = d.toLocaleDateString('id-ID', { weekday:'short', day:'2-digit', month:'short' })
      + ' · ' + d.toLocaleTimeString('id-ID', { hour:'2-digit', minute:'2-digit', second:'2-digit' });
  };
  update();
  setInterval(update, 1000);
}

// =============================================
// NAVIGATION
// =============================================
const BREADCRUMBS = {
  kasir:   'Kasir / Transaksi Baru',
  booking: 'Booking / Pemesanan',
  retur:   'Pengembalian / Retur Barang',
  riwayat: 'Riwayat / Semua Transaksi',
  laporan: 'Laporan / Penjualan',
};

function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const pg = document.getElementById('page-' + page);
  if (pg) pg.classList.add('active');
  const nav = document.querySelector(`.nav-item[data-page="${page}"]`);
  if (nav) nav.classList.add('active');
  document.getElementById('breadcrumb').textContent = BREADCRUMBS[page] || page;

  if (page === 'riwayat')  renderHistoryTable();
  if (page === 'booking')  renderBookingTable();
  if (page === 'retur')    renderReturTable();
  if (page === 'laporan')  renderLaporan();
}

// =============================================
// SIDEBAR TOGGLE
// =============================================
function initSidebar() {
  document.getElementById('toggleSidebar').addEventListener('click', () => {
    const sb = document.getElementById('sidebar');
    const mw = document.querySelector('.main-wrapper');
    sb.classList.toggle('collapsed');
    mw.classList.toggle('full');
  });
  document.querySelectorAll('.nav-item').forEach(n => {
    n.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(n.dataset.page);
    });
  });
}

// =============================================
// PRODUCT GRID
// =============================================
function renderCategories() {
  const wrap = document.getElementById('categoryTabs');
  wrap.innerHTML = CATEGORIES.map(c =>
    `<button class="cat-tab ${c === state.activeCategory ? 'active' : ''}" data-cat="${c}">${c}</button>`
  ).join('');
  wrap.querySelectorAll('.cat-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeCategory = btn.dataset.cat;
      renderCategories();
      renderProducts();
    });
  });
}

function filterProducts(query = '') {
  let list = PRODUCTS;
  if (state.activeCategory !== 'Semua') list = list.filter(p => p.category === state.activeCategory);
  if (query) {
    const q = query.toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q) || p.barcode.includes(q) || p.id.toLowerCase().includes(q));
  }
  return list;
}

function renderProducts(query = '') {
  const grid = document.getElementById('productGrid');
  const list = filterProducts(query);

  if (list.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-muted);">
      <i class="fa-solid fa-magnifying-glass" style="font-size:2rem;display:block;margin-bottom:8px;"></i>
      Produk tidak ditemukan
    </div>`;
    return;
  }

  grid.innerHTML = list.map(p => `
    <div class="product-card ${p.stock === 0 ? 'out-of-stock' : ''}" data-id="${p.id}">
      <div class="product-code">${p.id}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-price">${fmt(p.price)}</div>
      <div class="product-footer">
        <span class="product-category-badge">${p.category}</span>
        <span class="product-stock ${p.stock <= 10 && p.stock > 0 ? 'low' : ''}">
          ${p.stock === 0 ? 'Habis' : p.stock <= 10 ? `Sisa ${p.stock}` : `${p.stock} pcs`}
        </span>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => addToCart(card.dataset.id));
  });
}

// =============================================
// CART
// =============================================
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  if (product.stock === 0) { toast('Stok produk habis!', 'warning'); return; }

  const existing = state.cart.find(c => c.product.id === productId);
  if (existing) {
    if (existing.qty >= product.stock) { toast('Stok tidak mencukupi!', 'warning'); return; }
    existing.qty++;
  } else {
    state.cart.push({ product, qty: 1, discount: 0 });
  }
  renderCart();
  toast(`${product.name} ditambahkan`, 'success', 1500);
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(c => c.product.id !== productId);
  renderCart();
}

function changeQty(productId, delta) {
  const item = state.cart.find(c => c.product.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(productId); return; }
  if (item.qty > item.product.stock) { item.qty = item.product.stock; toast('Stok tidak mencukupi!', 'warning'); }
  renderCart();
}

function calcTotals() {
  const subtotal = state.cart.reduce((s, c) => s + c.product.price * c.qty, 0);
  const discAmt  = subtotal * state.memberDiscount;
  const afterDisc= subtotal - discAmt;
  const ppn      = afterDisc * PPN_RATE;
  const grand    = afterDisc + ppn;
  return { subtotal, discAmt, ppn, grand };
}

function renderCart() {
  const cartDiv = document.getElementById('cartItems');
  const { subtotal, discAmt, ppn, grand } = calcTotals();

  if (state.cart.length === 0) {
    cartDiv.innerHTML = `<div class="cart-empty"><i class="fa-solid fa-basket-shopping"></i><p>Belum ada produk</p></div>`;
  } else {
    cartDiv.innerHTML = state.cart.map(item => `
      <div class="cart-item">
        <div>
          <div class="ci-name">${item.product.name}</div>
          <div class="ci-price">${fmt(item.product.price)} / pcs</div>
          <div class="ci-controls">
            <button class="qty-btn" onclick="changeQty('${item.product.id}', -1)"><i class="fa-solid fa-minus"></i></button>
            <span class="qty-display">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty('${item.product.id}', 1)"><i class="fa-solid fa-plus"></i></button>
            <button class="ci-remove" onclick="removeFromCart('${item.product.id}')"><i class="fa-solid fa-trash-alt"></i></button>
          </div>
        </div>
        <div class="ci-subtotal">${fmt(item.product.price * item.qty)}</div>
      </div>
    `).join('');
  }

  document.getElementById('subtotal').textContent = fmt(subtotal);
  document.getElementById('ppnAmt').textContent   = fmt(ppn);
  document.getElementById('grandTotal').textContent = fmt(grand);

  const discRow = document.getElementById('discountRow');
  if (state.memberDiscount > 0) {
    discRow.style.display = '';
    document.getElementById('discountAmt').textContent = `- ${fmt(discAmt)}`;
  } else {
    discRow.style.display = 'none';
  }

  updateQuickCash(grand);
  recalcChange();
}

function updateQuickCash(grand) {
  const qc = document.getElementById('quickCash');
  if (state.paymentMethod !== 'tunai') { qc.innerHTML = ''; return; }
  const suggestions = [grand, roundUp(grand, 10000), roundUp(grand, 50000), roundUp(grand, 100000)];
  const unique = [...new Set(suggestions)].slice(0, 4);
  qc.innerHTML = unique.map(v =>
    `<button class="quick-cash-btn" onclick="setQuickCash(${v})">${fmt(v)}</button>`
  ).join('');
}

function roundUp(n, to) {
  return Math.ceil(n / to) * to;
}

function setQuickCash(val) {
  document.getElementById('cashReceived').value = val;
  state.cashReceived = val;
  recalcChange();
}

function recalcChange() {
  if (state.paymentMethod !== 'tunai') return;
  const { grand } = calcTotals();
  const cash = parseFloat(document.getElementById('cashReceived').value) || 0;
  state.cashReceived = cash;
  const change = cash - grand;
  const el = document.getElementById('changeAmt');
  el.textContent = fmt(Math.abs(change));
  el.className = 'change-value' + (change < 0 ? ' negative' : '');
}

// =============================================
// PAYMENT METHOD
// =============================================
function initPaymentMethods() {
  document.querySelectorAll('.pay-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pay-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.paymentMethod = btn.dataset.method;

      document.getElementById('cashInputWrap').style.display  = state.paymentMethod === 'tunai'    ? '' : 'none';
      document.getElementById('qrisWrap').style.display       = state.paymentMethod === 'qris'     ? '' : 'none';
      document.getElementById('transferWrap').style.display   = state.paymentMethod === 'transfer' ? '' : 'none';
    });
  });

  document.getElementById('cashReceived').addEventListener('input', recalcChange);
}

// =============================================
// MEMBER DISCOUNT
// =============================================
function initMember() {
  document.getElementById('memberSelect').addEventListener('change', (e) => {
    const level = e.target.value;
    state.memberLevel   = level;
    state.memberDiscount = level ? MEMBER_DISC[level] : 0;
    renderCart();
    if (level) toast(`Diskon member ${level} (${state.memberDiscount * 100}%) diterapkan`, 'info');
  });
}

// =============================================
// CHECKOUT / BAYAR
// =============================================
function initCheckout() {
  document.getElementById('btnCheckout').addEventListener('click', () => {
    if (state.cart.length === 0) { toast('Keranjang masih kosong!', 'warning'); return; }
    const { grand } = calcTotals();
    if (state.paymentMethod === 'tunai' && state.cashReceived < grand) {
      toast('Uang diterima kurang dari total!', 'danger'); return;
    }
    showConfirmModal();
  });

  document.getElementById('btnConfirmPay').addEventListener('click', () => {
    processTransaction();
  });

  document.getElementById('btnCancelPay').addEventListener('click', () => {
    document.getElementById('modalConfirmPay').style.display = 'none';
  });

  document.getElementById('btnClearCart').addEventListener('click', () => {
    if (state.cart.length === 0) return;
    if (confirm('Hapus semua item di keranjang?')) {
      state.cart = [];
      state.memberDiscount = 0;
      state.memberLevel = '';
      document.getElementById('memberSelect').value = '';
      document.getElementById('customerName').value = '';
      renderCart();
      toast('Keranjang dikosongkan', 'info');
    }
  });
}

function showConfirmModal() {
  const { subtotal, discAmt, ppn, grand } = calcTotals();
  const customer = document.getElementById('customerName').value || 'Umum';
  const change   = state.paymentMethod === 'tunai' ? state.cashReceived - grand : 0;
  const methodLabel = { tunai: 'Tunai', debit: 'Kartu Debit', qris: 'QRIS', transfer: 'Transfer Bank' };

  document.getElementById('confirmDetails').innerHTML = `
    <div style="display:flex;justify-content:space-between;margin-bottom:6px;"><span>Pelanggan</span><strong>${customer}</strong></div>
    <div style="display:flex;justify-content:space-between;"><span>Subtotal</span><span>${fmt(subtotal)}</span></div>
    ${discAmt > 0 ? `<div style="display:flex;justify-content:space-between;color:var(--success)"><span>Diskon (${state.memberLevel})</span><span>- ${fmt(discAmt)}</span></div>` : ''}
    <div style="display:flex;justify-content:space-between;"><span>PPN (11%)</span><span>${fmt(ppn)}</span></div>
    <div style="display:flex;justify-content:space-between;border-top:1.5px solid var(--border);margin-top:6px;padding-top:6px;font-size:1rem;"><span><strong>TOTAL</strong></span><strong style="color:var(--primary)">${fmt(grand)}</strong></div>
    <div style="display:flex;justify-content:space-between;margin-top:6px;"><span>Metode</span><strong>${methodLabel[state.paymentMethod]}</strong></div>
    ${state.paymentMethod === 'tunai' ? `
      <div style="display:flex;justify-content:space-between;"><span>Uang Diterima</span><span>${fmt(state.cashReceived)}</span></div>
      <div style="display:flex;justify-content:space-between;"><span>Kembalian</span><strong style="color:var(--success)">${fmt(change)}</strong></div>
    ` : ''}
  `;

  document.getElementById('modalConfirmPay').style.display = 'flex';
}

function processTransaction() {
  const loading = document.getElementById('loadingOverlay');
  loading.style.display = 'flex';
  document.getElementById('modalConfirmPay').style.display = 'none';

  setTimeout(() => {
    const { subtotal, discAmt, ppn, grand } = calcTotals();
    const customer = document.getElementById('customerName').value || 'Umum';
    const change   = state.paymentMethod === 'tunai' ? state.cashReceived - grand : 0;
    const invNo    = invoiceNo();

    // Reduce stock
    state.cart.forEach(item => {
      const prod = PRODUCTS.find(p => p.id === item.product.id);
      if (prod) prod.stock -= item.qty;
    });

    const tx = {
      id: invNo,
      customer,
      member: state.memberLevel,
      items: state.cart.map(c => ({ ...c.product, qty: c.qty, subtotal: c.product.price * c.qty })),
      subtotal,
      discAmt,
      discRate: state.memberDiscount,
      ppn,
      grand,
      paymentMethod: state.paymentMethod,
      cashReceived: state.cashReceived,
      change,
      cashier: 'Budi Santoso',
      time: nowStr(),
      date: today(),
      timestamp: Date.now(),
    };

    state.transactions.unshift(tx);
    state.currentTx = tx;
    saveState();

    // Reset cart
    state.cart = [];
    state.memberDiscount = 0;
    state.memberLevel = '';
    document.getElementById('memberSelect').value = '';
    document.getElementById('customerName').value = '';
    document.getElementById('cashReceived').value = '';
    state.cashReceived = 0;
    renderCart();
    renderProducts();

    loading.style.display = 'none';
    toast('Transaksi berhasil!', 'success');
    showStruk(tx);
  }, 800);
}

// =============================================
// HOLD TRANSACTION
// =============================================
function initHold() {
  document.getElementById('btnHoldTx').addEventListener('click', () => {
    if (state.cart.length === 0) { toast('Keranjang kosong!', 'warning'); return; }
    const customer = document.getElementById('customerName').value || 'Pelanggan ' + (state.heldTransactions.length + 1);
    const { grand } = calcTotals();
    state.heldTransactions.push({
      id: uid(),
      customer,
      cart: [...state.cart],
      memberLevel: state.memberLevel,
      memberDiscount: state.memberDiscount,
      total: grand,
      time: nowStr(),
    });
    state.cart = [];
    state.memberDiscount = 0;
    state.memberLevel = '';
    document.getElementById('memberSelect').value = '';
    document.getElementById('customerName').value = '';
    renderCart();
    saveState();
    toast(`Transaksi "${customer}" ditahan`, 'info');
  });

  // Show held list
  const modalHeld = document.getElementById('modalHeld');
  document.querySelector('.nav-item[data-page="kasir"]').addEventListener('click', () => {
    if (state.heldTransactions.length > 0) {
      setTimeout(renderHeldList, 100);
    }
  });

  document.getElementById('btnCloseHeld').addEventListener('click', () => {
    modalHeld.style.display = 'none';
  });
  modalHeld.addEventListener('click', (e) => { if (e.target === modalHeld) modalHeld.style.display = 'none'; });
}

function renderHeldList() {
  const modal = document.getElementById('modalHeld');
  const list  = document.getElementById('heldList');

  if (state.heldTransactions.length === 0) {
    list.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:20px">Tidak ada transaksi ditahan</p>';
    modal.style.display = 'flex';
    return;
  }

  list.innerHTML = state.heldTransactions.map(h => `
    <div class="held-item">
      <div class="hi-info">
        <div class="hi-name">${h.customer}</div>
        <div class="hi-sub">${h.cart.length} item · ${h.time}</div>
      </div>
      <div class="hi-total">${fmt(h.total)}</div>
      <div class="hi-actions">
        <button class="btn btn-sm btn-primary" onclick="resumeHeld('${h.id}')"><i class="fa-solid fa-play"></i> Lanjut</button>
        <button class="btn btn-sm btn-danger" onclick="deleteHeld('${h.id}')"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>
  `).join('');
  modal.style.display = 'flex';
}

function resumeHeld(id) {
  const held = state.heldTransactions.find(h => h.id === id);
  if (!held) return;
  if (state.cart.length > 0) {
    if (!confirm('Keranjang saat ini akan diganti dengan transaksi yang ditahan. Lanjutkan?')) return;
  }
  state.cart = held.cart;
  state.memberLevel = held.memberLevel;
  state.memberDiscount = held.memberDiscount;
  document.getElementById('memberSelect').value = held.memberLevel;
  document.getElementById('customerName').value = held.customer;
  state.heldTransactions = state.heldTransactions.filter(h => h.id !== id);
  saveState();
  renderCart();
  document.getElementById('modalHeld').style.display = 'none';
  toast(`Transaksi "${held.customer}" dilanjutkan`, 'success');
}

function deleteHeld(id) {
  state.heldTransactions = state.heldTransactions.filter(h => h.id !== id);
  saveState();
  renderHeldList();
}

// =============================================
// STRUK (RECEIPT)
// =============================================
function showStruk(tx) {
  document.getElementById('strukMeta').innerHTML = `
    <div class="sm-row"><span>No. Struk</span><span><b>${tx.id}</b></span></div>
    <div class="sm-row"><span>Tanggal</span><span>${tx.time}</span></div>
    <div class="sm-row"><span>Kasir</span><span>${tx.cashier}</span></div>
    <div class="sm-row"><span>Pelanggan</span><span>${tx.customer}</span></div>
    ${tx.member ? `<div class="sm-row"><span>Member</span><span>${tx.member}</span></div>` : ''}
  `;

  document.getElementById('strukItems').innerHTML = tx.items.map(item => `
    <div class="si-row">
      <div class="si-name">${item.name}</div>
      <div class="si-detail">
        <span>${item.qty} x ${fmt(item.price)}</span>
        <span>${fmt(item.subtotal)}</span>
      </div>
    </div>
  `).join('');

  document.getElementById('strukTotals').innerHTML = `
    <div class="st-row"><span>Subtotal (${tx.items.reduce((s,i)=>s+i.qty,0)} item)</span><span>${fmt(tx.subtotal)}</span></div>
    ${tx.discAmt > 0 ? `<div class="st-row" style="color:var(--success)"><span>Diskon ${tx.member}</span><span>- ${fmt(tx.discAmt)}</span></div>` : ''}
    <div class="st-row"><span>PPN 11%</span><span>${fmt(tx.ppn)}</span></div>
    <div class="st-row total"><span>TOTAL</span><span>${fmt(tx.grand)}</span></div>
  `;

  const methodLabel = { tunai:'Tunai', debit:'Kartu Debit', qris:'QRIS', transfer:'Transfer Bank' };
  document.getElementById('strukPayment').innerHTML = `
    <div class="sm-row"><span>Metode</span><span>${methodLabel[tx.paymentMethod]}</span></div>
    ${tx.paymentMethod === 'tunai' ? `
      <div class="sm-row"><span>Dibayar</span><span>${fmt(tx.cashReceived)}</span></div>
      <div class="sm-row"><span>Kembalian</span><span><b>${fmt(tx.change)}</b></span></div>
    ` : '<div class="sm-row"><span>Status</span><span><b>LUNAS</b></span></div>'}
  `;

  document.getElementById('strukBarcode').textContent = tx.id;
  document.getElementById('modalStruk').style.display = 'flex';
}

function initStruk() {
  document.getElementById('btnPrintStruk').addEventListener('click', () => {
    window.print();
  });

  document.getElementById('btnPrintInvoice').addEventListener('click', () => {
    document.getElementById('modalStruk').style.display = 'none';
    if (state.currentTx) showInvoice(state.currentTx);
  });

  document.getElementById('btnNewTransaction').addEventListener('click', () => {
    document.getElementById('modalStruk').style.display = 'none';
    state.currentTx = null;
    toast('Siap transaksi baru', 'info', 1500);
  });

  document.getElementById('modalStruk').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modalStruk')) {
      document.getElementById('modalStruk').style.display = 'none';
    }
  });
}

// =============================================
// INVOICE
// =============================================
function showInvoice(tx) {
  document.getElementById('invoiceIdDisplay').textContent = tx.id + ' · ' + tx.time;

  document.getElementById('invoiceInfoRow').innerHTML = `
    <div class="ii-block">
      <strong>Tagihan Kepada</strong>
      ${tx.customer}<br>
      ${tx.member ? `Member: ${tx.member}` : 'Non-Member'}
    </div>
    <div class="ii-block" style="text-align:right">
      <strong>Info Transaksi</strong>
      Tanggal: ${tx.time}<br>
      Kasir: ${tx.cashier}<br>
      Metode: ${{ tunai:'Tunai', debit:'Kartu Debit', qris:'QRIS', transfer:'Transfer Bank' }[tx.paymentMethod]}
    </div>
  `;

  document.getElementById('invoiceTableBody').innerHTML = tx.items.map((item, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>${item.name}</td>
      <td style="text-align:center">${item.qty}</td>
      <td>${fmt(item.price)}</td>
      <td>${fmt(item.subtotal)}</td>
    </tr>
  `).join('');

  document.getElementById('invoiceTotals').innerHTML = `
    <div class="it-row"><span>Subtotal</span><span>${fmt(tx.subtotal)}</span></div>
    ${tx.discAmt > 0 ? `<div class="it-row" style="color:var(--success)"><span>Diskon Member (${tx.member})</span><span>- ${fmt(tx.discAmt)}</span></div>` : ''}
    <div class="it-row"><span>PPN (11%)</span><span>${fmt(tx.ppn)}</span></div>
    <div class="it-row total"><span>TOTAL BAYAR</span><span>${fmt(tx.grand)}</span></div>
  `;

  document.getElementById('modalInvoice').style.display = 'flex';
}

function initInvoice() {
  document.getElementById('btnCloseInvoice').addEventListener('click', () => {
    document.getElementById('modalInvoice').style.display = 'none';
  });
  document.getElementById('btnDownloadInvoice').addEventListener('click', () => {
    window.print();
  });
  document.getElementById('modalInvoice').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modalInvoice')) {
      document.getElementById('modalInvoice').style.display = 'none';
    }
  });
}

// =============================================
// SEARCH & SCAN
// =============================================
function initSearch() {
  const input = document.getElementById('searchProduct');
  let timeout;
  input.addEventListener('input', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => renderProducts(input.value.trim()), 250);
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const q = input.value.trim();
      const exact = PRODUCTS.find(p => p.barcode === q || p.id === q.toUpperCase());
      if (exact) { addToCart(exact.id); input.value = ''; renderProducts(); }
    }
  });

  document.getElementById('btnScanBarcode').addEventListener('click', () => {
    const code = prompt('Masukkan barcode / kode produk:');
    if (!code) return;
    const prod = PRODUCTS.find(p => p.barcode === code.trim() || p.id === code.trim().toUpperCase());
    if (prod) { addToCart(prod.id); toast(`Produk ditemukan: ${prod.name}`, 'success'); }
    else toast('Produk tidak ditemukan', 'danger');
  });
}

// =============================================
// BOOKING
// =============================================
function initBooking() {
  document.getElementById('btnNewBooking').addEventListener('click', () => {
    const card = document.getElementById('bookingFormCard');
    card.style.display = card.style.display === 'none' ? '' : 'none';
    if (card.style.display !== 'none') initBookingForm();
  });
  document.getElementById('btnCancelBooking').addEventListener('click', () => {
    document.getElementById('bookingFormCard').style.display = 'none';
    resetBookingForm();
  });
  document.getElementById('btnSaveBooking').addEventListener('click', saveBooking);
  document.getElementById('btnAddBookingProduct').addEventListener('click', addBookingProductRow);
  document.getElementById('searchBooking').addEventListener('input', renderBookingTable);
  document.getElementById('filterBookingStatus').addEventListener('change', renderBookingTable);

  // Default date = tomorrow
  const bkDate = document.getElementById('bkDate');
  const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 1);
  bkDate.value = tomorrow.toISOString().split('T')[0];
}

function initBookingForm() {
  document.getElementById('bookingProductList').innerHTML = '';
  addBookingProductRow();
}

function addBookingProductRow() {
  const list = document.getElementById('bookingProductList');
  const row = document.createElement('div');
  row.className = 'booking-product-row';
  row.innerHTML = `
    <select class="bk-product-select">
      <option value="">— Pilih Produk —</option>
      ${PRODUCTS.map(p => `<option value="${p.id}">${p.emoji} ${p.name} (${fmt(p.price)})</option>`).join('')}
    </select>
    <input type="number" class="bk-qty" value="1" min="1" placeholder="Qty" />
    <button class="btn-icon" onclick="this.closest('.booking-product-row').remove()"><i class="fa-solid fa-trash"></i></button>
  `;
  list.appendChild(row);
}

function saveBooking() {
  const customer = document.getElementById('bkCustomer').value.trim();
  const phone    = document.getElementById('bkPhone').value.trim();
  const date     = document.getElementById('bkDate').value;
  const time     = document.getElementById('bkTime').value;
  const note     = document.getElementById('bkNote').value.trim();

  if (!customer) { toast('Nama pelanggan wajib diisi!', 'warning'); return; }
  if (!date)     { toast('Tanggal pengambilan wajib diisi!', 'warning'); return; }

  const rows = document.querySelectorAll('#bookingProductList .booking-product-row');
  const products = [];
  let valid = true;
  rows.forEach(row => {
    const pid = row.querySelector('.bk-product-select').value;
    const qty = parseInt(row.querySelector('.bk-qty').value) || 0;
    if (!pid) { toast('Pilih produk terlebih dahulu!', 'warning'); valid = false; return; }
    if (qty <= 0) { toast('Jumlah produk harus lebih dari 0!', 'warning'); valid = false; return; }
    const prod = PRODUCTS.find(p => p.id === pid);
    products.push({ ...prod, qty, subtotal: prod.price * qty });
  });
  if (!valid || products.length === 0) { toast('Tambahkan minimal satu produk!', 'warning'); return; }

  const total = products.reduce((s, p) => s + p.subtotal, 0);
  const booking = {
    id: 'BK-' + uid().slice(0,8),
    customer, phone, date, time, note,
    products,
    total,
    status: 'menunggu',
    createdAt: nowStr(),
  };

  state.bookings.unshift(booking);
  saveState();
  renderBookingTable();
  document.getElementById('bookingFormCard').style.display = 'none';
  resetBookingForm();
  toast(`Booking #${booking.id} berhasil disimpan!`, 'success');
}

function resetBookingForm() {
  document.getElementById('bkCustomer').value = '';
  document.getElementById('bkPhone').value    = '';
  document.getElementById('bkNote').value     = '';
  document.getElementById('bookingProductList').innerHTML = '';
}

function renderBookingTable() {
  const search = document.getElementById('searchBooking').value.toLowerCase();
  const status = document.getElementById('filterBookingStatus').value;

  let list = state.bookings.filter(b => {
    const matchSearch = !search || b.customer.toLowerCase().includes(search) || b.id.toLowerCase().includes(search);
    const matchStatus = !status || b.status === status;
    return matchSearch && matchStatus;
  });

  const tbody = document.getElementById('bookingTableBody');
  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;padding:30px;color:var(--text-muted)">Tidak ada data booking</td></tr>`;
    return;
  }

  tbody.innerHTML = list.map(b => `
    <tr>
      <td><strong>${b.id}</strong></td>
      <td>${b.customer}${b.phone ? `<br><small style="color:var(--text-muted)">${b.phone}</small>` : ''}</td>
      <td>${formatDate(b.date)} ${b.time}</td>
      <td>${b.products.length} item<br><small style="color:var(--text-muted)">${fmt(b.total)}</small></td>
      <td><span class="badge badge-${b.status}">${capitalize(b.status)}</span></td>
      <td>
        <div class="action-btns">
          ${b.status === 'menunggu' ? `
            <button class="btn btn-sm btn-primary" onclick="processBooking('${b.id}')"><i class="fa-solid fa-play"></i> Proses</button>
            <button class="btn btn-sm btn-danger"  onclick="cancelBooking('${b.id}')"><i class="fa-solid fa-xmark"></i></button>
          ` : ''}
          ${b.status === 'diproses' ? `
            <button class="btn btn-sm btn-success" onclick="completeBooking('${b.id}')"><i class="fa-solid fa-check"></i> Selesai</button>
          ` : ''}
          ${b.status === 'selesai' || b.status === 'batal' ? `<span style="color:var(--text-muted);font-size:.82rem">${b.status === 'selesai' ? 'Selesai' : 'Dibatalkan'}</span>` : ''}
        </div>
      </td>
    </tr>
  `).join('');
}

function processBooking(id) {
  const bk = state.bookings.find(b => b.id === id);
  if (!bk) return;
  bk.status = 'diproses';
  saveState();
  renderBookingTable();
  toast(`Booking ${id} sedang diproses`, 'info');
}

function completeBooking(id) {
  const bk = state.bookings.find(b => b.id === id);
  if (!bk) return;
  // Load booking items into cart
  bk.products.forEach(p => {
    const existing = state.cart.find(c => c.product.id === p.id);
    if (existing) existing.qty += p.qty;
    else state.cart.push({ product: PRODUCTS.find(pr => pr.id === p.id) || p, qty: p.qty, discount: 0 });
  });
  document.getElementById('customerName').value = bk.customer;
  bk.status = 'selesai';
  saveState();
  renderCart();
  navigateTo('kasir');
  toast(`Booking ${id} dimuat ke kasir`, 'success');
}

function cancelBooking(id) {
  if (!confirm('Batalkan booking ini?')) return;
  const bk = state.bookings.find(b => b.id === id);
  if (bk) { bk.status = 'batal'; saveState(); renderBookingTable(); toast(`Booking ${id} dibatalkan`, 'warning'); }
}

// =============================================
// RETUR / PENGEMBALIAN
// =============================================
function initRetur() {
  document.getElementById('btnSearchRetur').addEventListener('click', searchReturInvoice);
  document.getElementById('returInvoiceNo').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') searchReturInvoice();
  });
  document.getElementById('btnProcessRetur').addEventListener('click', processRetur);
  document.getElementById('returReason').addEventListener('change', (e) => {
    document.getElementById('returNoteGroup').style.display = e.target.value === 'Lainnya' ? '' : 'none';
  });
}

function searchReturInvoice() {
  const no = document.getElementById('returInvoiceNo').value.trim().toUpperCase();
  if (!no) { toast('Masukkan nomor invoice!', 'warning'); return; }

  const tx = state.transactions.find(t => t.id === no);
  if (!tx) { toast('Invoice tidak ditemukan!', 'danger'); return; }

  // Check if already returned
  const existingRetur = state.returs.filter(r => r.refInvoice === no);
  const returnedItems = {};
  existingRetur.forEach(r => r.items.forEach(i => {
    returnedItems[i.id] = (returnedItems[i.id] || 0) + i.returQty;
  }));

  document.getElementById('returTxInfo').innerHTML = `
    <strong>Invoice:</strong> ${tx.id}<br>
    <strong>Pelanggan:</strong> ${tx.customer}<br>
    <strong>Tanggal:</strong> ${tx.time}<br>
    <strong>Total:</strong> ${fmt(tx.grand)}<br>
    <strong>Pembayaran:</strong> ${{ tunai:'Tunai', debit:'Kartu Debit', qris:'QRIS', transfer:'Transfer Bank' }[tx.paymentMethod]}
  `;

  const availableItems = tx.items.filter(i => (returnedItems[i.id] || 0) < i.qty);
  if (availableItems.length === 0) {
    toast('Semua item sudah pernah diretur!', 'warning');
    document.getElementById('returTxDetail').style.display = 'none';
    return;
  }

  document.getElementById('returItemsList').innerHTML = availableItems.map(item => {
    const maxReturn = item.qty - (returnedItems[item.id] || 0);
    return `
      <div class="retur-item-row" data-id="${item.id}" data-price="${item.price}">
        <label>
          <input type="checkbox" class="retur-check" data-id="${item.id}" data-max="${maxReturn}" />
          ${item.emoji} ${item.name}
        </label>
        <span class="ri-qty">
          Maks: ${maxReturn} pcs
          <input type="number" class="retur-qty-input" data-id="${item.id}" value="1" min="1" max="${maxReturn}" style="width:55px;margin-left:6px;border:1.5px solid var(--border);border-radius:5px;padding:3px 6px;" />
        </span>
        <span class="ri-price">${fmt(item.price)}</span>
      </div>
    `;
  }).join('');

  document.querySelectorAll('.retur-check').forEach(cb => {
    cb.addEventListener('change', updateReturSummary);
  });
  document.querySelectorAll('.retur-qty-input').forEach(inp => {
    inp.addEventListener('input', updateReturSummary);
  });

  document.getElementById('returTxDetail').style.display = '';
  document.getElementById('returSummary').innerHTML = '';
  updateReturSummary();
}

function updateReturSummary() {
  let total = 0;
  let count = 0;
  document.querySelectorAll('.retur-check:checked').forEach(cb => {
    const id = cb.dataset.id;
    const row = document.querySelector(`.retur-item-row[data-id="${id}"]`);
    const price = parseFloat(row.dataset.price);
    const qtyInp = row.querySelector('.retur-qty-input');
    const max = parseInt(cb.dataset.max);
    let qty = parseInt(qtyInp.value) || 1;
    if (qty > max) { qty = max; qtyInp.value = max; }
    if (qty < 1)   { qty = 1; qtyInp.value = 1; }
    total += price * qty;
    count += qty;
  });

  const summary = document.getElementById('returSummary');
  if (count === 0) { summary.innerHTML = ''; return; }

  const refund = total; // full refund (no tax recalc for simplicity)
  summary.innerHTML = `
    <div class="rs-row"><span>Item diretur</span><span>${count} pcs</span></div>
    <div class="rs-row"><span>Total harga item</span><span>${fmt(total)}</span></div>
    <div class="rs-row rs-total"><span>Total Refund</span><span>${fmt(refund)}</span></div>
  `;
}

function processRetur() {
  const no     = document.getElementById('returInvoiceNo').value.trim().toUpperCase();
  const reason = document.getElementById('returReason').value;
  const refundMethod = document.getElementById('returRefundMethod').value;

  if (!reason) { toast('Pilih alasan pengembalian!', 'warning'); return; }

  const checkedItems = [];
  document.querySelectorAll('.retur-check:checked').forEach(cb => {
    const id = cb.dataset.id;
    const row = document.querySelector(`.retur-item-row[data-id="${id}"]`);
    const price = parseFloat(row.dataset.price);
    const qty   = parseInt(row.querySelector('.retur-qty-input').value) || 1;
    const name  = row.querySelector('label').textContent.trim();
    checkedItems.push({ id, name, returQty: qty, price, subtotal: price * qty });
  });

  if (checkedItems.length === 0) { toast('Pilih minimal satu item untuk diretur!', 'warning'); return; }

  const totalRefund = checkedItems.reduce((s, i) => s + i.subtotal, 0);
  const note = document.getElementById('returNote').value.trim();

  const retur = {
    id: 'RT-' + uid().slice(0,8),
    refInvoice: no,
    customer: state.transactions.find(t => t.id === no)?.customer || '-',
    items: checkedItems,
    totalRefund,
    reason: reason === 'Lainnya' ? note || reason : reason,
    refundMethod,
    processedBy: 'Budi Santoso',
    time: nowStr(),
    date: today(),
  };

  // Restore stock
  checkedItems.forEach(item => {
    const prod = PRODUCTS.find(p => p.id === item.id);
    if (prod) prod.stock += item.returQty;
  });

  state.returs.unshift(retur);
  saveState();
  renderReturTable();
  renderProducts();

  // Reset form
  document.getElementById('returTxDetail').style.display = 'none';
  document.getElementById('returInvoiceNo').value = '';
  document.getElementById('returReason').value    = '';

  toast(`Retur ${retur.id} berhasil! Refund ${fmt(totalRefund)} via ${refundMethod}`, 'success', 4000);
}

function renderReturTable() {
  const tbody = document.getElementById('returTableBody');
  if (state.returs.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;padding:30px;color:var(--text-muted)">Belum ada riwayat pengembalian</td></tr>`;
    return;
  }
  tbody.innerHTML = state.returs.map(r => `
    <tr>
      <td><strong>${r.id}</strong></td>
      <td>${r.refInvoice}</td>
      <td>${r.customer}</td>
      <td style="color:var(--success);font-weight:700">${fmt(r.totalRefund)}</td>
      <td>${r.reason}</td>
      <td>${r.time}</td>
    </tr>
  `).join('');
}

// =============================================
// RIWAYAT TRANSAKSI
// =============================================
function renderHistoryTable() {
  const search      = document.getElementById('searchHistory').value.toLowerCase();
  const dateFrom    = document.getElementById('filterDateFrom').value;
  const dateTo      = document.getElementById('filterDateTo').value;
  const payMethod   = document.getElementById('filterPaymentMethod').value;

  let list = state.transactions.filter(tx => {
    const matchSearch  = !search || tx.id.toLowerCase().includes(search) || tx.customer.toLowerCase().includes(search);
    const matchDateFrom= !dateFrom || tx.date >= dateFrom;
    const matchDateTo  = !dateTo   || tx.date <= dateTo;
    const matchMethod  = !payMethod || tx.paymentMethod === payMethod;
    return matchSearch && matchDateFrom && matchDateTo && matchMethod;
  });

  const total    = list.length;
  const page     = state.historyPage;
  const perPage  = state.historyPerPage;
  const start    = (page - 1) * perPage;
  const paginated= list.slice(start, start + perPage);

  const tbody = document.getElementById('historyTableBody');
  if (paginated.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;padding:30px;color:var(--text-muted)">Tidak ada transaksi</td></tr>`;
  } else {
    const methodLabel = { tunai:'Tunai', debit:'Debit', qris:'QRIS', transfer:'Transfer' };
    tbody.innerHTML = paginated.map(tx => `
      <tr>
        <td><strong style="color:var(--primary)">${tx.id}</strong></td>
        <td>${tx.customer}${tx.member ? ` <span class="badge badge-diproses" style="font-size:.7rem">${tx.member}</span>` : ''}</td>
        <td style="font-weight:700">${fmt(tx.grand)}</td>
        <td><span class="badge badge-selesai">${methodLabel[tx.paymentMethod] || tx.paymentMethod}</span></td>
        <td>${tx.cashier}</td>
        <td>${tx.time}</td>
        <td>
          <div class="action-btns">
            <button class="btn btn-sm btn-outline" onclick="viewStrukFromHistory('${tx.id}')"><i class="fa-solid fa-receipt"></i></button>
            <button class="btn btn-sm btn-primary" onclick="viewInvoiceFromHistory('${tx.id}')"><i class="fa-solid fa-file-invoice"></i></button>
          </div>
        </td>
      </tr>
    `).join('');
  }

  renderHistoryPagination(total, page, perPage);
}

function renderHistoryPagination(total, current, perPage) {
  const pages = Math.ceil(total / perPage);
  const pg = document.getElementById('historyPagination');
  if (pages <= 1) { pg.innerHTML = ''; return; }
  let html = '';
  for (let i = 1; i <= pages; i++) {
    html += `<button class="pg-btn ${i === current ? 'active' : ''}" onclick="gotoHistoryPage(${i})">${i}</button>`;
  }
  pg.innerHTML = html;
}

function gotoHistoryPage(n) {
  state.historyPage = n;
  renderHistoryTable();
}

function viewStrukFromHistory(id) {
  const tx = state.transactions.find(t => t.id === id);
  if (tx) showStruk(tx);
}

function viewInvoiceFromHistory(id) {
  const tx = state.transactions.find(t => t.id === id);
  if (tx) showInvoice(tx);
}

function initHistory() {
  document.getElementById('btnApplyFilter').addEventListener('click', () => {
    state.historyPage = 1;
    renderHistoryTable();
  });
  document.getElementById('searchHistory').addEventListener('input', () => {
    state.historyPage = 1;
    renderHistoryTable();
  });
  document.getElementById('btnExportCSV').addEventListener('click', exportCSV);
}

function exportCSV() {
  if (state.transactions.length === 0) { toast('Tidak ada data untuk diekspor!', 'warning'); return; }
  const header = ['No Invoice', 'Pelanggan', 'Member', 'Subtotal', 'Diskon', 'PPN', 'Total', 'Metode Bayar', 'Kasir', 'Waktu'];
  const rows = state.transactions.map(tx => [
    tx.id, tx.customer, tx.member || '-',
    tx.subtotal, tx.discAmt, tx.ppn, tx.grand,
    tx.paymentMethod, tx.cashier, tx.time
  ]);
  const csv = [header, ...rows].map(r => r.join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = `FreshMart_Transaksi_${today()}.csv`;
  a.click(); URL.revokeObjectURL(url);
  toast('CSV berhasil diekspor!', 'success');
}

// =============================================
// LAPORAN
// =============================================
function renderLaporan() {
  const period = document.getElementById('reportPeriod').value;
  const now    = new Date();

  const filtered = state.transactions.filter(tx => {
    const d = new Date(tx.timestamp);
    if (period === 'today') return tx.date === today();
    if (period === 'week') {
      const weekAgo = new Date(now); weekAgo.setDate(weekAgo.getDate() - 7);
      return d >= weekAgo;
    }
    if (period === 'month') {
      return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    }
    return true;
  });

  const revenue   = filtered.reduce((s, tx) => s + tx.grand, 0);
  const txCount   = filtered.length;
  const itemsSold = filtered.reduce((s, tx) => s + tx.items.reduce((ss, i) => ss + i.qty, 0), 0);
  const returCount= state.returs.filter(r => period === 'today' ? r.date === today() : true).length;

  document.getElementById('statRevenue').textContent = fmt(revenue);
  document.getElementById('statTx').textContent      = fmtNum(txCount);
  document.getElementById('statItems').textContent   = fmtNum(itemsSold);
  document.getElementById('statRetur').textContent   = fmtNum(returCount);

  // Top products
  const productSales = {};
  filtered.forEach(tx => tx.items.forEach(i => {
    productSales[i.name] = (productSales[i.name] || 0) + i.qty;
  }));
  const sorted = Object.entries(productSales).sort((a, b) => b[1] - a[1]).slice(0, 7);
  const maxSold = sorted[0]?.[1] || 1;

  document.getElementById('topProductList').innerHTML = sorted.length === 0
    ? '<p style="color:var(--text-muted);font-size:.88rem">Belum ada data penjualan</p>'
    : sorted.map(([name, qty], i) => `
      <div class="top-product-item">
        <div class="tp-rank">${i + 1}</div>
        <div class="tp-bar-wrap">
          <div class="tp-name">${name}</div>
          <div class="tp-bar" style="width:${(qty/maxSold*100).toFixed(1)}%"></div>
        </div>
        <div class="tp-sold">${qty} terjual</div>
      </div>
    `).join('');

  // Payment chart
  const payTotals = { tunai: 0, debit: 0, qris: 0, transfer: 0 };
  filtered.forEach(tx => { payTotals[tx.paymentMethod] = (payTotals[tx.paymentMethod] || 0) + 1; });
  const totalPay = Object.values(payTotals).reduce((s, v) => s + v, 0) || 1;
  const payColors = { tunai: '#2563eb', debit: '#16a34a', qris: '#7c3aed', transfer: '#d97706' };
  const payLabels = { tunai: 'Tunai', debit: 'Debit', qris: 'QRIS', transfer: 'Transfer' };

  document.getElementById('paymentChart').innerHTML = Object.entries(payTotals)
    .filter(([, v]) => v > 0)
    .map(([key, val]) => {
      const pct = ((val / totalPay) * 100).toFixed(1);
      return `
        <div class="pc-row">
          <div class="pc-label">${payLabels[key]}</div>
          <div class="pc-bar-wrap"><div class="pc-bar" style="width:${pct}%;background:${payColors[key]}"></div></div>
          <div class="pc-pct">${pct}%</div>
        </div>
      `;
    }).join('') || '<p style="color:var(--text-muted);font-size:.88rem">Belum ada data</p>';
}

function initLaporan() {
  document.getElementById('reportPeriod').addEventListener('change', renderLaporan);
}

// =============================================
// DEMO DATA (jika localStorage kosong)
// =============================================
function seedDemoData() {
  if (state.transactions.length > 0) return;

  const demoTxs = [
    { items: [{ id:'P001', qty:2 }, { id:'P054', qty:3 }, { id:'P010', qty:5 }], method:'tunai',    customer:'Dewi Sartika',   member:'GOLD' },
    { items: [{ id:'P061', qty:1 }, { id:'P068', qty:2 }, { id:'P074', qty:1 }], method:'qris',     customer:'Andi Wijaya',    member:'' },
    { items: [{ id:'P013', qty:2 }, { id:'P020', qty:3 }, { id:'P019', qty:1 }], method:'debit',    customer:'Siti Rahayu',    member:'SILVER' },
    { items: [{ id:'P027', qty:1 }, { id:'P029', qty:2 }, { id:'P032', qty:1 }], method:'transfer', customer:'Bagas Nugroho',  member:'' },
    { items: [{ id:'P003', qty:1 }, { id:'P005', qty:2 }, { id:'P007', qty:3 }], method:'tunai',    customer:'Umum',           member:'' },
    { items: [{ id:'P056', qty:4 }, { id:'P057', qty:2 }, { id:'P063', qty:3 }], method:'qris',     customer:'Rizky Pratama',  member:'PLATINUM' },
    { items: [{ id:'P044', qty:2 }, { id:'P046', qty:4 }, { id:'P051', qty:1 }], method:'tunai',    customer:'Ibu Hartati',    member:'SILVER' },
    { items: [{ id:'P036', qty:2 }, { id:'P038', qty:1 }, { id:'P042', qty:3 }], method:'debit',    customer:'Pak Rudi',       member:'' },
  ];

  demoTxs.forEach((demo, idx) => {
    const memDisc = demo.member ? MEMBER_DISC[demo.member] : 0;
    const items = demo.items.map(d => {
      const p = PRODUCTS.find(pr => pr.id === d.id);
      return { ...p, qty: d.qty, subtotal: p.price * d.qty };
    });
    const subtotal = items.reduce((s, i) => s + i.subtotal, 0);
    const discAmt  = subtotal * memDisc;
    const ppn      = (subtotal - discAmt) * PPN_RATE;
    const grand    = subtotal - discAmt + ppn;

    const dt = new Date();
    dt.setHours(dt.getHours() - (idx * 2 + 1));

    state.transactions.push({
      id: invoiceNo(),
      customer: demo.customer, member: demo.member,
      items, subtotal, discAmt, discRate: memDisc, ppn, grand,
      paymentMethod: demo.method,
      cashReceived: demo.method === 'tunai' ? roundUp(grand, 10000) : grand,
      change: demo.method === 'tunai' ? roundUp(grand, 10000) - grand : 0,
      cashier: 'Budi Santoso',
      time: dt.toLocaleDateString('id-ID', { day:'2-digit', month:'2-digit', year:'numeric' })
        + ' ' + dt.toLocaleTimeString('id-ID', { hour:'2-digit', minute:'2-digit' }),
      date: dt.toISOString().split('T')[0],
      timestamp: dt.getTime(),
    });
  });

  // Demo booking
  state.bookings.push({
    id: 'BK-DEMO001',
    customer: 'Ibu Hartini', phone: '0812-3456-7890',
    date: (() => { const d = new Date(); d.setDate(d.getDate()+2); return d.toISOString().split('T')[0]; })(),
    time: '10:00',
    note: 'Tolong siapkan lebih awal',
    products: [
      { ...PRODUCTS.find(p=>p.id==='P001'), qty: 3, subtotal: PRODUCTS.find(p=>p.id==='P001').price * 3 },
      { ...PRODUCTS.find(p=>p.id==='P003'), qty: 2, subtotal: PRODUCTS.find(p=>p.id==='P003').price * 2 },
    ],
    total: PRODUCTS.find(p=>p.id==='P001').price * 3 + PRODUCTS.find(p=>p.id==='P003').price * 2,
    status: 'menunggu',
    createdAt: nowStr(),
  });

  saveState();
}

// =============================================
// HELPERS
// =============================================
function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function formatDate(dateStr) {
  if (!dateStr) return '-';
  const [y, m, d] = dateStr.split('-');
  return `${d}/${m}/${y}`;
}

// =============================================
// KEYBOARD SHORTCUTS
// =============================================
function initShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (e.altKey) {
      switch (e.key) {
        case '1': navigateTo('kasir');   break;
        case '2': navigateTo('booking'); break;
        case '3': navigateTo('retur');   break;
        case '4': navigateTo('riwayat'); break;
        case '5': navigateTo('laporan'); break;
      }
    }
    // F2 = fokus search
    if (e.key === 'F2') {
      document.getElementById('searchProduct').focus();
      e.preventDefault();
    }
    // F4 = bayar
    if (e.key === 'F4') {
      document.getElementById('btnCheckout').click();
      e.preventDefault();
    }
    // ESC = tutup modal
    if (e.key === 'Escape') {
      ['modalStruk','modalInvoice','modalConfirmPay','modalHeld'].forEach(id => {
        document.getElementById(id).style.display = 'none';
      });
    }
  });
}

// =============================================
// INIT
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  seedDemoData();

  startClock();
  initSidebar();
  initSearch();
  initPaymentMethods();
  initMember();
  initCheckout();
  initHold();
  initStruk();
  initInvoice();
  initBooking();
  initRetur();
  initHistory();
  initLaporan();
  initShortcuts();

  renderCategories();
  renderProducts();
  renderCart();

  // Focus search on load
  setTimeout(() => document.getElementById('searchProduct').focus(), 300);

  toast('Selamat datang, Budi Santoso! Shift Pagi dimulai.', 'info', 4000);
  console.info('%cFreshMart POS v1.0', 'color:#2563eb;font-size:16px;font-weight:bold;');
  console.info('Shortcut: Alt+1~5 navigasi | F2 cari produk | F4 bayar | ESC tutup modal');
});
