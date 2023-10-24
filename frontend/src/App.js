import React from "react";
import NewsListing from "./components/newsListing";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false, // default: true
		},
	},
});

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<NewsListing />
		</QueryClientProvider>
	);
};

export default App;
