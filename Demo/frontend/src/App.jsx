const DJANGO_URL = import.meta.env.VITE_DJANGO_URL;
function App() {
  return (
    <main className="min-h-screen bg-white p-8 text-slate-900">
      <h1 className="text-4xl font-bold text-slate-900">
        React + Tailwind
      </h1>

      <p className="mt-4 text-slate-600">
        This section is running inside Django.
      </p>

      <button className="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
        Click Me
      </button>
    </main>
  )
}

export default App