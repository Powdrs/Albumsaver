# Powdrs Albumsaver
Bot menghasilkan tautan yang dapat dibagikan di dalam telegram untuk video, photo, dokumen dan bisa berbagi secara grup.


<a href="https://heroku.com/deploy?template=https://github.com/Powdrs/Albumsaver">
  <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy">
</a>
<br>
Ganti tautan dengan template github Anda.
</br>

<br>
<a href="https://youtu.be/zw_ijvhzomI">
Klik di sini untuk menonton cara meng-host
</a>
<br>
Detail yang diperlukan.

<code>TOKEN</code> - Dapatkan Token Bot dari Bot father.

<code>DOMAIN</code> - Sama dengan nama aplikasi yang Anda masukkan di Heroku.

<code>ADMIN</code> - ID Akun Anda (jika Anda tidak dapat menemukannya menggunakan bot seperti @getmyid_bot).

<code>BOTUSERNAME</code> - Nama pengguna bot Anda tanpa '@'.

<code>DB_URL</code> - Buat akun di https://www.mongodb.com/cloud/atlas , nama database - KocengMarsMediaFile ,nama collection - KocengmarsFileBackup.Klik Connect dan pilih 'Hubungkan aplikasi Anda'.copy tautan dan ganti "< password >" dengan kata sandi pengguna yang memiliki akses ke DB dan ganti "myFirstDatabase" untuk "KocengMarsMediaFile". Kalau mau ubah sesuai keinginan nama databasenya ada di folder config.

<code>LOG_CHANNEL</code> - buat saluran pribadi dan dapatkan ID saluran (jika Anda tidak dapat meneruskan ID saluran apa pun dari saluran ke @getidsbot itu mungkin terlihat seperti -1001234567899).
<hr>

//Update

HISTORY 8
1. Perbaikan penulisan URL gabung grup/channel tinggal tulis name-https://t.me/test

HISTORY 7
1. Perbaikan dalam list grup untuk melakukan perintah didalam grup.
2. Kirim media secara grup.
3. Hapus media secara grup.

HISTORY 6
1. Kirim pesan ke pengguna melalui BOT.

HISTORY 5
1. Kirim pesan ke pengguna melalui grup.

HISTORY 4
1. BOT mendukung kick, ban, unban dan ada pesan pribadi.
2. BOT mendukung pin dan unpin.

HISTORY 3
1. Perbaikan penulisan file_name.
2. Perbaikan pencarian media.

HISTORY 2
1. Function teks disederhanakan.
2. Mendeteksi jika belum ada nama akun akan dikosongkan.
3. Admin bisa menggunakan BOT tanpa masuk channel/grup.
4. Ada log channel untuk mengetahui siapa yang ngirim dan apa deskripsi filenya.

HISTORY 1
1. Ada join channel/grup terlebih dahulu saat start, pastikan id channel/grup di ganti pada index.js dan bot harus jadi admin di grup/channel.
2. Terdapat penambahan untuk menghilangkan null supaya tidak terlihat saat tampil.
3. Ada get ID untuk cek ID akun Anda.
4. Ada pesan bot belum dimasukkan ke channel/grup tujuan.
