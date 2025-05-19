
import { Article } from "../types/article";

// Sample article data (will be replaced with Supabase data)
export const sampleArticles: Article[] = [
  {
    id: "1",
    title: "Memahami Teknologi Cloud Computing",
    slug: "memahami-teknologi-cloud-computing",
    content: `<p>Cloud computing adalah pengiriman layanan komputasi termasuk server, penyimpanan, basis data, jaringan, perangkat lunak, analitik, dan kecerdasan melalui Internet ("cloud") untuk menawarkan inovasi yang lebih cepat, sumber daya yang fleksibel, dan skala ekonomis. Anda hanya perlu membayar layanan cloud yang Anda gunakan, membantu menurunkan biaya operasional, menjalankan infrastruktur Anda dengan lebih efisien, dan menskalakan seiring perubahan kebutuhan bisnis Anda.</p>
    
    <h2>Jenis-jenis Cloud Computing</h2>
    <p>Terdapat beberapa jenis layanan cloud computing, di antaranya:</p>
    <ul>
      <li><strong>Infrastructure as a Service (IaaS)</strong>: Layanan yang menyediakan infrastruktur TI dasar seperti komputer, jaringan, dan penyimpanan.</li>
      <li><strong>Platform as a Service (PaaS)</strong>: Layanan yang menyediakan lingkungan untuk mengembangkan, menguji, mengirim, dan mengelola aplikasi perangkat lunak.</li>
      <li><strong>Software as a Service (SaaS)</strong>: Layanan yang memberikan aplikasi perangkat lunak melalui internet dan biasanya berdasarkan langganan.</li>
    </ul>
    
    <h2>Keuntungan Cloud Computing</h2>
    <p>Beberapa keuntungan menggunakan cloud computing antara lain:</p>
    <ul>
      <li>Efisiensi biaya</li>
      <li>Skalabilitas</li>
      <li>Keamanan yang lebih baik</li>
      <li>Kemudahan akses dari mana saja</li>
      <li>Pemulihan bencana yang lebih mudah</li>
    </ul>`,
    excerpt: "Memahami konsep cloud computing dan bagaimana teknologi ini dapat membantu transformasi digital perusahaan Anda.",
    author: "Andi Wijaya",
    keywords: ["cloud computing", "teknologi", "IaaS", "PaaS", "SaaS"],
    createdAt: "2023-01-15T07:30:00Z",
    updatedAt: "2023-01-15T07:30:00Z",
    publishedAt: "2023-01-15T08:00:00Z",
    status: "published",
    readingTime: 5,
    category: "Teknologi"
  },
  {
    id: "2",
    title: "Keamanan Siber untuk Bisnis",
    slug: "keamanan-siber-untuk-bisnis",
    content: `<p>Keamanan siber adalah praktik melindungi sistem dan jaringan dari serangan digital. Serangan siber semakin canggih dan sering terjadi, sehingga penting bagi bisnis untuk menerapkan langkah-langkah keamanan yang kuat.</p>
    
    <h2>Ancaman Keamanan Siber Umum</h2>
    <p>Beberapa ancaman keamanan siber yang umum termasuk:</p>
    <ul>
      <li><strong>Malware</strong>: Software berbahaya seperti virus, worm, trojans, dan ransomware.</li>
      <li><strong>Phishing</strong>: Upaya untuk mendapatkan informasi sensitif dengan menyamar sebagai entitas terpercaya.</li>
      <li><strong>Man-in-the-middle attacks</strong>: Penyerang mencegat komunikasi antara dua pihak.</li>
      <li><strong>DDoS attacks</strong>: Serangan yang membuat layanan tidak tersedia dengan membanjiri dengan traffic berbahaya.</li>
    </ul>
    
    <h2>Praktik Terbaik Keamanan Siber</h2>
    <p>Untuk melindungi bisnis Anda, pertimbangkan langkah-langkah berikut:</p>
    <ol>
      <li>Gunakan otentikasi multi-faktor</li>
      <li>Perbarui software dan sistem secara teratur</li>
      <li>Latih karyawan tentang kesadaran keamanan</li>
      <li>Cadangkan data secara rutin</li>
      <li>Gunakan enkripsi untuk data sensitif</li>
      <li>Terapkan firewall dan solusi keamanan lainnya</li>
    </ol>`,
    excerpt: "Pelajari langkah-langkah penting untuk melindungi bisnis Anda dari ancaman keamanan siber yang terus berkembang.",
    author: "Budi Santoso",
    keywords: ["keamanan siber", "cybersecurity", "malware", "phishing", "keamanan data"],
    createdAt: "2023-02-10T09:15:00Z",
    updatedAt: "2023-02-12T14:20:00Z",
    publishedAt: "2023-02-12T15:00:00Z",
    status: "published",
    readingTime: 7,
    category: "Keamanan"
  },
  {
    id: "3",
    title: "Transformasi Digital untuk UKM",
    slug: "transformasi-digital-untuk-ukm",
    content: `<p>Transformasi digital adalah integrasi teknologi digital ke dalam semua area bisnis, yang secara fundamental mengubah cara Anda beroperasi dan memberikan nilai kepada pelanggan. Ini juga merupakan perubahan budaya yang mengharuskan organisasi secara terus-menerus menantang status quo, bereksperimen, dan nyaman dengan kegagalan.</p>
    
    <h2>Mengapa UKM Perlu Transformasi Digital?</h2>
    <p>Ada beberapa alasan mengapa UKM harus mempertimbangkan transformasi digital:</p>
    <ul>
      <li>Meningkatkan efisiensi operasional</li>
      <li>Memberikan pengalaman pelanggan yang lebih baik</li>
      <li>Memperluas jangkauan pasar</li>
      <li>Menghasilkan wawasan bisnis baru</li>
      <li>Tetap kompetitif di pasar yang terus berkembang</li>
    </ul>
    
    <h2>Langkah-langkah Memulai Transformasi Digital</h2>
    <p>Berikut adalah beberapa langkah untuk memulai perjalanan transformasi digital UKM Anda:</p>
    <ol>
      <li>Menilai kondisi digital saat ini</li>
      <li>Mengidentifikasi area untuk perbaikan</li>
      <li>Menetapkan tujuan jelas</li>
      <li>Mengembangkan strategi yang komprehensif</li>
      <li>Mulai dengan perubahan kecil</li>
      <li>Berinvestasi dalam pelatihan karyawan</li>
      <li>Memantau dan mengukur hasil</li>
    </ol>`,
    excerpt: "Pelajari bagaimana UKM dapat memanfaatkan transformasi digital untuk meningkatkan efisiensi dan daya saing di era digital.",
    author: "Siti Rahma",
    keywords: ["transformasi digital", "UKM", "teknologi", "inovasi", "bisnis digital"],
    createdAt: "2023-03-05T10:45:00Z",
    updatedAt: "2023-03-07T16:30:00Z",
    publishedAt: "2023-03-08T08:00:00Z",
    status: "published",
    readingTime: 8,
    category: "Bisnis"
  }
];
