export default function WhatsAppButton () {
    const whatsappLink = 'https://wa.me/1234567890'; // Ganti dengan nomor WhatsApp Anda
  
    return (
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <button className="bg-green-500 text-white px-6 py-3 rounded-full text-xl shadow-lg hover:bg-green-600">
          Daftar Sekarang via WhatsApp
        </button>
      </a>
    );
};