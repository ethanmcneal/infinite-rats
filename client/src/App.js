import React, { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import RatCard from "./components/RatCard";
import "./App.css";

export default function App() {
	const [rats, setRats] = useState([]);
	const [page, setPage] = useState(2);
	const [hasMore, setHasMore] = useState(true);
	const [count, setCount] = useState(0);

	useEffect(() => {
		getInitialRats();
	}, []);

	const getInitialRats = async () => {
		try {
			let res = await axios.get("/api/rats");
			setRats(res.data.rats);
			setCount(res.data.count);
		} catch (error) {
			console.error(error);
		}
	};

	const moreRats = async () => {
		try {
			let res = await axios.get(`/api/rats?page=${page}`);
			setRats((prevState) => [...prevState, ...res.data.rats]);
			rats.length < count
				? setPage((page) => page + 1)
				: setHasMore(false);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div style={styles.ratContainer}>
			<h1>Rats !!</h1>
			<InfiniteScroll
				dataLength={rats.length}
				next={moreRats}
				hasMore={hasMore}
                height={'600px'}
				loader={<h4>Loading...</h4>}
				endMessage={
					<p style={{ textAlign: "center" }}>
						<b>Yay! You have seen it all</b>
					</p>
				}
				refreshFunction={() => {window.location.reload()}}
				pullDownToRefresh
				pullDownToRefreshThreshold={50}
				pullDownToRefreshContent={
					<h3 style={{ textAlign: "center" }}>
						&#8595; Pull down to refresh
					</h3>
				}
				releaseToRefreshContent={
					<h3 style={{ textAlign: "center" }}>
						&#8593; Release to refresh
					</h3>
				}
			>
				{rats.map((rat) => {
					return <RatCard key={rat.id} rat={rat} />;
				})}
			</InfiniteScroll>
		</div>
	);
}

const styles = {
	ratContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#444",
		minHeight: "100vh",
	},
};
