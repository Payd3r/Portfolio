import Layout from '@/components/Layout'
import Timeline from '@/components/Timeline'
import LanguageCard from '@/components/LanguageCard'
import { languages } from '@/utils/data'

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
      <section id="about" className="min-h-screen py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-neon-purple mb-8">About Me</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <img
              src="https://placehold.co/150x150/0D0221/00FFFF?text=Avatar"
              alt="Mio Avatar"
              className="w-40 h-40 rounded-full border-4 border-neon-cyan shadow-lg shadow-neon-cyan/20"
            />
            <div className="max-w-xl text-left">
              <p className="mb-4">
                Sono un{' '}
                <span className="text-neon-green">
                  sviluppatore software neolaureato (21 anni)
                </span>{' '}
                con una forte passione per la creazione di applicazioni web
                performanti e visivamente accattivanti.
              </p>
              <p className="mb-4">
                Specializzato nello stack MERN e con solide competenze in Java e
                C#, sono costantemente alla ricerca di nuove sfide per
                migliorare le mie abilità.
              </p>
              <p>
                Attualmente risiedo a [La tua città, Italia] e sono pronto a
                contribuire a progetti innovativi.
              </p>
            </div>
          </div>
          <Timeline />
        </div>
      </section>
      <section id="projects" className="min-h-screen py-16">
        <h2 className="text-3xl font-bold text-center">Progetti</h2>
      </section>
      <section id="skills" className="min-h-screen py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-neon-purple mb-8">
            Competenze
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {languages.map(
              (lang: { name: string; level: string; icon: string }) => (
                <LanguageCard key={lang.name} {...lang} />
              )
            )}
          </div>
        </div>
      </section>
      <section id="contact" className="min-h-screen py-16">
        <h2 className="text-3xl font-bold text-center">Contatti</h2>
      </section>
    </Layout>
  )
}

export default App
