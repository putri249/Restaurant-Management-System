FOOD ORDER WEB PROTOTYPE
========================

Deskripsi:
Prototype antarmuka web pemesanan makanan berbasis HTML, CSS, dan JavaScript dengan desain responsive menggunakan pendekatan mobile-first.

Cara Menjalankan:
1. Buka folder project menggunakan Visual Studio Code
2. Pilih file HTML utama
3. Jalankan menggunakan extension Live Server

Alternatif: File HTML juga dapat dibuka langsung melalui browser menggunakan File Explorer

Alur Penggunaan Aplikasi
1. Pengguna membuka halaman Login
2. Pengguna memilih role:
- Admin
- Penjual
3. Jika belum memiliki akun, pengguna dapat membuka halaman Register
4. Setelah login:
- Admin diarahkan ke Dashboard Admin
- Penjual diarahkan ke Dashboard Penjual
5. Pengguna dapat mengakses halaman:
- Dashboard
- Operasional
- Pesanan
- Profile
6. Pada halaman Operasional, pengguna dapat:
- Menambah pesanan
- Mengubah status pesanan
- Melihat total pesanan otomatis
7. Pada halaman Pesanan, pengguna dapat mencari data pelanggan secara realtime
8. Pada halaman Profile, pengguna dapat memperbarui data profil dan melakukan simulasi logout

Fitur UI yang Telah Selesai

Login Page
- Form login
- Pilihan role pengguna (Admin/Penjual)
- Show/hide password
- Responsive layout

Register Page
- Form registrasi
- Validasi input
- Konfirmasi password
- Show/hide password
- Responsive layout

Dashboard
- Tampilan dashboard utama
- Sidebar dan mobile navigation
- Responsive design

Dashboard Admin
- Tampilan dashboard utama
- Sidebar dan mobile navigation
- Responsive design

Operasional Page
- Tambah data pesanan
- Status pesanan (Proses, Siap, Batal)
- Manipulasi DOM menggunakan JavaScript
- Event listener pada tombol aksi
- Perhitungan total pesanan otomatis

Pesanan Page
- Tabel status pesanan
- Fitur pencarian pelanggan secara realtime
- Status badge

Profile Page
- Update profile
- Show/hide password
- Simulasi ubah foto
- Simulasi ganti password
- Simulasi logout

Responsive Design
Project menggunakan metode mobile-first dengan media query:
- Mobile
- Tablet
- Desktop