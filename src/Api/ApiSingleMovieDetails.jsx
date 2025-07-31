export const SingleMoviesData = async ({ params }) => {
  try {
    const responce = await fetch(
      `https://www.omdbapi.com/?i=${params.movieId}&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const result = responce.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
