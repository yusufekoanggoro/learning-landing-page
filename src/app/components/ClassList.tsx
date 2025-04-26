export default function ClassList () {
  const classes = [
    { name: 'Matematika', description: 'Les matematika untuk semua jenjang.' },
    { name: 'Bahasa Inggris', description: 'Les bahasa Inggris dengan pengajaran interaktif.' },
    { name: 'Fisika', description: 'Les fisika untuk pemahaman konsep yang lebih mendalam.' },
    // Tambahkan kelas lainnya
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {classes.map((cls, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-500">{cls.name}</h2>
          <p className="mt-2">{cls.description}</p>
        </div>
      ))}
    </div>
  );
};