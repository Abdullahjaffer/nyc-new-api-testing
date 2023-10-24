import { Button, Card, Col, Result, Row, Typography } from "antd";
import React from "react";
import useNews from "../services/useNews";
import ConditionalWrapper from "./common/ConditionalWrapper";

const cardProps = {
	sm: 24,
	md: 12,
	lg: 8,
	xl: 6,
};

const NewsListing = () => {
	const { isError, isFetching, data, refetch } = useNews();

	console.log(data);
	return (
		<ConditionalWrapper
			condition={!isError}
			fallback={
				<Result
					status="500"
					title="500"
					subTitle="Sorry, something went wrong."
					extra={
						<Button type="primary" onClick={refetch}>
							Try Again
						</Button>
					}
				/>
			}
		>
			<Row gutter={[16, 16]}>
				{data.map((item) => (
					<Col {...cardProps}>
						<Card
							style={{
								height: "100%",
							}}
							hoverable
							cover={
								!isFetching && (
									<img
										alt="example"
										src={item.image}
										style={{
											height: 300,
											objectFit: "cover",
										}}
									/>
								)
							}
							loading={isFetching}
							onClick={() => {
								window.open(item.href, "_blank");
							}}
						>
							<div
								style={{
									marginBottom: 8,
								}}
							>
								<Typography.Text type="secondary">
									{item.description}
								</Typography.Text>
							</div>
							<Card.Meta title={item.title} description={item.content} />
						</Card>
					</Col>
				))}
			</Row>
		</ConditionalWrapper>
	);
};

export default NewsListing;
