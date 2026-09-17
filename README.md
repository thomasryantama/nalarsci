# 🔬 NalarSci Lab — Ekosistem Belajar Sains, KKA & Layanan Kesiswaan

[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-blue?logo=github)](https://nalarsci.id)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38bdf8?logo=tailwind-css)](https://tailwindcss.com)
[![Google Apps Script](https://img.shields.io/badge/Backend-Google%20Apps%20Script-34a853?logo=google-sheets)](https://developers.google.com/apps-script)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**NalarSci Lab** (`nalarsci.id`) adalah platform web pendidikan terpadu berbasis *client-side static architecture* yang dirancang untuk mendukung pembelajaran komputasi, sains interaktif, apresiasi prestasi siswa, dan administrasi kesiswaan digital tanpa beban biaya server bulanan (*zero-server-cost*).

---

## 🌟 Fitur & Modul Utama

### 1. Ruang Eksplorasi Sains & Komputasi (Lab KKA)
* **Galeri Karya Siswa (`/galeri-karya`):** Etalase proyek Scratch, animasi komputasi, poster digital, dan dokumentasi riset siswa yang terhubung dinamis ke Google Sheets API.
* **Game Edukasi & Simulasi:**
  * ♻️ **Detektif Sampah (`/game-pilah`):** Latihan klasifikasi sampah organik, anorganik, dan limbah B3.
  * 🌋 **Siaga Bencana (`/game-siaga`):** Simulasi mitigasi jalur evakuasi gempa dan erupsi.
  * 🤖 **Misi Rover & Kripto (`/game-rover`):** Pengenalan algoritma sekuensial dan logika dekripsi.

### 2. Layanan Kesiswaan & Kedisiplinan
* **Papan Prestasi Juara (`/prestasi-siswa`):** *Hall of Fame* pencapaian medali/penghargaan siswa dengan panel input cepat khusus Wakasis yang dilindungi PIN.
* **Portal Kesiswaan & BK (`/kesiswaan`):**
  * Gerbang keamanan *Master-Key* di sisi server (mencegah akses data sensitif oleh publik).
  * Buku kasus dan catatan pembinaan restoratif siswa.
  * Pencatatan keterlambatan harian dengan otomatisasi counter akumulasi bulanan dan penetapan SP/Panggilan Orang Tua.
* **Suara Kita (`/suara-kita`):** Kanal pengaduan anonim dan konseling pencegahan perundungan.

### 3. Ruang Belajar & Alat Guru
* **Ruang Materi & Refleksi (`/ruang-materi`):** Pusat unduh modul/slide PPT lokakarya, kantung pengumpulan link tugas, dan survei kepuasan/refleksi sesi.
* **Generator Slide Canva (`/generator-media`):** Alat bantu perancangan LKPD/materi aktif berbasis inkuiri dengan format data siap ekspor ke *Bulk Create* Canva.

---

## 🏗️ Arsitektur Sistem

```text
[ Pengguna / Siswa / Wali Murid ]
               │
               ▼
   [ GitHub Pages (nalarsci.id) ]
    (HTML5 + Tailwind CSS CDN)
               │
               │ Fetch / JSON-REST via POST & GET
               ▼
 [ Google Apps Script (Serverless API) ]
               │
               ▼
[ Google Sheets Database (Pribadi & Aman) ]
