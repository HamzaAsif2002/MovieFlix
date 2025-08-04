export const MoviesData = async ({ request }) => {
  const url = new URL(request.url);
  const searchQuery = url.searchParams.get("q") || "titanic";

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${
        import.meta.env.VITE_API_KEY
      }&s=${searchQuery}&page=1`
    );
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
    return { Search: [], Error: "Something went wrong" };
  }
};
