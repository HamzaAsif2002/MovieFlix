export const About = () => {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          About Hamza Flix
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Hamza Flix is a modern movie app built with React and powered by the
          OMDB API. Our mission is to help users discover top-rated films,
          explore genres, and get detailed movie information — all in a clean
          and easy-to-use interface.
        </p>

        <p className="text-gray-700 text-base leading-relaxed">
          This project was built using <strong>React Router</strong> for
          navigation, <strong>Tailwind CSS</strong> for styling, and{" "}
          <strong>Loader Functions</strong> to fetch movie data dynamically. It
          features responsive design, a watch-now section, and a contact form to
          stay in touch. Whether you're into action, drama, or comedy — Hamza
          Flix has something for you!
        </p>

        <div className="mt-6 text-sm text-gray-500">
          Built with ❤️ by{" "}
          <span className="font-semibold text-blue-500">Hamza</span>
        </div>
      </div>
    </section>
  );
};
