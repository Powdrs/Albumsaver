module.exports.bothelp = `Halo, kami adalah bot File Saver. Kami akan terus memperbarui BOT kami, jika kalian menyukainya silakan instal dan ikuti langkahnya.`;

module.exports.botcommand = `<u>Berikut adalah beberapa perintah dan penggunaan admin.</u>
\n\n<b>Bagaimana pengguna melarang, unban dan kick dari BOT dan Grup.</b>\n<b>/ban</b> userID caption jika ada. <b>/banchat</b> userID (pribadi).\n<b>/unban</b> userID. <b>/unbanchat</b> userID (pribadi).\n<b>/kick</b> userID.\n<b>(Dapatkan UserID dari saluran log).</b>

\n<b>Bagaimana cara menggunakan pin dan unpin di grup.</b>\n<b>/pin</b> reply ke pesan yang mau di pin.\n<b>/unpin</b> reply ke pesan yang mau di unpin.

\n<b>Bagaimana cara kirim pesan ke pengguna dari grup.</b>\n<b>/send</b> pesan. kirim pesan di grup.

\n<b>Bagaimana cara kirim pesan ke pengguna dari BOT.</b>\n<b>/sendchat</b> userID pesan. kirim pesan ke pengguna melalui BOT.

\n<b>Cara Menghapus File Dari BOT.</b>\nAnda dapat menghapus file 3 cara.\n⚫️ Hapus file individual dengan file_id.\n⚫️ Hapus semua file Kirim oleh pengguna.\n⚫️ Hapus semua file Kirim ke BOT.

\n<code>Hapus file individual dengan file_id.</code>\n<b>/rem</b> file_id.\n<b>(Ini akan menghapus file satu per satu saat Anda memberikan file_id, dapatkan file_id dari saluran log).</b>

\n<code>Hapus file grup dengan mediaId.</code>\n<b>/remgrp</b> mediaId.\n<b>(Ini akan menghapus media dalam grup, dapatkan mediaId dari saluran log).</b>

\n<code>Hapus semua file Kirim oleh pengguna.</code>\n<b>/remall</b> userID.\n<b>(Anda dapat menghapus semua file dikirim oleh pengguna tertentu jika pengguna mengirim konten atau spam yang kasar, dapatkan userid dari saluran log).</b>

\n<code>Hapus semua file Kirim ke B0T.</code>\n<b>/clear</b>\n<b>(Ini akan menghapus semua file yang dikirim ke BOT secara permanen).</b>

\n<b>Kirim pesan ke pengguna.</b>\n<b>/broadcast</b> pesan Anda akan dikirim ke pengguna.\n<b>(Anda dapat menyiarkan pesan teks ke pengguna Anda, pesan akan dikirim dari pengguna terakhir bergabung untuk pertama-tama bergabung dengan pengguna untuk mengurangi spam. Cobalah untuk tidak mengirim terlalu banyak pesan sekaligus jika Anda memiliki sejumlah besar pengguna).</b>

\n<b>Cara Mengetahui Total Pengguna BOT.</b>\n<b>/stats</b>\n<b>(Anda akan mendapatkan total pengguna memulai BOT Anda, data waktu nyata akan diperbarui setelah siaran yang berhasil).</b>
`;

module.exports.botinstall = `<u>BOT akan memberitahu Anda cara install</u>
\nDownload dulu file nya <a href='https://github.com/ExoticUBOT/Exo-DATABASEBOT'>DI SINI</a>
\n<a href='https://github.com/ExoticUBOT/Exo-DATABASEBOT'>TEMPLATE</a>\nGanti tautan dengan template github Anda.
\n<b>~ Detail yang diperlukan ~</b>\n<b>TOKEN</b> - Dapatkan Token BOT dari BOT father.\n<b>DOMAIN</b> - Sama dengan nama aplikasi yang Anda masukkan di Heroku.\n<b>ADMIN</b> - ID Akun Anda (jika Anda tidak dapat menemukannya menggunakan BOT seperti @getmyid_bot).\n<b>BOTUSERNAME</b> - Nama pengguna bot Anda tanpa '@'.\n<b>DB_URL</b> - Buat akun di <a href='https://www.mongodb.com/cloud/atlas'>MongoDB Atlas</a> , nama database - RatuMediaFile ,nama collection - RatuFileBackup.Klik Connect dan pilih 'Hubungkan aplikasi Anda'.copy tautan dan ganti 'password' dengan kata sandi pengguna yang memiliki akses ke DB dan ganti 'myFirstDatabase' untuk 'RatuMediaFile'. Kalau mau ubah sesuai keinginan nama databasenya ada di folder config.\n<b>LOG_CHANNEL</b> - buat saluran pribadi dan dapatkan ID saluran (jika Anda tidak dapat meneruskan ID saluran apa pun dari saluran ke @getidsbot itu mungkin terlihat seperti -1001234567899).
`;
