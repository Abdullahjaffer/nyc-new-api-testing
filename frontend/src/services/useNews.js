import axios from "axios";
import { useQuery } from "react-query";

const dummyList = Array.from({
	length: 20,
}).map((_, i) => ({
	href: "",
	title: "",
	description: "",
	content: "",
	image: "",
}));

function useNews() {
	return useQuery(
		"news",
		async () => {
			const { data } = await axios.get("http://localhost:3001/news");
			return data.results.map((news) => {
				return {
					href: news.url,
					title: news.title,
					description: `${news.byline}`,
					content: news.abstract,
					image: news.multimedia?.[0].url,
				};
			});
		},
		{
			initialData: dummyList,
		}
	);
}

export default useNews;
