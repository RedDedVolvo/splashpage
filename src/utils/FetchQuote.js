export const FetchQuote = async () => {
  let quoteUrl = "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand";

  const response = await fetch(quoteUrl);
  const data = await response.json;
  return data;
};
