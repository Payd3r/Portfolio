import Layout from '@/components/Layout'

function App() {
  return (
    <Layout>
      <section id="home" className="h-screen">
        <h1 className="text-4xl font-bold text-cyan-400">
          Benvenuto nel mio Portfolio Futuristico
        </h1>
        <p className="mt-4 text-gray-300">
          Esplora i miei progetti e le mie competenze.
        </p>
      </section>
      <section id="about" className="h-screen">
        <h2 className="text-3xl font-bold">About Me</h2>
      </section>
      <section id="projects" className="h-screen">
        <h2 className="text-3xl font-bold">Progetti</h2>
      </section>
      <section id="skills" className="h-screen">
        <h2 className="text-3xl font-bold">Competenze</h2>
      </section>
      <section id="contact" className="h-screen">
        <h2 className="text-3xl font-bold">Contatti</h2>
      </section>
    </Layout>
  )
}

export default App
