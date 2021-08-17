import { Skeleton } from "@material-ui/lab";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

const TableSkeleton = () => (
	<Card>
		<CardContent>
			<Grid container justifyContent="center">
				<Grid item xs={6}>
					<div className="header">
						<Typography variant="h6">
							<Skeleton variant="text" />
						</Typography>
					</div>
				</Grid>
				<Grid item xs={6}>
					<div className="header">
						<Typography variant="h6">
							<Skeleton variant="text" />
						</Typography>
					</div>
				</Grid>
				<Grid
					item
					sm={12}
					xs={12}
					md={12}
					style={{ paddingTop: "10px", paddingBottom: "10px" }}
				>
					<Skeleton height={450} width="100%" variant="rect" />
				</Grid>
			</Grid>
		</CardContent>
	</Card>
);

export default TableSkeleton;
